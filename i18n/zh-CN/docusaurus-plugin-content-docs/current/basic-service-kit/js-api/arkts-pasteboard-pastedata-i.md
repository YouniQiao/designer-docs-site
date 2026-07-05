# PasteData

Implements a **PasteData** object. PasteData contains one or more data records ( [PasteDataRecord]pasteboard.PasteDataRecord) and property description objects ( [PasteDataProperty]pasteboard.PasteDataProperty). Before calling any API in **PasteData**, you must use ** [createData()]pasteboard.createData(mimeType: string, value: ValueType)** or ** [getData()]pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)** to create a **PasteData** object.

**起始版本：** 6

**系统能力：** SystemCapability.MiscServices.Pasteboard

## 导入模块

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## addHtmlRecord

```TypeScript
addHtmlRecord(htmlText: string): void
```

Adds an HTML record to the PasteData, and adds **MIMETYPE_TEXT_HTML** to **mimeTypes** in [PasteDataProperty]pasteboard.PasteDataProperty. The parameters cannot be empty. Otherwise, the operation fails.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.addRecord(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| htmlText | string | 是 | HTML content. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
let html: string = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
pasteData.addHtmlRecord(html);

```

## addRecord

```TypeScript
addRecord(record: PasteDataRecord): void
```

Adds a data record to the PasteData, and adds its type to **mimeTypes** in [PasteDataProperty]pasteboard.PasteDataProperty. The parameters cannot be empty. Otherwise, the operation fails.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| record | PasteDataRecord | 是 | Record to add. |

**示例：**

```TypeScript
// 创建URI类型剪贴板内容对象
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_URI, 'dataability:///com.example.myapplication1/user.txt');
// 创建纯文本类型数据条目
let textRecord: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let html: string = "<!DOCTYPE html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" + "<title>HTML-PASTEBOARD_HTML</title>\n" + "</head>\n" + "<body>\n" + "    <h1>HEAD</h1>\n" + "    <p></p>\n" + "</body>\n" + "</html>";
let htmlRecord: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_HTML, html);
pasteData.addRecord(textRecord);
pasteData.addRecord(htmlRecord);

```

## addRecord

```TypeScript
addRecord(mimeType: string, value: ValueType): void
```

Adds a data record to the PasteData, and adds its type to **mimeTypes** in [PasteDataProperty]pasteboard.PasteDataProperty. The parameters cannot be empty. Otherwise, the operation fails.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | MIME type of PasteData. The length cannot exceed 1024 bytes. |
| value | ValueType | 是 | Data content. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |
| 12900002 | The number of records exceeds the upper limit. [since 9 - 9] |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_URI, 'dataability:///com.example.myapplication1/user.txt');
// 创建ArrayBuffer数据
let dataXml = new ArrayBuffer(256);
pasteData.addRecord('app/xml', dataXml);

```

## addTextRecord

```TypeScript
addTextRecord(text: string): void
```

Adds a plain text record to the PasteData, and adds **MIMETYPE_TEXT_PLAIN** to **mimeTypes** in [PasteDataProperty]pasteboard.PasteDataProperty. The parameters cannot be empty. Otherwise, the operation fails.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.addRecord(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Plain text. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
pasteData.addTextRecord('good');

```

## addUriRecord

```TypeScript
addUriRecord(uri: string): void
```

Adds a URI record to the PasteData, and adds **MIMETYPE_TEXT_URI** to **mimeTypes** in [PasteDataProperty]pasteboard.PasteDataProperty. The parameters cannot be empty. Otherwise, the operation fails.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.addRecord(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI content. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
pasteData.addUriRecord('dataability:///com.example.myapplication1/user.txt');

```

## addWantRecord

```TypeScript
addWantRecord(want: Want): void
```

Adds a Want record to the PasteData, and adds **MIMETYPE_TEXT_WANT** to **mimeTypes** in [PasteDataProperty]pasteboard.PasteDataProperty. The parameters cannot be empty. Otherwise, the operation fails.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.addRecord(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want object. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';

let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
let object: Want = {
    bundleName: "com.example.aafwk.test",
    abilityName: "com.example.aafwk.test.TwoAbility"
};
pasteData.addWantRecord(object);

```

## getMimeTypes

```TypeScript
getMimeTypes(): Array<string>
```

Obtains types of [PasteDataProperty]pasteboard.PasteDataProperty of the PasteData.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | Data types of the PasteData. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let types: string[] = pasteData.getMimeTypes();

```

## getPrimaryHtml

```TypeScript
getPrimaryHtml(): string
```

Obtains the HTML content of the primary record.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | HTML content. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.getData().then((pasteData: pasteboard.PasteData) => {
    let htmlText: string = pasteData.getPrimaryHtml();
}).catch((err: BusinessError) => {
    console.error('Failed to get PasteData. Cause: ' + err.message);
});

```

## getPrimaryMimeType

```TypeScript
getPrimaryMimeType(): string
```

Obtains the data type of the primary record in the pasteboard.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Data type of the primary record. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let type: string = pasteData.getPrimaryMimeType();

```

## getPrimaryPixelMap

```TypeScript
getPrimaryPixelMap(): image.PixelMap
```

Obtains the PixelMap of the primary record.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.PixelMap | PixelMap. |

**示例：**

```TypeScript
import { image } from '@kit.ImageKit';

// 创建图像数据缓冲区
let buffer = new ArrayBuffer(128);
// 定义图像尺寸
let realSize: image.Size = { height: 3, width: 5 };
let opt: image.InitializationOptions = {
    size: realSize,
    pixelFormat: 3,
    editable: true,
    alphaType: 1,
    scaleMode: 1
};
image.createPixelMap(buffer, opt).then((pixelMap: image.PixelMap) => {
    let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_PIXELMAP, pixelMap);
    let PixelMap: image.PixelMap = pasteData.getPrimaryPixelMap();
});

```

## getPrimaryText

```TypeScript
getPrimaryText(): string
```

Obtains the plain text of the primary record.

**起始版本：** 6

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Plain text. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 异步读取剪贴板数据
systemPasteboard.getData().then((pasteData: pasteboard.PasteData) => {
    // 获取剪贴板中的纯文本内容
    let text: string = pasteData.getPrimaryText();
}).catch((err: BusinessError) => {
    // 处理获取失败的情况
    console.error('Failed to get PasteData. Cause: ' + err.message);
});

```

## getPrimaryUri

```TypeScript
getPrimaryUri(): string
```

Obtains the URI of the primary record.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | URI content. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.getData().then((pasteData: pasteboard.PasteData) => {
    let uri: string = pasteData.getPrimaryUri();
}).catch((err: BusinessError) => {
    console.error('Failed to get PasteData. Cause: ' + err.message);
});

```

## getPrimaryWant

```TypeScript
getPrimaryWant(): Want
```

Obtains the **Want** object of the primary record.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Want | Want object. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.getData().then((pasteData: pasteboard.PasteData) => {
    let want: Want = pasteData.getPrimaryWant();
}).catch((err: BusinessError) => {
    console.error('Failed to get PasteData. Cause: ' + err.message);
});

```

## getProperty

```TypeScript
getProperty(): PasteDataProperty
```

Obtains the property of the PasteData.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteDataProperty | Property of the PasteData. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let property: pasteboard.PasteDataProperty = pasteData.getProperty();

```

## getRecord

```TypeScript
getRecord(index: int): PasteDataRecord
```

Obtains the record with a specific index in PasteData.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Index of the target record. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteDataRecord | Record with the specified index. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12900001 | The index is out of the record. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let record: pasteboard.PasteDataRecord = pasteData.getRecord(0);

```

## getRecordAt

```TypeScript
getRecordAt(index: number): PasteDataRecord
```

Obtains the record with a specific index in PasteData.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.getRecord(index:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | Index of the target record. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteDataRecord | Record with the specified index. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
let record: pasteboard.PasteDataRecord = pasteData.getRecordAt(0);

```

## getRecordCount

```TypeScript
getRecordCount(): int
```

Obtains the number of records in a PasteData object.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Number of records. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let count: number = pasteData.getRecordCount();

```

## getTag

```TypeScript
getTag(): string
```

Obtains the custom tag from the PasteData. If no custom tag is set, an empty string is returned.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Custom tag. If no custom tag is set, an empty string is returned. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let tag: string = pasteData.getTag();

```

## hasMimeType

```TypeScript
hasMimeType(mimeType: string): boolean
```

Checks whether the PasteData contains data of the specified type.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.hasType(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | Type of the data to query. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the specified data type exists; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
let hasType: boolean = pasteData.hasMimeType(pasteboard.MIMETYPE_TEXT_PLAIN);

```

## hasType

```TypeScript
hasType(mimeType: string): boolean
```

Checks whether the PasteData contains data of the specified MIME type.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | Type of the data to query. The value can be a predefined type listed in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants),  including HTML, WANT, plain text, URI, and pixel map, or a custom type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the specified data type exists; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let hasType: boolean = pasteData.hasType(pasteboard.MIMETYPE_TEXT_PLAIN);

```

## pasteComplete

```TypeScript
pasteComplete(): void
```

Invoked to notify pasteboard service the utilization of PasteData has completed and occupied resources can be released for further usage

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.Pasteboard

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.getData((err: BusinessError, pasteData: pasteboard.PasteData) => {
    if (err) {
        console.error('Failed to get PasteData. Cause: ' + err.message);
        return;
    }
    pasteData.pasteStart();
    console.info(`using data: ${pasteData.getPrimaryText()}`);
    pasteData.pasteComplete();
});

```

## pasteStart

```TypeScript
pasteStart(): void
```

Notifies the pasteboard service to retain the cross-device channel before reading data from the pasteboard.

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.Pasteboard

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.getData((err: BusinessError, pasteData: pasteboard.PasteData) => {
    if (err) {
        console.error('Failed to get PasteData. Cause: ' + err.message);
        return;
    }
    pasteData.pasteStart();
    console.info(`using data: ${pasteData.getPrimaryText()}`);
    pasteData.pasteComplete();
});

```

## removeRecord

```TypeScript
removeRecord(index: int): void
```

Removes the record with a specific index in PasteData.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Specified index. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12900001 | The index is out of the record. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
pasteData.removeRecord(0);

```

## removeRecordAt

```TypeScript
removeRecordAt(index: number): boolean
```

Removes the record with a specific index in PasteData.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.removeRecord(index:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | Specified index. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
let isRemove: boolean = pasteData.removeRecordAt(0);

```

## replaceRecord

```TypeScript
replaceRecord(index: int, record: PasteDataRecord): void
```

Replaces the record with a specific index in PasteData.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Specified index. |
| record | PasteDataRecord | 是 | New record. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12900001 | The index is out of the record. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
let record: pasteboard.PasteDataRecord = pasteboard.createRecord(pasteboard.MIMETYPE_TEXT_URI, 'file://com.example.myapplication1/data/storage/el2/base/files/file.txt');
pasteData.replaceRecord(0, record);

```

## replaceRecordAt

```TypeScript
replaceRecordAt(index: number, record: PasteDataRecord): boolean
```

Replaces the record with a specific index in PasteData.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.PasteData.replaceRecord(index:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | Specified index. |
| record | PasteDataRecord | 是 | New record. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('hello');
let record: pasteboard.PasteDataRecord = pasteboard.createUriRecord('dataability:///com.example.myapplication1/user.txt');
let isReplace: boolean = pasteData.replaceRecordAt(0, record);

```

## setProperty

```TypeScript
setProperty(property: PasteDataProperty): void
```

Sets a [PasteDataProperty]pasteboard.PasteDataProperty object.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| property | PasteDataProperty | 是 | Property of the PasteData. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
// 定义附加属性的类型
type AdditionType = Record<string, Record<string, Object>>;

// 创建HTML类型剪贴板内容对象
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_HTML, 'application/xml');
// 获取剪贴板属性对象
let prop: pasteboard.PasteDataProperty = pasteData.getProperty();
prop.shareOption = pasteboard.ShareOption.INAPP;
// 需要注意，不支持对addition进行追加属性的操作，只能通过重新赋值的方式达到追加属性的目的。
prop.additions = { 'TestOne': { 'Test': 123 }, 'TestTwo': { 'Test': 'additions' } } as AdditionType;
prop.tag = 'TestTag';
pasteData.setProperty(prop);


(async () => {
    let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
    let prop: pasteboard.PasteDataProperty = pasteData.getProperty();
    prop.shareOption = pasteboard.ShareOption.INAPP;
    prop.localOnly = false;
    pasteData.setProperty(prop);
    const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();

    await systemPasteboard.setData(pasteData).then(async () => {
        console.info('Succeeded in setting PasteData.');
        await systemPasteboard.getData().then((pasteData: pasteboard.PasteData) => {
            let prop: pasteboard.PasteDataProperty = pasteData.getProperty();
            prop.localOnly; // true
        });
    });

    prop.shareOption = pasteboard.ShareOption.LOCALDEVICE;
    prop.localOnly = false;
    pasteData.setProperty(prop);

    await systemPasteboard.setData(pasteData).then(async () => {
        console.info('Succeeded in setting PasteData.');
        await systemPasteboard.getData().then((pasteData: pasteboard.PasteData) => {
            let prop: pasteboard.PasteDataProperty = pasteData.getProperty();
            prop.localOnly; // true
        });
    });
})

```

