// "Is the bakery open now?" for the whole site. Exceptions (closures.ts) are read before the weekly rule inside shop.ts.
// Demo helper: ?date=2026-07-20&time=10:30 previews any moment without changing the code path.
import { getShopState, getShopStateAt, parisNow } from '../data/shop.ts'
import type { ShopState } from '../data/shop.ts'
import { esc } from './dom.ts'

export function simulated(): { iso: string; minutes: number } | null {
  const q = new URLSearchParams(location.search)
  const d = q.get('date')
  if (!d || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return null
  const t = q.get('time') ?? '10:30'
  const m = /^(\d{1,2}):(\d{2})$/.exec(t)
  return { iso: d, minutes: m ? Number(m[1]) * 60 + Number(m[2]) : 630 }
}
export function todayIso(): string {
  return simulated()?.iso ?? parisNow().iso
}
export function nowState(): ShopState {
  const s = simulated()
  return s ? getShopStateAt(s.iso, s.minutes) : getShopState()
}
export function pillHTML(s: ShopState = nowState()): string {
  return `<span class="pill" data-live data-tone="${s.tone}" role="status"><span class="pill__dot" aria-hidden="true"></span><span class="pill__text">${esc(s.pill)}</span></span>`
}
export function refreshPills(): void {
  const s = nowState()
  document.querySelectorAll<HTMLElement>('[data-live]').forEach((el) => {
    el.dataset.tone = s.tone
    const t = el.querySelector('.pill__text')
    if (t && t.textContent !== s.pill) t.textContent = s.pill
  })
}
