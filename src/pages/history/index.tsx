import { useContext, useEffect } from "react"
import { Cards } from "../../App"
import UserContext from "../../contexts/useContext"

export function History() {
    const {card}: any= useContext(UserContext)

    useEffect(() => {
        console.log(card)
    },[card])

    return (
        <div>
            aa
            {card.map((item: Cards) => {
                return (
                    <p key={'a'}>{item.id}</p>
                )
            })}
        </div>
    )
}