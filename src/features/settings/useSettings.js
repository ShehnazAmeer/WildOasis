import { useQuery } from "@tanstack/react-query";
import getSettings from "../../services/apiSettings";

export default function useSettings() {
   console.log('called')
 //reading settings data
 const{data:settings,isLoading:isLoadingSettings,error:settingsError}= useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
 })
    return {
        settings,
        isLoadingSettings,
        settingsError
 }
}