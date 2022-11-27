export interface IManager {
  getProvidedInterfaces(): string[];
  getRequiredInterfaces(): string[];
  getProvidedInterface(interfaceName: string): Object | any;
  setRequiredInterface(interfaceName: string, interfaceObject: Object): void;
  getRequiredInterface(interfaceName: string): Object | any;
}
