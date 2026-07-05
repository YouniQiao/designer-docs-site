# deleteData

## deleteData

```TypeScript
function deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void
```

Deletes data from the UDMF public data channel. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Options | Yes | Configuration for the data deletion operation. Both the key and intention are  optional (only the DATA_HUB channel of intention is supported). The return value varies depending on the  parameters passed in. |
| callback | AsyncCallback&lt;Array&lt;UnifiedData>> | Yes | Callback used to return the data deleted. If only the  key is specified in options, the data corresponding to the key deleted is returned. If only the  intention is specified in options, all data in the intention deleted is returned. If both  intention and key are specified, the intersection of the two deleted is returned. If there is no  intersection between the two, an error object is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let options: unifiedDataChannel.Options = {
  intention: unifiedDataChannel.Intention.DATA_HUB
};

try {
  unifiedDataChannel.deleteData(options, (err, data) => {
    if (err === undefined) {
      console.info(`Succeeded in deleting data. size = ${data.length}`);
      for (let i = 0; i < data.length; i++) {
        let records = data[i].getRecords();
        for (let j = 0; j < records.length; j++) {
          if (records[j].getTypes().includes(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT)) {
            let text = records[j].getEntry(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) as uniformDataStruct.PlainText;
            console.info(`${i + 1}.${text.textContent}`);
          }
        }
      }
    } else {
      console.error(`Failed to delete data. code is ${err.code}, message is ${err.message} `);
    }
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Delete data throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

## deleteData

```TypeScript
function deleteData(options: Options): Promise<Array<UnifiedData>>
```

Deletes data from the UDMF public data channel. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Options | Yes | Configuration for the data deletion operation. Both the key and intention are  optional (only the DATA_HUB channel of intention is supported). The return value varies depending on the  parameters passed in. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;UnifiedData>> | Promise used to return the data deleted.  If only the key is specified in options, the data corresponding to the key deleted is returned.  If only the intention is specified in options, all data in the intention deleted is returned.  If both intention and key are specified, the intersection of the two deleted is returned. If there  is no intersection between the two, an error object is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let options: unifiedDataChannel.Options = {
  key: 'udmf://DataHub/com.ohos.test/0123456789'
};

try {
  unifiedDataChannel.deleteData(options).then((data) => {
    console.info(`Succeeded in deleting data. size = ${data.length}`);
    for (let i = 0; i < data.length; i++) {
      let records = data[i].getRecords();
      for (let j = 0; j < records.length; j++) {
        if (records[j].getTypes().includes(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT)) {
          let text = records[j].getEntry(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) as uniformDataStruct.PlainText;
          console.info(`${i + 1}.${text.textContent}`);
        }
      }
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to delete data. code is ${err.code}, message is ${err.message} `);
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Query data throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

