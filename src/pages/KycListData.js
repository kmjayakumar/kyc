import { useState } from "react";
import { mockKyc } from "../data/mockKyc";
import KycTableView from "../components/KycTableView";
import KycFormAdd from "../components/KycFormAdd";

const KycListData = () => {
    
    const [kycList, SetKycList] = useState(mockKyc);
    // const addKyc = (newKyc) => {
    //     SetKycList()
    // }

    return (
        <div>
            table
            <KycTableView kycList={kycList}/>
            <KycFormAdd/>
        </div>
    )
}

export default KycListData;