import CardItem from "./CardItem";

export default function CardBody({items}){
    
    return (
        <div className="course__body">
            {items.map((item) => (
                <CardItem key={item.title} title={item.title} description={item.description} image={item.image} isFavorite={item.isFavorite} link={item.link}/>
            ))}
        </div>
    )
}