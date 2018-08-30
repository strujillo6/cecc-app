export default function ({ store }) {
  store.dispatch('user/getUser')
  store.dispatch('activitys/getActivitys')
}
