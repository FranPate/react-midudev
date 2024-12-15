import { jsx as _jsx } from 'react/jsx-runtime'
import { BUTTONS, EVENTS } from './consts.js'
export function navigate(href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}
export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    }
  }
  return _jsx('a', { onClick: handleClick, href: to, target: target, ...props })
}
