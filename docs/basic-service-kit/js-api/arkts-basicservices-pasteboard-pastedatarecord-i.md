# PasteDataRecord

Provides **PasteDataRecord** APIs. A **PasteDataRecord** is an abstract definition of the content in the pasteboard. The pasteboard content consists of one or more plain text, HTML, URI, or Want records.

**Since:** 7

<!--Device-pasteboard-interface PasteDataRecord--><!--Device-pasteboard-interface PasteDataRecord-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## addEntry

```TypeScript
addEntry(type: string, value: ValueType): void
```

Adds PasteData of an extra type to **PasteDataRecord**. The type added using this method is not the default type of **Record**. You can only use the [getData](arkts-basicservices-pasteboard-pastedatarecord-i.md#getdata-1) API to read the corresponding data.

**Since:** 14

<!--Device-PasteDataRecord-addEntry(type: string, value: ValueType): void--><!--Device-PasteDataRecord-addEntry(type: string, value: ValueType): void-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of extra data. The value can be a predefined MIME type listed in [Constants](../../../../reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),including HTML, WANT, plain text, URI, and pixel map, or a custom type.The value of **mimeType** cannot exceed 1024 bytes. |
| value | [ValueType](arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Content of extra data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types;3. Parameter verification failed. |

**Example**

```TypeScript
// Build an HTML string.
let html = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
// Create an URI data record.
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_URI, 'dataability:///com.example.myapplication1/user.txt');
// Add plain text data.
record.addEntry(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
// Add HTML data.
record.addEntry(pasteboard.MIMETYPE_TEXT_HTML, html);

```

## convertToText

```TypeScript
convertToText(callback: AsyncCallback<string>): void
```

Forcibly converts the content in a **PasteData** object to text. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [toPlainText()](arkts-basicservices-pasteboard-pastedatarecord-i.md#toplaintext-1)

<!--Device-PasteDataRecord-convertToText(callback: AsyncCallback<string>): void--><!--Device-PasteDataRecord-convertToText(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the result. |

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

**Deprecated since:** 9

**Substitutes:** [toPlainText()](arkts-basicservices-pasteboard-pastedatarecord-i.md#toplaintext-1)

<!--Device-PasteDataRecord-convertToText(): Promise<string>--><!--Device-PasteDataRecord-convertToText(): Promise<string>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the text obtained from the conversion. |

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

<!--Device-PasteDataRecord-getData(type: string): Promise<ValueType>--><!--Device-PasteDataRecord-getData(type: string): Promise<ValueType>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | type of PasteData, which cannot exceed 1024 bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ValueType> | Promise used to return the data of the specified type in **PasteDataRecord**.* If **PasteDataRecord** contains data of multiple types,the non-**PasteDataRecord** data of the default type can be obtained only through this API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types;3. Parameter verification failed. |

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

<!--Device-PasteDataRecord-getValidTypes(types: Array<string>): Array<string>--><!--Device-PasteDataRecord-getValidTypes(types: Array<string>): Array<string>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | List of the types. |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Intersection of the input types and the types of the PasteData obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types;3. Parameter verification failed. |

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

Content of custom data.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)** or ** [addEntry](arkts-basicservices-pasteboard-pastedatarecord-i.md#addentry-1)**

**Type:** Record<string, ArrayBuffer>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-data: Record<string, ArrayBuffer>--><!--Device-PasteDataRecord-data: Record<string, ArrayBuffer>-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## htmlText

```TypeScript
htmlText: string
```

HTML content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)** or ** [addEntry](arkts-basicservices-pasteboard-pastedatarecord-i.md#addentry-1)**

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-htmlText: string--><!--Device-PasteDataRecord-htmlText: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## mimeType

```TypeScript
mimeType: string
```

Default type of PasteDataRecord.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)** or ** [addEntry](arkts-basicservices-pasteboard-pastedatarecord-i.md#addentry-1)**

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-mimeType: string--><!--Device-PasteDataRecord-mimeType: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## pixelMap

```TypeScript
pixelMap: image.PixelMap
```

PixelMap content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)** or ** [addEntry](arkts-basicservices-pasteboard-pastedatarecord-i.md#addentry-1)**

**Type:** image.PixelMap

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-pixelMap: image.PixelMap--><!--Device-PasteDataRecord-pixelMap: image.PixelMap-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## plainText

```TypeScript
plainText: string
```

Plain text.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)** or ** [addEntry](arkts-basicservices-pasteboard-pastedatarecord-i.md#addentry-1)**

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-plainText: string--><!--Device-PasteDataRecord-plainText: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## uri

```TypeScript
uri: string
```

URI content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)** or ** [addEntry](arkts-basicservices-pasteboard-pastedatarecord-i.md#addentry-1)**

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-uri: string--><!--Device-PasteDataRecord-uri: string-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

## want

```TypeScript
want: Want
```

Want content.This parameter is read-only and does not support assignment operations.To assign a value, please use [createData](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)** or ** [addEntry](arkts-basicservices-pasteboard-pastedatarecord-i.md#addentry-1)**

**Type:** Want

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PasteDataRecord-want: Want--><!--Device-PasteDataRecord-want: Want-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

