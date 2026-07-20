# OnPasteCallback

```TypeScript
declare type OnPasteCallback = (content: string, event: PasteEvent) => void
```

Defines the callback used to return the pasted text content.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-unnamed-declare type OnPasteCallback = (content: string, event: PasteEvent) => void--><!--Device-unnamed-declare type OnPasteCallback = (content: string, event: PasteEvent) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | string | Yes | Text to be pasted. |
| event | PasteEvent | Yes | Custom paste event. |

