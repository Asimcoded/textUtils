import React from "react"
import { useState } from "react";
function Home() {
    const [text, setText] = useState("")
    const getText = (e) => {
        setText(e.target.value)
    }
    const toUppercase = () => {
        setText(text.toUpperCase())
    }
    const toLowercase = () => { 
        setText(text.toLowerCase())
    }
    const clearText = ()=>{
        setText("")
    }
    function copyText(){
        const textBox = document.createElement("textarea")
        textBox.value = text;
        document.body.appendChild(textBox);
        textBox.select()
        document.execCommand("copy");
        document.body.removeChild(textBox);
    }
    return (
        <>
            <div className=" mt-20 grid items-center">
                <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white text-3xl text-center">Enter the text</label>
                <textarea id="message" rows="4" className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-20" placeholder="Write your thoughts here..." onChange={getText} value={text}></textarea>
                <div className="p-10 flex justify-center w-full">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={toUppercase}>
                            Convert to upercase
                        </span>
                    </button>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={toLowercase}>
                            Convert to lowercase
                        </span>
                    </button><button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={copyText}>
                            Copy the text
                        </span>
                    </button><button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={clearText}>
                            Clear the text
                        </span>
                    </button>
                </div>
                <div className="grid  w-full">
                    <h1 className="text-3xl text-white font-bold text-center mb-2"> Preview Text</h1>
                    <textarea id="message myBox" rows="4" className="block p-2.5 text-m text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-20" placeholder="Preview text" value={text}></textarea>
                </div>
            </div>
        </>
    )
}

export default Home;