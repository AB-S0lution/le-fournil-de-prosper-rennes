// GSAP + ScrollTrigger + SplitText + Flip + Lenis, configured once. Transform/opacity only (clip-path for reveals).
// Reduced motion: html.rm (no Lenis, no pins, no reveals). Hidden initial states exist only under .js-motion.js-ready.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)
// Phones: the URL bar showing/hiding must not trigger a full refresh (it made pins jump).
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger, SplitText, Flip }

export const EASE_OUT = 'expo.out'
export const root = document.documentElement
export const motionOn = (): boolean => root.classList.contains('js-motion')
/** Touch-first or narrow screens get the lighter motion set (no pins, shorter travel, no blur). */
export const LIGHT_MQ = '(max-width: 899px), (pointer: coarse)'
export const FULL_MQ = '(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
export const isLight = (): boolean => matchMedia(LIGHT_MQ).matches

/** Last line of defence: if anything throws or stalls, show every hidden element. */
export function revealEverything(): void {
  root.classList.add('reveal-all')
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => { el.style.visibility = 'visible' })
}
window.addEventListener('error', revealEverything)
window.addEventListener('unhandledrejection', revealEverything)

let lenis: Lenis | null = null
export const getLenis = (): Lenis | null => lenis

export function initSmooth(): void {
  if (!motionOn() || lenis) return
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95, anchors: false })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis?.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}
export const stopScroll = (): void => {
  lenis?.stop()
}
export const startScroll = (): void => {
  lenis?.start()
}
export function scrollToEl(el: Element | string | number): void {
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.1 })
  else if (typeof el === 'number') window.scrollTo({ top: el })
  else (typeof el === 'string' ? document.querySelector(el) : el)?.scrollIntoView({ block: 'start' })
}

/** Split a heading into masked lines and rise them. Returns when scheduled. */
export function splitReveal(el: HTMLElement, opts: { trigger?: boolean; delay?: number; paused?: boolean } = {}): gsap.core.Timeline | null {
  if (!motionOn()) {
    el.style.visibility = 'visible'
    return null
  }
  const tl = gsap.timeline({ paused: opts.paused ?? false, delay: opts.delay ?? 0 })
  let done = false
  const run = () => {
    if (done) return
    done = true
    const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'ln' })
    el.style.visibility = 'visible'
    tl.from(split.lines, { yPercent: 108, duration: isLight() ? 0.8 : 1, ease: EASE_OUT, stagger: isLight() ? 0.06 : 0.09 }, 0)
  }
  document.fonts.ready.then(run)
  // fonts can stall on slow mobile networks: never leave a heading hidden
  window.setTimeout(run, 2500)
  if (opts.trigger) {
    tl.pause()
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => tl.play() })
  }
  return tl
}

/** Generic reveals for every [data-reveal] in a root, batched so a row staggers. */
export function revealAll(scope: ParentNode): void {
  if (!motionOn()) return
  const items = Array.from(scope.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (!items.length) return
  let q = 0
  const light = isLight()
  items.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        const delay = Math.min(q++, light ? 3 : 5) * (light ? 0.06 : 0.08)
        requestAnimationFrame(() => { q = 0 })
        if (el.dataset.reveal === 'clip') gsap.to(el, { clipPath: 'inset(0 0 0% 0)', duration: light ? 0.75 : 1, ease: 'power3.inOut', delay })
        else gsap.to(el, { opacity: 1, x: 0, y: 0, duration: light ? 0.6 : 0.85, ease: EASE_OUT, delay })
      },
    })
  })
  items.forEach((el) => el.classList.add('rv'))
  // Fail-safe: if a trigger never fires (odd scroll container, frozen tab), reveal what is already on screen or above it.
  window.setTimeout(() => {
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight && getComputedStyle(el).opacity === '0') gsap.set(el, { opacity: 1, x: 0, y: 0, clipPath: 'inset(0 0 0% 0)' })
    })
  }, 3000)
}

/** Pause CSS loops (marquee) while they are off screen. */
export function pauseOffscreen(scope: ParentNode, selector: string): void {
  if (!('IntersectionObserver' in window)) return
  const io = new IntersectionObserver((entries) => entries.forEach((e) => (e.target as HTMLElement).classList.toggle('is-offscreen', !e.isIntersecting)))
  scope.querySelectorAll(selector).forEach((el) => io.observe(el))
}

export function splitAll(scope: ParentNode): void {
  scope.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    if (el.dataset.split === 'hero') return
    splitReveal(el, { trigger: true })
  })
}

/** Press feedback is CSS. This adds the small magnetic pull on primary CTAs for fine pointers only. */
export function magnetic(scope: ParentNode): void {
  if (!motionOn() || !matchMedia('(hover: hover) and (pointer: fine)').matches) return
  scope.querySelectorAll<HTMLElement>('[data-magnet]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * 0.18)
      yTo((e.clientY - (r.top + r.height / 2)) * 0.28)
    })
    el.addEventListener('pointerleave', () => {
      xTo(0)
      yTo(0)
    })
  })
}

/** Use gsap.matchMedia so a pinned scene can fall back to a plain stack below 900 px. */
export const mm = gsap.matchMedia()

export function refreshSoon(): void {
  requestAnimationFrame(() => ScrollTrigger.refresh())
}
