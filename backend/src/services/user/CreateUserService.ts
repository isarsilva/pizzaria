import prismaClient from '../../prisma'
import { hash } from 'bcryptjs';


interface UserRequeste{
    name: string;
    email: string;
    password: string;
}


class CreateUserService{
    async execute({name, email, password} : UserRequeste){

//Verificar se ele enviou um email
        if (!email){
            throw new Error("Email incorreto")

            //Verificar se esse email já esta cadastrado na plataforma 
             const userAlredayExists = await prismaClient.user.findFirst({
                where:{
                    email: email
                }
             })

             if(userAlredayExists){
                throw new Error ("User already exists")
             }
        }

        const passwordHash = await hash(password,8)

        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passwordHash
            },
            select:{
                id:true,
                name: true,
                email:true,
            }
        })

        return user;
    }
}

export {CreateUserService}