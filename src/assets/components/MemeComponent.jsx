export default function MemeComponent(){
    return(
        <main>
            <form className="form">
                <input type="text" placeHolder="Top Text" className="form--input"></input>
                <input type="text" placeholder="Bottom Text" className="form--input"></input>
                <button type="submit" className="form--button">GET A NEW MEME PAGE🖼</button>
            </form>
        </main>      
    );
}