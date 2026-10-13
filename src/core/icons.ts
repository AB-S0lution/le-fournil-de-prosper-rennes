// Phosphor icons (regular weight, one family). Imported as raw SVG strings, only the ones used.
import phone from '@phosphor-icons/core/assets/regular/phone.svg?raw'
import envelope from '@phosphor-icons/core/assets/regular/envelope-simple.svg?raw'
import pin from '@phosphor-icons/core/assets/regular/map-pin.svg?raw'
import subway from '@phosphor-icons/core/assets/regular/subway.svg?raw'
import bus from '@phosphor-icons/core/assets/regular/bus.svg?raw'
import wheelchair from '@phosphor-icons/core/assets/regular/wheelchair.svg?raw'
import card from '@phosphor-icons/core/assets/regular/credit-card.svg?raw'
import instagram from '@phosphor-icons/core/assets/regular/instagram-logo.svg?raw'
import facebook from '@phosphor-icons/core/assets/regular/facebook-logo.svg?raw'
import list from '@phosphor-icons/core/assets/regular/list.svg?raw'
import x from '@phosphor-icons/core/assets/regular/x.svg?raw'
import arrowRight from '@phosphor-icons/core/assets/regular/arrow-right.svg?raw'
import arrowLeft from '@phosphor-icons/core/assets/regular/arrow-left.svg?raw'
import arrowUpRight from '@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw'
import plus from '@phosphor-icons/core/assets/regular/plus.svg?raw'
import minus from '@phosphor-icons/core/assets/regular/minus.svg?raw'
import search from '@phosphor-icons/core/assets/regular/magnifying-glass.svg?raw'
import clock from '@phosphor-icons/core/assets/regular/clock.svg?raw'
import calendar from '@phosphor-icons/core/assets/regular/calendar-blank.svg?raw'
import check from '@phosphor-icons/core/assets/regular/check.svg?raw'
import sun from '@phosphor-icons/core/assets/regular/sun.svg?raw'
import moon from '@phosphor-icons/core/assets/regular/moon.svg?raw'
import leaf from '@phosphor-icons/core/assets/regular/leaf.svg?raw'
import heart from '@phosphor-icons/core/assets/regular/heart.svg?raw'
import bag from '@phosphor-icons/core/assets/regular/shopping-bag.svg?raw'
import coffee from '@phosphor-icons/core/assets/regular/coffee.svg?raw'
import bread from '@phosphor-icons/core/assets/regular/bread.svg?raw'
import cookie from '@phosphor-icons/core/assets/regular/cookie.svg?raw'
import pizza from '@phosphor-icons/core/assets/regular/pizza.svg?raw'
import cake from '@phosphor-icons/core/assets/regular/cake.svg?raw'
import storefront from '@phosphor-icons/core/assets/regular/storefront.svg?raw'
import info from '@phosphor-icons/core/assets/regular/info.svg?raw'
import caretDown from '@phosphor-icons/core/assets/regular/caret-down.svg?raw'
import caretLeft from '@phosphor-icons/core/assets/regular/caret-left.svg?raw'
import caretRight from '@phosphor-icons/core/assets/regular/caret-right.svg?raw'
import recycle from '@phosphor-icons/core/assets/regular/recycle.svg?raw'
import grains from '@phosphor-icons/core/assets/regular/grains.svg?raw'
import plant from '@phosphor-icons/core/assets/regular/plant.svg?raw'
import receipt from '@phosphor-icons/core/assets/regular/receipt.svg?raw'
import notepad from '@phosphor-icons/core/assets/regular/notepad.svg?raw'
import paper from '@phosphor-icons/core/assets/regular/paper-plane-tilt.svg?raw'
import star from '@phosphor-icons/core/assets/regular/star.svg?raw'
import users from '@phosphor-icons/core/assets/regular/users.svg?raw'
import wallet from '@phosphor-icons/core/assets/regular/wallet.svg?raw'
import sparkle from '@phosphor-icons/core/assets/regular/sparkle.svg?raw'
import chat from '@phosphor-icons/core/assets/regular/chat-circle.svg?raw'
import ticket from '@phosphor-icons/core/assets/regular/ticket.svg?raw'
import handHeart from '@phosphor-icons/core/assets/regular/hand-heart.svg?raw'
import basket from '@phosphor-icons/core/assets/regular/basket.svg?raw'
import fork from '@phosphor-icons/core/assets/regular/fork-knife.svg?raw'
import trash from '@phosphor-icons/core/assets/regular/arrow-counter-clockwise.svg?raw'
import map from '@phosphor-icons/core/assets/regular/map-trifold.svg?raw'

const set = {
  phone, envelope, pin, subway, bus, wheelchair, card, instagram, facebook, list, x, arrowRight, arrowLeft, arrowUpRight, plus, minus,
  search, clock, calendar, check, sun, moon, leaf, heart, bag, coffee, bread, cookie, pizza, cake, storefront, info, caretDown,
  caretLeft, caretRight, recycle, grains, plant, receipt, notepad, paper, star, users, wallet, sparkle, chat, ticket, handHeart,
  basket, fork, undo: trash, map,
} as const

export type IconName = keyof typeof set

/** Inline SVG icon, sized by the surrounding font-size. */
export function icon(name: IconName, extra = ''): string {
  return set[name].replace('<svg ', `<svg class="ico ${extra}" aria-hidden="true" focusable="false" `)
}
