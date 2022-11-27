import { UsuarioDT } from "../dt/UsuarioDT";

export interface ILimiteReq {
  estimarLimite(usuario: UsuarioDT): number;
}
