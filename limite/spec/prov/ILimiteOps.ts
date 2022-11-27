import { ClienteDT } from "../dt/ClienteDT";

export interface ILimiteOps {
  calcularLimite(client: ClienteDT): number;
}
