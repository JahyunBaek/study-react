
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

    const handleFavorite = (e) => {
            //버블링으로 인하여 자식부터 부모까지 이벤트가 전파됨
            //해결하기 위해서는 event.stopPropagation() 함수로 부모로의 전파를 막아야함.
             alert(isFavorite ? '좋아요' : '모르겠어요');
             e.stopPropagation(); // 부모로의 이벤트 전달을막음
    }
    const handleItemClick = () => {
        alert("item click");
        open(link,'_blank');
    }    
    return (
        <article className="course" onClick={handleItemClick}>
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