export default {
  install(Vue, options) {
    Vue.prototype.$notification = function (html) {
      M.toast({html})
    }

    Vue.prototype.$error = function (html) {
      M.toast({html: `Ошибка: ${html}`})
    }
  }
}
