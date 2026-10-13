// Small DOM + typography helpers shared by every page.

export const BASE: string = import.meta.env.BASE_URL
/** Absolute-with-base URL for a route like "la-carte/" or "la-carte/produit.html?id=x". */
export const href = (path: string): string => BASE + path.replace(/^\//, '')

export const esc = (s: unknown): string =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const NB = ' '
function fixText(t: string): string {
  return t
    .replace(/ ([?!;:»])/g, NB + '$1')
    .replace(/« /g, '«' + NB)
    .replace(/(\d) (€|%|h\b|km\b|m\b|g\b|ans\b|min\b)/g, '$1' + NB + '$2')
    .replace(/(\d) (\d{3})(?!\d)/g, '$1' + NB + '$2')
    .replace(/\b(\d{1,2}) (juillet|août|janvier|février|mars|avril|mai|juin|septembre|octobre|novembre|décembre)\b/g, '$1' + NB + '$2')
}
/** French typography: non-breaking spaces before : ; ! ? » and after «, in prices and dates. Text nodes only. */
export function typo(html: string): string {
  return html
    .split(/(<[^>]*>)/g)
    .map((seg) => (seg.startsWith('<') ? seg : fixText(seg)))
    .join('')
}
export function setHTML(el: Element, html: string): void {
  el.innerHTML = typo(html)
}

export const qs = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T | null => root.querySelector<T>(sel)
export const qsa = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T[] => Array.from(root.querySelectorAll<T>(sel))

export const REDUCED = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

export function safeGet(key: string, store: 'local' | 'session' = 'local'): string | null {
  try {
    return (store === 'local' ? localStorage : sessionStorage).getItem(key)
  } catch {
    return null
  }
}
export function safeSet(key: string, value: string, store: 'local' | 'session' = 'local'): void {
  try {
    ;(store === 'local' ? localStorage : sessionStorage).setItem(key, value)
  } catch {
    /* storage can be blocked */
  }
}
export const priceFmt = (n: number): string => n.toFixed(2).replace('.', ',') + NB + '€'
