import { useState } from "react"
import RoomInfo from "../RoomInfo"
import History from "../History"
import Header from "../Header"
import './style.css'

export default function Room({ roomName }) {
    const room = {
        capacity: 8,
        computers: 4
    }
    const [inRoom, setInRoom] = useState(0)
    const [computersOn, setComputersOn] = useState(0)
    const [group, setGroup] = useState('')
    const [groupIn, setGroupIn] = useState('')
    const [name, setName] = useState('')
    const [action, setAction] = useState([])

    function enter() {
        if (name !== '' && room.capacity - inRoom !== 0) {
            setInRoom(inRoom + 1)
            setAction([name + " entrou na sala", ...action])
            setName('')
        }
    }

    function createGroup() {
        if (group !== ''){
            setGroupIn(group)
            setAction([group + " foi criado", ...action])
            setGroup('')
        }
    }

    const roomInfoProps = {
        roomName,
        capacity: room.capacity,
        computers: room.computers,
        inRoom,
        computersOn,
        group: groupIn
    };

    return (
        <div className="container">
            <div className="content">
                <RoomInfo {...roomInfoProps} /> <br />
                <div className="form">
                    <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} className="inp"/>
                    <button onClick={enter} className="buttons">Entrar na sala</button> <br />
                    <input type="text" placeholder="Grupo" value={group} onChange={(e) => setGroup(e.target.value)} className="inp"/>
                    <button onClick={createGroup} className="buttons">Criar Grupo</button>
                </div> <br />   
                <div>
                    <History arr={action} />
                </div>
            </div>
        </div>
    )
}
