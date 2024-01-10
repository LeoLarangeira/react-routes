import { Link } from "react-router-dom"
import { Home } from "../home"

const Login = () => {
    return(
        <>
        <h1>Login</h1>
        <Link to='/'>Voltar para Home</Link>
        </>
    )
}


export { Login }