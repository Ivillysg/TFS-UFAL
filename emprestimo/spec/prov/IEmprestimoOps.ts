import { UsuarioDT } from "../dt/UsuarioDT";

export interface IEmprestimoOps {
  liberarEmprestimo(usuario: UsuarioDT): number;
}
