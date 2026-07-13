# UnifiedData

Provides APIs for encapsulating a set of data records.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## addRecord

```TypeScript
addRecord(record: UnifiedRecord): void
```

Adds a data record to this **UnifiedRecord** object.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| record | UnifiedRecord | Yes | Data record to add. It is a **UnifiedRecord** child class object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
let plainText : uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent : 'This is a plain text example',
  abstract : 'This is abstract'
}
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

let hyperlink : uniformDataStruct.Hyperlink = {
  uniformDataType:'general.hyperlink',
  url : 'www.XXX.com',
  description : 'This is the description of the hyperlink'
}
let link = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);
unifiedData.addRecord(link);

```

## constructor

```TypeScript
constructor(record: UnifiedRecord)
```

Defines a constructor used to create a **UnifiedData** object with a data record.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| record | UnifiedRecord | Yes | Data record in the **UnifiedData** object. It is a **UnifiedRecord** object orits child class object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
let plainText : uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent : 'This is a plain text example',
  abstract : 'This is abstract'
}
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

```

## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **UnifiedData** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Example**

```TypeScript
let unifiedData = new unifiedDataChannel.UnifiedData();

```

## getRecords

```TypeScript
getRecords(): Array<UnifiedRecord>
```

Obtains all data records from this **UnifiedData** object. The data obtained is of the **UnifiedRecord** type.
Before using the data, you need to use [getType](arkts-arkdata-unifieddata-c.md#gettypes-1) to obtain the
data type and convert the data type to a child class.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;UnifiedRecord&gt; | Records in the **UnifiedData** object obtained. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let plainText : uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent : 'This is a plain text example',
  abstract : 'This is abstract'
}
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

let hyperlink : uniformDataStruct.Hyperlink = {
  uniformDataType:'general.hyperlink',
  url : 'www.XXX.com',
  description : 'This is the description of the hyperlink'
}
let link = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);
unifiedData.addRecord(link);

let records = unifiedData.getRecords();
for (let i = 0; i < records.length; i++) {
  let record = records[i];
  let types = record.getTypes();
  if (types.includes(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT)) {
    let plainText = record.getEntry(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) as unifiedDataChannel.PlainText;
    console.info(`textContent: ${plainText.textContent}`);
  } else if (types.includes(uniformTypeDescriptor.UniformDataType.HYPERLINK)) {
    let hyperlink = record.getEntry(uniformTypeDescriptor.UniformDataType.HYPERLINK) as unifiedDataChannel.Hyperlink;
    console.info(`linkUrl: ${hyperlink.url}`);
  }
}

```

## getTypes

```TypeScript
getTypes(): Array<string>
```

Obtains the types of all data records in this **UnifiedData** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Array of the[UniformDataType](arkts-arkdata-uniformdatatype-e.md) typesobtained. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let plainText : uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent : 'This is a plain text example',
  abstract : 'This is abstract'
}
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

let hyperlink : uniformDataStruct.Hyperlink = {
  uniformDataType:'general.hyperlink',
  url : 'www.XXX.com',
  description : 'This is the description of the hyperlink'
}
let link = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);
unifiedData.addRecord(link);

let types = unifiedData.getTypes();

```

## hasType

```TypeScript
hasType(type: string): boolean
```

Checks whether this **UnifiedData** object contains the specified data type, including the data types added by
using the [addEntry](arkts-arkdata-unifiedrecord-c.md#addentry-1) function.

For file types, if the type set of **UnifiedData** includes **general.jpeg**, calling the **hasType** API to
check for the **general.image** type will return **true**. This is because the **general.jpeg** type belongs to
the **general.image** type.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Data type to check. For details, see[UniformDataType](arkts-arkdata-uniformdatatype-e.md). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the specified data type exists; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

let plainText : uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent : 'This is a plain text example',
  abstract : 'This is abstract'
}
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

let hyperlink : uniformDataStruct.Hyperlink = {
  uniformDataType:'general.hyperlink',
  url : 'www.XXX.com',
  description : 'This is the description of the hyperlink'
}
let link = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.HYPERLINK, hyperlink);
unifiedData.addRecord(link);

let hasPlainText = unifiedData.hasType(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT);
let hasLink = unifiedData.hasType(uniformTypeDescriptor.UniformDataType.HYPERLINK);

```

## properties

```TypeScript
set properties(value: UnifiedDataProperties)
```

UnifiedData properties.

**Type:** UnifiedDataProperties

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

