import { IManager } from "../spec/prov/IManager";
import { FacadeLimiteOps } from "./FacadeLimiteOps";

export class Manager implements IManager {
  private providedInterfaces: Map<string, Object>;
  private requiredInterfaces: Map<string, Object>;

  constructor() {
    this.providedInterfaces = new Map<string, Object>();
    this.requiredInterfaces = new Map<string, Object>();

    this.providedInterfaces.set("ILimiteOps", new FacadeLimiteOps());
  }

  public getProvidedInterfaces() {
    return Array.from(this.providedInterfaces.keys());
  }

  public getRequiredInterfaces() {
    return Array.from(this.requiredInterfaces.keys());
  }

  public getProvidedInterface(interfaceName: string) {
    return this.providedInterfaces.get(interfaceName);
  }

  public setRequiredInterface(interfaceName: string, interfaceObject: Object) {
    this.requiredInterfaces.set(interfaceName, interfaceObject);
  }

  public getRequiredInterface(interfaceName: string) {
    return this.requiredInterfaces.get(interfaceName);
  }
}
