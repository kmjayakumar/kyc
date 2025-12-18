import { useState } from "react";
import { mockKyc } from "../data/mockKyc";
import KycTableView from "../components/KycTableView";
import KycFormAdd from "../components/KycFormAdd";

const KycListData = () => {
    
    const [kycList, SetKycList] = useState(mockKyc);
   
    const addKyc = (newKyc) => {
        SetKycList(
            prev => [...prev, {...newKyc, id: Date.now()}]
        )
    }

    return (
        <div>
            
            <KycTableView kycList={kycList}/>
            <KycFormAdd addKyc={addKyc}/>
        </div>
    )
}

export default KycListData;