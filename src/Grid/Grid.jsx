import './Grid.css'
import Card from "../Card/Card.jsx"

export default function Grid() {
    return(
        <div className="container">
            <Card src="/img/cats-1.jpg" alt="Кошка-1"/>
            <Card src="/img/cats-2.jpg" alt="Кошка-2"/>
            <Card src="/img/cats-3.jpg" alt="Кошка-3"/>
        </div>
    )
}