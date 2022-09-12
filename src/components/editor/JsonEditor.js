import React,{useState} from 'react'
import './Editor.css'

export default function JsonEditor(props) {
const [jsonValue, setJsonValue] = useState([])

    const handlePaste=(event)=>{
        event.preventDefault();
        setJsonValue(event.target.value)
        // try {
        //     event.text = JSON.stringify(JSON.parse(event.text), null, 4)
        //   } catch (err) {
        //   }
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(jsonValue , "jsonValue")
        props.getData(jsonValue);
    }


  return (
    <>
    <div className="json_editor">

    <h1 className='text_center'>Paste your JSON here</h1>
    <form className='editor_form'>
        <textarea type="text" onChange={handlePaste}  value={jsonValue} />
    </form>

<div className="button-div">
    <button className='button' onClick={handleSubmit}>View Form</button>
</div>

    </div>
    </>
  )
}
