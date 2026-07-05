# OnPasteCallback

```TypeScript
declare type OnPasteCallback = (content: string, event: PasteEvent) => void
```

粘贴回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | string | Yes | 粘贴的文本内容。 |
| event | PasteEvent | Yes | 用户自定义的粘贴事件。 |

