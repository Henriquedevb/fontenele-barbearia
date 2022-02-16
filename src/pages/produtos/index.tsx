import Head from "next/head";
import NavBar from "../../components/navbar";

import { GetStaticProps } from 'next'
import { IProductProps } from "../../uteis/interfaces";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './produtos.module.css'
import { useState } from "react";
import Image from "next/image";
import FooterSection from "../../components/footer";

const image = "https://github.com/henriquedevb.png"

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Produtos({ products }: IProductProps) {
    const [produtos,] = useState(products)

    return (
        <div className={styles.produtosContainer}>
            <Head>
                <title>Home</title>
            </Head>
            <NavBar title="Produtos" button="Home" />

            <section>
                {produtos.map((produto, index) => (

                    <Card sx={{ maxWidth: 345 }} key={index} className={styles.card}>
                        <CardHeader
                            className={styles.cardHeader}
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: 'gray' }}
                                    aria-label="recipe"
                                    style={{ marginRight: '10px', marginLeft: '10px' }}
                                >

                                    H
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={produto.produto}
                            subheader="September 14, 2016"

                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={produto.image}
                            alt={produto.produto}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing className={styles.cardFavorite}>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon style={{ color: 'red' }} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                        </CardActions>
                    </Card>
                ))}
            </section>

            <FooterSection description="Feito por Fontenele com <3" />

        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const products = [{
        produto: 'Kit Barba',
        valor: 'R$: 25.90',
        image: 'https://blog.alfalooksstore.com.br/wp-content/uploads/2019/02/Produtos-para-Barbearia.jpg'
    }, {
        produto: 'Kit Hidratação',
        valor: 'R$: 25.90',
        image: 'https://blog.alfalooksstore.com.br/wp-content/uploads/2019/10/Produtos-para-Barbearia-Venda-os-Melhores-1024x683.jpg'
    }, {
        produto: 'Pomada',
        valor: 'R$: 25.90',
        image: 'https://blog.alfalooksstore.com.br/wp-content/uploads/2020/02/Produtos-para-Barbearia-1140x445.jpg'
    }, {
        produto: 'Hidratante',
        valor: 'R$: 25.90',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhlzMTbtRJlzht74zh5rzmkB1x2luNWU9VQ&usqp=CAU'
    }, {
        produto: 'Kit Corte',
        valor: 'R$: 25.90',
        image: 'https://cdn.leroymerlin.com.br/products/papel_de_parede_barbearia_barbeiro_cabelereiro_sala_adesivo___1567478192_69c2_600x600.jpg'
    }, {
        produto: 'Loção',
        valor: 'R$: 25.90',
        image: 'https://blog.alfalooksstore.com.br/wp-content/uploads/2020/02/produtos-para-barbearia-Locao-pos-Barba.jpg'
    }, {
        produto: 'Pos Barba',
        valor: 'R$: 25.90',
        image: 'https://42102.cdn.simplo7.net/static/42102/sku/produtos-para-barba-locao-pos-barba-3-em-1-barba-men-200ml--p-1583285332929.jpg'
    }, {
        produto: 'Navalha',
        valor: 'R$: 25.90',
        image: 'https://http2.mlstatic.com/D_NQ_NP_841037-MLB45393570191_032021-O.jpg'
    }, {
        produto: 'Caixa Organizadora',
        valor: 'R$: 25.90',
        image: 'https://img.elo7.com.br/product/294x234/396BD84/kit-barbearias-organizador-para-barbeiros-barbershop-decoracao-para-barbearia.jpg'
    }, {
        produto: 'Tesoura',
        valor: 'R$: 25.90',
        image: 'https://images.tcdn.com.br/img/img_prod/618180/180_tesoura_fio_laser_furta_cor_6_0_profissional_cabeleireiro_obopekal_aco_inox_2759_1_d975a04a0f6dc6dbebc687bcadcdc87a.jpg'
    }, {
        produto: 'Maquina de Corte',
        valor: 'R$: 25.90',
        image: 'https://cdn.awsli.com.br/300x300/472/472238/produto/75789349/b27513855e.jpg'
    }, {
        produto: 'Cadeira',
        valor: 'R$: 25.90',
        image: 'https://www.kixiki.com.br/wp-content/uploads/2021/01/LINHA-DE-PRODUTOS-1-1024x1024.jpg'
    },]


    return {
        props: {
            products
        }
    }
}

export default Produtos