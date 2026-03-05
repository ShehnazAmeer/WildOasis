import supabase, { supabaseUrl } from "./supabase";

export async function login({email,password}) {
    
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
    return data;
}

export async function getCurrentSession() {
    const { data: session} = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data:user, error } = await supabase.auth.getUser();
    
    if (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
    return user?.user
}

export async function signOut() {
    const { error } = supabase.auth.signOut()
    if (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
}

export async function signUp(email,password,fullName) {
let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
        data: {
            fullName,
            avatar:'',
        }
    }
})
    if (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
    return data;

}

export async function UpdateCurrentUser(fullName, avatar, password ) {
    let updateData;
    if (password) updateData = { password };
    if (fullName) updateData = { data: { fullName } };
    
    const { data, error } = await supabase.auth.updateUser(updateData);

    if (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
    if (!avatar) return data;

    const fileName = `avatar-${data.user.id}-${Math.random()}`;

    const { error: storageError } = await supabase.storage.from('avatar').upload(fileName, avatar);

    if (storageError) {
        console.log(storageError.message);
        throw new Error(storageError.message);
    }

    const { data: updatedUser, error: userError } = await supabase.auth.updateUser({
        data: { avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}` }
    });
    if (userError) {
        console.log(userError.message);
        throw new Error(userError.message);
    }
    return updatedUser;
}