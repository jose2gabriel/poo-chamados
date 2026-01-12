/**
 * Interface para componentes de interface de usuário do sistema de chamados.
 * Implementações podem ser baseadas em terminal, web, etc.
 */
export interface ICallUI {

    /**
     * Inicia a interface de usuário e permite a interação com o sistema.
     */
    start(): void;

}
