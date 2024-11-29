import { Button } from '@/app/dasboard/components/button'
import styles from '/styles.module.scss'
import { api } from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'

export default function Category() {
    
    async function handleRegisterCategory(formData: FormData){
        "use server"
        const name = formData.get("name")
        if(name === "") return;
        const data = {
            name: name,
        }
        await api.post("/category", data, {
            headers:{
                Authorization: `Bearder`
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <main>
            <h1>Nova Categoria</h1>


            <form
                className={styles.form}
                action={handleRegisterCategory}
                >
                
                <input
                    type="text"
                    name="name"
                    placeholder="Nome da categoria"
                    required
                    className={styles.input}
                />
                <Button name="Cadastrar" />
            </form>
        </main>
    )
}