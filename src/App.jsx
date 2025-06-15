import Header from "./components/Header";
import Room from "./components/Room";
import './style.css'

export default function App() {
  return (
    <div>
      <Header>Empresa</Header>
      <div className="rooms">
        <div>
          <Room roomName={'Primeira sala'} />
        </div>
        <div>
          <Room roomName={'Segunda sala'} />
        </div>
      </div>
    </div>
  )
}