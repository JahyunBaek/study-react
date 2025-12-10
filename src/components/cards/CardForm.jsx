import Card from './Card'

const CardForm = () => {

    const handleCardForm = (e) =>{
        e.preventDefault();
    }

    return (
        <>
            <Card>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={handleCardForm}>
                    <input type="text" placeholder='강의 제목'></input>
                    <input type="text" placeholder='강의 한줄 설명'></input>
                    <input type="submit" value='등록'></input>
                </form>
            </Card>
        </>
    )
}

export default CardForm;