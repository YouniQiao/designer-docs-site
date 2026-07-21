# createHtmlTextRecord

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

<a id="createhtmltextrecord"></a>
## createHtmlTextRecord

```TypeScript
function createHtmlTextRecord(htmlText: string): PasteDataRecord
```

Creates a **PasteDataRecord** object of the HTML text type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [createRecord(mimeType:](arkts-basicservices-pasteboard-createrecord-f.md#createrecord-1)

<!--Device-pasteboard-function createHtmlTextRecord(htmlText: string): PasteDataRecord--><!--Device-pasteboard-function createHtmlTextRecord(htmlText: string): PasteDataRecord-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| htmlText | string | Yes | HTML content. |

**Return value:**

| Type | Description |
| --- | --- |
| [PasteDataRecord](arkts-basicservices-pasteboard-pastedatarecord-i.md) | **PasteDataRecord** object of the HTML text type. |

**Example**

```TypeScript
let html = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
let record: pasteboard.PasteDataRecord = pasteboard.createHtmlTextRecord(html);

```

