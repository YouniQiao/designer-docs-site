# OnItemDragStartCallback

```TypeScript
declare type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: number) => CustomBuilder
```

Defines the callback type used in onItemDragStart.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-unnamed-declare type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: number) => CustomBuilder--><!--Device-unnamed-declare type OnItemDragStartCallback = (event: ItemDragInfo, itemIndex: number) => CustomBuilder-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ItemDragInfo | Yes | Information about the dragged item. |
| itemIndex | number | Yes | The index number of the dragged item. |

**Return value:**

| Type | Description |
| --- | --- |
| CustomBuilder | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@atomicservice |

