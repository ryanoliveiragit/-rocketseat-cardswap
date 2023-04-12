import { useContext, useEffect } from "react"
import { Cards } from "../../App"
import UserContext from "../../contexts/useContext"
import { Container, Name, RecentCards, Sucess } from "./styles"

export function History() {
    const { card }: any = useContext(UserContext)

    useEffect(() => {
        console.log(card)
    }, [card])

    return (
        <>
            <Container>
                <RecentCards>
                    <h1>Historico:</h1>
                    <ul>
                    {card.map((item: Cards) => {
                        return (
                            <li key={item.id}>
                                <p>Nome do cartão: <Name>{item.name}</Name></p>
                                <p>Número do cartão: <Name>{item.card}</Name></p>
                                <p>Validade do cartão: <Name>{item.validity}</Name></p>
                                <p>Bandeira: <Name>{item.flag}</Name></p>
                                <p>Status: <Sucess>{item.status}</Sucess></p>
                            </li>
                        )
                    })}
                    </ul>
                </RecentCards>
            </Container>
        </>
    )
}