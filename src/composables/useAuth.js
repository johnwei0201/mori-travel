import { ref, readonly } from 'vue'

/**
 * 會員彈窗的開關狀態。
 *
 * 這幾個 ref 寫在函式外面,所以整個 App 共用同一份 —— Header 按鈕負責打開,
 * AuthModal 負責顯示,兩個元件沒有父子關係也能溝通。
 * (這是 composable 最常見的用途,不必為了這點狀態裝 Pinia。)
 */
const isOpen = ref(false)
const mode = ref('login') // 'login' | 'register'

/** 關閉後要把焦點還給原本那顆按鈕,鍵盤使用者才不會迷失位置 */
let lastTrigger = null

export function useAuth() {
  function open(nextMode = 'login') {
    mode.value = nextMode
    lastTrigger = document.activeElement
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
    // 等 DOM 更新完再還焦點,否則元素還沒移除,focus 會被搶回去
    requestAnimationFrame(() => {
      if (lastTrigger?.isConnected) lastTrigger.focus()
      lastTrigger = null
    })
  }

  function switchMode(next) {
    mode.value = next
  }

  return { isOpen: readonly(isOpen), mode: readonly(mode), open, close, switchMode }
}
