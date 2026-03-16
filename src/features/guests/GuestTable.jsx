import { useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import useGuests from "./useGuests";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import GuestsRow from "./GuestsRow";

export default function GuestTable() {
    const [searchParams] = useSearchParams();
    const {guests,isGuestsLoading }=useGuests()
    const sortedValue = searchParams.get('sortby') || 'fullName-asc';
    const [sortField, direction] = sortedValue.split('-');
    const modifier = direction === 'asc' ? 1 : -1;

    const sortedGuests = guests?.sort((a, b) => ((a[sortField] ?? "").localeCompare(b[sortField] ?? "") * modifier));

    if (isGuestsLoading) return <Spinner />
    if(!guests.length) return <Empty resource='Guests'/>

    //Sort Guest

    return (
        <Table columns='1fr 1fr 1fr 1fr 1fr'>
            <Table.Header>
                <div>Full Name</div>
                <div>Email</div>
                <div>CountryFlag</div>
                <div>National ID</div>
                <div>Nationality</div>
            </Table.Header>
            <Table.Body
                data={sortedGuests}
                render={(guest) => (
                    <GuestsRow key={guest.id} guest={guest} />
                ) }
            />
            
        </Table>
    )
}