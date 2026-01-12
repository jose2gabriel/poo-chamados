import { ICallController } from "../funcionalidade/iCallController";
import { ICallUI } from "./iCallUI";
import { Chamado } from "../modelo/chamado";

/**
 * Interface de usuário textual (prompt/alert) para interação com o sistema de chamados.
 * Permite abrir chamados, listar e marcar como concluídos via menu simples.
 */
export class TextCallUI implements ICallUI {

    private callController: ICallController;

    /**
     * Inicializa a UI com um controlador de chamados.
     * @param callController instância responsável pelas regras de negócio
     */
    constructor(callController: ICallController) {
        this.callController = callController;
    }

    /**
     * Inicia o loop de interação com o usuário via prompt.
     */
    start(): void {
        let op = -1;

        while (op !== 0) {
            op = Number(prompt(
                "Escolha uma opção:\n" +
                "1 - Cadastrar chamado\n" +
                "2 - Listar chamados\n" +
                "3 - Marcar chamado como concluído\n" +
                "0 - Sair"
            ));

            switch (op) {
                case 1:
                    this.cadastrarChamado();
                    break;

                case 2:
                    this.listarChamados();
                    break;

                case 3:
                    this.marcarChamado();
                    break;

                case 0:
                    alert("Sistema encerrado.");
                    break;

                default:
                    alert("Opção inválida!");
            }
        }
    }

    private cadastrarChamado(): void {
        const nome = prompt("Digite seu nome:");
        const descricao = prompt("Digite a descrição do problema:");

        if (!nome || !descricao) {
            alert("Dados inválidos.");
            return;
        }

        const deuCerto = this.callController.abrirChamado(nome, descricao);
        alert(deuCerto ? "Chamado cadastrado com sucesso!" : "Erro ao cadastrar chamado.");
    }

    private listarChamados(): void {
        const chamados: Chamado[] = this.callController.listarChamados();

        if (chamados.length === 0) {
            alert("Nenhum chamado cadastrado.");
            return;
        }

        let texto = "LISTA DE CHAMADOS:\n\n";
        chamados.forEach((c, index) => {
            texto +=
                `#${index}\n` +
                `Solicitante: ${c.getNome()}\n` +
                `Problema: ${c.getDescricao()}\n` +
                `Status: ${c.getStatus() ? "Concluído" : "Pendente"}\n\n`;
        });

        alert(texto);
    }

    private marcarChamado(): void {
        const chamados = this.callController.listarChamados();

        if (chamados.length === 0) {
            alert("Nenhum chamado para marcar.");
            return;
        }

        this.listarChamados();

        const indice = Number(prompt("Digite o número do chamado a ser concluído:"));

        if (isNaN(indice) || indice < 0 || indice >= chamados.length) {
            alert("Índice inválido.");
            return;
        }

        const sucesso = this.callController.marcarComoAtendido(chamados[indice]);
        alert(sucesso ? "Chamado marcado como concluído." : "Erro ao atualizar chamado.");
    }
}
