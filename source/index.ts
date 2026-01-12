import { CallController } from "./funcionalidade/callController";
import { ICallController } from "./funcionalidade/iCallController";
import { ICallRepository } from "./modelo/iCallRepository";
import { MemoryCallRepository } from "./modelo/memoryCallRepository";
import { ICallUI } from "./ui/iCallUI";
import { TextCallUI } from "./ui/TextCallUI";

// Instancia o repositório em memória
let callRepository: ICallRepository;
callRepository = new MemoryCallRepository();

// Instancia o controlador com o repositório
let callController: ICallController;
callController = new CallController(callRepository);

// Instancia a interface de usuário
let ui: ICallUI;
ui = new TextCallUI(callController);

// Inicia o sistema
ui.start();
