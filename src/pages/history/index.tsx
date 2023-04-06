import { useContext } from "react"
import UserContext from "../../contexts/useContext"

export function History() {
    const {card, setCard}: any = useContext(UserContext)
    return (
        <div>
            aa
            {card.map((item: any) => {
                return (
                    <p key={'a'}>{item}</p>
                )
            })}
        </div>
    )
}