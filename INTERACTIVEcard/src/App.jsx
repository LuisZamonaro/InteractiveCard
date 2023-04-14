import { useEffect, useState } from 'react'
import ParteDireita from './partRight'
import ParteEsquerda from './partLeft'
import './styles.css'

function App() {
  
  const [disable, setDisable] = useState(true)

  const [controlNumber, setControlNumber] = useState("");
  //contra o valor do input
  const [CardNumber, setCardNumber] = useState("");
  // contra o erro ( não está sendo muito usado)
  function handleCardNumber(event) {
    //regrinhas:
      const value = event.target.value.replace(/\D/g, ""); // remover não dígitos (tirar letras)
      const groups = value.match(/\d{1,4}\s?/g) || []; // obter grupos de até 4 dígitos
      const formattedValue = groups.slice(0, 4).join(" "); // juntar os 4 primeiros grupos separados por espaço
      setControlNumber(formattedValue);
      // apenas mostrar o erro
      if (!value.match(/^\d+$/)) {
          setCardNumber(true);
          
      } else {
          setCardNumber(false);
      }
  }

  
    const [inputValue, setInputValue] = useState("");
  
    function handleChange(event) {
      if (event.target.value.match(/^[a-zA-Z]*$/g)) {
        setInputValue(event.target.value);
        return
      }
      
      
    }
  
    const [name1, setName1] = useState('')

    const [error, setError] = useState(null)

    function message1(event) {

        setName1(event.target.value.slice(0, 2)); // "recorta" a string partindo da posição 0 até a 2, ou seja, limita o valor aos 2 primeiros
        if (event.target.value.length < 2) {
            setError(true);
            return;
        }
        if (parseInt(event.target.value) > 12 || parseInt(event.target.value) == 0 ) {
            setError(true)
            setName1('')
            return
        }
        setError(false);
    }

    const [name2, setName2] = useState('')

    const [error2, setError2] = useState(null)

    function message2(event) {

        setName2(event.target.value.slice(0, 2)); // "recorta" a string partindo da posição 0 até a 2, ou seja, limita o valor aos 2 primeiros
        // if (parseInt(event.target.value) < 23) {
        //     setDisable(true)
        // }
        if (event.target.value.length < 2) {
            setError2(true);
            return;
        }
        setError2(false);
    }


    const [name3, setName3] = useState('')

    const [error3, setError3] = useState(null)


    function message3(event) {

        setName3(event.target.value.slice(0, 3)); // "recorta" a string partindo da posição 0 até a 2, ou seja, limita o valor aos 2 primeiros
        if (event.target.value.length < 3) {
            setError3(true);
            return;
        }
        setError3(false);
    }
  

    useEffect(() => {
      if(inputValue.length < 4 || controlNumber.length < 16 || name1.length < 2 || name2.length < 2 || parseInt(name2) < 23 || name3.length < 3) {
        setDisable(true)
      } else {
        setDisable(false)
      }
    }, [inputValue, controlNumber, name1, name2, name3])
  return (
    <>
    <div className="containerGeral">
      {/* tudo para renderizar os compenentes */}
      <ParteEsquerda controlNumber={controlNumber} CardNumber={CardNumber} name1={name1} name2={name2} name3={name3} inputValue={inputValue}/>
      <ParteDireita controlNumber={controlNumber} CardNumber={CardNumber} handleCardNumber={handleCardNumber}
      handleChange={handleChange} inputValue={inputValue}
      name1={name1} message1={message1} message2={message2} message3={message3} name2={name2} name3={name3} disable={disable} error={error} error2={error2} error3={error3} />
      {/* a parte direita comanda, pq é nela que estão os inputs */}
    </div>
    
    </>
    
  )
}

export default App
