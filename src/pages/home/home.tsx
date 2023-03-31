import { History } from "../history"
import { Form } from "./components/form"
import { BackgroundContainer } from "./styles"

export function Home() {
    return (
        <>
            <BackgroundContainer>
                <Form />
                <History />
            </BackgroundContainer>
        </>
    )
}