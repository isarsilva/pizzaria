import { cookies } from 'next/headers'

export async function getCookieServer(){
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;     //conferir o nome do cookie se é mesmo session

        return token || null;

}