import { IManager } from "../spec/prov/IManager";
import { Manager } from "./Manager";

export class ComponentFactory {
  private static manager: IManager | null = null;

  //FACTORY METHOD
  public static createInstance(): IManager {
    //SINGLETON
    if (ComponentFactory.manager === null) {
      ComponentFactory.manager = new Manager();
    }
    return ComponentFactory.manager;
  }
}
