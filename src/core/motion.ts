// GSAP + ScrollTrigger + SplitText + Flip + Lenis, configured once. Transform/opacity only (clip-path for reveals).
// Reduced motion: html.rm (no Lenis, no pins, no reveals). Hidden initial states exist only under .js-motion.js-ready.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)

export { gsap, ScrollTrigger, SplitText, Flip }

export const EASE_OUT = 'expo.out'
export const root = document.documentElement
export const motionOn = (): boolean => root.classList.contains('js-motion')

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
  const run = () => {
    const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'ln' })
    el.style.visibility = 'visible'
    tl.from(split.lines, { yPercent: 108, duration: 1, ease: EASE_OUT, stagger: 0.09 }, 0)
  }
  document.fonts.ready.then(run)
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
  items.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        const delay = Math.min(q++, 5) * 0.08
        requestAnimationFrame(() => { q = 0 })
        if (el.dataset.reveal === 'clip') gsap.to(el, { clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.inOut', delay })
        else gsap.to(el, { opacity: 1, x: 0, y: 0, duration: 0.85, ease: EASE_OUT, delay })
      },
    })
  })
  items.forEach((el) => el.classList.add('rv'))
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
