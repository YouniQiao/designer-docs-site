# createUriData

## createUriData

```TypeScript
function createUriData(uri: string): PasteData
```

Creates a **PasteData** object of the URI type.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.createData(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI content. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteData | PasteData object. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createUriData('dataability:///com.example.myapplication1/user.txt');

```

