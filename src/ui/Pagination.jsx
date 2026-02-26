import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import useBookings from "../features/bookings/useBookings";
import { PAGE_SIZE } from "../utils/GlobalConstants";

// const PaginationButton = styled.button`
//   background-color: ${(props) =>
//     props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
//   color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
//   border: none;
//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.4rem;
//   padding: 0.6rem 1.2rem;
//   transition: all 0.3s;
//   &:has(span:last-child) {
//     padding-left: 0.4rem;
//   }
//   &:has(span:first-child) {
//     padding-right: 0.4rem;
//   }
//   & svg {
//     height: 1.8rem;
//     width: 1.8rem;
//   }
//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;


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