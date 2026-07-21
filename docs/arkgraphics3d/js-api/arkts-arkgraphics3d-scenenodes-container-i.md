# Container

Defines a scene object container.

**Since:** 12

<!--Device-unnamed-export interface Container<T>--><!--Device-unnamed-export interface Container<T>-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="append"></a>
## append

```TypeScript
append(item: T): void
```

Append an item to the container.

**Since:** 12

<!--Device-Container-append(item: T): void--><!--Device-Container-append(item: T): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | T | Yes | the item append to the end of container |

<a id="clear"></a>
## clear

```TypeScript
clear(): void
```

Clear all children.

**Since:** 12

<!--Device-Container-clear(): void--><!--Device-Container-clear(): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

<a id="count"></a>
## count

```TypeScript
count(): number
```

Returns the number of items in the container.

**Since:** 12

<!--Device-Container-count(): int--><!--Device-Container-count(): int-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| number | the number of the container |

<a id="get"></a>
## get

```TypeScript
get(index: number): T | null
```

Returns a child at given index from this Container's child list.

**Since:** 12

<!--Device-Container-get(index: int): T | null--><!--Device-Container-get(index: int): T | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | the index of the child to return |

**Return value:**

| Type | Description |
| --- | --- |
| T | return the item specified by the index |

<a id="insertafter"></a>
## insertAfter

```TypeScript
insertAfter(item: T, sibling: T | null): void
```

Insert an item.

**Since:** 12

<!--Device-Container-insertAfter(item: T, sibling: T | null): void--><!--Device-Container-insertAfter(item: T, sibling: T | null): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | T | Yes | the item insert to the container |
| sibling | T \| null | Yes | insert after this item, insert to the head if sibling is null |

<a id="remove"></a>
## remove

```TypeScript
remove(item: T): void
```

Remove an item from Container's children.

**Since:** 12

<!--Device-Container-remove(item: T): void--><!--Device-Container-remove(item: T): void-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | T | Yes | the item to be removed |

