import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { useState } from 'react';
export default function Card({children}){
    const [items,setItems] = useState([{
        id: 0,
        title: "입문자를 위한, HTML&CSS 웹 개발 입문1",
        description: "웹 개발에 필요한 기본 지식을 배웁니다.1",
        image: "/img/htmlcss.png",
        isFavorite: true
    },
    {
        id: 1,
        title: "입문자를 위한, HTML&CSS 웹 개발 입문2",
        description: "웹 개발에 필요한 기본 지식을 배웁니다.2",
        image: "/img/js.png",
        isFavorite: false,
        link: "https://inf.run/Kpnd"
    },
    {
        id: 2,
        title: "입문자를 위한, HTML&CSS 웹 개발 입문3",
        description: "웹 개발에 필요한 기본 지식을 배웁니다.3",
        image: "/img/portfolio.png",
        isFavorite: true,
        link: 'https://inf.run/TkAN'
    }
    ]);
    const handleChangeFavorite = (id, isFavorite) =>{
        const newItems = items.map((item) =>{
            if(item.id === id){
                return {
                    ...item,
                    isFavorite: !isFavorite
                }
            }else{
                return {...item};
            }
        })
        setItems(newItems);
    }
    return (
        <div className="card">
            <CardHeader />
            <CardBody items={items} onChangeFavorite={handleChangeFavorite} />
            {children}
        </div>
    )
}