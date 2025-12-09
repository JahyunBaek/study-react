const CardItem = (props) => {
    return (
        <article className="course">
            <img className="course__img" src="/img/htmlcss.png" alt="" />
            <div className="course__body">
                <div className="course__title">{props.title}</div>
                <div className="course__description">{props.description}</div>
            </div>
		</article>
    )
}

export default CardItem;