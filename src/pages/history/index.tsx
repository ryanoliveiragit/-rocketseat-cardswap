import { useContext } from "react"
import UserContext from "../../contexts/useContext"

export function History() {
    const { card } = useContext(UserContext);

    return (
        <div>
            aa
            <p>{card}</p>
        </div>
    )
}