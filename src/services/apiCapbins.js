import supabase from "./supabase";
export async function getCabins() {
    const { data: cabins, error } = await supabase
        .from('cabins')
        .select('*')
    if (error) {
        console.error(error.message)
        throw new Error('error in loading cabins data');
    }
    return cabins
};

export async function deleteCabin(id) {
const { data,error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error.message)
        throw new Error('Cabin Couldnot be deleted')
    } 
}

export async function createCabin(newCabin) {
    
const { data, error } = await supabase
  .from('cabins')
  .insert([newCabin ])

    if (error) {
        console.log(error.message)
        throw new Error(`Cabin Couldn't be created`)
    }

}