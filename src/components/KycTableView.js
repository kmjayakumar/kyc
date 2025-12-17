import KycTableRow from "./KycTableRow";

const KycTableView = ({kycList}) => {
    
    return (
        <table className="border-2 border-orange-500 mx-10 ">
                <thead>
                    <tr className="text-center">
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
                        kycList.map((items) => <KycTableRow key={items.id} items={items}/>  )
                    }
                  
                </tbody>
            </table>
    )
}

export default KycTableView;