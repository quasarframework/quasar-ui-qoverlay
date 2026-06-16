let registered = 0
let scrollPositionX = 0
let scrollPositionY = 0
let bodyLeft = ''
let bodyTop = ''

function hasBrowserGlobals(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function preventBodyScroll(): void {
  const body = document.body
  const { overflowX, overflowY } = window.getComputedStyle(body)

  scrollPositionX = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
  scrollPositionY = window.pageYOffset || window.scrollY || document.body.scrollTop || 0
  bodyLeft = body.style.left
  bodyTop = body.style.top

  body.style.left = `-${scrollPositionX}px`
  body.style.top = `-${scrollPositionY}px`

  if (overflowX !== 'hidden' && (overflowX === 'scroll' || body.scrollWidth > window.innerWidth)) {
    body.classList.add('q-body--force-scrollbar-x')
  }

  if (
    overflowY !== 'hidden' &&
    (overflowY === 'scroll' || body.scrollHeight > window.innerHeight)
  ) {
    body.classList.add('q-body--force-scrollbar-y')
  }

  body.classList.add('q-body--prevent-scroll')
  ;(document as Document & { qScrollPrevented?: boolean }).qScrollPrevented = true
}

function restoreBodyScroll(): void {
  const body = document.body

  body.classList.remove('q-body--prevent-scroll')
  body.classList.remove('q-body--force-scrollbar-x')
  body.classList.remove('q-body--force-scrollbar-y')
  body.style.left = bodyLeft
  body.style.top = bodyTop

  ;(document as Document & { qScrollPrevented?: boolean }).qScrollPrevented = false
  window.scrollTo(scrollPositionX, scrollPositionY)
}

export default function preventScroll(state: boolean): void {
  if (hasBrowserGlobals() === false) {
    return
  }

  if (state === true) {
    registered += 1

    if (registered === 1) {
      preventBodyScroll()
    }

    return
  }

  if (registered === 0) {
    return
  }

  registered -= 1

  if (registered === 0) {
    restoreBodyScroll()
  }
}
