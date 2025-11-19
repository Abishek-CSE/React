import '../App.css'
import jd from '../assets/Banner/VJ.jpg'
import vj from '../assets/Banner/VJS.jpg'
const Character =()=>{
    const character ="true"
    const name ="JD as Vijay"
    const values = "true"
    const value = "null"
    const name2 ="BHAVANI as Vijay Sethupathi"
    return(
        <>
        {
            character?<section className='maincard' >
            <div className='card'>
                <img src={jd} alt="VIJAY" />
                <div className='card-content'>
                    <h2>{name}</h2>
                    {values && <p>John Durairaj, popularly called JD, is a charismatic yet deeply flawed college professor whose rebellious attitude and carefree lifestyle mask a troubled past. He is known for his unconventional teaching methods, his casual approach to rules, and his ability to connect effortlessly with students. Beneath his humorous, laid-back exterior lies a man struggling with alcoholism and emotional scars, which gradually push him into a journey of self-realization. When he is sent to a juvenile reformation school as part of an election duty, JD confronts the harsh reality of young boys being exploited and controlled by a ruthless criminal. This becomes a turning point, awakening his sense of responsibility and moral purpose. JD rises from his vulnerabilities to become a protector and mentor, using courage, empathy, and conviction to stand against injustice. Through this transformation, Vijay’s JD emerges as a powerful blend of charm, strength, and compassion, making him a memorable and inspiring character.</p>}

                </div>
            </div>
            <div className='card'>
                <img src={vj} alt="VIJAY" />
                <div className='card-content'>
                    <h2>{name2}</h2>
                    {value && <p>Bhavani is a chilling and formidable antagonist whose brutal upbringing shapes him into a ruthless crime lord. Raised in a correctional facility where he endured severe abuse and cruelty, he learns early that power is the only language that commands respect. This traumatic past fuels his transformation into a merciless figure who controls the juvenile home, exploiting young boys to run his criminal empire. Bhavani’s calm, composed demeanor masks a terrifying intensity—he is soft-spoken yet lethal, strategic yet unpredictable. His belief that fear is the strongest tool for control makes him unstoppable and feared by all around him. Vijay Sethupathi portrays Bhavani with an unsettling charm and effortless menace, creating a villain who is both realistic and unforgettable.
</p>}
                        </div>
            </div>
               </section>:<p>There is no content</p>
        }
          
        </>
    )
}
export default Character