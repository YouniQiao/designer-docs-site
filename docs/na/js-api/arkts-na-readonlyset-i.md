# ReadonlySet

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

Iterates over values in the set.

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T&gt; |  |

## entries

```TypeScript
entries(): IterableIterator<[T, T]>
```

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[T, T]&gt; |  |

## keys

```TypeScript
keys(): IterableIterator<T>
```

Despite its name, returns an iterable of the values in the set.

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T&gt; |  |

## values

```TypeScript
values(): IterableIterator<T>
```

Returns an iterable of values in the set.

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T&gt; |  |

