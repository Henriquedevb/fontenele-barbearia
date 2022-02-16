import Head from "next/head";
import FooterSection from "../../components/footer";
import NavBar from "../../components/navbar";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from './contato.module.css'

export default function Contato() {
    return (
        <div className={styles.contatoContainer}>
            <Head>
                <title>Contato</title>
            </Head>
            <NavBar title="Contato" button="Home" />

            <section>

                <form>
                    <h1>Contato</h1>

                    <TextField id="name" label="Nome" variant="standard" />
                    <TextField id="assunto" label="Assunto" variant="standard" />
                    <TextField
                        id="text"
                        label="Conta pra gente"
                        multiline
                        maxRows={4}
                        // value={value}
                        // onChange={handleChange}
                        variant="standard"
                    />

                    <Button variant="contained">Enviar</Button>
                </form>

            </section>


            <FooterSection description="Desenvolvido por Fontenele com <3" />
        </div>
    )
}