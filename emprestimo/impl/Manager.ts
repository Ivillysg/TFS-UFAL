import { IManager } from "../spec/prov/IManager";
import { FacadeEmprestimoOps } from "./FacadeEmprestimoOps";

export class Manager implements IManager {
  private providedInterfaces: Map<string, Object | any>;
  private requiredInterfaces: Map<string, Object | any>;

  constructor() {
    this.providedInterfaces = new Map<string, Object>();
    this.requiredInterfaces = new Map<string, Object>();

    //Add interfaces
    this.providedInterfaces.set(
      "IEmprestimoOps",
      new FacadeEmprestimoOps(this)
    );
    this.requiredInterfaces.set("ILimiteReq", null);
  }

  getProvidedInterfaces() {
    return Array.from(this.providedInterfaces.keys());
  }

  getRequiredInterface(interfaceName: string) {
    return this.requiredInterfaces.get(interfaceName);
  }

  getProvidedInterface() {
    return this.providedInterfaces.get("IEmprestimoOps");
  }

  getRequiredInterfaces() {
    return Array.from(this.requiredInterfaces.keys());
  }

  setRequiredInterface(interfaceName: string, interfaceObject: Object): void {
    this.requiredInterfaces.set(interfaceName, interfaceObject);
  }
}
