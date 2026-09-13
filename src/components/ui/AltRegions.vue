<script setup>
/**
 * 放寬之後,給一條「堅持原條件」也能走的路:
 * 「堅持 6—8 天的話,這些地區有:日本 1、東南亞 1」。
 * alternatives 由 tripCatalog.js 的 alternativeRegions 產生。
 */
defineProps({
  alternatives: { type: Object, required: true },
})
defineEmits(['pick'])
</script>

<template>
  <div class="alt-row">
    <span class="alt-lead">堅持「{{ alternatives.text }}」的話,這些地區有:</span>
    <button
      v-for="a in alternatives.regions"
      :key="a.region"
      class="alt-pill"
      @click="$emit('pick', a.region)"
    >
      {{ a.region }} <b>{{ a.count }}</b>
    </button>
  </div>
</template>

<style scoped>
.alt-row {
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid #e7e0d6;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.alt-lead {
  font-size: 13px;
  color: #6b6259;
}
.alt-pill {
  font: inherit;
  font-size: 13px;
  padding: 6px 13px;
  border-radius: 999px;
  border: 1px solid #e7e0d6;
  background: #fff;
  color: var(--color-primary);
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.alt-pill:hover {
  border-color: var(--color-accent);
}
.alt-pill b {
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}
</style>
