"use server"

export async function registerAction (_: any, formData: FormData) {
    const email = formData.get("email"); 
    const username = formData.get("username"); 
    const password = formData.get("password"); 
    const confirmPassword = formData.get("confirmPassword"); 
    const env = process.env.NEXT_PUBLIC_API_URL;

    if(!email || !username || !password || !confirmPassword) {
        return {error : "Field are required."};
    }

    try {
        const res = await fetch(`${env}/User/sign-up`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, username, password, confirmPassword}),
            cache : "no-store"
        })

        if(!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            return {
                error: errorData.message || "Invalid. The user already exist?"
            };
        }

        return {success: true};

    } catch (error) {
        console.error("Register error...", error);
        return {error: "Register error. Try again..."};
    }
}