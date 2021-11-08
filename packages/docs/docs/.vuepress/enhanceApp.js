export default ({ Vue, isServer, router }) => {
  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
  }
}
