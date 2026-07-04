# queryData

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## queryData

```TypeScript
function queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void
```

Queries data in the UDMF public data channel. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Options | Yes | Configuration for the data query operation. Both the **key** and **intention** areoptional (the DRAG channel of **intention** is not supported). The return value varies depending on theparameters passed in. |
| callback | AsyncCallback&lt;Array&lt;UnifiedData&gt;&gt; | Yes | Callback used to return the queried data.<br>If only the**key** is specified in **options**, the data corresponding to the key is returned.<br>If only the**intention** is specified in **options**, all data in the **intention** is returned.<br>If both **intention**and **key** are specified, the intersection of the two is returned, which is the result obtained when only**key** is specified. If there is no intersection between the specified **intention** and **key**, an errorobject is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let options: unifiedDataChannel.Options = {
  intention: unifiedDataChannel.Intention.DATA_HUB
};

try {
  unifiedDataChannel.queryData(options, (err, data) => {
    if (err === undefined) {
      console.info(`Succeeded in querying data. size = ${data.length}`);
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
      console.error(`Failed to query data. code is ${err.code}, message is ${err.message} `);
    }
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Query data throws an exception. code is ${error.code}, message is ${error.message} `);
}

```


## queryData

```TypeScript
function queryData(options: Options): Promise<Array<UnifiedData>>
```

Queries data in the UDMF public data channel. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Options | Yes | Configuration for the data query operation. Both the **key** and **intention** areoptional (the DRAG channel of **intention** is not supported). The return value varies depending on theparameters passed in. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;UnifiedData&gt;&gt; | Promise used to return the result queried.<br>If only the **key** is specified in **options**, the data corresponding to the key is returned.<br>If only the **intention** is specified in **options**, all data in the **intention** is returned.<br>If both **intention** and **key** are specified, the intersection of the two is returned, which is the resultobtained when only **key** is specified. If there is no intersection between the specified **intention** and**key**, an error object is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let options: unifiedDataChannel.Options = {
  key: 'udmf://DataHub/com.ohos.test/0123456789'
};

try {
  unifiedDataChannel.queryData(options).then((data) => {
    console.info(`Succeeded in querying data. size = ${data.length}`);
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
    console.error(`Failed to query data. code is ${err.code}, message is ${err.message} `);
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Query data throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

