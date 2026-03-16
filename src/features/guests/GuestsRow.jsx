import Table from "../../ui/Table"

export default function GuestsRow({ guest }) {
    const {fullName,email,nationalID,nationality,countryFlag}= guest;

    return (
        <>
            <Table.Row>
                <div className="mx-auto my-0 text-lg" > 
                    {fullName}
                </div>
                <div className="text-lg">
                    {email}
                </div>
                <div className="text-lg"> {countryFlag} </div>
                <div className="text-lg"> {nationalID}  </div>
                <div className="text-lg"> {nationality} </div> 
            </Table.Row>
        </>
    )
}