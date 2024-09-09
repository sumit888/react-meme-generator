import memeData from "../../memeData";
import React, {useState} from "react"

export default function MemeComponent(){

    //This state holds the current values related to the meme being displayed or edited.
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    //This state holds the data for all available meme images, which can be used to randomly select a new meme image.
    const [allMemeImages, setAllMemeImages] = useState(memeData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form--input"></input>
                <input type="text" placeholder="Bottom Text" className="form--input"></input>
                <button type="submit" className="form--button" onClick={getMemeImage}>GET A NEW MEME PAGE🖼</button>     
                <img src={meme.randomImage} className="meme--image" loading="lazy" />           
            </div>

            
        </main>      
    );
}