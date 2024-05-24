// @ts-ignore
import * as $ from 'jquery'
function createStatistics(): { destroy: () => string,  getClicks: () => number | string} {
  let counter: number = 0
  let isDestroyed: boolean = false
  const listener = (): number => counter++
  $(document).on('click', listener)
  return {
    destroy() {
      $(document).off('click', listener)
      isDestroyed = true
      return 'Statistics was fully Destroyed'
    },
    getClicks() {
      if (isDestroyed) return 'Statistics is destroyed'
      return counter
    }
  }
}

window['statistics'] = createStatistics()