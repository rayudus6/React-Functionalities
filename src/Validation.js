import React,{useRef, useState} from 'react';


const Validation =() =>{
    const initialState={
        lastName:"",
        email:""
    }
    // const [firstName,setFirstName]=useState("");
    const firstNameRef=useRef();
    const [values,setInputValue]=useState(initialState)
    // const [lastName,setLastName]=useState("");
    // const [email,setEmail]=useState("");
    const [gender, setGender] = useState();
    const [selectedApp,setSelectedApp]=useState("single");

    const [firstNameErr,setFirstNameErr]=useState({});
    // const [lastNameErr,setLastNameErr]=useState({});
    const[isSubmit,setSubmit]=useState(false);

    const handleChange = e => {
      if (e.target.checked) {
        setGender(e.target.value);
      }
    };

    const handle= (e) =>{
        const {name,value}=e.target
        setInputValue({
            ...values,
            [name]:value
        })

    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        validFunction();
    }
    const validFunction=() =>{
        const firstName=firstNameRef.current.value;
        const regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let errors={};
        // let lastNameErr={};
        let isValid=true;

        if(firstName.trim().length <5){
            errors.firstName="The given text too short";
            isValid=false;
        }
        if(firstName.trim().length >10){
            errors.firstName="The given text too long";
            isValid=false
        }
        if(!values.email){
            errors.email="Please enter Mail id";
            isValid=false;
        } else if(!regEx.test(values.email)){
            errors.email="Enter valid email";
            isValid=false;
        }
        setFirstNameErr(errors);
        setSubmit(isValid)
    }
    const handleSelectChange=(e)=>{
        setSelectedApp(e.target.value)
    }
    return(
        <>
        {
            isSubmit ? (<div><h1>Form Submitted Successfully</h1></div>):
            (
            <div className="validation_form">
            <h1 className="section-title">From</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <input type="text"
                className="form-control"
                placeholder="First Name*"
                ref={firstNameRef}
                // value={firstName}
                // onChange={(e) =>{setFirstName(e.target.value)}}
                />
                <p style={{color:"red"}}>{firstNameErr.firstName}</p>
                </div>
                <div>
                <input type="text"
                className="form-control"
                placeholder="Last Name*"
                name='lastName'
                value={values.lastName}
                onChange={handle}
                />
                </div>
                <div>
                <input type="email"
                className="form-control"
                placeholder="Email Address*"
                name='email'
                value={values.email}
                onChange={handle}
                />
                <p style={{color:"red"}}>{firstNameErr.email}</p>
                </div>
                <div>
                <label>
                <input type="radio" value="male" checked={gender === 'male'} onChange={handleChange} />
                <span>Male</span>
                </label>
                <label>
                <input type="radio" value="female" checked={gender === 'female'} onChange={handleChange} />
                <span>Female</span>
                </label>
                </div>
                <div>
                <select value={selectedApp}
                className="form-select"
                 onChange={handleSelectChange}>
                    <option value="Application Data">Application Data</option>
                    <option value="single">Single</option>
                    <option value="joint">Joint</option>
                    <option value="fixed">Fixed</option>
                    <option value="direct">Direct</option>
                    <option value="service">Service</option>
                </select>
                </div>
                <input 
                type="submit"
                value="submit"
                className="btn btn-primary"
                />
            </form>
        </div>
            )
        }
        </>
        
    )
}

export default Validation;