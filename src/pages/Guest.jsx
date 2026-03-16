import GuestOperations from "../features/guests/GuestOperation";
import GuestTable from "../features/guests/GuestTable";
import MainSection from "../ui/MainSection";

export default function Guest() {
    return (
        <div
            className="max-w-480 mx-auto my-auto px-12 flex flex-col gap-10"
        >
            <MainSection heading={'All Guests'}>
                <GuestOperations />
            </MainSection>
            <GuestTable/>
            
        </div>
    )
}