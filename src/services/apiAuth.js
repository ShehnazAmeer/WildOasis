import supabase from "./supabase";

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