# createPlainTextRecord

## createPlainTextRecord

```TypeScript
function createPlainTextRecord(text: string): PasteDataRecord
```

Creates a **PasteDataRecord** object of the plain text type.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.createRecord(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Plain text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteDataRecord | New PasteDataRecord object of the plain text type. |

**示例：**

```TypeScript
let record: pasteboard.PasteDataRecord = pasteboard.createPlainTextRecord('hello');

```

