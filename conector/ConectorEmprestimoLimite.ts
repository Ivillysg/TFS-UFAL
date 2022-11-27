import { UsuarioDT } from "../emprestimo/spec/dt/UsuarioDT";
import { ILimiteReq } from "../emprestimo/spec/req/ILimiteReq";
import { ClienteDT } from "../limite/spec/dt/ClienteDT";
import { ILimiteOps } from "../limite/spec/prov/ILimiteOps";

export class ConectorEmprestimoLimite implements ILimiteReq {
  private limiteOps: ILimiteOps;

  constructor(limiteOps: ILimiteOps) {
    this.limiteOps = limiteOps;
  }

  estimarLimite(usuario: UsuarioDT): number {
    let cliente = new ClienteDT();
    cliente.salario = usuario.rendimentos;
    return this.limiteOps.calcularLimite(cliente);
  }
}
