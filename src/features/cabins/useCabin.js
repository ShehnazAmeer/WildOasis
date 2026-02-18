import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCapbins";

export default function useCabin() {
  const {data:cabins,isLoading:isLoadingCabins,error}= useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
    return {
        cabins,
        isLoadingCabins,
        error
    }
}