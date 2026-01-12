import { Chamado } from "../modelo/chamado";

/**
 * Contrato para o controlador de chamados.
 * Define operações de abertura, listagem e marcação de atendimento.
 */
export interface ICallController {

    /**
     * Deve criar um novo registro de chamado no sistema.
     * @param nome nome da pessoa que está abrindo o chamado
     * @param descricao descrição do problema a ser resolvido
     * @returns true se o chamado for criado com sucesso, false caso contrário
     */
    abrirChamado(nome: string, descricao: string): boolean;

    /**
     * Retorna todos os chamados registrados.
     * @returns lista de chamados
     */
    listarChamados(): Array<Chamado>;

    /**
     * Marca o chamado como atendido e atualiza o registro.
     * @param chamado instância de chamado a ser atualizada
     * @returns true se a operação for bem-sucedida, false caso contrário
     */
    marcarComoAtendido(chamado: Chamado): boolean;
}
