import { useState } from "react";
import Head from "next/head";
import NavBar from "../../components/navbar";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import styles from './agendamentos.module.css'
import { GetStaticProps } from "next";
import { IAgendamentosProps } from "../../uteis/interfaces";

export default function Agendamentos({ agendamentos }: IAgendamentosProps) {
    const [age, setAge] = useState('');
    const [agend,] = useState(agendamentos);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div className={styles.agendamentosContainer}>
            <Head>
                <title>Agendamentos</title>
            </Head>

            <NavBar title="Agendamentos" button="Home" />

            <div className={styles.back}>
                <h1>Fazer um agendamento</h1>
            </div>

            <section className={styles.container}>


                <div className={styles.formContainer}>

                    <h2>Dados para o agendamento</h2>

                    <TextField size="small" id="outlined-basic" label="Nome" variant="outlined" />
                    <TextField size="small" id="outlined-basic" label="Horario" variant="outlined" />
                    <TextField size="small" id="outlined-basic" label="Servico" variant="outlined" />
                    <FormControl size="small" style={{ width: '100px' }} >
                        <InputLabel id="demo-simple-select-label">Dia</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Dia"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>SEG</MenuItem>
                            <MenuItem value={20}>TER</MenuItem>
                            <MenuItem value={30}>QUA</MenuItem>
                            <MenuItem value={40}>QUI</MenuItem>
                            <MenuItem value={50}>SEX</MenuItem>
                            <MenuItem value={60}>SAB</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained">Agendar</Button>
                </div>

                <div className={styles.agends}>
                    {agend.map((agenda, index) => (
                        <div key={index} className={styles.card}>
                            <Card sx={{ maxWidth: 275, minWidth: 180 }}>
                                <CardContent>
                                    <Typography variant="h5" color="text.primary" gutterBottom>
                                        {agenda.nome}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {agenda.horario} horas
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {agenda.dia}
                                        </Typography>
                                    </Typography>
                                    <Typography variant="body2">
                                        {agenda.servico}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">check</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

        </div >

    )
}


export const getStaticProps: GetStaticProps = async () => {

    const agendamentos = [{
        nome: 'Ze',
        horario: '18:00',
        dia: 'SEG',
        servico: 'Corte'
    }, {
        nome: 'Manel',
        horario: '19:25',
        dia: 'TER',
        servico: 'Hidratacao'
    }, {
        nome: 'Bahia',
        horario: '09:45',
        dia: 'QUA',
        servico: 'Pintar'
    }, {
        nome: 'Luis',
        horario: '13:00',
        dia: 'SEX',
        servico: 'Cortar'
    }, {
        nome: 'Zezin',
        horario: '11:00',
        dia: 'SAB',
        servico: 'Barba e Corte'
    }, {
        nome: 'Gustavo',
        horario: '08:00',
        dia: 'TER',
        servico: 'Sobrancelha'
    }, {
        nome: 'Batata',
        horario: '15:00',
        dia: 'SEG',
        servico: 'Escova'
    }, {
        nome: 'Jose',
        horario: '11:30',
        dia: 'SEG',
        servico: 'Corte'
    }, {
        nome: 'Henrique',
        horario: '09:00',
        dia: 'QUI',
        servico: 'Graxa'
    }, {
        nome: 'Rael',
        horario: '10:00',
        dia: 'SAB',
        servico: 'Alisar'
    }]


    return {
        props: {
            agendamentos
        }
    }
}