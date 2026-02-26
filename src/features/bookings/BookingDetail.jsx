import { useParams } from "react-router-dom"
import Button from "../../ui/Button";

// import BookingDataBox from "./BookingDataBox";
// import Row from "../../ui/Row";
// import Heading from "../../ui/Heading";
// import Tag from "../../ui/Tag";
// import ButtonGroup from "../../ui/ButtonGroup";
// import Button from "../../ui/Button";
// import ButtonText from "../../ui/ButtonText";

// import { useMoveBack } from "../../hooks/useMoveBack";

// const HeadingGroup = styled.div`
//   display: flex;
//   gap: 2.4rem;
//   align-items: center;
// `;

// function BookingDetail() {
//   const booking = {};
//   const status = "checked-in";

//   const moveBack = useMoveBack();

//   const statusToTagName = {
//     unconfirmed: "blue",
//     "checked-in": "green",
//     "checked-out": "silver",
//   };

//   return (
//     <>
//       <Row type="horizontal">
//         <HeadingGroup>
//           <Heading as="h1">Booking #X</Heading>
//           <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
//         </HeadingGroup>
//         <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
//       </Row>

//       <BookingDataBox booking={booking} />

//       <ButtonGroup>
//         <Button variation="secondary" onClick={moveBack}>
//           Back
//         </Button>
//       </ButtonGroup>
//     </>
//   );
// }

// export default BookingDetail;


export default function BookingDetail() {
  const { bookingId} = useParams();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <h1>Booking # {bookingId} </h1>
          <span className="w-fit uppercase text-lg font-bold px-3 py-6 rounded-full ">
            xxx
          </span>
        </div>
        <Button> &larr; Back </Button>
      </div>
      <div>
          <Button>Back</Button>
      </div>
    </>

  )
}