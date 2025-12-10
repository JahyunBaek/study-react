
// const handleFavorite = (isFavorite) => {
//     alert(isFavorite ? '좋아요' : '모르겠어요');
// }

const HeartIconBtn = ({onHeartClick, isFavorite}) =>{
    const handleFavorite = () => {
        alert(isFavorite ? '좋아요' : '모르겠어요');
    }
    
    //const heartIcon = isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"; //return이 없을때는 null
    return (
            <div className="course__icons">
                <button className="btn" onClick={(e) => onHeartClick(e)}>
                    <img className="btn__img" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"} alt="좋아요" />
                </button>
            </div>
    )
}

const LinkIconBtn = ({link}) => {
    return (
        link && (
            <a className="btn" href={link} target="_blank" rel="noopener">
            <img className="btn__img" src="/img/link-icon.svg" alt="" />
        </a>
        )
    )
}

const CardItem = ({title, description, image, isFavorite, link}) => {

    const handleFavorite = () => {
             alert(isFavorite ? '좋아요' : '모르겠어요');
    }
        
    return (
        <article className="course">
            <img className="course__img" src={image} alt="강의 이미지" />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <HeartIconBtn isFavorite={isFavorite} onHeartClick={handleFavorite} />
            <LinkIconBtn link={link} />
           
		</article>
    )
}

export default CardItem;