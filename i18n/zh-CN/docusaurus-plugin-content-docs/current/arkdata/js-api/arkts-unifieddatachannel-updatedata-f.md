# updateData

## updateData

```TypeScript
function updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void
```

Updates the data in the UDMF public data channel. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | Options | 是 | Configuration for the data update operation. The key field is mandatory. If it is  not specified, error code 401 will be returned. Only the DATA_HUB channel of the intention parameter is  supported. The settings of other parameters do not affect the use of this API. |
| data | UnifiedData | 是 | Data to update. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the data is updated successfully,  err is undefined. Otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let plainText: uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent: 'This is a plain text example',
  abstract: 'This is abstract'
};
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);
let options: unifiedDataChannel.Options = {
  intention: unifiedDataChannel.Intention.DATA_HUB
};
try {
  unifiedDataChannel.insertData(options, unifiedData).then((key) => {
    console.info(`Succeeded in inserting data. key = ${key}`);
    let updateOptions: unifiedDataChannel.Options = {
      intention: unifiedDataChannel.Intention.DATA_HUB,
      key: key
    };
    let plainTextUpdate: uniformDataStruct.PlainText = {
      uniformDataType: 'general.plain-text',
      textContent: 'This is plainText textContent for update',
      abstract: 'This is abstract for update'
    };
    let textUpdate =
      new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainTextUpdate);
    let unifiedDataUpdate = new unifiedDataChannel.UnifiedData(textUpdate);
    try {
      unifiedDataChannel.updateData(updateOptions, unifiedDataUpdate, (err) => {
        if (err === undefined) {
          console.info('Succeeded in updating data.');
        } else {
          console.error(`Failed to update data. code is ${err.code}, message is ${err.message}`);
        }
      });
    } catch (e) {
      let error: BusinessError = e as BusinessError;
      console.error(`Update data throws an exception. code is ${error.code}, message is ${error.message}`);
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to insert data. code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Insert data throws an exception. code is ${error.code}, message is ${error.message}`);
}

```

## updateData

```TypeScript
function updateData(options: Options, data: UnifiedData): Promise<void>
```

Updates the data in the UDMF public data channel. This API uses a promise to return the result.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | Options | 是 | Configuration for the data update operation. The key field is mandatory. If it is  not specified, error code 401 will be returned. Only the DATA_HUB channel of the intention parameter is  supported. The settings of other parameters do not affect the use of this API. |
| data | UnifiedData | 是 | Data to update. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

let plainText: uniformDataStruct.PlainText = {
  uniformDataType: 'general.plain-text',
  textContent: 'This is a plain text example',
  abstract: 'This is abstract'
};
let text = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
let unifiedData = new unifiedDataChannel.UnifiedData(text);
let options: unifiedDataChannel.Options = {
  intention: unifiedDataChannel.Intention.DATA_HUB
};

try {
  unifiedDataChannel.insertData(options, unifiedData).then((key) => {
    console.info(`Succeeded in inserting data. key = ${key}`);
    let updateOptions: unifiedDataChannel.Options = {
      intention: unifiedDataChannel.Intention.DATA_HUB,
      key: key
    };
    let plainTextUpdate: uniformDataStruct.PlainText = {
      uniformDataType: 'general.plain-text',
      textContent: 'This is plainText textContent for update',
      abstract: 'This is abstract for update'
    };
    let textUpdate =
      new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainTextUpdate);
    let unifiedDataUpdate = new unifiedDataChannel.UnifiedData(textUpdate);
    try {
      unifiedDataChannel.updateData(updateOptions, unifiedDataUpdate).then(() => {
        console.info('Succeeded in updating data.');
      }).catch((err: BusinessError) => {
        console.error(`Failed to update data. code is ${err.code}, message is ${err.message} `);
      });
    } catch (e) {
      let error: BusinessError = e as BusinessError;
      console.error(`Update data throws an exception. code is ${error.code}, message is ${error.message} `);
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to insert data. code is ${err.code}, message is ${err.message} `);
  });
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`Insert data throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

