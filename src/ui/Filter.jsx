import Button from "./Button";
import { useSearchParams } from "react-router-dom";

export default function Fillter({filterField,options}) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams)
  }

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  return (
    <div className="bg-stone-100 shador-sm px-3 py-2 gap2">
      {
        options.map(option => (
          <Button
            key={option.value}
            category='custom'
            styles={`${currentFilter === option.value ? "bg-blue-600 text-blue-50" : ""} font-bold w-60 mx-2 focus:ring-stone-100 px-1 py-3`}
            onClick={() => handleClick(option.value)}
            disabled={currentFilter===option.value}
          >
            {option.label}

          </Button>
        ))
      }
    </div>
  )
}
