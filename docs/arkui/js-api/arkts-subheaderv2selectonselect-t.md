# SubHeaderV2SelectOnSelect

```TypeScript
export type SubHeaderV2SelectOnSelect = (selectedIndex: number, selectedContent?: string) => void
```

The callback function that will be invoked when the selectedIndex of the SubHeaderV2Select is selected.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectedIndex | number | Yes | the index of selected item |
| selectedContent | string | no | the content of selected item |

