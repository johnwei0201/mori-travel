<script setup>
import { computed } from 'vue'

// 線性 icon 來自 SVG Repo(Iconsax Line / Solar Linear 兩套 24×24、1.5px 描邊),
// 下載後已統一改成 currentColor,顏色與大小都由使用端的 CSS 決定。
const files = import.meta.glob('../../assets/icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const icons = Object.fromEntries(
  Object.entries(files).map(([path, svg]) => [path.slice(path.lastIndexOf('/') + 1, -4), svg]),
)

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
})

const markup = computed(() => icons[props.name] ?? '')
</script>

<template>
  <span
    class="app-icon"
    :style="{ width: `${size}px`, height: `${size}px` }"
    aria-hidden="true"
    v-html="markup"
  ></span>
</template>

<style scoped>
.app-icon {
  display: inline-flex;
  flex-shrink: 0;
  color: inherit;
}
.app-icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
