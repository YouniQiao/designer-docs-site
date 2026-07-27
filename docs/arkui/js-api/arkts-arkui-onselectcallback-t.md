# OnSelectCallback

```TypeScript
declare type OnSelectCallback = (index: number, selectValue: string) => void
```

Callback when the Select option is clicked.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-unnamed-declare type OnSelectCallback = (index: number, selectValue: string) => void--><!--Device-unnamed-declare type OnSelectCallback = (index: number, selectValue: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Indicates the index of the selected item.  |
| selectValue | string | Yes | Indicates the value of the selected item.  |

