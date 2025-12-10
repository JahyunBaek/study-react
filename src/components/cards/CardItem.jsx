

const CardItem = ({title, description, image, isFavorite}) => {

    return (
        <article className="course">
            <img className="course__img" src={image} alt="강의 이미지" />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className="course__icons">
                <button className="btn">
                    <img className="icon-heart" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"} alt="좋아요" />
                </button>
            </div>
		</article>
    )
}

export default CardItem;