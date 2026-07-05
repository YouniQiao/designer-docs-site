# createHtmlData

## createHtmlData

```TypeScript
function createHtmlData(htmlText: string): PasteData
```

Creates a **PasteData** object of the HTML type.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.createData(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| htmlText | string | 是 | HTML content. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteData | PasteData object. |

**示例：**

```TypeScript
let html = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
let pasteData: pasteboard.PasteData = pasteboard.createHtmlData(html);

```

