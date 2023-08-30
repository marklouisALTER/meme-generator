import React, {useState, useEffect} from 'react'
import memesData from './memesData'
import { FaGithubSquare } from 'react-icons/fa'
export const Form = () => {
        const [meme, setMeme] = useState({
                topText: "",
                bottomText: "",
                randomImage: "",
        })

        const [allMemeImages, setAllMemeImage] = useState({});



        function getRandImage(){
                const randomImage = (Math.floor(Math.random() * allMemeImages.length) + 1)
                const urlImage = allMemeImages[randomImage].url;
                setMeme(prevState => ({
                        ...prevState,
                       
                        randomImage: urlImage
                }))
        }


        function handleClick(event) {
                const {name, value} = event.target
                setMeme(prevState => ({
                        ...prevState, 
                        [name] : value,

                }))
        }


        useEffect(()=> {
                async function getMeme(){
                        const data = await fetch("https://api.imgflip.com/get_memes")
                        const response = await data.json()
                        setAllMemeImage(response.data.memes)
                }
                getMeme()
        },[])

        
  return (
    <div>
                <div className='grid grid-cols-2 gap-5 px-[5%] mt-[4rem] md:px-[20%]'>
                        <div className="relative z-[12] mb-6 w-full group">
                        
                                <input 
                                        type="text"
                                        name="topText"
                                        onChange={handleClick}
                                        value={meme.topText}
                                        placeholder=''
                                        className='font-primary block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                                        border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                                        dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

                                        <label className="font-primary font-light peer-focus:font-medium absolute text-sm text-gray-500
                                        dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                                        peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                                        peer-focus:-translate-y-6">
                                                Top Text
                                        </label>
                        </div>
                        
                        <div className="relative z-[12] mb-6 w-full group">

                                <input 
                                        type="text"
                                        name="bottomText"
                                        onChange={handleClick}
                                        value={meme.bottomText}
                                        placeholder=''
                                        className='font-primary block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                                        border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
                                        focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

                                        <label className="font-primary font-light peer-focus:font-medium absolute text-sm text-gray-500 
                                        dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                        peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Bottom Text
                                        </label>
                                
                        </div>
                        
                        <button
                                onClick={getRandImage}
                                className='font-primary rounded-xl font-light text-white bg-blue-600 h-[3rem] col-span-2 hover:bg-blue-700'>
                                        Get a new meme image
                        </button>
                </div>
        <div className='relative col-span-2 flex justify-center p-5'>
                <img src={meme.randomImage} className="max-w-[100%]"/>
                <p
                        className='absolute top-5 text-3xl text-white'
                        style={{
                        textShadow:
                        '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000'
                        }}
                >
                {meme.topText}
                </p>

                <p   
                        className='absolute bottom-5 text-3xl text-white'
                        style={{
                        textShadow:
                        '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000'
                        }}
                >
                        {meme.bottomText}
                </p> 
        </div>
        <div className='flex items-center justify-center'>
        <FaGithubSquare className='text-2xl text-blue-600'/>
                <h1 className='font-primary text-gray-500 pl-2 text-center'>Follow me on Github : 
                        <a className='text-black pl-2 hover:underline hover:text-blue-800' href="https://github.com/marklouisALTER" target="_blank">marklouisALTER</a>
                </h1>
        </div>
    </div>
  )
}
