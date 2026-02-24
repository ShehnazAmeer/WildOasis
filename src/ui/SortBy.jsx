import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options, ...props }) {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleChange(e) {
        searchParams.set("sortby", e.target.value);
        setSearchParams(searchParams)
    }
    const sortBy = searchParams.get('sortBy') || '';
    return (
        <Select
            options={options}
            handleChange={handleChange}
            {...props}
            value={sortBy}
        />
    )
}