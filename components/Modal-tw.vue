<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-show="lift" class="tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto">
    <div
      class="tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "tw-ease-out tw-duration-300"
        From: "tw-opacity-0"
        To: "tw-opacity-100"
      Leaving: "tw-ease-in tw-duration-200"
        From: "tw-opacity-100"
        To: "tw-opacity-0"
    -->
      <transition
        enter-active-class="tw-transition-all tw-ease-out tw-duration-300"
        enter-from-class="tw-opacity-0"
        enter-to-class="tw-opacity-100"
        leave-active-class="tw-transition-all tw-ease-in tw-duration-200"
        leave-from-class="tw-opacity-100"
        leave-to-class="tw-opacity-0"
      >
        <div
          v-show="lift"
          class="tw-fixed tw-inset-0 tw-transition-opacity"
          aria-hidden="true"
        >
          <div
            class="tw-absolute tw-inset-0 tw-bg-gray-500 tw-opacity-75"
          ></div>
        </div>
      </transition>

      <!-- This element is to trick the browser into centering the modal tw-contents. -->
      <span
        class="tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <!--
      Modal panel, show/hide based on modal state.

      Entering: "tw-ease-out tw-duration-300"
        From: "tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
        To: "tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
      Leaving: "tw-ease-in tw-duration-200"
        From: "tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
        To: "tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
    -->
      <transition
        enter-active-class="tw-transition-all tw-ease-out tw-duration-300"
        enter-from-class="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
        enter-to-class="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
        leave-active-class="tw-transition-all tw-ease-in tw-duration-200"
        leave-from-class="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
        leave-to-class="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
      >
        <div
          v-show="lift"
          class="tw-inline-block tw-align-bottom tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-mt-12 sm:tw-align-top"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lift: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
