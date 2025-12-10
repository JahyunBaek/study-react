

const HeartIconBtn = ({isFavorite}) =>{
    const heartIcon = isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"; //return이 없을때는 null
    return (
            <div className="course__icons">
                <button className="btn">
                    <img className="btn__img" src={heartIcon} alt="좋아요" />
                </button>
            </div>
    )
}

const LinkIconBtn = ({link}) => {
    return (
        link && (
            <a ClassName="btn" href={link} target="_blank" rel="noopener">
            <img className="btn__img" src="/img/link-icon.svg" alt="" />
        </a>
        )
    )
}

const CardItem = ({title, description, image, isFavorite, link}) => {

    return (
        <article className="course">
            <img className="course__img" src={image} alt="강의 이미지" />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <HeartIconBtn isFavorite={isFavorite} />
            <LinkIconBtn link={link} />
           
		</article>
    )
}

export default CardItem;