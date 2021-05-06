<template>
  <div class="relative my-1 cursor-pointer inline-block">
    <div
      class="rounded-full border border-gray-300 flex items-center transition-all"
      :class="{
        'bg-gray-100': disabled,
        'justify-end bg-indigo-600': enabled,
        'justify-start bg-white': !enabled
      }"
      :style="{ width: size * 1.6 + 'rem', height: size + 'rem' }"
      @click="enabled = !enabled"
    >
      <div
        class="rounded-full bg-white shadow-toggle border-gray-300"
        :class="{ 'bg-gray-100': disabled }"
        :style="{ height: size * 0.9 + 'rem', width: size * 0.9 + 'rem' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "2"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  computed: {
    enabled: {
      get() {
        return this.modelValue
      },
      set(value) {
        if (this.disabled) return
        this.$emit("update:modelValue", value)
      }
    }
  }
}
</script>

<style scoped>
.shadow-toggle {
  box-shadow: 1px 0px 2px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 4px 1px rgba(0, 0, 0, 0.06);
}
</style>
