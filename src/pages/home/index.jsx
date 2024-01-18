import { Container, TextContent, Title, TitleHighlight } from "./styles"

import bannerImage from "../../assets/bannerImage.png"

import { HeaderComponent } from "../../components/Header"
import { Button } from "../../components/buttons"
const Home = () => {
    return(
        <>
        <HeaderComponent />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro é agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
                        desafio profissinal, evoluindo em comunidade com os melhores experts
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}></Button>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal" />
            </div>
        </Container>
        </>
    )
}


export { Home }