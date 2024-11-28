import prismaClient from '../prisma'
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email,password}: AuthRequest){
    //Verificar se o email existe 
    const user =  await prismaClient.user.findFirst({
        where:{
            email: email
        }
    })

    if(!user){
        throw new Error("Usuario/senha incorreto")
    }    
 
    // preciso verificar se a senha que ele mandou esta correta

    const passwordMatch = await compare(password , user.password)
    
    if(!passwordMatch){
        throw new Error("Usuario/senha incorreto")
    }  

    // gerar um token JWT e devolver os dados do usuario como id, nome e email

    // gerar um token para o usuario



    return{ok: true}
    }
}

export {AuthUserService};