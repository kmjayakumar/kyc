import React from "react";

const KycFormAdd = ({addKyc}) => {
    // console.log(addKyc);
    const [formData, setFormData] = React.useState({
        name: "",
        aadhaar: "",
        pan: ""
    });
    

    // console.log('form:',formData);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, name: [value] }) )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addKyc(formData);
        setFormData({
            name:"",
            aadhaar:"",
            pan:""
        })


    }

    
    


    return (
        <div>
            <h3>Form Entry</h3>
            <form
            onSubmit={
                handleSubmit
            }
            >
                <div className="font-extrabold mx-28 my-4">
                    <h3>Name: </h3>
                    <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    className="p-2 border-4 border-gray-900" 
                    onChange={
                      handleChange
                    }
                    />
                </div>
                <div className="font-extrabold mx-28 my-6">
                    <h3>Aadhaar: </h3>
                    <input
                    name="aadhaar"
                    placeholder="Aadhaar"
                    value={formData.aadhaar}
                    onChange={
                        (e) => setFormData(prev => ({...prev, aadhaar: e.target.value}))

                    }
                    className="p-2 border-4 border-gray-900" 
                    />
                </div>
                <div className="font-extrabold mx-28 my-6">
                    <h3>PAN:</h3>
                    <input 
                    name="pan"
                    placeholder="PAN"
                    value={formData.pan}
                    onChange={
                        (e) => setFormData(prev => ({...prev, pan: e.target.value}))

                    }
                    className="p-2 border-4 border-gray-900"

                    />

                </div>

                <div className="font-extrabold mx-28 my-6">
                    <button className="font-medium bg-red-500 rounded-lg">AddKyc</button>

                </div>
                
            </form>
        </div>
    )
}

export default KycFormAdd;