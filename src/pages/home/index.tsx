import Head from "next/head";
import { useRouter } from "next/router";
import CardItem from "../../components/card";
import FooterSection from "../../components/footer";
import NavBar from "../../components/navbar";

import styles from './home.module.css'

export default function HomePage() {

    const router = useRouter()

    const handleContact = () => {
        router.push('/contato');
    }

    const handleProducts = () => {
        router.push('/produtos');
    }

    const handleAgendamentos = () => {
        router.push('/agendamentos');
    }

    return (
        <div className={styles.homeContainer}>
            <Head>
                <title>Home</title>
            </Head>
            <NavBar title="Barbearia Fontenele" button="Saiba mais" />

            <section className={styles.oneSection}>
                <CardItem
                    alt="Imagem 3"
                    description="Acesse essa pagina para informações de contato e preencha o formulario para ser retornado."
                    title="Contato"
                    url="/assets/contato.png"
                    className={styles.card}
                    onClick={handleContact}
                />
                <CardItem
                    alt="Imagem 1"
                    description="Acesse essa pagina para agendar o hoario do seu atendimento com antecedência."
                    title="Agende seu corte"
                    url="/assets/calendario.jpg"
                    className={styles.card}
                    onClick={handleAgendamentos}
                />
                <CardItem
                    alt="Imagem 2"
                    description="Acesse essa pagina para verficar nossos produtos disponiveis."
                    title="Produtos"
                    url="/assets/produtos.jpg"
                    className={styles.card}
                    onClick={handleProducts}
                />
                <CardItem
                    alt="Imagem 1"
                    description="Acesse essa pagina para agendar o hoario do seu atendimento com antecedência."
                    title="Agende seu corte"
                    url="/assets/calendario.jpg"
                    className={styles.card}
                    onClick={handleAgendamentos}
                />
                <CardItem
                    alt="Imagem 2"
                    description="Acesse essa pagina para verficar nossos produtos disponiveis."
                    title="Produtos"
                    url="/assets/produtos.jpg"
                    className={styles.card}
                    onClick={handleProducts}
                />
                <CardItem
                    alt="Imagem 3"
                    description="Acesse essa pagina para informações de contato e preencha o formulario para ser retornado."
                    title="Contato"
                    url="/assets/contato.png"
                    className={styles.card}
                    onClick={handleContact}
                />


            </section>

            <section className={styles.twoContainer}>
                <div>
                    <h1>Barbearia do Fontenele</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione laboriosam quis expedita consectetur quos eos exercitationem non voluptate ab quae corrupti alias corporis ad fugit, quas rerum quidem nihil.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime delectus ullam ut quasi esse quaerat nulla dolores laborum, facere facilis aut inventore laboriosam distinctio recusandae tempora corporis ab autem!</p>

                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.053080867268!2d-47.93916513446971!3d-16.114554785205563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935985417f5552d1%3A0x5e5c9977b6f150c7!2sR.%20Eixo%20I%20-%20Cidade%20Ocidental%2C%20GO%2C%2072880-000!5e0!3m2!1spt-BR!2sbr!4v1644972930488!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </section>


            <FooterSection description="Desenvolvido por Fontenele com <3" />
        </div>
    )
} 