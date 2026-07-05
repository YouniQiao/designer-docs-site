# SetPreviewTextCallback

```TypeScript
export type SetPreviewTextCallback = (text: string, range: Range) => void
```

The callback of 'setPreviewText' event.

**起始版本：** 17

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | text to be previewed. |
| range | Range | 是 | the range of the text to be replaced by the preview text. |

