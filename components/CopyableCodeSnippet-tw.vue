<template>
  <div
    class="rounded-xl p-6 text-sm border-2 border-indigo-200 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-500 hover:text-indigo-700 cursor-pointer transition ease-out duration-75"
    @click="selectAll"
  >
    <p :id="'copyable-code-' + id">
      <slot name="content"></slot>
    </p>
    <p class="text-right -mb-4 mt-2 -mr-3 text-xs text-gray-400">
      Click to copy
    </p>
  </div>
</template>

<script>
import useNotification from "../../composables/useNotification"
export default {
  name: "CopyableCodeSnippet",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { toggleSnackbar } = useNotification()

    const selectAll = () => {
      const targetId = "copyable-code-" + props.id
      let sel, range
      const el = document.getElementById(targetId) // get element id
      if (window.getSelection && document.createRange) {
        // Browser compatibility
        sel = window.getSelection()
        if (sel.toString() === "") {
          // no text selection
          window.setTimeout(() => {
            range = document.createRange() // range object
            range.selectNodeContents(el) // sets Range
            sel.removeAllRanges() // remove all ranges from selection
            sel.addRange(range) // add Range to a Selection.
            document.execCommand("copy") // Copy to clipboard
            toggleSnackbar("Copied to clipboard.")
          }, 1)
        }
      } else if (document.selection) {
        // older ie
        sel = document.selection.createRange()
        if (sel.text === "") {
          // no text selection
          range = document.body.createTextRange() // Creates TextRange object
          range.moveToElementText(el) // sets Range
          range.select() // make selection.
          document.execCommand("copy")
          toggleSnackbar("Copied to clipboard.")
        }
      }
    }

    return {
      selectAll
    }
  }
}
</script>

<style scoped>
.code-text {
  font-weight: 500;
}
</style>
