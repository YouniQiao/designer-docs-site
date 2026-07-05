# UnifiedRecord

An abstract definition of the data content supported by the UDMF. A **UnifiedRecord** object contains one or more data records, for example, a text record, an image record, or an HTML record. Since API version 15, different styles of the same content can be added to a **UnifiedRecord** object. Data users can obtain the corresponding styles as required.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## addEntry

```TypeScript
addEntry(type: string, value: ValueType): void
```

Adds data of a specified data type and content to the current data record. You can use this API to add different data types and contents to the same data.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Type of the data to add. For details, see  [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType). |
| value | ValueType | 是 | Value of the data to add. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let fileUriDetails: Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let fileUri: uniformDataStruct.FileUri = {
  uniformDataType: 'general.file-uri',
  oriUri: 'file://data/image/1.png',
  fileType: 'general.image',
  details: fileUriDetails
};
let hyperlink: uniformDataStruct.Hyperlink = {
  uniformDataType: 'general.hyperlink',
  url: 'file://data/image/1.png',
  description: 'This is the description of the hyperlink'
};

let unifiedData = new unifiedDataChannel.UnifiedData();
let record = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);
record.addEntry(uniformTypeDescriptor.UniformDataType.FILE_URI, fileUri);
unifiedData.addRecord(record);

```

## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **UnfiedRecord** object.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**示例：**

```TypeScript
let unifiedRecord = new unifiedDataChannel.UnifiedRecord();

```

## constructor

```TypeScript
constructor(type: string, value: ValueType)
```

Defines a constructor used to create a data record with the specified type and value. If **value** is of the [image.PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image) type, **type** must be the value of **OPENHARMONY_PIXEL_MAP** in [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType). If **value** is of the [Want](../../apis-ability-kit/arkts-apis/arkts-want-c.md#Want) type, **type** must be the value of **OPENHARMONY_WANT** in [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType).

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Type of the data record to create. |
| value | ValueType | 是 | Value of the data record to create. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { image } from '@kit.ImageKit';

let hyperlink: uniformDataStruct.Hyperlink = {
  uniformDataType: 'general.hyperlink',
  url: 'www.XXX.com',
  description: 'This is the description of the hyperlink'
};
let hyperlinkRecord = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);

let plainText: uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent: 'This is a plain text example',
  abstract: 'This is abstract'
};
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);

let arrayBuffer = new ArrayBuffer(4 * 200 * 200);
let opt: image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: { height: 200, width: 200 },
  alphaType: 3
};
let pixelMap: uniformDataStruct.PixelMap = {
  uniformDataType: 'openharmony.pixel-map',
  pixelMap: image.createPixelMapSync(arrayBuffer, opt)
};
let pixelMapRecord =
  new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.OPENHARMONY_PIXEL_MAP, pixelMap);

```

## getEntries

```TypeScript
getEntries(): Record<string, ValueType>
```

Obtains all the data in the current data record.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Record&lt;string, ValueType> | Values and types obtained. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let fileUriDetails : Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let fileUri : uniformDataStruct.FileUri = {
  uniformDataType : 'general.file-uri',
  oriUri : 'file://data/image/1.png',
  fileType : 'general.image',
  details : fileUriDetails
};
let formDetails : Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let form : uniformDataStruct.Form = {
  uniformDataType : 'openharmony.form',
  formId : 1,
  formName : 'form',
  bundleName : 'com.xx.app',
  abilityName : 'ability',
  module : 'module',
  details : formDetails
};

let unifiedData = new unifiedDataChannel.UnifiedData();
let record = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.OPENHARMONY_FORM, form);
record.addEntry(uniformTypeDescriptor.UniformDataType.FILE_URI, fileUri);
unifiedData.addRecord(record);

let records = unifiedData.getRecords();
for (let i = 0; i < records.length; i++) {
  let unifiedDataRecord = records[i] as unifiedDataChannel.UnifiedRecord;
  let entries : Record<string, unifiedDataChannel.ValueType> = unifiedDataRecord.getEntries();
  let formRead : uniformDataStruct.Form = entries[uniformTypeDescriptor.UniformDataType.OPENHARMONY_FORM] as uniformDataStruct.Form;
  if (formRead != undefined) {
    console.info(`formName: ${formRead.formName}`);
  }
  let fileUriRead : uniformDataStruct.FileUri = entries[uniformTypeDescriptor.UniformDataType.FILE_URI] as uniformDataStruct.FileUri;
  if (fileUriRead != undefined) {
    console.info(`oriUri: ${fileUriRead.oriUri}`);
  }
}

```

## getEntry

```TypeScript
getEntry(type: string): ValueType
```

Obtains data of the specified type from the data record.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Type of the data to obtain. For details, see  [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ValueType | Value obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let fileUriDetails: Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let fileUri: uniformDataStruct.FileUri = {
  uniformDataType: 'general.file-uri',
  oriUri: 'file://data/image/1.png',
  fileType: 'general.image',
  details: fileUriDetails
};
let formDetails: Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let form: uniformDataStruct.Form = {
  uniformDataType: 'openharmony.form',
  formId: 1,
  formName: 'form',
  bundleName: 'com.xx.app',
  abilityName: 'ability',
  module: 'module',
  details: formDetails
};

let unifiedData = new unifiedDataChannel.UnifiedData();
let record = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.OPENHARMONY_FORM, form);
record.addEntry(uniformTypeDescriptor.UniformDataType.FILE_URI, fileUri);
unifiedData.addRecord(record);

let records = unifiedData.getRecords();
for (let i = 0; i < records.length; i++) {
  let unifiedDataRecord = records[i] as unifiedDataChannel.UnifiedRecord;
  let fileUriRead: uniformDataStruct.FileUri =
    unifiedDataRecord.getEntry(uniformTypeDescriptor.UniformDataType.FILE_URI) as uniformDataStruct.FileUri;
  if (fileUriRead != undefined) {
    console.info(`oriUri: ${fileUriRead.oriUri}`);
  }
  let formRead =
    unifiedDataRecord.getEntry(uniformTypeDescriptor.UniformDataType.OPENHARMONY_FORM) as uniformDataStruct.Form;
  if (formRead != undefined) {
    console.info(`formName: ${formRead.formName}`);
  }
}

```

## getType

```TypeScript
getType(): string
```

Obtains the type of this **UnfiedRecord**. The data obtained by [getRecords]unifiedDataChannel.UnifiedData.getRecords from the **UnifiedData** object is a **UnifiedRecord** object. You need to use this API to obtain the specific type of the record, convert the **UnifiedRecord** object to its child class, and call the child class interfaces.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Data type obtained. For details, see  [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType). |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let plainText: uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent: 'This is a plain text example',
  abstract: 'This is abstract'
};
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

let records = unifiedData.getRecords();
if (records[0].getType() == uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) {
  let plainText = records[0] as unifiedDataChannel.PlainText;
  console.info(`textContent: ${plainText.textContent}`);
}

```

## getTypes

```TypeScript
getTypes(): Array<string>
```

Obtains all the data types in the data record. This API can be called using the **UnifiedRecord** object to query all data types in the record, including the data types added using the [addEntry]unifiedDataChannel.UnifiedRecord.addEntry function.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | Array of  [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType)s obtained. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let fileUriDetails: Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let fileUri: uniformDataStruct.FileUri = {
  uniformDataType: 'general.file-uri',
  oriUri: 'file://data/image/1.png',
  fileType: 'general.image',
  details: fileUriDetails
};
let formDetails: Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let form: uniformDataStruct.Form = {
  uniformDataType: 'openharmony.form',
  formId: 1,
  formName: 'form',
  bundleName: 'com.xx.app',
  abilityName: 'ability',
  module: 'module',
  details: formDetails
};

let unifiedData = new unifiedDataChannel.UnifiedData();
let record = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.OPENHARMONY_FORM, form);
record.addEntry(uniformTypeDescriptor.UniformDataType.FILE_URI, fileUri);
unifiedData.addRecord(record);

let records = unifiedData.getRecords();
for (let i = 0; i < records.length; i++) {
  let unifiedDataRecord = records[i] as unifiedDataChannel.UnifiedRecord;
  let types: Array<string> = unifiedDataRecord.getTypes();
  if (types.includes(uniformTypeDescriptor.UniformDataType.OPENHARMONY_FORM)) {
    console.info(`Types include: ${uniformTypeDescriptor.UniformDataType.OPENHARMONY_FORM}`);
  }
};

```

## getValue

```TypeScript
getValue(): ValueType
```

Obtains the value of this data record.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ValueType | Value obtained. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let text =
  new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, 'this is value of text');
let value = text.getValue();

let hyperlinkDetails: Record<string, string> = {
  'attr1': 'value1',
  'attr2': 'value2'
};
let hyperlink: uniformDataStruct.Hyperlink = {
  uniformDataType: 'general.hyperlink',
  url: 'www.XXX.com',
  description: 'This is the description of the hyperlink',
  details: hyperlinkDetails
};
let hyperlinkRecord = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);
let hyperlinkValue = hyperlinkRecord.getValue();

```

