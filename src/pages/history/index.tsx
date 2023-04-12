import { useContext, useEffect, useState } from "react"
import { Cards } from "../../App"
import UserContext from "../../contexts/useContext"
import { Container, ContainerHistory, DropdownName, Name, Title, RecentCards, Empty } from "./styles"
import { FiArrowRightCircle } from 'react-icons/fi'
import { BsCreditCard2Back } from 'react-icons/bs'
import { BsFillCircleFill } from 'react-icons/bs'
import {VscEmptyWindow} from 'react-icons/vsc'


export function History() {
    const { card }: any = useContext(UserContext)
    const [selectedCardName, setSelectedCardName] = useState("");
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        console.log(card)
    }, [card])

    return (
        <>
            <Container>
                <RecentCards>
                    <div>
                        <h1>Historico</h1>
                        <p>Lista de cartões ativos</p>
                        <hr />
                    </div>
                </RecentCards>
                {card.length > 0 ? (
                    <ul>
                        {card.map((item: Cards) => {
                            return (
                                <li key={item.id}>
                                    <p onClick={() => {
                                        setSelectedCardName(item.id);
                                        setShowHistory(!showHistory);
                                    }}>
                                        <Name><p><BsCreditCard2Back color="white" /> {item.apelido}</p><FiArrowRightCircle size={20} color='#6EE7B7' /></Name>
                                    </p>
                                    {showHistory && selectedCardName === item.id && (
                                        <ContainerHistory>
                                            <p><Title>Titular</Title> <DropdownName>{item.name}</DropdownName></p>
                                            <p><Title>Número do cartão</Title> <DropdownName>{item.card}<BsFillCircleFill size={10} color='#6EE7B7' /></DropdownName></p>
                                            <p><Title>Validade</Title> <DropdownName>{item.validity}</DropdownName></p>
                                            <p><Title>Bandeira</Title> <DropdownName>{item.flag}</DropdownName></p>
                                        </ContainerHistory>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <>
                    <Empty>
                    <VscEmptyWindow color="#4B5563" size={60}/>
                    <p>Nenhum cartão ativo.</p>
                    </Empty>
                    </>
                )}
            </Container>
        </>
    )
}