import React,{useState} from 'react'

export default function About(props) {

    
  let mystyle = {
    color : props.mode === 'dark'?'white':'gray',
    backgroundColor : props.mode === 'dark'?'gray':'white',
   
  }
   
  // const [mystyle,setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor: 'black',
    //     border: '1px solid white'
    // })

    // const [btnText,setbtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>
    // {
    //     if(mystyle.color === 'white')
    //     {
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white'
                
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black', 
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    // }

    return (
      <div>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item" style={{color : props.mode === 'dark'?'white':'gray'}}>
            <h1 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
               <h1> About Us.</h1>
              </button>
            </h1>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>TextUtils provides free NLP tools for researchers to analyze text data.</strong> 
                TextUtils brings together some of the most useful open source lexica available, 
                providing a suite of lexical analyses with the push of a button. It also computes 
                topic models using latent Dirichlet allocation. Simply upload your data to have 
                your text analyzed.You can convert your text into Upper and Lower Case also.And
                know the time of reading of your text in perticular time with TextUtils.You can
                find Howmany words and characters in your text by the help of TextUtils.
              </div>
            </div>
          </div>
          
          <div className="accordion-item" style={mystyle}>
            <h1 className="accordion-header" id="headingThree" style={mystyle}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <h1>How to Contact Us?</h1> 
              </button>
            </h1>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>You can contact us on our social media.</strong> <br />
                <i class="fas fa-envelope-square"></i>
                <label htmlFor="">sufiyankagzi5762@gmail.com</label>
                <br />
                <i class="fas fa-phone"></i>9904462630
                
              </div>
            </div>
          </div>
        </div>
        {/* <button className="my-3" onClick={toggleStyle} type="button">{btnText}</button> */}
      </div>
      
    );
}


