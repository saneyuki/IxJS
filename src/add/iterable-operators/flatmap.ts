import { IterableX } from '../../iterable';
import { flatMap } from '../../iterable/flatmap';

export function flatMapProto<TSource, TResult>(
    this: Iterable<TSource>,
    fn: (value: TSource) => Iterable<TResult>,
    thisArg?: any): IterableX<TResult> {
  return new IterableX(flatMap<TSource, TResult>(this, fn));
}

IterableX.prototype.flatMap = flatMapProto;

declare module '../../iterable' {
  interface IterableX<T> {
    flatMap: typeof flatMapProto;
  }
}