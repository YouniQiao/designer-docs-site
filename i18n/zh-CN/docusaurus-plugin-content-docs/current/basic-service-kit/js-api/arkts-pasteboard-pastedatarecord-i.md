# PasteDataRecord

Provides **PasteDataRecord** APIs. A **PasteDataRecord** is an abstract definition of the content in the pasteboard. The pasteboard content consists of one or more plain text, HTML, URI, or Want records.

**起始版本：** 7

**系统能力：** SystemCapability.MiscServices.Pasteboard

## 导入模块

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## addEntry

```TypeScript
addEntry(type: string, value: ValueType): void
```

Adds PasteData of an extra type to **PasteDataRecord**. The type added using this method is not the default type of **Record**. You can only use the [getData]pasteboard.PasteDataRecord.getData(type: string) API to read the corresponding data.

**起始版本：** 14

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Type of extra data. The value can be a predefined MIME type listed in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),  including HTML, WANT, plain text, URI, and pixel map, or a custom type.  The value of mimeType cannot exceed 1024 bytes. |
| value | ValueType | 是 | Content of extra data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

**示例：**

```TypeScript
// 构建HTML内容字符串
let html = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
// 创建URI类型数据条目
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_URI, 'dataability:///com.example.myapplication1/user.txt');
// 添加纯文本类型数据
record.addEntry(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
// 添加HTML类型数据
record.addEntry(pasteboard.MIMETYPE_TEXT_HTML, html);

```

## convertToText

```TypeScript
convertToText(callback: AsyncCallback<string>): void
```

Forcibly converts the content in a **PasteData** object to text. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteDataRecord.toPlainText()

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: Incorrect parameters types. |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteDataRecord.toPlainText()

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the text obtained from the conversion. |

**示例：**

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

**起始版本：** 14

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | type of PasteData, which cannot exceed 1024 bytes. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ValueType> | Promise used to return the data of the specified type in  PasteDataRecord.   If PasteDataRecord contains data of multiple types,  the non-PasteDataRecord data of the default  type can be obtained only through this API. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

**示例：**

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

**起始版本：** 14

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| types | Array&lt;string> | 是 | List of the types. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | Intersection of the input types and the types of the PasteData obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Plain text. |

**示例：**

```TypeScript
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_HTML, '<html>hello</html>');
let text: string = record.toPlainText();
console.info(`Succeeded in converting to text. Text: ${text}`);

```

## data

```TypeScript
data: Record<string, ArrayBuffer>
```

Content of custom data. This parameter is read-only and does not support assignment operations. To assign a value, please use [createData]pasteboard.createData(mimeType: string, value: ValueType) ** or ** [addEntry]pasteboard.PasteDataRecord.addEntry(type: string, value: ValueType)

**类型：** Record<string, ArrayBuffer>

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## want

```TypeScript
want: Want
```

Want content. This parameter is read-only and does not support assignment operations. To assign a value, please use [createData]pasteboard.createData(mimeType: string, value: ValueType) ** or ** [addEntry]pasteboard.PasteDataRecord.addEntry(type: string, value: ValueType)

**类型：** Want

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## plainText

```TypeScript
plainText: string
```

Plain text. This parameter is read-only and does not support assignment operations. To assign a value, please use [createData]pasteboard.createData(mimeType: string, value: ValueType) ** or ** [addEntry]pasteboard.PasteDataRecord.addEntry(type: string, value: ValueType)

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## mimeType

```TypeScript
mimeType: string
```

Default type of PasteDataRecord. This parameter is read-only and does not support assignment operations. To assign a value, please use [createData]pasteboard.createData(mimeType: string, value: ValueType) ** or ** [addEntry]pasteboard.PasteDataRecord.addEntry(type: string, value: ValueType)

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## uri

```TypeScript
uri: string
```

URI content. This parameter is read-only and does not support assignment operations. To assign a value, please use [createData]pasteboard.createData(mimeType: string, value: ValueType) ** or ** [addEntry]pasteboard.PasteDataRecord.addEntry(type: string, value: ValueType)

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## htmlText

```TypeScript
htmlText: string
```

HTML content. This parameter is read-only and does not support assignment operations. To assign a value, please use [createData]pasteboard.createData(mimeType: string, value: ValueType) ** or ** [addEntry]pasteboard.PasteDataRecord.addEntry(type: string, value: ValueType)

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## pixelMap

```TypeScript
pixelMap: image.PixelMap
```

PixelMap content. This parameter is read-only and does not support assignment operations. To assign a value, please use [createData]pasteboard.createData(mimeType: string, value: ValueType) ** or ** [addEntry]pasteboard.PasteDataRecord.addEntry(type: string, value: ValueType)

**类型：** image.PixelMap

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

