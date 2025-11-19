import { Link, Outlet } from 'react-router-dom'
import Grid from "../Grid/Grid";

export default function GamePage() {
    return (
        <>
            <header>
                <h1>Игра Memory</h1>
                <Link to='/'>На главную</Link>
            </header>
            <Outlet />
            <footer>
                <p>&copy; Бобровский А.А., 2025 г.</p>
            </footer>
        </>
    )
}