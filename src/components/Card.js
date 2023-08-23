function Card (props) {
    return (
        <div className="Card">
            <img src={props.img} alt="product" />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Card