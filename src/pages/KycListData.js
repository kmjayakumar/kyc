import { useState } from "react";
import { mockKyc } from "../data/mockKyc";
import KycTableView from "../components/KycTableView";
import KycFormAdd from "../components/KycFormAdd";
import { KycContext } from "../context/kycContext";
import Contact from "../components/Contact";

const KycListData = () => {
    
    const [kycList, SetKycList] = useState(mockKyc);
   
    const addKyc = (newKyc) => {
        SetKycList(
            prev => [...prev, {...newKyc, id: Date.now()}]
        )
    }

    return (
        <div>
            
            {/* <KycTableView kycList={kycList}/>
            <KycFormAdd addKyc={addKyc}/> */}

            <KycContext.Provider value={{kycList, addKyc}} >
                
                <KycTableView />
                <KycFormAdd />
                <Contact/>
            </KycContext.Provider>
        </div>
    )
}

export default KycListData;