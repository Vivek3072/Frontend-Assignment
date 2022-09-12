import React,{useState} from 'react'
import './JsonForm.css'
import {BsInfoCircleFill} from 'react-icons/bs'

export default function JsonForm(props) {
  const [values, setValues] = useState({
    pizzaName:"",
  })
  console.log(props.data ,"props");
  
  const handleChange =(e)=>{
    const {name,value} = e.target;
    setValues({
        ...values,
        [name]:value,
    })
}

  return (
    <>
    <div className="json_form">
    <h1 className='text_center'>JSON form</h1>
    {props.data.length>0 ? (
      <>
      <form className='json_form_content'>


        {/* PIZZA NAME SECTION  */}
        <div className="input_section">
          <label htmlFor="pizza_name">
          {props.data[0]? props.data[0].label:""} 
            {props.data[0] ? <span className="required" style={{color:"red"}}> {props.data[0].validate.required && "*"}  </span>  :""}
            {props.data[0] && props.data[0].description ? <span className="description tooltip" data-tooltip={props.data[0].description}> {props.data[0].description.length>0 ?  <BsInfoCircleFill />  :""} </span>  :"" }
            </label>
          <input className='form_input' id="pizza_name" type="text"   placeholder={props.data[0] ? props.data[0].placeholder:""} name="pizzaName" value={values.pizzaName} onChange={handleChange}
            disabled={!(props.data[0]?props.data[0].validate.immutable:"")}
          />
        
        </div>
        {/* PIZZA NAME SECTION  */}


        {/* PIZZA TYPE SECTION  */}
        <div className="input_section_type">
          <label htmlFor="pizza_type">
           {props.data[1]? props.data[1].label:""} 
            {props.data[1] ? <span className="required" style={{color:"red"}}> {props.data[1].validate.required && "*"}  </span>  :""}
            {props.data[1] && props.data[1].description ? <span className="description tooltip" data-tooltip={props.data[1].description}> {props.data[1].description.length>0 ?  <BsInfoCircleFill />  :""} </span>  :"" }
            </label>
           <div className='line_break'> </div>

         
          {props.data[1]? props.data[1].subParameters.map((spt)=>{
            return(
              <>
                
              <div className="subParameters_options" key={spt.sort}>
                {spt? spt.validate.options?.map((opt)=>{
                  return (
                    <>
                    <input type="text" className={`radio_options_input ${spt.validate.defaultValue ===opt.label? "active":""}`}
                    key={opt.sort} 
                     placeholder={opt.label}
                     disabled
                    //  value={opt.value}
                    />
                  </>
                  )
                }):""} 
          </div>

           {/* <div className='line_break'> </div> */}
           {/* {spt.sort===10001? (
            <div className='Slices'>
                    {spt.subParameters? spt.subParameters.map((spt2)=>{
                      return (
                        <>
                        <div className="Slices_label">
                          {spt2.label==="Slices"? spt2.label:""}
                        </div>
                        <div className="Slices_value">
                          <select name="" id="">
                          {spt2.validate? spt2.validate.options.map((spt2options)=>{
            console.log(spt2options ,"spt2")
                            return (<>
                              <option value={spt2options?spt2options.value:""}>{spt2options?spt2options.label:""}</option>
                              hdj
                            </>
                            )
                          })
                          :
                          ""}
                            <option value={spt2.defaultValue}>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        </>
                      )
                    })
                    :""}
                </div> 
           ):""} */}
              
              </>
                  
            )
          })
          :""} 

        </div>

      
        {/* PIZZA TYPE SECTION  */}


        { props.data.subParameters && props.data.subParameters.uiType==="Radio"? 
        <div className="input_section_type">
          <label htmlFor="pizza_type"> Pizza type Radio </label>
           <div className='line_break'> </div>
     {
            props.data.subParameters.validate.options.map((op)=>{
              return (
                <>
                <div className="radio_value">
                  {op.label}
                </div>
                </>
              )
            })
          }

          {/* <input className='form_input' id="pizza_type" type="text" placeholder={props.data.jsonKey} disabled/> */}
        </div>
        :""
        }

        <div className="input_section_type">
        <label htmlFor="toppings"> Toppings </label>
           <div className='line_break'> </div>
          <input className='form_input' id="pizza_type" type="text" placeholder={props.data.jsonKey} />
        </div>


      </form>
      </>
      ) :(
    <>
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_0zomy8eb.json"  background="transparent"  speed="1"  style={{width:" 300px", height: "300px"}}  loop  autoplay></lottie-player>
    <p>Please paste your JSON to see the form</p>
    </>
    )}
    </div>
    </>
  )
}
