import { UsuarioDT } from "../spec/dt/UsuarioDT";
import { IEmprestimoOps } from "../spec/prov/IEmprestimoOps";
import { IManager } from "../spec/prov/IManager";
import { ILimiteReq } from "../spec/req/ILimiteReq";

export class FacadeEmprestimoOps implements IEmprestimoOps {
  private manager: IManager;
  private intReq: ILimiteReq | null = null;

  constructor(manager: IManager) {
    this.manager = manager;
  }

  liberarEmprestimo(cliente: UsuarioDT): number {
    let rendimentos = cliente.rendimentos;

    if (rendimentos > 1000) {
      this.intReq = this.manager.getRequiredInterface("ILimiteReq");
      let limite = this.intReq?.estimarLimite(cliente);
      if (limite) {
        return limite * 0.9;
      }
    }
    return 0;
  }
}
