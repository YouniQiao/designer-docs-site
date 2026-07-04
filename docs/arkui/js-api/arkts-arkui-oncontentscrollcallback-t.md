# OnContentScrollCallback

```TypeScript
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void
```

Callback when the content in the search box scrolls.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| totalOffsetX | number | Yes | Indicates horizontal coordinate offset of the text in the content area, in px. |
| totalOffsetY | number | Yes | Indicates the vertical coordinate offset of the text in the content area, in px. |

