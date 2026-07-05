# createPlainTextData

## createPlainTextData

```TypeScript
function createPlainTextData(text: string): PasteData
```

Creates a **PasteData** object of the plain text type.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** pasteboard.createData(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Plain text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteData | PasteData object. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('content');

```

