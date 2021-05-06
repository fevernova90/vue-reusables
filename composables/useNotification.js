import { reactive, toRefs } from "vue"

const state = reactive({
  snackbarMessage: "",
  showSnackbar: false,
  snackbarType: "success",
  isSnackbarDismissable: false
})

export default function() {
  const reset = () => {
    state.snackbarMessage = ""
    state.showSnackbar = false
    state.snackbarType = "success"
    state.isSnackbarDismissable = false
  }

  const toggleSnackbar = (message, dismissable = false, type = "success") => {
    reset()
    if (dismissable) {
      state.snackbarMessage = message
      if (type) {
        state.snackbarType = type
      }
      state.isSnackbarDismissable = true
      state.showSnackbar = true
    } else {
      state.snackbarMessage = message
      if (type) {
        state.snackbarType = type
      }
      state.isSnackbarDismissable = false
      state.showSnackbar = true
      setTimeout(() => {
        state.showSnackbar = false
      }, 3000)
    }
  }

  return {
    ...toRefs(state),
    toggleSnackbar
  }
}
