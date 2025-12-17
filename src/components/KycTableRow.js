const KycTableRow = ({items}) => {
    console.log(items)
    return (
        <tr className="text-center">
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.aadhaar}</td>
                        <td>{items.pan}</td>
                        <td>{items.role}</td>
                        <td>{items.status}</td>
                    </tr>
    )
}

export default KycTableRow;