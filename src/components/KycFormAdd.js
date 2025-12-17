import React from "react";

const KycFormAdd = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        aadhaar: ""
    });
    console.log('form:',formData);
    
    return (
        <div>
            <h3>Form Entry</h3>
            <form>
                <div className="font-extrabold mx-28 my-4">
                    <h3>Name: </h3>
                    <input
                    name="name"
                    placeholder="Name"
                    value={formData.value}
                    className="p-2 border-4 border-gray-900" 
                    onChange={
                        (e) => setFormData(prev => ({ ...prev, name: e.target.value}))
                    }
                    />
                </div>
                <div className="font-extrabold mx-28 my-6">
                    <h3>Aadhaar: </h3>
                    <input
                    name="aadhaar"
                    placeholder="Aadhaar"
                    value={formData.value}
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
                    value={formData.value}
                    onChange={
                        (e) => setFormData(prev => ({...prev, pan: e.target.value}))
                    }
                    className="p-2 border-4 border-gray-900"

                    />

                </div>
            </form>
        </div>
    )
}

export default KycFormAdd;