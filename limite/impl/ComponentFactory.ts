import { IManager } from "../spec/prov/IManager";
import { Manager } from "./Manager";

export class ComponentFactory {
  private static manager: IManager;

  public static createInstance(): IManager {
    if (ComponentFactory.manager) {
      ComponentFactory.manager = new Manager();
    }
    return ComponentFactory.manager;
  }
}
