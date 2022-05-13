import Logo from "../../asserts/images/logo.png"
import "./startScreen.css"

export default function StartScreen( {setScreen} ) {
    return (
        <>
            <section className="startScreen">
                <img src={Logo} alt="logo em formato de raio"/>
                <p>ZapRecall</p>
                <button onClick={setScreen}>Iniciar Recall!</button>
            </section>
        </>
    )
}