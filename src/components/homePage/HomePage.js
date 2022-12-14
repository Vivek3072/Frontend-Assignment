import React,{useState} from 'react'
import JsonEditor from '../editor/JsonEditor'
import JsonForm from '../form/JsonForm'
import './HomePage.css'

export default function HomePage() {
    const [jsonData, setJsonData] = useState([])

    async function getJSONData(data) {
        const json2Data = JSON.parse(data)
        setJsonData(json2Data);
    }

  return (
    <>
    <div className="container">
        <div className="home_left">
            <JsonEditor getData={getJSONData}/>
        </div>
        <div className="home_right">
            <JsonForm data={jsonData} />
        </div>
    </div>
    </>
  )
}
