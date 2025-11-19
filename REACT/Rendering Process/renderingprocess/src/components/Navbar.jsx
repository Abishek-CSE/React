import '../App.css'
const Navbar =()=>{
    const title ='MASTER'
    const home ="HOME"
    const plot ='CHARACTER SKETCH'
    const character ="THE PLOT"
    const info ="MORE INFO"
    return(
        <header>
            <div className="navbar">
                <div className="logo">
                    <h1>{title}</h1>
                </div>
                <div className="nav">
                    <a href="">{home}</a>
                    <a href="">{plot}</a>
                    <a href="">{character}</a>
                    <a href="">{info}</a>
                </div>
            </div>
        </header>
    )
}
export default Navbar