import cardFront from '../images/bg-card-front.png'
import cardBack from '../images/bg-card-back.png'
import bgMobile from '../images/bg-main-mobile.png'

export default function ParteEsquerda({ controlNumber, CardNumber, inputValue, name1, name2, name3, disable }) {
    return (
        <>
            <div className="parteEsqBackg">
                {/* <div className="oi">
                    <img src={bgMobile} />
                </div> */}
                <div className="cardFront">
                    <img src={cardFront} />
                    <div className="bolaBranca"></div>
                    <div className="circuloBranco"></div>
                    <div className="zeros">
                        {controlNumber ? controlNumber : '0000 0000 0000 0000'}
                        {/*se existir o controlNumber, ele mostra, se não ele deixa a string  */}
                    </div>
                    <div className="nameCard">
                        {inputValue ? inputValue : 'Jane Appleseed'}
                    </div>
                    <div className="mmYY">
                        {name1 ? name1 : '00'}
                        /
                        {name2 ? name2 : '00'}
                    </div>
                </div>
                <div className="cardBack">
                    <img src={cardBack} />
                    <div className="tresZeros">
                        {name3 ? name3 : '000'}
                    </div>
                </div>

            </div>
            <div className="parteEsqMobile">
                <div className="backgMobile">
                    <img src={bgMobile} />
                    <div className="cardBackM">
                        <img id='cardBackM' src={cardBack} />
                        <div className="tresZerosM">
                            {name3 ? name3 : '000'}
                        </div>
                    </div>
                    <div className="cardFrontM">
                        <img id='cardFrontM' src={cardFront} />
                        <div className="bolaBranca"></div>
                        <div className="circuloBranco"></div>
                        <div className="zeros">
                            {controlNumber ? controlNumber : '0000 0000 0000 0000'}
                            {/*se existir o controlNumber, ele mostra, se não ele deixa a string  */}
                            <div className="nameCard">
                                {inputValue ? inputValue : 'Jane Appleseed'}
                            </div>
                            <div className="mmYY">
                                {name1 ? name1 : '00'}
                                /
                                {name2 ? name2 : '00'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}