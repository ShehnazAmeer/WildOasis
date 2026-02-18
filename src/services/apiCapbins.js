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


// export async function createCabin(newCabin) {
//     const { imagePath, imageName } = createImagePath(newCabin);
//     let query = supabase.from('cabins');
//     //create Cabine
//     const { data, error } = await query.insert([{ ...newCabin, image: imagePath }]);
//     console.log(data)
//     if (error) {
//         console.log(error.message)
//         throw new Error(`Cabin Couldn't be created`)
//     }
//     //Upload image
//     const { error:cabinStorageError } = await supabase.storage
//       .from('cabins-images')
//       .upload(imageName, newCabin.image)
//      //delete cabin if there's error in uploading image
//     if (cabinStorageError) {
//         console.log(cabinStorageError.message);
//         await query.delete()
//             .eq("id", data.id)
//          throw new Error('Cabin Image doesnot found so cabin cannot be created')
//     }
//     return data;
// }


// export async function updateCabin(newCabinData, id) {
//     console.log('from updating function');
    
//     const imageName = `${Math.random()}-${newCabinData.image.name}`.replaceAll(
//         "/",
//         ""
//       );
    
//     const hasImagePath = newCabinData.image?.startsWith?.(supabaseUrl);
//      const imagePath = hasImagePath
//         ? newCabinData.image
//         : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
    
//     let query = supabase.from('cabins');

//     query = query.update({ ...newCabinData, image: imagePath }).eq("id", id);
//     const { data, error } = await query.select().single();
//     console.log(data);

//     if (error) {
//         console.log(error.message);
//         throw new Error('Cabin can not be edited');
//     }

//       // 2. Upload image
//   if (hasImagePath) return data;

//   const { error: storageError } = await supabase.storage
//     .from("cabins-images")
//     .upload(imageName, newCabinData.image);

//   // 3. Delete the cabin IF there was an error uplaoding image
//     if (storageError) {
//         await supabase.from("cabins").delete().eq("id", data.id);
//         console.error(storageError);
//         throw new Error(
//             "Cabin image could not be uploaded and the cabin was not created"
//         );
//     }

//     return data;
// }

export async function createEditCabin(newCabin, id) {
    console.log('called');
    const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);
    console.log(hasImagePath)

        //preparing image
    const imageName = `${Math.random()}-${newCabin?.image?.name}`.replaceAll('/', "");

    //image path to store image
    const imagePath = hasImagePath? newCabin.image:`${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

    //1:Create/edit cabin
    let query = supabase.from('cabins');

    //A:create 
    if (!id) query= query.insert([{ ...newCabin, image: imagePath }]);

    //B:Edit
    if (id) query= query.update({ ...newCabin,image:imagePath }).eq('id', id).select()

    const { data, error } = await query.select().single();

    if (error) {
        console.log(error.message)
        throw new Error(`Cabin Couldn't be created`)
    }

    //Upload image
    if (hasImagePath) return data ;
    
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
    return data
}
