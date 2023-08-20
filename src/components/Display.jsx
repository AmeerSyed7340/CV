export default function Display(props) {
    return (
        <>
            <div className="display-general">
                <h1>{props.name}</h1>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>

            <div className="display-experience"></div>
                <p>{props.degree}</p>
                <p>{props.school}</p>
                <p>{props.city}</p>
                <p>{props.country}</p>
        </>
    )
}