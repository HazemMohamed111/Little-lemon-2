function Testm(props) {
    return (
        <section>
            <p>Testmonials</p>
            <img src={props.Rating} alt="rating" />
            <img src={props.img} alt="people" />
            <div>{props.name}</div>
            <div>{props.comment}</div>
            <div></div>
        </section>
    );

}
export default Testm