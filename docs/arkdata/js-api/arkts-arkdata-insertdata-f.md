# insertData

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## insertData

```TypeScript
function insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void
```

Inserts data to the UDMF public data channel. This API uses an asynchronous callback to return the unique identifier of the data inserted.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Options | Yes | Configuration for the data insertion operation. The **intention** field is mandatory (the DRAG channel is not supported). If it is not specified, error code 401 will be returned. The settings ofother parameters do not affect the use of this API. |
| data | UnifiedData | Yes | Data to insert. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the key (unique identifier) of the datainserted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let plainText : uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent : 'This is a plain text example',
  abstract : 'This is abstract'
}
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

let options: unifiedDataChannel.Options = {
  intention: unifiedDataChannel.Intention.DATA_HUB
}
try {
  unifiedDataChannel.insertData(options, unifiedData, (err, key) => {
    if (err === undefined) {
      console.info(`Succeeded in inserting data. key = ${key}`);
    } else {
      console.error(`Failed to insert data. code is ${err.code}, message is ${err.message} `);
    }
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Insert data throws an exception. code is ${error.code}, message is ${error.message} `);
}

```


## insertData

```TypeScript
function insertData(options: Options, data: UnifiedData): Promise<string>
```

Inserts data to the UDMF public data channel. This API uses a promise to return the unique identifier of the data inserted.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Options | Yes | Configuration for the data insertion operation. The **intention** field is mandatory (the DRAG channel is not supported). If it is not specified, error code 401 will be returned. The settings ofother parameters do not affect the use of this API. |
| data | UnifiedData | Yes | Data to insert. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the key of the data inserted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let plainText : uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent : 'This is a plain text example',
  abstract : 'This is abstract'
}
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);

let options: unifiedDataChannel.Options = {
  intention: unifiedDataChannel.Intention.DATA_HUB
}
try {
  unifiedDataChannel.insertData(options, unifiedData).then((key) => {
    console.info(`Succeeded in inserting data. key = ${key}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to insert data. code is ${err.code}, message is ${err.message} `);
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Insert data throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

