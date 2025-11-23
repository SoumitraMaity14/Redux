
import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'
import { LoginView } from './features/login/LoginView'

function App() {
 

  return (
    <>
      <CakeView />
      <IcecreamView/>
      <UserView/>
      <LoginView/>
    </>
  )
}

export default App
