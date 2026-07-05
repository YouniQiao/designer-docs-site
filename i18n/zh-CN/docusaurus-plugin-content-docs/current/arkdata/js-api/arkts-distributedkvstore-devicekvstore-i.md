# DeviceKVStore

Provides APIs for querying data in a device KV store and performing cross-device data sync. This class inherits from **SingleKVStore**. The **SingleKVStore** APIs such as **put** and **putBatch** can be used. Data is distinguished by device in a device KV store. Each device can only write and modify its own data. Data of other devices is read-only and cannot be modified. For example, a device KV store can be used to implement image sharing between devices. The images of other devices can be viewed, but not be modified or deleted. Before calling any method in **DeviceKVStore**, you must use [getKVStore]distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>) to obtain a **DeviceKVStore** object.

**继承实现关系：** DeviceKVStore继承自：SingleKVStore。

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## get

```TypeScript
get(key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void
```

Obtains the value of the specified key for this device. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the value to obtain. It cannot be empty, and the length cannot exceed  [MAX_KEY_LENGTH]distributedKVStore.Constants. |
| callback | AsyncCallback&lt;boolean \| string \| long \| double \| Uint8Array> | 是 | Callback used to return the value  obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

## get

```TypeScript
get(key: string): Promise<boolean | string | long | double | Uint8Array>
```

Obtains the value of the specified key for this device. This API uses a promise to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the value to obtain. It cannot be empty, and the length cannot exceed  [MAX_KEY_LENGTH]distributedKVStore.Constants. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean \| string \| long \| double \| Uint8Array> | Promise used to return the value obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

## get

```TypeScript
get(deviceId: string, key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void
```

Obtains a string value that matches the specified device ID and key. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| key | string | 是 | Key of the value to obtain. It cannot be empty or exceed  [MAX_KEY_LENGTH]distributedKVStore.Constants. |
| callback | AsyncCallback&lt;boolean \| string \| long \| double \| Uint8Array> | 是 | Callback used to return the value  obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

## get

```TypeScript
get(deviceId: string, key: string): Promise<boolean | string | long | double | Uint8Array>
```

Obtains a string value that matches the specified device ID and key. This API uses a promise to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| key | string | 是 | Key of the value to obtain. It cannot be empty or exceed  [MAX_KEY_LENGTH]distributedKVStore.Constants. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean \| string \| long \| double \| Uint8Array> | Promise used to return the string value that matches  the given condition. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

## getEntries

```TypeScript
getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void
```

Obtains all KV pairs that match the specified key prefix for this device. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |
| callback | AsyncCallback&lt;Entry[]> | 是 | Callback used to return the KV pairs that match the specified prefix. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries, async (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put Batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting Batch');
    if (kvStore != null) {
      kvStore.getEntries('batch_test_string_key', (err: BusinessError, entries: distributedKVStore.Entry[]) => {
        if (err) {
          console.error(`Failed to get Entries. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting Entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(keyPrefix: string): Promise<Entry[]>
```

Obtains all KV pairs that match the specified key prefix for this device. This API uses a promise to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return the KV pairs that match the specified prefix. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting Batch');
    if (kvStore != null) {
      kvStore.getEntries('batch_test_string_key').then((entries: distributedKVStore.Entry[]) => {
        console.info('Succeeded in getting Entries');
        console.info(`PutBatch ${entries}`);
      }).catch((err: BusinessError) => {
        console.error(`Failed to get Entries. Code: ${err.code}, message: ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to put Batch. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void
```

Obtains all KV pairs that match the specified device ID and key prefix. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |
| callback | AsyncCallback&lt;Entry[]> | 是 | Callback used to return the KV pairs obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  console.info(`entries : ${entries}`);
  kvStore.putBatch(entries, async (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    if (kvStore != null) {
      kvStore.getEntries('localDeviceId', 'batch_test_string_key', (err: BusinessError, entries: distributedKVStore.Entry[]) => {
        if (err) {
          console.error(`Failed to get entries. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to put batch. Code: ${error.code}, message: ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>
```

Obtains all KV pairs that match the specified device ID and key prefix. This API uses a promise to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return all the KV pairs that match the given condition. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting batch');
    if (kvStore != null) {
      kvStore.getEntries('localDeviceId', 'batch_test_string_key').then((entries: distributedKVStore.Entry[]) => {
        console.info('Succeeded in getting entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
        console.info(`entries[0].value: ${entries[0].value}`);
        console.info(`entries[0].value.value: ${entries[0].value.value}`);
      }).catch((err: BusinessError) => {
        console.error(`Failed to get entries. Code: ${err.code}, message: ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to put batch. Code: ${error.code}, message: ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(query: Query, callback: AsyncCallback<Entry[]>): void
```

Obtains all KV pairs that match the specified **Query** object for this device. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Key prefix to match. |
| callback | AsyncCallback&lt;Entry[]> | 是 | Callback used to return the KV pairs that match the specified Query  object on the local device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let arr = new Uint8Array([21, 31]);
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_bool_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.BYTE_ARRAY,
        value: arr
      }
    }
    entries.push(entry);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put Batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting Batch');
    const query = new distributedKVStore.Query();
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getEntries(query, (err: BusinessError, entries: distributedKVStore.Entry[]) => {
        if (err) {
          console.error(`Failed to get Entries. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting Entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get Entries. Code: ${error.code}, message: ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(query: Query): Promise<Entry[]>
```

Obtains all KV pairs that match the specified **Query** object for this device. This API uses a promise to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return the KV pairs that match the specified Query object on the local  device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let arr = new Uint8Array([21, 31]);
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_bool_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.BYTE_ARRAY,
        value: arr
      }
    }
    entries.push(entry);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting Batch');
    const query = new distributedKVStore.Query();
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getEntries(query).then((entries: distributedKVStore.Entry[]) => {
        console.info('Succeeded in getting Entries');
      }).catch((err: BusinessError) => {
        console.error(`Failed to get Entries. Code: ${err.code}, message: ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to get Entries. Code: ${err.code}, message: ${err.message}`);
  });
  console.info('Succeeded in getting Entries');
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get Entries. Code: ${error.code}, message: ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, query: Query, callback: AsyncCallback<Entry[]>): void
```

Obtains the KV pairs that match the specified device ID and **Query** object. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| query | Query | 是 | Query object to match. |
| callback | AsyncCallback&lt;Entry[]> | 是 | Callback used to return the KV pairs that match the specified device ID and  Query object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let arr = new Uint8Array([21, 31]);
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_bool_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.BYTE_ARRAY,
        value: arr
      }
    }
    entries.push(entry);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries, async (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    let query = new distributedKVStore.Query();
    query.deviceId('localDeviceId');
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getEntries('localDeviceId', query, (err: BusinessError, entries: distributedKVStore.Entry[]) => {
        if (err) {
          console.error(`Failed to get entries. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
      })
    }
  });
  console.info('Succeeded in getting entries');
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get entries. Code: ${error.code}, message: ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, query: Query): Promise<Entry[]>
```

Obtains the KV pairs that match the specified device ID and **Query** object. This API uses a promise to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return the KV pairs that match the specified device ID and Query  object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let arr = new Uint8Array([21, 31]);
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_bool_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.BYTE_ARRAY,
        value: arr
      }
    }
    entries.push(entry);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting batch');
    let query = new distributedKVStore.Query();
    query.deviceId('localDeviceId');
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getEntries('localDeviceId', query).then((entries: distributedKVStore.Entry[]) => {
        console.info('Succeeded in getting entries');
      }).catch((err: BusinessError) => {
        console.error(`Failed to get entries. Code: ${err.code}, message: ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
  });
  console.info('Succeeded in getting entries');
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get entries. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains a result set with the specified prefix for this device. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |
| callback | AsyncCallback&lt;KVStoreResultSet> | 是 | Callback used to return the result set with the specified prefix. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries, async (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    if (kvStore != null) {
      kvStore.getResultSet('batch_test_string_key', async (err: BusinessError, result: distributedKVStore.KVStoreResultSet) => {
        if (err) {
          console.error(`Failed to get resultset. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting result set');
        resultSet = result;
        if (kvStore != null) {
          kvStore.closeResultSet(resultSet, (err: BusinessError) => {
            if (err) {
              console.error(`Failed to close resultset. Code: ${err.code}, message: ${err.message}`);
              return;
            }
            console.info('Succeeded in closing result set');
          })
        }
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(keyPrefix: string): Promise<KVStoreResultSet>
```

Obtains a result set with the specified prefix for this device. This API uses a promise to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KVStoreResultSet> | Promise used to return the result set with the specified prefix. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting batch');
    kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
      console.info('Succeeded in getting result set');
      resultSet = result;
      if (kvStore != null) {
        kvStore.closeResultSet(resultSet).then(() => {
          console.info('Succeeded in closing result set');
        }).catch((err: BusinessError) => {
          console.error(`Failed to close resultset. Code: ${err.code}, message: ${err.message}`);
        });
      }
    }).catch((err: BusinessError) => {
      console.error(`Failed to get resultset. Code: ${err.code}, message: ${err.message}`);
    });
  }).catch((err: BusinessError) => {
    console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains a **KVStoreResultSet** object that matches the specified device ID and key prefix. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |
| callback | AsyncCallback&lt;KVStoreResultSet> | 是 | Callback used to return the KVStoreResultSet object obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  kvStore.getResultSet('localDeviceId', 'batch_test_string_key', async (err: BusinessError, result: distributedKVStore.KVStoreResultSet) => {
    if (err) {
      console.error(`Failed to get resultSet. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in getting resultSet');
    resultSet = result;
    if (kvStore != null) {
      kvStore.closeResultSet(resultSet, (err: BusinessError) => {
        if (err) {
          console.error(`Failed to close resultSet. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in closing resultSet');
      })
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get resultSet. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, keyPrefix: string): Promise<KVStoreResultSet>
```

Obtains a **KVStoreResultSet** object that matches the specified device ID and key prefix. This API uses a promise to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| keyPrefix | string | 是 | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid and  all data in the RDB store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KVStoreResultSet> | Promise used to return the KVStoreResultSet object obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  kvStore.getResultSet('localDeviceId', 'batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('Succeeded in getting resultSet');
    resultSet = result;
    if (kvStore != null) {
      kvStore.closeResultSet(resultSet).then(() => {
        console.info('Succeeded in closing resultSet');
      }).catch((err: BusinessError) => {
        console.error(`Failed to close resultSet. Code: ${err.code}, message: ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultSet. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get resultSet. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(query: Query, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains a **KVStoreResultSet** object that matches the specified **Query** object for this device. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |
| callback | AsyncCallback&lt;KVStoreResultSet> | 是 | Callback used to return the KVStoreResultSet object obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries, async (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    const query = new distributedKVStore.Query();
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getResultSet(query, async (err: BusinessError, result: distributedKVStore.KVStoreResultSet) => {
        if (err) {
          console.error(`Failed to get resultSet. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting resultSet');
        resultSet = result;
        if (kvStore != null) {
          kvStore.closeResultSet(resultSet, (err: BusinessError) => {
            if (err) {
              console.error(`Failed to close resultSet. Code: ${err.code}, message: ${err.message}`);
              return;
            }
            console.info('Succeeded in closing resultSet');
          })
        }
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get resultSet. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(query: Query): Promise<KVStoreResultSet>
```

Obtains a **KVStoreResultSet** object that matches the specified **Query** object for this device. This API uses a promise to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KVStoreResultSet> | Promise used to return the KVStoreResultSet object obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting batch');
  }).catch((err: BusinessError) => {
    console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
  });
  const query = new distributedKVStore.Query();
  query.prefixKey('batch_test');
  kvStore.getResultSet(query).then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('Succeeded in getting result set');
    resultSet = result;
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultset. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, query: Query, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains a **KVStoreResultSet** object that matches the specified device ID and **Query** object. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the device to which the KVStoreResultSet object belongs. |
| query | Query | 是 | Query object to match. |
| callback | AsyncCallback&lt;KVStoreResultSet> | 是 | Callback used to return the KVStoreResultSet object that  matches the specified device ID and Query object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries, async (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    const query = new distributedKVStore.Query();
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getResultSet('localDeviceId', query, async (err: BusinessError, result: distributedKVStore.KVStoreResultSet) => {
        if (err) {
          console.error(`Failed to get resultSet. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting resultSet');
        resultSet = result;
        if (kvStore != null) {
          kvStore.closeResultSet(resultSet, (err: BusinessError) => {
            if (err) {
              console.error(`Failed to close resultSet. Code: ${err.code}, message: ${err.message}`);
              return;
            }
            console.info('Succeeded in closing resultSet');
          })
        }
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get resultSet. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, query: Query): Promise<KVStoreResultSet>
```

Obtains a **KVStoreResultSet** object that matches the specified device ID and **Query** object. This API uses a promise to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the device to which the KVStoreResultSet object belongs. |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KVStoreResultSet> | Promise used to return the KVStoreResultSet object that matches the specified  device ID and Query object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let resultSet: distributedKVStore.KVStoreResultSet;
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting batch');
  }).catch((err: BusinessError) => {
    console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
  });
  const query = new distributedKVStore.Query();
  query.prefixKey('batch_test');
  if (kvStore != null) {
    kvStore.getResultSet('localDeviceId', query).then((result: distributedKVStore.KVStoreResultSet) => {
      console.info('Succeeded in getting resultSet');
      resultSet = result;
      if (kvStore != null) {
        kvStore.closeResultSet(resultSet).then(() => {
          console.info('Succeeded in closing resultSet');
        }).catch((err: BusinessError) => {
          console.error(`Failed to close resultSet. Code: ${err.code}, message: ${err.message}`);
        });
      }
    }).catch((err: BusinessError) => {
      console.error(`Failed to get resultSet. Code: ${err.code}, message: ${err.message}`);
    });
  }
  query.deviceId('localDeviceId');
  console.info('GetResultSet ' + query.getSqlLike());

} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get resultSet. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains the KVStoreResultSet object matching the local device ID and specified predicate object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Indicates the datasharePredicates. |
| callback | AsyncCallback&lt;KVStoreResultSet> | 是 | {KVStoreResultSet}: the {@code KVStoreResultSet}  object matching the local device ID and specified {@code dataSharePredicates.DataSharePredicates} object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

## getResultSet

```TypeScript
getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>
```

Obtains the KVStoreResultSet object matching the local device ID and specified predicate object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Indicates the datasharePredicates. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KVStoreResultSet> | {KVStoreResultSet}: the {@code KVStoreResultSet}  object matching the local device ID and specified {@code dataSharePredicates.DataSharePredicates} object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

## getResultSet

```TypeScript
getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates the ID of the device to which the results belong. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Indicates the dataSharePredicates. |
| callback | AsyncCallback&lt;KVStoreResultSet> | 是 | {KVStoreResultSet}: the {@code KVStoreResultSet}  object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

## getResultSet

```TypeScript
getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>
```

Obtains the KVStoreResultSet object matching a specified Device ID and Predicate object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates the ID of the device to which the results belong. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Indicates the dataSharePredicates. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KVStoreResultSet> | {KVStoreResultSet}: the {@code KVStoreResultSet}  object matching the specified deviceId and {@code dataSharePredicates.DataSharePredicates} object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 15100003 | Database corrupted. |
| 15100005 | Database or result set already closed. |
| 15100001 | Over max limits. [since 10] |

## getResultSize

```TypeScript
getResultSize(query: Query, callback: AsyncCallback<int>): void
```

Obtains the number of results that match the specified **Query** object for this device. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |
| callback | AsyncCallback&lt;int> | 是 | Callback used to return the number of results obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    const query = new distributedKVStore.Query();
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getResultSize(query, (err: BusinessError, resultSize: number) => {
        if (err) {
          console.error(`Failed to get result size. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting result set size');
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSize

```TypeScript
getResultSize(query: Query): Promise<int>
```

Obtains the number of results that match the specified **Query** object for this device. This API uses a promise to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of results obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting batch');
  }).catch((err: BusinessError) => {
    console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
  });
  const query = new distributedKVStore.Query();
  query.prefixKey('batch_test');
  kvStore.getResultSize(query).then((resultSize: number) => {
    console.info('Succeeded in getting result set size');
  }).catch((err: BusinessError) => {
    console.error(`Failed to get result size. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSize

```TypeScript
getResultSize(deviceId: string, query: Query, callback: AsyncCallback<int>): void
```

Obtains the number of results that match the specified device ID and **Query** object. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the device to which the KVStoreResultSet object belongs. |
| query | Query | 是 | Query object to match. |
| callback | AsyncCallback&lt;int> | 是 | Callback used to return the number of results obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    const query = new distributedKVStore.Query();
    query.prefixKey('batch_test');
    if (kvStore != null) {
      kvStore.getResultSize('localDeviceId', query, (err: BusinessError, resultSize: number) => {
        if (err) {
          console.error(`Failed to get resultSize. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in getting resultSize');
      });
    }
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get resultSize. Code: ${error.code}, message: ${error.message}`);
}

```

## getResultSize

```TypeScript
getResultSize(deviceId: string, query: Query): Promise<int>
```

Obtains the number of results that match the specified device ID and **Query** object. This API uses a promise to return the result. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the device to which the KVStoreResultSet object belongs. |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of results obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |
| 15100003 | Database corrupted. |
| 15100004 | Not found. |
| 15100005 | Database or result set already closed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < 10; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting batch');
  }).catch((err: BusinessError) => {
    console.error(`Failed to put batch. Code: ${err.code}, message: ${err.message}`);
  });
  let query = new distributedKVStore.Query();
  query.prefixKey('batch_test');
  kvStore.getResultSize('localDeviceId', query).then((resultSize: number) => {
    console.info('Succeeded in getting resultSize');
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultSize. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to get resultSize. Code: ${error.code}, message: ${error.message}`);
}

```

