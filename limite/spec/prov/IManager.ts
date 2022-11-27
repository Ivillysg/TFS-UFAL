export interface IManager {
  getProvidedInterfaces(): string[];
  getRequiredInterfaces(): string[];
  getProvidedInterface(interfaceName: string): Object | undefined;
  setRequiredInterface(interfaceName: string, interfaceObject: Object): void;
  getRequiredInterface(interfaceName: string): Object | undefined;
}
