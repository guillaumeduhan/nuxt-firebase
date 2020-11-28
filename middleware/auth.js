export default function ({ store, redirect }) {
  if (!store.getters.getCurrentUser) {
    return redirect('/login')
  }
  return ''
}
