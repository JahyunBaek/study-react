import { useState } from 'react';
import Card from './Card'

const CardForm = () => {
    const [form,setForm] = useState({
        title: 'react강의',
        descriptyion: 'react기초부터 실전까지!'
    })
    const handleCardForm = (e) =>{
        e.preventDefault();
    }

    const handleFormChange = (e) =>{
        console.log(e.target.name)
        setForm({
            ...form,
            [e.target.name]: e.target.value      
        })
    }

    return (
        <>
            <Card>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={handleCardForm}>
                    <input type="text" name='title' value={form.title} placeholder='강의 제목' onChange={handleFormChange}></input>
                    <input type="text" name='descriptyion' value={form.descriptyion} placeholder='강의 한줄 설명' onChange={handleFormChange}></input>
                    <input type="submit" value='등록'></input>
                    {
                        (form.title || form.descriptyion) && (
                            <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px' }}>
                              {form.title && (<p>제목 - {form.title}</p>)}
                              {form.descriptyion && (<p>설명 - {form.descriptyion}</p>)}
                            </div>
                        )
                    }
                    
                </form>
            </Card>
        </>
    )
}

export default CardForm;