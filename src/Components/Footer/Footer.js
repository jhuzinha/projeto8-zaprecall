import "./footer.css"

export default function Footer() {
    return (
        <>
        <div className="spacing">
        </div>
        <div className="footer">
            <p> 0/8 CONCLUÍDOS </p>
            <div>
                <div className="green" ><ion-icon name="checkmark-circle"></ion-icon></div>
                <div className="red" ><ion-icon name="close-circle-sharp"></ion-icon></div>
                <div className="orange"><ion-icon name="help-circle-sharp"></ion-icon></div>
            </div>
        </div>
        </>
    )
}