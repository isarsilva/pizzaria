"use client"


import styles from '/styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import logoImg from '/public/logo.svg'
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export function Header(){
    const router = useRouter();

    async function handleLogout() {
        deleteCookie("session", { path: "/"})       //conferir se o nome é session mesmo 108 minuto 1:16
        
        router.replace("/")

    }

    return(
        <header className={styles.headerContainer}>
           <div className={styles.headerContainer}>
                <Link href="/dashboard">
                <Image
                    alt="Logo Sujeito Pizza"
                    src={logoImg}
                    width={190}
                    height={60}
                    priority={true}
                    quality={100}
                />    
                </Link>


                <nav>
                <Link href="/dashboard/category">
                    Categoria
                </Link>
                <Link href="/dashboard/product">
                    Produto
                </Link>

                <form action={handleLogout}>
                    <button type='submit'>
                        <LogOutIcon size={24} color="#FFF" />
                    </button>

                </form>

                </nav>
           </div>
        </header>
    )
}