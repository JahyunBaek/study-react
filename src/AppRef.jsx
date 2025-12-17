import { useEffect, useRef, useState } from "react";
//let counter = 0;

const ButtonCounter = () => {
    const countRef = useRef(0);
    const [count, setCount] = useState(0);
  
    //console.log('render');
    const handleClick = () => {
        countRef.current++;
        //counter++;
        
        setCount(count + 1);

        //console.log('counter',counter);
        console.log('countRef',countRef.current);
        console.log('count',count);
    }
    return(
        <>
         <button onClick={handleClick}>Count 증가</button>
        </>
    )
}
const Form = () =>{
    const [form, setForm] = useState({title: '제목', author: '작성자', content: ''});
    
    const titleInputRef = useRef(null);
    const authorInputRef = useRef(null);
    const contentInputRef = useRef(null);

    useEffect(() =>{
        if(!form.content){
            contentInputRef.current.focus();
        }
    },[]);
    const handleSubmit = (e) => {
       
        e.preventDefault();

        if(form.title.trim() === '' || form.author.trim() === '' || form.content.trim() === ''){
            alert('제목, 작성자, 내용을 입력해주세요.');
            return;
        }

        console.log(form);
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>글쓰기</legend>
                <input ref={titleInputRef} name="title"  placeholder="제목" value={form.title} onChange={handleFormChange}></input>
                <hr />
                <input ref={authorInputRef} name="author"  placeholder="작성자" value={form.author} onChange={handleFormChange}></input>
                <hr />
                <input ref={contentInputRef} name="content" placeholder="내용" value={form.content} onChange={handleFormChange}></input>
                <hr />
                <button>전송</button>
            </fieldset>
        </form>
    )
}

const AppRef = () => {

    //상태를 관리하지만 렌더링이 필요없는것
    
    return <>
        <h2>Count 참조</h2>
       <ButtonCounter />
       <ButtonCounter />
       <h2>Form</h2>
       <Form />
    </>
}

export default AppRef;