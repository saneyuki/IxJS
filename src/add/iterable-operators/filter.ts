import { IterableX } from '../../iterable';
import { filter } from '../../iterable/filter';

export function filterProto<T>(this: IterableX<T>, fn: (value: T, index: number) => boolean, thisArg?: any): IterableX<T> {
  return new IterableX(filter<T>(this, fn, thisArg));
}

IterableX.prototype.filter = filterProto;

declare module '../../iterable' {
  interface IterableX<T> {
    filter: typeof filterProto;
  }
}
