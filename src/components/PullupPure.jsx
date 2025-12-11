//입력과 출력이 동일한 순수한 컴포넌트
const PullUpPure = ({counter}) => {
    counter = counter + 1;
    return (
        <p>
        나는 턱걸이를 {counter}개 했습니다.
        </p>
    )
}

export default PullUpPure;