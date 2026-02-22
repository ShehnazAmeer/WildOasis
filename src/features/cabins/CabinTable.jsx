import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";

export default function CabinTable() {
 const{cabins,isLoadingCabins}= useCabin();
  
  if( isLoadingCabins)return <Spinner/>
  return (
    <Table columns='0.6fr_1.8fr_2.2fr_1fr_1fr_1fr_1fr'>
      <Table.Header>
        <div>Image</div>
        <div>Cabin</div>
        <div>Description</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </Table.Header>

      <Table.Body
        data={cabins}
        render={(cabin)=><CabinRow key={cabin.id} cabin={cabin}/>  }
      />
    </Table>
  )
}