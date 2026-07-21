# ArrayConstructor

<!--Device-unnamed-interface ArrayConstructor--><!--Device-unnamed-interface ArrayConstructor-End-->

<a id="from"></a>
## from

```TypeScript
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[]
```

Creates an array from an iterable object.

<!--Device-ArrayConstructor-from<T>(iterable: Iterable<T> | ArrayLike<T>): T[]--><!--Device-ArrayConstructor-from<T>(iterable: Iterable<T> | ArrayLike<T>): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iterable | Iterable&lt;T&gt; \| ArrayLike&lt;T&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

<a id="from-1"></a>
## from

```TypeScript
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[]
```

Creates an array from an iterable object.

<!--Device-ArrayConstructor-from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[]--><!--Device-ArrayConstructor-from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iterable | Iterable&lt;T&gt; \| ArrayLike&lt;T&gt; | Yes |  |
| mapfn | (v: T, k: number) =&gt; U | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| U[] |  |

