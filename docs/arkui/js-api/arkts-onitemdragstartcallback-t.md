# OnItemDragStartCallback

```TypeScript
declare type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: number) => CustomBuilder
```

定义在onItemDragStart中使用的回调类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ItemDragInfo | Yes | 被拖拽项的信息。 |
| itemIndex | number | Yes | 拖动项的索引号。 |

**Return value:**

| Type | Description |
| --- | --- |
| CustomBuilder | - |

