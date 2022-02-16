export interface INavBarProps {
    title: string;
    button?: string
}

export interface IcardProps {
    url: string;
    alt: string;
    title: string;
    description: string;
    onClick: () => void;
    className?: string;
}

export interface IFooterProps {
    description: string;
}

export interface IProductProps {
    products: [{
        produto: string;
        valor: string;
        image: string;
    }];

}

export interface IAgendamentosProps {
    agendamentos: [{
        nome: string;
        horario: string;
        dia: string;
        servico: string;
    }];

}