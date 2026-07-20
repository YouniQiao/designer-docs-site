# ReadonlyArray

<!--Device-unnamed-interface ReadonlyArray<T>--><!--Device-unnamed-interface ReadonlyArray<T>-End-->

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

Iterator of values in the array.

<!--Device-ReadonlyArray-[Symbol.iterator](): IterableIterator<T>--><!--Device-ReadonlyArray-[Symbol.iterator](): IterableIterator<T>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)<T> |  |

## entries

```TypeScript
entries(): IterableIterator<[number, T]>
```

Returns an iterable of key, value pairs for every entry in the array

<!--Device-ReadonlyArray-entries(): IterableIterator<[number, T]>--><!--Device-ReadonlyArray-entries(): IterableIterator<[number, T]>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)<[number, T]> |  |

## keys

```TypeScript
keys(): IterableIterator<number>
```

Returns an iterable of keys in the array

<!--Device-ReadonlyArray-keys(): IterableIterator<number>--><!--Device-ReadonlyArray-keys(): IterableIterator<number>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)<number> |  |

## values

```TypeScript
values(): IterableIterator<T>
```

Returns an iterable of values in the array

<!--Device-ReadonlyArray-values(): IterableIterator<T>--><!--Device-ReadonlyArray-values(): IterableIterator<T>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)<T> |  |

