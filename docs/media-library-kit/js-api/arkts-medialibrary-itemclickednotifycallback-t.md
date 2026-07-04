# ItemClickedNotifyCallback

```TypeScript
export type ItemClickedNotifyCallback = (itemInfo: ItemInfo, clickType: ClickType) => void
```

The callback of onItemClickedNotify event

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemInfo | ItemInfo | Yes |  |
| clickType | ClickType | Yes |  |

