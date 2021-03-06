'use strict';

import { repeat } from './repeat';
import { _catchAll } from './catch';

export function* retry<TSource>(source: Iterable<TSource>, count?: number): Iterable<TSource> {
  return _catchAll<TSource>([repeat<TSource>(source, count)]);
}