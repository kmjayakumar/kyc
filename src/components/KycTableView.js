import KycTableRow from "./KycTableRow";

const KycTableView = ({kycList}) => {
    
    return (
        <div className="my-14">
            <h3 className="font-extrabold mx-96 m-4 underline underline-offset-4">
                KYC Datas
            </h3>
        <table className="border-2 border-orange-500 mx-96">
                <thead>
                    <tr className="text-center border-2 border-orange-500 ">
                        <th>S. No.</th>
                        <th>Name</th>
                        <th>Aadhaar</th>
                        <th>PAN</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        kycList.map((items) => <KycTableRow 
                        className=""
                        key={items.id} items={items}/>  )
                    }
                  
                </tbody>
            </table>
            </div>
    )
}

export default KycTableView;