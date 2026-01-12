/**
 * Representa um chamado de suporte aberto por um solicitante.
 * Contém o status atual (atendido ou não), o nome do solicitante e a descrição do problema.
 */
export class Chamado {
    private status: boolean;
    private solicitante: string;
    private descricao: string;

    /**
     * Cria uma nova instância de Chamado.
     * @param status estado inicial do chamado (true = atendido, false = pendente)
     * @param solicitante nome da pessoa que abriu o chamado
     * @param descricao descrição do problema reportado
     */
    constructor(status: boolean, solicitante: string, descricao: string) {
        this.status = status;
        this.solicitante = solicitante;
        this.descricao = descricao;
    }

    /**
     * Atualiza o status do chamado.
     * @param novo novo estado do chamado (true = atendido, false = pendente)
     */
    setStatus(novo: boolean) {
        this.status = novo;
    }

    /**
     * Retorna o status do chamado.
     * @returns true se atendido, false se pendente
     */
    getStatus(): boolean {
        return this.status;
    }

    /**
     * Retorna o nome do solicitante.
     */
    getNome(): string {
        return this.solicitante;
    }

    /**
     * Retorna a descrição do problema.
     */
    getDescricao(): string {
        return this.descricao;
    }
}
