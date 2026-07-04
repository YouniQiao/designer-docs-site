# SubHeaderV2SelectOnSelect

```TypeScript
export type SubHeaderV2SelectOnSelect = (selectedIndex: number, selectedContent?: string) => void
```

The callback function that will be invoked when the selectedIndex of the SubHeaderV2Select is selected.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectedIndex | number | Yes | the index of selected item |
| selectedContent | string | No | the content of selected item |

