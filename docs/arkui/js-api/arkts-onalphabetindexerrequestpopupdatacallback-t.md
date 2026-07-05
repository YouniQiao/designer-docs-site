# OnAlphabetIndexerRequestPopupDataCallback

```TypeScript
declare type OnAlphabetIndexerRequestPopupDataCallback  = (index: number) => Array<string>
```

[usingPopup](arkts-alphabetindexerattribute-c.md#usingPopup)设置值为true，索引项被选中时触发的事件。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | selected index |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | string array corresponding to the index |

