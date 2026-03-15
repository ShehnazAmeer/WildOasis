import supabase from "./supabase";

export async function createGuests(newGuest) {
    console.log(newGuest);
    console.log('guest from apiGuest');
    
    const { data, error } = await supabase
        .from('guests')
        .insert([
            { ...newGuest }
        ])
        .select();
    if (error) {
        console.log(error.message);
        throw new Error('Error occured while creating new Guest')
    }
    console.log(data);
    return data;
}