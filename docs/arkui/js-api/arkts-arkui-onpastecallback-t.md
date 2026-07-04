# OnPasteCallback

```TypeScript
declare type OnPasteCallback = (pasteValue: string, event: PasteEvent) => void
```

Callback when text is pasted into the search box.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pasteValue | string | Yes | Indicates the text content to be pasted. |
| event | PasteEvent | Yes | Indicates a user-defined paste event. |

