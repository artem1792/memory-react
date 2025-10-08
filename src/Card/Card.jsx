import './Card.css'

export default function Card({src, alt}) {
    return(
        <div className="card">
            <img src={src} alt={alt} />
        </div>
    )
}