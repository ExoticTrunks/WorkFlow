import {Logo} from '../components/'
import Main from '../assets/working.svg'
import Wrapper from '../wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
            <div className='container page'>
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> App
                    </h1>
                    <p>
                    Our app is designed to be user-friendly and intuitive, with a clean interface that lets you focus on the most important tasks at hand. Whether you're a recent graduate looking for your first job or an experienced professional looking to make a career change, our job tracking app has the features you need to stay organized and on top of your job search.
                    </p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={Main} alt="working individuals" className='img main-img' />
            </div>
</Wrapper>
  )
}
export default Landing