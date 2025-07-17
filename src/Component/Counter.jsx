import React, {useState} from 'react'
import {
  Wrapper,
  ButtonGroup,
  TextArea,
  StatsBox,
  StatMessage,
  StatItem
  // ,
  // StyledButton     
} from './Counter.styles'
const Counter = () => {
    const [word, setWord] = useState(0); 
    const [character, setCharacter] = useState(0);
    const [mess, setMess] = useState('');
    const [text, setText] = useState('');//use to take the value of the input field where the user type
    const [size, setSize] = useState(16);
    const [weight, setWeight] = useState(500);
    const [fontStyle, setFontStyle] = useState('Normal');

    const handleBoth = (e) => {
      const newText = e.target.value;//by dooing this both setText and Handler wil get the exact value of the user typed word.
      setText(newText)
      Handler(newText);//to get the word and character count
    }

    const Handler = (newText) => {
        const inputText = newText;//save the text into local variable

        if(inputText.trim() === ""){//if ther is no word typed then the count will be zero
          setCharacter(0);
          setWord(0);
          return;
        }
          
       else{
        setCharacter(inputText.length);

        const word2 = inputText.trim().split(" ").filter(words => words !== "");
        setWord(word2.length);
        setMess("")//if the user typed thent the error message will erased
       }
    }
    
    const check = () => {//this function is used to check if user type something or not or if not then the button click will throw the error.
      if(text.trim() === ""){
        setMess("Type Something first");
        return true;
      }
      return false;
    }

    const lowerHandler = () => {
      if(check()){return;}
      else{
        setText(text.toLowerCase());
      }
    }
    const upperHandler = () => {
      if(check()){return;}
      else{
        setText(text.toUpperCase());
      }
    }
    const CapitalizeHandler = () => {
      if(check()){return;}
      else{
        const newWord = text
        .split(" ")
        .map(word => word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase())
        .join(" ");
        setText(newWord);
      }
    }
    const EnlargeHandler = () => {
      if(check() || size > 50){return;} //set the increase font size to the limit
      else{
          setSize(size + 2);//increase the value of size state by 2
      }
    }
    const ShrinkHandler = () => {
       if(check() || size < 10){return;}
      else{ 
          setSize(size - 2);      
        }
    }
    const copyHandler = () => {
       if(check()){return;}
      else{
        alert("Text is copied");
        navigator.clipboard.writeText(text);
      }
    }
    const clearHandler = () => {//clear all the style property and also clear the text area
        setText("");
        setCharacter(0);
        setWord(0);
        setMess("")
        setWeight(500);
        setFontStyle('Normal');
        setSize(16);
      }
    const weightHandler = () => {
       if(check()){return;}
      else{ 
          setWeight(weight === 800 ? 500 : 800);//toggle value so if the button clicked it remove the previos weight      
        }
    }
    const styleHandler = () => {
       if(check()){return;}
      else{ 
          setFontStyle(fontStyle === 'italic' ? 'Normal' : 'italic');     
        }
    }

  return (
    <Wrapper>
        <ButtonGroup>
            <button onClick={lowerHandler}> Lower Case</button>
            <button onClick={upperHandler}> Upper Case</button>
            <button onClick={CapitalizeHandler}> Capitalize</button>
            <button onClick={EnlargeHandler}> Enlarge</button>
            <button onClick={ShrinkHandler}> Shrink</button>
            <button onClick={copyHandler}> Copy</button>
            <button onClick={weightHandler}> Bold</button>
            <button onClick={styleHandler}> Italic</button>
            <button onClick={clearHandler}> Clear</button>
        </ButtonGroup>
         <div>
            <TextArea 
            id="area" 
            rows={10} 
            onChange={handleBoth} 
            placeholder='Write inside the text area' 
            value={text}
            style={{fontSize : size + 'px', fontWeight : weight, fontStyle : fontStyle}}> {/* it is used to increase or decrease the size of the fontsize of text also the style and the font weight*/}
            </TextArea>
        </div>
        <StatsBox>
            <StatMessage>{mess}</StatMessage>{/* used to show the error on the screen when the writting area is clear and user press the button */}
            {/* <textarea name="result" id="result" rows={5} value={`Words: ${word}, Characters: ${character}`} readOnly /> */}
            <StatItem>Word count: {word}</StatItem>
            <StatItem>Character count: {character}</StatItem>
        </StatsBox>
    </Wrapper>
  )
}

export default Counter


