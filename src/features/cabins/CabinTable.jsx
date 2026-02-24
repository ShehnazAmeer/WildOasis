import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";

export default function CabinTable() {
  const { cabins, isLoadingCabins } = useCabin();
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("discount") || 'all';
  let filteredCabins;

  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount') filteredCabins = cabins?.filter(cabin => cabin.discount === 0);
  if (filterValue === 'with-discount') filteredCabins = cabins?.filter(cabin => cabin.discount > 0);
  
  //Sort

  const sortedValue = searchParams.get("sortby") || 'name-asc';
  const [sortField, direction] = sortedValue.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedCabins=filteredCabins?.sort((a,b)=>(a[sortField]-b[sortField])*modifier)
  
  if( isLoadingCabins)return <Spinner/>
  return (
    <Menus>
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
            // data={cabins}
          // render={(cabin)=><CabinRow key={cabin.id} cabin={cabin}/>  }
          
          // data={filteredCabins}
          // render={(cabin)=><CabinRow key={cabin.id} cabin={cabin}/>  }

            data={sortedCabins}
            render={(cabin)=><CabinRow key={cabin.id} cabin={cabin}/>  }
          />
        </Table>
    </Menus>
  )
}  