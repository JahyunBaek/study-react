let counter = 10; //전역에 선언하여 상태를 주지않아도 모든 컴포넌트에서 공유한다. 순수하지 않은 컴포넌트

const PullUpImpure = () => {
    counter = counter + 1;
    console.log('counter',counter);
    return (
        <p>
        나는 턱걸이를 {counter}개 했습니다.
        </p>
    )
}

export default PullUpImpure;