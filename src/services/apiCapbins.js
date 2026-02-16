import supabase, { supabaseUrl } from "./supabase";
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

function createImagePath(cabin) {
    //preparing image
    const imageName = `${Math.random()}-${cabin?.image?.name}`.replaceAll('/', "");

    //image path to store image
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
    console.log(imagePath);

    return {
        imagePath,
        imageName
    } 
}

export async function createCabin(newCabin) {
    const { imagePath, imageName } = createImagePath(newCabin);
    let query = supabase.from('cabins');
    //create Cabine
    const { data, error } = await query.insert([{...newCabin, image:imagePath} ])
    if (error) {
        console.log(error.message)
        throw new Error(`Cabin Couldn't be created`)
    }
    //Upload image
    const { error:cabinStorageError } = await supabase.storage
      .from('cabins-images')
      .upload(imageName, newCabin.image)
     //delete cabin if there's error in uploading image
    if (cabinStorageError) {
        console.log(cabinStorageError.message);
        await query.delete()
            .eq("id", data.id)
         throw new Error('Cabin Image doesnot found so cabin cannot be created')
    }
    return data; 
}

export async function updateCabin(newCabinData, id) {
    console.log('from updating function');
    console.log(newCabinData, id);

    const { imagePath, imageName } = createImagePath(newCabinData);
    console.log(imagePath);
    const hasImagePath = newCabinData.image?.startsWith?.(supabaseUrl);

    const updatedImagePath = hasImagePath ? newCabinData.image : imagePath;
    
    let query = supabase.from('cabins');
    const { data, error } = query.update({ ...newCabinData, image: updatedImagePath }).eq("id", id);
    if (error) {
        console.log(error.message);
        throw new Error('Cabin can not be edited');
    }
    return data;

}