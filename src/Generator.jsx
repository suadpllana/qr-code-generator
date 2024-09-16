import { useState, useRef } from "react";

function Generator() {
    const [image_url , setImage] = useState("")
  const inputRef = useRef(null);


    function generateCode(){
        
        if(inputRef.current.value === ""){
            inputRef.current.classList.add("animation")
            setImage("");

            setTimeout(() => {
                inputRef.current.classList.remove("animation")
            } , 1000)
        }
        else{
            const image = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputRef.current.value}`;
            setImage(image)
            inputRef.current.value = ``
        }
    }


  return (
    <>
      <h1>QR Code Generator 🧑🏻‍💻</h1>
      <div className="container">
        <input  ref={inputRef}  placeholder="Write your text or URL" type="text"/><br />
        <img src={image_url} alt="" /><br />
        <button onClick={generateCode}>Generate</button>
      </div>
    </>
  );
}

export default Generator;
