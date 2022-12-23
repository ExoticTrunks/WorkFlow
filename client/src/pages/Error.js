import { Link } from 'react-router-dom'
import img from '../assets/404.svg'
import Wrapper from '../wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="404 not found" width='400'/>
        <h3>Whoops.. Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error