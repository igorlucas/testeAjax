import { Empresa } from './empresa';

export class Fornecedor {
    id: string;
    empresa: Empresa;
    nome: string;
    tipo: number;
    cpfOuCnpj: string;
    rg: string;
    dtNascimento: Date;
    dtCadastro: Date;
    telefones: Array<string>;

    constructor() {
        this.telefones = new Array<string>();
    }
}