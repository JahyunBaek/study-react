import './App.css'
import PullUpPure from './components/PullupPure';
//import PullUpImpure from './components/PullUpImpure';
const AppPure = () => {
    return(
        <div>
            {/* <PullUpImpure />
            <PullUpImpure />
            <PullUpImpure /> */}

            <PullUpPure counter={11} />
            <PullUpPure counter={12} />
            <PullUpPure counter={13} />
        </div>
    )
}

export default AppPure;