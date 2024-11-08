import { useState } from "react"

function App() {
    const [color, setColor] = useState("olive")
  
    return (
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-full">
                    {/* <button className="outline-none px-4" style={{backgroundColor: color}}>{color}</button> */}
                    <button onClick={() => setColor("red")} className="outline outline-offset-2 outline-red px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "red"}}>RED</button>
                    <button onClick={() => setColor("green")} className="outline outline-offset-2 outline-green px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "green"}}>GREEN</button>
                    <button onClick={() => setColor("blue")} className="outline outline-offset-2 outline-blue px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "blue"}}> BLUE</button>
                    <button onClick={() => setColor("cyan")} className="outline outline-offset-2 outline-cyan px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "cyan"}}>CYAN</button>
                    <button onClick={() => setColor("lavender")} className="outline outline-offset-2 outline-lavender px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "lavender"}}>LAVENDER</button>
                    <button onClick={() => setColor("black")} className="outline outline-offset-2 outline-white px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "black"}}>BLACK</button>
                    <button onClick={() => setColor("pink")} className="outline outline-offset-2 outline-dark-pink px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "pink"}}>PINK</button>
                    <button onClick={() => setColor("orange")} className="outline outline-offset-2 outline-dark-orange px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "orange"}}>ORANGE</button>
                    <button onClick={() => setColor("white")} className="outline outline-offset-2 outline-black px-4 py-1 rounded-full text-black shadow-sm" style={{backgroundColor: "white"}}>WHITE</button>
                </div>
            </div>
            
        </div>
    )
}

export default App
