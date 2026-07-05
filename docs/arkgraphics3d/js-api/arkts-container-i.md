# Container

定义场景对象容器.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## append

```TypeScript
append(item: T): void
```

将项目追加到容器.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | T | Yes | 要追加到容器末尾的项目 |

## clear

```TypeScript
clear(): void
```

清空所有子节点.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## count

```TypeScript
count(): int
```

返回容器中的项目数量.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Return value:**

| Type | Description |
| --- | --- |
| int | 容器的数量 |

## get

```TypeScript
get(index: int): T | null
```

从容器的子节点列表中返回给定索引的子节点.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 要返回的子节点的索引 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回由索引指定的项目 |

## insertAfter

```TypeScript
insertAfter(item: T, sibling: T | null): void
```

插入项目.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | T | Yes | 要插入到容器的项目 |
| sibling | T \| null | Yes | 在此项目后插入，如果sibling为null则插入到头部 |

## remove

```TypeScript
remove(item: T): void
```

从容器的子节点中移除项目.

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | T | Yes | 要移除的项目 |

