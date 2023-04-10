import { History } from "../history"
import { Form } from "./components/form"
import { BackgroundContainer } from "./styles"
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <BackgroundContainer>
                <Link to="/Form">form</Link>
                <Link to="/History">histórico</Link>
                <Link to="/sexo">histórico</Link>
            </BackgroundContainer>
        </>
    )
}