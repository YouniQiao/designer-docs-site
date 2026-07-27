# OnTextSelectionChangeCallback

```TypeScript
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void
```

Callback when the position of the cursor entered in the search box changes.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-unnamed-declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void--><!--Device-unnamed-declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | Indicates the start position of the text selection area.  |
| selectionEnd | number | Yes | Indicates end position of the text selection area.  |

