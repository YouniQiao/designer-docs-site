# PasteDataRecord

Provides **PasteDataRecord** APIs. A **PasteDataRecord** is an abstract definition of the content in the pasteboard. The pasteboard content consists of one or more plain text, HTML, URI, or Want records.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

<!--Device-pasteboard-interface PasteDataRecord--><!--Device-pasteboard-interface PasteDataRecord-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## addEntry

```TypeScript
addEntry(type: string, value: ValueType): void
```

Adds PasteData of an extra type to **PasteDataRecord**. The type added using this method is not the default type of **Record**. You can only use the  
[getData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ API to read the corresponding data.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

<!--Device-PasteDataRecord-addEntry(type: string, value: ValueType): void--><!--Device-PasteDataRecord-addEntry(type: string, value: ValueType): void-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of extra data. The value can be a predefined MIME type listed in \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_, including HTML, WANT, plain text, URI, and pixel map, or a custom type. The value of **mimeType** cannot exceed 1024 bytes. |
| value | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Content of extra data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed. |

**Example**

```TypeScript
let html = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_URI, 'dataability:///com.example.myapplication1/user.txt');
record.addEntry(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
record.addEntry(pasteboard.MIMETYPE_TEXT_HTML, html);
```

## convertToText

```TypeScript
convertToText(callback: AsyncCallback<string>): void
```

Forcibly converts the content in a **PasteData** object to text. This API uses an asynchronous callback to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [pasteboard.PasteDataRecord.toPlainText](arkts-basicservices-pasteboard-pastedatarecord-i.md#toplaintext)()

<!--Device-PasteDataRecord-convertToText(callback: AsyncCallback<string>): void--><!--Device-PasteDataRecord-convertToText(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;string&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let record: pasteboard.PasteDataRecord = pasteboard.createUriRecord('dataability:///com.example.myapplication1/user.txt');
record.convertToText((err: BusinessError, data: string) => {
    if (err) {
        console.error(`Failed to convert to text. Cause: ${err.message}`);
        return;
    }
    console.info(`Succeeded in converting to text. Data: ${data}`);
});
```

## convertToText

```TypeScript
convertToText(): Promise<string>
```

Forcibly converts the content in a **PasteData** object to text. This API uses a promise to return the result.

**Since:** 7

**ArkTS mode:** ArkTS-Dyn only, since version 7.

**Deprecated since:** 9

**Substitutes:** [pasteboard.PasteDataRecord.toPlainText](arkts-basicservices-pasteboard-pastedatarecord-i.md#toplaintext)()

<!--Device-PasteDataRecord-convertToText(): Promise<string>--><!--Device-PasteDataRecord-convertToText(): Promise<string>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the text obtained from the conversion. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let record: pasteboard.PasteDataRecord = pasteboard.createUriRecord('dataability:///com.example.myapplication1/user.txt');
record.convertToText().then((data: string) => {
    console.info(`Succeeded in converting to text. Data: ${data}`);
}).catch((err: BusinessError) => {
    console.error(`Failed to convert to text. Cause: ${err.message}`);
});
```

## getData

```TypeScript
getData(type: string): Promise<ValueType>
```

Obtains data of the specified type from **PasteDataRecord**.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

<!--Device-PasteDataRecord-getData(type: string): Promise<ValueType>--><!--Device-PasteDataRecord-getData(type: string): Promise<ValueType>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | type of PasteData, which cannot exceed 1024 bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ValueType&gt; | Promise used to return the data of the specified type in **PasteDataRecord**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let html = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_URI, 'dataability:///com.example.myapplication1/user.txt');
record.addEntry(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
record.addEntry(pasteboard.MIMETYPE_TEXT_HTML, html);
record.getData(pasteboard.MIMETYPE_TEXT_PLAIN).then((value: pasteboard.ValueType) => {
    let textPlainContent = value as string;
    console.info('Success to get text/plain value. value is: ' + textPlainContent);
}).catch((err: BusinessError) => {
    console.error('Failed to get text/plain value. Cause: ' + err.message);
});
record.getData(pasteboard.MIMETYPE_TEXT_URI).then((value: pasteboard.ValueType) => {
    let uri = value as string;
    console.info('Success to get text/uri value. value is: ' + uri);
}).catch((err: BusinessError) => {
    console.error('Failed to get text/uri value. Cause: ' + err.message);
});
```

## getValidTypes

```TypeScript
getValidTypes(types: Array<string>): Array<string>
```

Obtains the intersection of the input types and the types of the PasteData.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

<!--Device-PasteDataRecord-getValidTypes(types: Array<string>): Array<string>--><!--Device-PasteDataRecord-getValidTypes(types: Array<string>): Array<string>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;string&gt; | Yes | List of the types. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Intersection of the input types and the types of the PasteData obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types; 3. Parameter verification failed. |

**Example**

```TypeScript
let html = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_URI, 'dataability:///com.example.myapplication1/user.txt');
record.addEntry(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
record.addEntry(pasteboard.MIMETYPE_TEXT_HTML, html);
let types: string[] = record.getValidTypes([
    pasteboard.MIMETYPE_TEXT_PLAIN,
    pasteboard.MIMETYPE_TEXT_HTML,
    pasteboard.MIMETYPE_TEXT_URI,
    pasteboard.MIMETYPE_TEXT_WANT,
    pasteboard.MIMETYPE_PIXELMAP
]);
```

## toPlainText

```TypeScript
toPlainText(): string
```

Forcibly converts HTML, plain, and URI content in a **PasteDataRecord** to the plain text.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-toPlainText(): string--><!--Device-PasteDataRecord-toPlainText(): string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Return value:**

| Type | Description |
| --- | --- |
| string | Plain text. |

**Example**

```TypeScript
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_HTML, '<html>hello</html>');
let text: string = record.toPlainText();
console.info(`Succeeded in converting to text. Text: ${text}`);
```

## data

```TypeScript
data: Record<string, ArrayBuffer>
```

Content of custom data.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
** or ** [addEntry]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_

**Type:** Record&lt;string, ArrayBuffer&gt;

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-data: Record<string, ArrayBuffer>--><!--Device-PasteDataRecord-data: Record<string, ArrayBuffer>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## htmlText

```TypeScript
htmlText: string
```

HTML content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
** or ** [addEntry]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-htmlText: string--><!--Device-PasteDataRecord-htmlText: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## mimeType

```TypeScript
mimeType: string
```

Default type of PasteDataRecord.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
** or ** [addEntry]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-mimeType: string--><!--Device-PasteDataRecord-mimeType: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## pixelMap

```TypeScript
pixelMap: image.PixelMap
```

PixelMap content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
** or ** [addEntry]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_

**Type:** image.PixelMap

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-pixelMap: image.PixelMap--><!--Device-PasteDataRecord-pixelMap: image.PixelMap-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## plainText

```TypeScript
plainText: string
```

Plain text.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
** or ** [addEntry]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-plainText: string--><!--Device-PasteDataRecord-plainText: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## uri

```TypeScript
uri: string
```

URI content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
** or ** [addEntry]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_

**Type:** string

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-uri: string--><!--Device-PasteDataRecord-uri: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## want

```TypeScript
want: Want
```

Want content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_  
** or ** [addEntry]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_

**Type:** Want

**Since:** 7

**ArkTS mode:** ArkTS-Dyn since version 7; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-want: Want--><!--Device-PasteDataRecord-want: Want-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

