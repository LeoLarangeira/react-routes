import { Link } from "react-router-dom"
import { Button } from "../../components/buttons"
import { HeaderComponent } from "../../components/Header"
const Home = () => {
    return(
        <>
        <HeaderComponent />
        <Link to='/login'>
            <Button title= "Teste">fazer Login</Button>
            <Button variant="secondary" title="Teste 2">Fazer Login variant</Button>
        </Link>
        </>
    )
}


export { Home }