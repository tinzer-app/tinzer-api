export const getDelayedValue = <T>(value: T, delay: number = 2000) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), delay));
