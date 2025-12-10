import { Fragment } from "react";
import CardItem from "./CardItem";

const CardBody = ({items}) => {
    
    return (
        <div className="course__body">
            {
            items
            //.filter(item => item.isFavorite)
            .map((item, index) => (
                <Fragment key={item.id}>
                    <CardItem {...item} />
                    
                    <div className="divider" />
                </Fragment>
                ))}
            </div>
        );
    };

    export default CardBody;