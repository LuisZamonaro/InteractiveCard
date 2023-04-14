import { useState } from "react"
import imageComplete from '../images/icon-complete.svg'

export default function ParteDireita({ controlNumber, CardNumber, handleCardNumber, handleChange, inputValue, name1, name2, name3, message1, message2, message3, error, error2, error3, disable }) {

    const [openThank, setOpenThank] = useState(false)
    


    return (
        <>
            <div className={`containerFormulario ${openThank == true ? 'active' : ''}`}>
                <div className="CardH">
                    <div className="cardholder">
                        CARDHOLDER NAME
                    </div>
                    <div className="inputName" id="JaneAp">
                        <input type="name" placeholder="e.g. Jane Appleseed" value={inputValue} onChange={handleChange} />
                    </div>
                </div>
                <div className="CardN">
                    <div className="cardNumber">
                        CARD NUMBER
                    </div>
                    <div className="inputCardNumber" id="eg123">
                        <input type="text" placeholder="e.g. 1234 5678 9123 0000" value={controlNumber} maxLength={20} onChange={handleCardNumber} />
                        {/* o value é pra pegar o valor dele (input) */}
                    </div>
                    <div className={`cardNumberError ${CardNumber ? 'active' : ''}`}>
                        Can't be blank
                    </div>
                </div>
                <div className="exp">
                    <div className="expDate">
                        EXP. DATE (MM/YY) <span id="cvc">CVC</span>
                    </div>
                    <div className="inputsExpDate">
                        <div className="mmInput">
                            {/* o value = name é mais importante */}
                            <input type="number" placeholder="MM" className="age" value={name1} onChange={(event) => message1(event)} maxLength="2" />
                        </div>
                        <div className="yyInput">
                            <input type="number" placeholder="YY" className="age" value={name2} onChange={(event) => message2(event)} />
                        </div>
                        <div className="egInput">
                            <input type="number" placeholder="e.g. 123" className="eg123" value={name3} onChange={(event) => message3(event)} />
                        </div>

                    </div>
                    <div className="expDateError">
                        <span className={`cant1 ${error || error2 ? 'active' : ''}`}>Can't be blank</span> <span className={`cant2 ${error3 ? 'active' : ''}`}>Can't be blank</span>
                    </div>
                </div>
                <div className="botao">
                    <input id="botaoRoxo" type="button" disabled={disable} value={'Confirm'} onClick={() => setOpenThank(prevState => !prevState)}/>
                </div>
            </div>
            <div className={`completeState ${openThank == true ? 'active' : ''}`}>
                <div className="imgComplete">
                    <img src={imageComplete} />
                </div>
                <div className="thankYouC">
                    THANK YOU
                </div>
                <div className="weveAdded">
                    We've added your card details
                </div>
                <button onClick={() => setOpenThank(prevState => !prevState)} id="buttonContinue">Continue</button>
            </div>
        </>

    )
}
