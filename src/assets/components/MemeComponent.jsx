import memeData from "../../memeData";
import React, {useState} from "react"

export default function MemeComponent(){
    const [memeImage, setMemeImage] = useState("")
  
    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form--input"></input>
                <input type="text" placeholder="Bottom Text" className="form--input"></input>
                <button type="submit" className="form--button" onClick={getMemeImage}>GET A NEW MEME PAGE🖼</button>     
                <img src={memeImage} className="meme--image" />           
            </div>

            
        </main>      
    );
}