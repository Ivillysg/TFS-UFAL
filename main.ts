import { ConectorEmprestimoLimite } from "./conector/ConectorEmprestimoLimite";
import { ComponentFactory as FactoryEmp } from "./emprestimo/impl/ComponentFactory";
import { ComponentFactory as FactoryLim } from "./limite/impl/ComponentFactory";
import { IManager as IManagerLim } from "./limite/spec/prov/IManager";
import { ILimiteReq } from "./emprestimo/spec/req/ILimiteReq";
import { IManager as IManagerEmp } from "./emprestimo/spec/prov/IManager";
import { IEmprestimoOps } from "./emprestimo/spec/prov/IEmprestimoOps";
import { UsuarioDT } from "./emprestimo/spec/dt/UsuarioDT";

class Main {
  constructor() {
    let managerLimite: IManagerLim = FactoryLim.createInstance();
    let limiteReqImp: ILimiteReq = new ConectorEmprestimoLimite(
      managerLimite.getProvidedInterface("ILimiteOps")
    );

    let managerEmprestimo: IManagerEmp = FactoryEmp.createInstance();
    managerEmprestimo.setRequiredInterface("ILimiteReq", limiteReqImp);

    let empOps: IEmprestimoOps = managerEmprestimo.getProvidedInterface(
      "IEmprestimoOps"
    ) as IEmprestimoOps;

    let usuarioDT: UsuarioDT = new UsuarioDT();
    usuarioDT.rendimentos = 1000.56;

    console.log(`Liberar emprestimo: ${empOps.liberarEmprestimo(usuarioDT)}`);
  }
}

new Main();
