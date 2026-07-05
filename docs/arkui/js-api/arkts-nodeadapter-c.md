# NodeAdapter

NodeAdapter提供FrameNode的数据懒加载能力，通过[LazyForEach]lazy_for_each实现接口功能。 > **说明：** > > 入参不能为负数，入参为负数时不做处理。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## attachNodeAdapter

```TypeScript
static attachNodeAdapter(adapter: NodeAdapter, node: FrameNode): boolean
```

给FrameNode绑定一个NodeAdapter。一个节点只能绑定一个NodeAdapter。已经绑定NodeAdapter的再次绑定会失败并返回false。 > **说明：** > > 支持绑定的组件：Column、Row、Stack、GridRow、Flex、Swiper、RelativeContainer、List、ListItemGroup、WaterFlow、Grid。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adapter | NodeAdapter | Yes | 定义懒加载的NodeAdapter类。 |
| node | FrameNode | Yes | 绑定的FrameNode节点。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 绑定结果，返回true绑定成功，false绑定失败。 |

## constructor

```TypeScript
constructor()
```

NodeAdapter的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## detachNodeAdapter

```TypeScript
static detachNodeAdapter(node: FrameNode): void
```

解除绑定操作，解除FrameNode节点绑定的NodeAdapter。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 要解除绑定的FrameNode节点。 |

## dispose

```TypeScript
dispose(): void
```

立即释放当前的NodeAdapter。如果是已绑定的状态，会先进行解绑操作，再释放当前的NodeAdapter。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getAllAvailableItems

```TypeScript
getAllAvailableItems(): Array<FrameNode>
```

获取所有有效数据。有效节点数据包括显示在屏幕上的节点以及预加载的节点。其中预加载节点的数量可依照LazyForEach的 [使用限制](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md#使用限制)，调整父容器的cachedCount属性进行设置。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;FrameNode> | FrameNode数据节点集合。 |

## insertItem

```TypeScript
insertItem(start: number, count: number): void
```

从索引值开始新增指定数量的节点数据。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 新增的节点开始索引值。 取值范围：[0, +∞) |
| count | number | Yes | 新增数据节点的数量。 取值范围：[0, +∞) |

## isDisposed

```TypeScript
isDisposed(): boolean
```

查询当前FrameNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在 dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。 |

## moveItem

```TypeScript
moveItem(from: number, to: number): void
```

将数据从原始索引移动到目的索引。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| from | number | Yes | 数据移动的原始索引值。 取值范围：[0, +∞) |
| to | number | Yes | 数据移动的目的索引值。 取值范围：[0, +∞) |

## onAttachToNode

```TypeScript
onAttachToNode?(target: FrameNode): void
```

FrameNode绑定NodeAdapter时回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | FrameNode | Yes | 绑定NodeAdapter的FrameNode节点。 |

## onCreateChild

```TypeScript
onCreateChild?(index: number): FrameNode
```

节点首次加载或新节点滑入时回调。建议开发者在添加子组件时，遵循声明式组件中子组件的约束。例如，WaterFlow支持添加FlowItem子节点。父节点根据子节点的索引与key值判断是否触发了节点首次加载或新节点滑入。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 加载节点索引值。 取值范围：[0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| FrameNode | 返回开发者创建的FrameNode节点。 |

## onDetachFromNode

```TypeScript
onDetachFromNode?(): void
```

解除绑定时回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDisposeChild

```TypeScript
onDisposeChild?(id: number, node: FrameNode): void
```

子节点即将销毁时回调。既不显示在屏幕上，也不处于预加载范围内的节点都属于即将销毁的节点。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 即将销毁的子节点id。 |
| node | FrameNode | Yes | 即将销毁的FrameNode节点。 |

## onGetChildId

```TypeScript
onGetChildId?(index: number): number
```

节点首次加载或新节点滑入时回调。传入的index参数用于自定义生成Id，需要开发者自行保证根据不同index生成Id的唯一性。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 加载节点索引值。 取值范围：[0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回开发者自定义生成的Id，需要开发者自行保证Id的唯一性。 |

## onUpdateChild

```TypeScript
onUpdateChild?(id: number, node: FrameNode): void
```

重新加载的数据节点被复用时回调。已缓存节点的key值与被复用节点一致时进行节点复用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | 复用节点的id。 |
| node | FrameNode | Yes | 被复用的FrameNode节点。 |

## reloadAllItems

```TypeScript
reloadAllItems(): void
```

重新加载全部数据操作。实际调用了LazyForEach中的[OnDataReloaded]DataChangeListener.onDataReloaded接口通知组件重新加载所有数据。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reloadItem

```TypeScript
reloadItem(start: number, count: number): void
```

从索引值开始重新加载指定数量的节点数据。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 重新加载的节点开始索引值。 取值范围：[0, +∞) |
| count | number | Yes | 重新加载数据节点的数量。 取值范围：[0, +∞) |

## removeItem

```TypeScript
removeItem(start: number, count: number): void
```

从索引值开始删除指定数量的节点数据。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 删除的节点开始索引值。 取值范围：[0, +∞) |
| count | number | Yes | 删除数据节点的数量。 取值范围：[0, +∞) |

## totalNodeCount

```TypeScript
set totalNodeCount(count: number)
```

设置数据节点总数。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get totalNodeCount(): number
```

Get the total number of node count.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

