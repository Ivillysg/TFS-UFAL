import { IManager } from "../spec/prov/IManager";
import { Manager } from "./Manager";

export class ComponentFactory {
  private static manager: IManager | null = null;

  public static createInstance() {
    if (ComponentFactory.manager === null) {
      ComponentFactory.manager = new Manager();
    }
    return ComponentFactory.manager;
  }
}
