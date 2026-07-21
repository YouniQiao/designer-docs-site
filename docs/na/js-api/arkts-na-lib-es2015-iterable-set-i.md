# Set

<!--Device-unnamed-interface Set<T>--><!--Device-unnamed-interface Set<T>-End-->

<a id="[symbol.iterator]"></a>
## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

Iterates over values in the set.

<!--Device-Set-[Symbol.iterator](): IterableIterator<T>--><!--Device-Set-[Symbol.iterator](): IterableIterator<T>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)&lt;T&gt; |  |

<a id="entries"></a>
## entries

```TypeScript
entries(): IterableIterator<[T, T]>
```

Returns an iterable of [v,v] pairs for every value `v` in the set.

<!--Device-Set-entries(): IterableIterator<[T, T]>--><!--Device-Set-entries(): IterableIterator<[T, T]>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)&lt;[T, T]&gt; |  |

<a id="keys"></a>
## keys

```TypeScript
keys(): IterableIterator<T>
```

Despite its name, returns an iterable of the values in the set.

<!--Device-Set-keys(): IterableIterator<T>--><!--Device-Set-keys(): IterableIterator<T>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)&lt;T&gt; |  |

<a id="values"></a>
## values

```TypeScript
values(): IterableIterator<T>
```

Returns an iterable of values in the set.

<!--Device-Set-values(): IterableIterator<T>--><!--Device-Set-values(): IterableIterator<T>-End-->

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](arkts-na-lib-es2015-iterable-iterableiterator-i.md)&lt;T&gt; |  |

