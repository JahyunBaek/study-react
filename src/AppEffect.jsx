import { useEffect, useState } from "react"



const AppEffect = () => {
    const Courses = () =>{
        
        const [list, setList] = useState([]);
        const [filter, setFilter] = useState('all');
        //[2] 데이터 가져오기
        useEffect(() => {
            setShow(true);
            fetch(`public/data/courses_${filter}.json`)
                .then(res => res.json())
                .then(data => {
                    console.log('data 조회 성공')
                    setList(data);
                })
                .catch(err => {
                    console.error(err);
                });
    
                return () => {
                    console.log('unmount');
                    //setShow(false);
                }
        }, [filter]);
            return(
                <>
               
                <label htmlFor="all">전체</label>
                <input
                    id="all"
                    type="radio"
                    value="all"
                    checked={filter === 'all'}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <label htmlFor="favorite">좋아요</label>
                <input
                    id="favorite"
                    type="radio"
                    value="favorite"
                    checked={filter === 'favorite'}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <ul>
                    {
                        list.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </>
            )
        }
    //const [titleText,setTitleText] = useState('데이터 가져오기')
    //[1] dom 조작하기
    // useEffect(() =>{
    //     const $h2 = document.getElementById('title');
    //     $h2.textContent = '렌더링 시작!';
    // },[]);

    const [show, setShow] = useState(true);

    return (
       <>
        <h2 id="title">데이터 가져오기</h2>
        <button onClick={() => setShow(!show)}>toggle</button>
        <hr />
        {
            show && <Courses />
        } 
       </>
    )
}


export default AppEffect