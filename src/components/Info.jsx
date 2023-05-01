export default function Info(){
    return (
        <div className="Info">
        <img className="card__img" src="/assets/my-pic.jpeg" alt="" />
        <h2 className="card__name">Muhmmad awd</h2>
        <h3 className="card__role">Frontend Developer</h3>
        <button className="btn btn--primary">
            <img className="cta-icon" src="/assets/icon.png" alt="" /> Email
        </button>
        <button className="btn btn--accent">
            <img className="cta-icon" src="/assets/Vector.png" alt="" /> LinkedIn
        </button>
        </div>
    )
}