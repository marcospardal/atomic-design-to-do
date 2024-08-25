export interface LocalStorageProps<T> {
  readData: () => T | undefined;
  update: (values: T) => void;
}