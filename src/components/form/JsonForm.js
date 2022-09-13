import React, { useState } from "react";
import "./JsonForm.css";
import { BsInfoCircleFill } from "react-icons/bs";

export default function JsonForm(props) {
  // const [isActive, setIsActive] = useState(true);

  const [values, setValues] = useState({
    pizzaName: "",
  });
  console.log(props.data, "props");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(values,"form submitted");
  };

  return (
    <>
      <div className="json_form">
        <h1 className="text_center">JSON form</h1>
        {props.data.length > 0 ? (
          <>
            <form className="json_form_content">
              {/* PIZZA NAME SECTION  */}
              <div className="input_section">
                <label htmlFor="pizza_name">
                  {props.data[0] ? props.data[0].label : ""}
                  {props.data[0] ? (
                    <span className="required" style={{ color: "red" , margin:"2px"  }}>
                      {" "}
                      {props.data[0].validate.required && "*"}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  {props.data[0] && props.data[0].description ? (
                    <span
                      className="description tooltip"
                      data-tooltip={props.data[0].description}
                    >
                      {" "}
                      {props.data[0].description.length > 0 ? (
                        <BsInfoCircleFill />
                      ) : (
                        ""
                      )}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <input
                  className="form_input"
                  id="pizza_name"
                  type="text"
                  placeholder={props.data[0] ? props.data[0].placeholder : ""}
                  name="pizzaName"
                  value={values.pizzaName}
                  onChange={handleChange}
                  disabled={
                    (props.data[0] ? props.data[0].validate.immutable : "")
                  }
                />
              </div>
              {/* PIZZA NAME SECTION  */}

              {/* PIZZA TYPE SECTION  */}
              <div className="input_section_type">
                <label htmlFor="pizza_type">
                  {props.data[1] ? props.data[1].label : ""}
                  {props.data[1] ? (
                    <span className="required" style={{ color: "red" , margin:"2px"  }}>
                      {" "}
                      {props.data[1].validate.required && "*"}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  {props.data[1] && props.data[1].description ? (
                    <span
                      className="description tooltip"
                      data-tooltip={props.data[1].description}
                    >
                      {" "}
                      {props.data[1].description.length > 0 ? (
                        <BsInfoCircleFill />
                      ) : (
                        ""
                      )}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </label>
                <div className="line_break"> </div>

                {props.data[1]
                  ? props.data[1].subParameters.map((spt) => {
                      return (
                        <>
                          <div className="subParameters_options" key={spt.sort}>
                            {spt
                              ? spt.validate.options?.map((opt) => {
                                console.log(spt , "spt")
                                  return (
                                    <>
                                      <input
                                        type="text"
                                        className={`radio_options_input ${
                                          spt.validate.defaultValue ===
                                          opt.value
                                            ? "active"
                                            : ""
                                        }`}
                                        key={opt.sort}
                                        placeholder={opt.label}
                                        disabled
                                        // onClick={(e)=>{setIsActive(!isActive)}}
                                        //  value={opt.value}
                                      />
                                    </>
                                  );
                                })
                              : ""}
                          </div>

                          {/* <div className='line_break'> </div> */}
                          {spt.sort === 10001 ? (
                            <div className="Slices">
                              {spt.subParameters
                                ? spt.subParameters.map((spt2) => {
                                  console.log(spt2 , "spt2")
                                    return (
                                      <>
                                       {spt2.label === "Slices"? <div className="Slices_label">
                                          {spt2.label === "Slices"
                                            ? spt2.label
                                            : ""}
                                          {spt2.label === "Slices" ? (
                                            <span
                                              className="required"
                                              style={{ color: "red" , margin:"2px"  }}
                                            >
                                              {spt2.validate.required &&
                                                "*"}
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                        :""}
                                        {spt2.label === "Slices"? <div className="Slices_value">
                                         {spt2.label === "Slices"? <select name="" id="">
                                            {spt2.label === "Slices"? spt2.validate.options.map((spt2options)=>{
            console.log(spt2options ,"spt2options")
                            return (<>
                              <option value={spt2options?spt2options.value:""}>{spt2options?spt2options.label:""}</option>
                              hdj
                            </>
                            )
                          })
                          :
                          ""} </select> :""}
                                        </div> :""}
                                      </>
                                    );
                                  })
                                : ""}
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })
                  : ""}
              </div>

              {/* PIZZA TYPE SECTION ENDS */}

              {/* {props.data.subParameters &&
              props.data.subParameters.uiType === "Radio" ? (
                <div className="input_section_type">
                  <label htmlFor="pizza_type"> Pizza type Radio </label>
                  <div className="line_break"> </div>
                  {props.data.subParameters.validate.options.map((op) => {
                    return (
                      <>
                        <div className="radio_value">{op.label}</div>
                      </>
                    );
                  })}
                </div>
              ) : (
                ""
              )} */}

              {/* Toppings SECTION STARTS  */}
              {props.data[2] && (
                <div className="input_section_type">
                  <label htmlFor="toppings">
                    {props.data[2] ? props.data[2].label : ""}
                    {props.data[2] ? (
                      <span className="required" style={{ color: "red" , margin:"2px"  }}>
                        {" "}
                        {props.data[2].validate.required && "*"}{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </label>
                  <div className="line_break"> </div>

                  {props.data[2]
                    ? props.data[2].subParameters.map((tpng) => {
                  
                        return (
                          <>
                            <div className="toppings_section" key={tpng.sort}>
                              <div className="toppings_label">{tpng.label}</div>
                              <select name="" id="">
                                {tpng.validate.options
                                  ? tpng.validate.options.map((op) => {
                                      return (
                                        <>
                                          {tpng.uiType &&
                                          tpng.uiType === "Select" ? (
                                            <option
                                              value={op.value}
                                              key={op.value}
                                            >
                                              {" "}
                                              {op.label}{" "}
                                            </option>
                                          ) : (
                                            ""
                                          )}
                                          {tpng.uiType &&
                                          tpng.uiType === "Switch" ? (
                                            <div>Include Season</div>
                                          ) : (
                                            ""
                                          )}
                                        </>
                                      );
                                    })
                                  : ""}
                              </select>
                            </div>
                          </>
                        );
                      })
                    : ""}
                </div>
              )}
              {/* Toppings SECTION ENDS  */}

              {/* PIZZA SIZE SECTION  */}
              {props.data[3] ? (
                <div className="input_section_size">
                  <label htmlFor="size_label">
                    {props.data[3] ? props.data[3].label : ""}
                    {props.data[3] ? (
                      <span className="required" style={{ color: "red" , margin:"2px"  }}>
                        {" "}
                        {props.data[3].validate.required && "*"}{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </label>
                  <select name="size_select" id="size_select">
                    {props.data[3]
                      ? props.data[3].validate.options.map((size) => {
                          return (
                            <>
                              <option key={size.value} value={size.value}>
                                {size.label}
                              </option>
                            </>
                          );
                        })
                      : ""}
                  </select>
                </div>
              ) : (
                ""
              )}
              {/* PIZZA SIZE SECTION  */}

              <div className="form_actions">
                <div className="toggle_button">Hide Advanced</div>
                <div className="button" onClick={handleSubmit}>Submit</div>
              </div>
            </form>
          </>
        ) : (
          <>
          <div className="empty_form_page">

            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_0zomy8eb.json"
              background="transparent"
              speed="1"
              style={{ width: " 300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
            <p style={{fontSize:"20px" , textAlign:"center"}}>Please paste your JSON in the left panel to create a pizza! <span style={{fontSize:"25px"}}> 🍕 </span></p>
          </div>
          </>
        )}
      </div>
    </>
  );
}
