export default function ({ store, redirect}) {
  if(!store.state.autehenticate){
    return redirect('/login')
  }
}

