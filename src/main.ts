import './style.css'
import { typo, qsa } from './core/dom.ts'
import { buildShell } from './core/shell.ts'
import { gsap, initSmooth, revealAll, splitAll, magnetic, ScrollTrigger, motionOn, refreshSoon, pauseOffscreen, revealEverything } from './core/motion.ts'
import { bindTransitions, playEnter } from './core/transition.ts'
import { bindRail } from './core/ui.ts'

export interface PageModule {
  render: (slug?: string) => string
  init?: (main: HTMLElement, ready: Promise<void>) => void
  title?: (slug?: string) => string
}

const loaders = import.meta.glob<PageModule>('./pages/*.ts')

async function boot(): Promise<void> {
  const root = document.documentElement
  const key = document.body.dataset.page ?? 'home'
  const slug = document.body.dataset.slug
  const app = document.getElementById('app')
  if (!app) return
  const loader = loaders[`./pages/${key}.ts`]
  if (!loader) return
  const mod = await loader()
  const { main } = buildShell(app, key)
  main.innerHTML = typo(mod.render(slug))
  initSmooth()
  // the entry transition must never hold the page: resolve after 1.6 s whatever happens
  const ready = Promise.race([playEnter(), new Promise<void>((r) => window.setTimeout(r, 1600))])
  bindTransitions()
  bindRail(main)
  mod.init?.(main, ready)
  root.classList.add('js-ready')
  splitAll(main)
  revealAll(main)
  magnetic(main)
  pauseOffscreen(app, '[data-awning]')
  const awning = app.querySelector<HTMLElement>('[data-awning]')
  if (awning && motionOn()) {
    gsap.set(awning, { scaleY: 0 })
    ready.then(() => gsap.to(awning, { scaleY: 1, duration: 0.9, ease: 'expo.out', delay: 0.05 }))
    awning.classList.add('is-drawn')
  }
  const fascia = app.querySelector<HTMLElement>('[data-fascia]')
  if (fascia && motionOn()) {
    gsap.set(fascia, { yPercent: -100 })
    ready.then(() => gsap.to(fascia, { yPercent: 0, duration: 0.8, ease: 'expo.out', clearProps: 'transform' }))
  }
  qsa<HTMLAnchorElement>('a[href^="#"]', main).forEach((a) => a.addEventListener('click', () => requestAnimationFrame(() => ScrollTrigger.refresh())))
  document.fonts.ready.then(() => ScrollTrigger.refresh())
  refreshSoon()
  window.addEventListener('load', () => ScrollTrigger.refresh())
}

boot().catch((e) => {
  // Never leave a hidden page: fall back to showing everything.
  document.documentElement.classList.remove('js-motion')
  revealEverything()
  console.error(e)
})
