import { useState,useEffect,useCallback } from "react"

function App() {
  const [length,setLength]=useState(6);
  const [password,setPassword]=useState("");
  const [numbers,allowedNumbers]=useState(false);
  const [characters,allowedCharacters]=useState(false);

  const updatePassword=useCallback(()=>{
    let pass="";
    let passStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers) passStr+="0123456789";
    if(characters) passStr+="!@#$%^&*(){}[]"

    for(let i=1;i<=length;i++){
      let passwordValue=Math.floor(Math.random()*passStr.length +1);
      pass +=passStr.charAt(passwordValue);
    }

    setPassword(pass);
  },[length,numbers,characters,setPassword])

  useEffect(() => {
    updatePassword();
  }, [updatePassword]);
  
  return (
      <div className="w-full max-w-md mx-auto px-4 py-5 my-8 bg-gray-800 rounded-lg  shadow-md">
        <h1 className="text-white text-center mb-2">Password Generator</h1>
        <div className="flex justify-center shadow-lg rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1 px-3 cursor-pointer" readOnly value={password}/>
          <button className="bg-blue-600 text-white p-1 rounded-tr-md rounded-br-md">Copy</button>
        </div>
        <div className="flex gap-2">
          <input type="range" 
            min={6} 
            max={100} 
            id="length" 
            value={length}
            onChange={(e)=>(setLength(e.target.value))}
            className="cursor-pointer"
          />
          <label htmlFor="length" className="text-orange-500">length:{length}</label>
          <input type="checkbox" id="chars" onChange={()=>(allowedCharacters((prev)=> !prev))}/>
          <label htmlFor="chars" className="text-orange-500">Characters</label>
          <input type="checkbox" id="nums" onChange={()=>(allowedNumbers((prev)=> !prev))}/>
          <label htmlFor="nums" className="text-orange-500">Numbers</label>

        </div>
      </div>
  )
}

export default App
