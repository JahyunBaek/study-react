import { forwardRef } from "react";
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
const MyForm = forwardRef(function MyForm(props,ref){
    const [form, setForm] = useState({title: '제목', author: '작성자', content: ''});
    
    const titleInputRef = useRef(null);
    const authorInputRef = useRef(null);
    const contentInputRef = useRef(null);

    const prevFormRef = useRef(null);
    const [isChanged, setIsChanged] = useState(false);
    useEffect(() => {
        prevFormRef.current = {...form};
    },[])
    
    useEffect(() =>{

        const hasChanged = (
            prevFormRef.current.title !== form.title 
        || prevFormRef.current.author !== form.author 
        || prevFormRef.current.content !== form.content
    );
        setIsChanged(hasChanged)
    },[form]);
    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.title.trim() === '' || form.author.trim() === '' || form.content.trim() === ''){
            alert('제목, 작성자, 내용을 입력해주세요.');
            return;
        }
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target;

        setForm({...form, [name]: value});
        
        //prevFormRef.current[name] === value ? setIsChanged(true) : setIsChanged(false);
    }
    const formRef = useRef(null);

    useEffect(() => {
        console.log('ref',ref);
    })
    return(
        <form ref={ref} onSubmit={handleSubmit}>
            <fieldset>
                <legend>글쓰기</legend>
                <input ref={titleInputRef} name="title"  placeholder="제목" value={form.title} onChange={handleFormChange}></input>
                <hr />
                <input ref={authorInputRef} name="author"  placeholder="작성자" value={form.author} onChange={handleFormChange}></input>
                <hr />
                <input ref={contentInputRef} name="content" placeholder="내용" value={form.content} onChange={handleFormChange}></input>
                <hr />
                <button disabled={!isChanged}>전송</button>
            </fieldset>
        </form>
    )
})

const AppRef = () => {

    //상태를 관리하지만 렌더링이 필요없는것
    const MyformRef = useRef(null);
    useEffect(() => {
        console.log(MyformRef);
    },[]);
    return <>
        <h2>Count 참조</h2>
       <ButtonCounter />
       <ButtonCounter />
       <h2>Form</h2>
       <MyForm ref={MyformRef} />
    </>
}

export default AppRef;