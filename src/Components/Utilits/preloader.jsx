import spinner from './Spinner.gif'

const Preloader = ()=>{
  return (
    <div className='preloader'>
    <div>
      <img src={spinner}></img>
    </div>
    </div>
  )
}


export default Preloader