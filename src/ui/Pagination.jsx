import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import useBookings from "../features/bookings/useBookings";
import { PAGE_SIZE } from "../utils/GlobalConstants";

export default function Pagination({ count }) {
    const { page:currentPage } = useBookings();
    const [searchParams, setSearchParams] = useSearchParams();

    //count->total no. of reconds in database or inside the array
    //currentPage
    //PageCount=>total number of pages that needs to display all record

    const pageCount = Math.ceil(count / PAGE_SIZE);

    function next() { 
        const next = currentPage === pageCount ? currentPage : currentPage + 1;

        searchParams.set('page', next);
        setSearchParams(searchParams);
    }
    function prev() {
        const prev = currentPage > 1 ? currentPage - 1 : currentPage;
        searchParams.set('page', prev);
        setSearchParams(searchParams);

    }
    if(pageCount<=1) return null
    return (
        <div className="w-1/1 flex items-center justify-between ">
            <div className="text-2xl my-4">
                Showing 
                <span className="font-bold"> {(currentPage-1)*PAGE_SIZE+1} </span>
                to
                <span className="font-bold"> { currentPage===pageCount? count: currentPage*PAGE_SIZE}  </span>
                of
                <span className="font-bold"> {count} </span>
                results
            </div>

            <div className="w-50 flex gap-x-15 ">
                <Button
                    category='custom'
                    onClick={prev}
                    disabled={currentPage===1}
                > <HiChevronLeft /> Previous
                </Button>
                <Button
                    category='custom'
                    onClick={next}
                    disabled={currentPage===pageCount}
                >
                    <HiChevronRight />
                    Next
                </Button>
            </div>
        </div>
    )
}