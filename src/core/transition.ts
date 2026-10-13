// Crêpe page transition: a circle of oak spreads from the click point, the next page shrinks it away.
// Works in every browser (no dependency on cross-document View Transitions). Failsafe: CSS animation in style.css.
import { gsap, motionOn } from './motion.ts'
import { safeSet } from './dom.ts'

const crepe = (): HTMLElement | null => document.querySelector<HTMLElement>('.crepe')
let leaving = false

export function playEnter(): Promise<void> {
  const el = crepe()
  const root = document.documentElement
  if (!el || !root.classList.contains('is-entering')) return Promise.resolve()
  const x = root.style.getPropertyValue('--cx') || '50%'
  const y = root.style.getPropertyValue('--cy') || '50%'
  return new Promise((resolve) => {
    gsap.set(el, { clipPath: `circle(150vmax at ${x} ${y})` })
    root.classList.remove('is-entering')
    gsap.to(el, {
      clipPath: `circle(0px at ${x} ${y})`,
      duration: 0.75,
      ease: 'power3.inOut',
      onComplete: () => {
        gsap.set(el, { clearProps: 'clipPath' })
        resolve()
      },
    })
  })
}

function isInternal(a: HTMLAnchorElement): boolean {
  if (a.target && a.target !== '_self') return false
  if (a.hasAttribute('download')) return false
  const u = new URL(a.href, location.href)
  if (u.origin !== location.origin) return false
  if (u.pathname === location.pathname && u.search === location.search) return false
  return u.pathname.startsWith(import.meta.env.BASE_URL)
}

export function bindTransitions(): void {
  const el = crepe()
  window.addEventListener('pageshow', (e) => {
    leaving = false
    if (e.persisted && el) gsap.set(el, { clipPath: 'circle(0px at 50% 50%)' })
  })
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const a = (e.target as Element | null)?.closest('a')
    if (!a || !(a instanceof HTMLAnchorElement) || !isInternal(a) || leaving) return
    if (!motionOn() || !el) return
    e.preventDefault()
    leaving = true
    const x = e.clientX || innerWidth / 2
    const y = e.clientY || innerHeight / 2
    safeSet('fdp-crepe', JSON.stringify({ x, y }), 'session')
    const dest = a.href
    gsap.fromTo(el, { clipPath: `circle(0px at ${x}px ${y}px)` }, { clipPath: `circle(150vmax at ${x}px ${y}px)`, duration: 0.6, ease: 'power3.in', onComplete: () => { location.href = dest } })
    window.setTimeout(() => { if (leaving) location.href = dest }, 1500)
  })
}
