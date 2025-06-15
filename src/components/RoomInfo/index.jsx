import "./style.css"

export default function RoomInfo({ roomName, capacity, computers, inRoom, computersOn, group }) {
    return (
        <div className="room-info">
            <h2>{roomName}</h2><br />
            <div className="room-characteristics">
                <p>Capacidade: {capacity}</p>
                <p>Computadores: {computers}</p><br />
            </div>
            <div className="in-room">
                <p>Lugares disponíveis: {capacity - inRoom}</p>
                <p>Computadores disponíveis: {computers - computersOn}</p>
                <p>Grupo em sala:<span>{group !== '' ? group : 'Sem grupos'}</span></p>
            </div>
        </div>
    )
}