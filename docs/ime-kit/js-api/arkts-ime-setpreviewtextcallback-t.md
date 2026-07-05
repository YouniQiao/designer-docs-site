# SetPreviewTextCallback

```TypeScript
export type SetPreviewTextCallback = (text: string, range: Range) => void
```

The callback of 'setPreviewText' event.

**Since:** 17

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | text to be previewed. |
| range | Range | Yes | the range of the text to be replaced by the preview text. |

