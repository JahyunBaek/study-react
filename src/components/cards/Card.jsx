import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({children}){
    const items = [{
        title: "입문자를 위한, HTML&CSS 웹 개발 입문1",
        description: "웹 개발에 필요한 기본 지식을 배웁니다.1",
        image: "/img/htmlcss.png",
        isFavorite: true
    },
    {
        title: "입문자를 위한, HTML&CSS 웹 개발 입문2",
        description: "웹 개발에 필요한 기본 지식을 배웁니다.2",
        image: "/img/js.png",
        isFavorite: false,
        link: "https://inf.run/Kpnd"
    },
    {
        title: "입문자를 위한, HTML&CSS 웹 개발 입문3",
        description: "웹 개발에 필요한 기본 지식을 배웁니다.3",
        image: "/img/portfolio.png",
        isFavorite: true,
        link: 'https://inf.run/TkAN'
    }
    ]
    return (
        <div className="card">
            <CardHeader />
            <CardBody items={items} />
            {children}
        </div>
    )
}