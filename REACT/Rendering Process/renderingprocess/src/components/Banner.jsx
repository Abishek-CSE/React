import '../App.css'
import banner from '../assets/Banner/Banner.jpg'
const Banner =()=>{
    return(
        <>
        <section className='image'>
            <div className='bannerimage'>
                <img src={banner} alt="logo" />
            </div>
        </section>
        </>
    )
}
export default Banner