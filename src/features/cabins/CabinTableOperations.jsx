import Fillter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function CabinTableOperations() {
    return (
        <div className="flex items-center gap-2">
            <Fillter
                filterField='discount'
                options={[
                    {
                        value: 'all',
                        label:'All',
                    },
                    {
                        value: 'with-discount',
                        label:'With Discount',
                    },
                    {
                        value: 'no-discount',
                        label:'No Discount',
                    }
                ]}
            />
            <SortBy
                options={[
                    { value: 'name-asc', label:'Sort by name (A-Z)'},
                    { value:'name-dsc',label:'Sort by name (Z-A)'},
                    { value: 'regularPrice-asc', label: 'Sort by Price( Low to Hight)' },
                    { value: 'regularPrice-dsc', label: 'Sort by Price (High to Low' },
                    {value:"maxCapacity-asc",label:'Sort By Capacity (Low to High)'},
                    {value:'maxCapacity-dsc',label:'Sort By Capacity (High to Low)'}
                ]}
                styles='bg-stone-100 text-stone-800'
            />
        </div>
    )
}