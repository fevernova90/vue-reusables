<template>
  <div
    class="fixed bottom-6 right-8 shadow-lg px-7 rounded"
    :class="{
      'bg-blue-500': type === 'success',
      'py-3': !dismissable,
      'py-4': dismissable
    }"
  >
    <div
      v-if="dismissable"
      class="float-right -mt-4 -mr-5 mb-2 cursor-pointer text-white hover:text-gray-300"
      @click="$emit('close')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-4 w-4"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <p class="text-white font-semibold text-sm max-w-xs">
      {{ message }}
    </p>
    <p
      class="text-gray-200 text-right text-xs -mr-3 mt-3"
      :class="{ '-mb-3': dismissable, '-mb-2': !dismissable }"
    >
      ChatEmbed
    </p>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    type: {
      type: String,
      default: "success"
    },
    message: {
      type: String,
      required: true
    },
    dismissable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped></style>
