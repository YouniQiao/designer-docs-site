# SingleKVStore

Provides APIs for data management in a single KV store, such as adding data, deleting data, and subscribing to data changes or across-device data sync completion events. Before calling any method in **SingleKVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-1) to obtain a **SingleKVStore** instance.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## Modules to Import

```TypeScript
import { distributedKVStore } from '@ohos.data.distributedKVStore';
```

## backup

```TypeScript
backup(file: string, callback: AsyncCallback<void>): void
```

Backs up a distributed KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| file | string | Yes | Name of the KV store. The value cannot be empty or exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let backupFile = "BK001";
try {
  kvStore.backup(backupFile, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to backup.code is ${err.code},message is ${err.message} `);
    } else {
      console.info(`Succeeded in backupping data`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## backup

```TypeScript
backup(file: string): Promise<void>
```

Backs up an RDB store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| file | string | Yes | Name of the KV store. The value cannot be empty or exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let backupFile = "BK001";
try {
  kvStore.backup(backupFile).then(() => {
    console.info(`Succeeded in backupping data`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to backup.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## backupEx

```TypeScript
backupEx(backupConfig: BackupConfig): Promise<void>
```

Backs up a database by specifying {@code BackupConfig}.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backupConfig | BackupConfig | Yes | Indicates the {@code BackupConfig} object for backup database. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15100000 | Input parameters do not meet the API requirements, such as invalid valueranges, length limits, or incorrect formats. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

## closeResultSet

```TypeScript
closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>): void
```

Closes the **KVStoreResultSet** object returned by [SingleKvStore.getResultSet](arkts-arkdata-singlekvstore-i.md#getresultset-2). This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resultSet | KVStoreResultSet | Yes | **KVStoreResultSet** object to close. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let resultSet: distributedKVStore.KVStoreResultSet;
try {
  kvStore.getResultSet('batch_test_string_key', async (err: BusinessError, result: distributedKVStore.KVStoreResultSet) => {
    if (err != undefined) {
      console.error(`Failed to get resultset.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in getting result set');
    resultSet = result;
    if (kvStore != null) {
      kvStore.closeResultSet(resultSet, (err: BusinessError) => {
        if (err != undefined) {
          console.error(`Failed to close resultset.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in closing result set');
      })
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}


```

## closeResultSet

```TypeScript
closeResultSet(resultSet: KVStoreResultSet): Promise<void>
```

Closes the **KVStoreResultSet** object returned by [SingleKvStore.getResultSet](arkts-arkdata-singlekvstore-i.md#getresultset-2). This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resultSet | KVStoreResultSet | Yes | **KVStoreResultSet** object to close. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let resultSet: distributedKVStore.KVStoreResultSet;
try {
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('Succeeded in getting result set');
    resultSet = result;
    if (kvStore != null) {
      kvStore.closeResultSet(resultSet).then(() => {
        console.info('Succeeded in closing result set');
      }).catch((err: BusinessError) => {
        console.error(`Failed to close resultset.code is ${err.code},message is ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultset.code is ${err.code},message is ${err.message}`);
  });

} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## commit

```TypeScript
commit(callback: AsyncCallback<void>): void
```

Commits the transaction in this single KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.commit((err: BusinessError) => {
    if (err == undefined) {
      console.info('Succeeded in committing');
    } else {
      console.error(`Failed to commit.code is ${err.code},message is ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## commit

```TypeScript
commit(): Promise<void>
```

Commits the transaction in this single KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.commit().then(async () => {
    console.info('Succeeded in committing');
  }).catch((err: BusinessError) => {
    console.error(`Failed to commit.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## delete

```TypeScript
delete(key: string, callback: AsyncCallback<void>): void
```

Deletes a KV pair from this KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to delete. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-test-string';
try {
  kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, (err: BusinessError) => {
    if (err != undefined) {
      console.error(`Failed to put.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in putting');
    if (kvStore != null) {
      kvStore.delete(KEY_TEST_STRING_ELEMENT, (err: BusinessError) => {
        if (err != undefined) {
          console.error(`Failed to delete.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in deleting');
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## delete

```TypeScript
delete(key: string): Promise<void>
```

Deletes a KV pair from this KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to delete. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-test-string';
try {
  kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then(() => {
    console.info(`Succeeded in putting data`);
    if (kvStore != null) {
      kvStore.delete(KEY_TEST_STRING_ELEMENT).then(() => {
        console.info('Succeeded in deleting');
      }).catch((err: BusinessError) => {
        console.error(`Failed to delete.code is ${err.code},message is ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to put.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## deleteBackup

```TypeScript
deleteBackup(files: Array<string>, callback: AsyncCallback<Array<[string, number]>>): void
```

Deletes a backup file. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| files | Array&lt;string&gt; | Yes | Name of the backup file to delete. The value cannot be empty or exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |
| callback | AsyncCallback&lt;Array&lt;[string, number]&gt;&gt; | Yes | Callback used to return the name of the backup file deletedand the operation result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let files = ["BK001", "BK002"];
try {
  kvStore.deleteBackup(files, (err: BusinessError, data: [string, number][]) => {
    if (err) {
      console.error(`Failed to delete Backup.code is ${err.code},message is ${err.message}`);
    } else {
      console.info(`Succeed in deleting Backup.data=${data}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## deleteBackup

```TypeScript
deleteBackup(files: Array<string>): Promise<Array<[string, number]>>
```

Deletes a backup file. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| files | Array&lt;string&gt; | Yes | Name of the backup file to delete. The value cannot be empty or exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;[string, number]&gt;&gt; | Promise used to return the name of the backup file deleted and the operationresult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let files = ["BK001", "BK002"];
try {
  kvStore.deleteBackup(files).then((data: [string, number][]) => {
    console.info(`Succeed in deleting Backup.data=${data}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to delete Backup.code is ${err.code},message is ${err.message}`);
  })
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## deleteBackupEx

```TypeScript
deleteBackupEx(backupConfig: BackupConfig): Promise<void>
```

Delete database backup file by specifying {@code BackupConfig}.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backupConfig | BackupConfig | Yes | Indicates the {@code BackupConfig} object for delete backup file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15100000 | Input parameters do not meet the API requirements, such as invalid valueranges, length limits, or incorrect formats. |

## deleteBatch

```TypeScript
deleteBatch(keys: string[], callback: AsyncCallback<void>): void
```

Batch deletes KV pairs from this single KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | string[] | Yes | KV pairs to delete. This parameter cannot be empty. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  let keys: string[] = [];
  for (let i = 0; i < 5; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
    keys.push(key + i);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries, async (err: BusinessError) => {
    if (err != undefined) {
      console.error(`Failed to put Batch.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in putting Batch');
    if (kvStore != null) {
      kvStore.deleteBatch(keys, async (err: BusinessError) => {
        if (err != undefined) {
          console.error(`Failed to delete Batch.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in deleting Batch');
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## deleteBatch

```TypeScript
deleteBatch(keys: string[]): Promise<void>
```

Batch deletes KV pairs from this single KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | string[] | Yes | KV pairs to delete. This parameter cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let entries: distributedKVStore.Entry[] = [];
  let keys: string[] = [];
  for (let i = 0; i < 5; i++) {
    let key = 'batch_test_string_key';
    let entry: distributedKVStore.Entry = {
      key: key + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
    keys.push(key + i);
  }
  console.info(`entries: ${entries}`);
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting Batch');
    if (kvStore != null) {
      kvStore.deleteBatch(keys).then(() => {
        console.info('Succeeded in deleting Batch');
      }).catch((err: BusinessError) => {
        console.error(`Failed to delete Batch.code is ${err.code},message is ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to put Batch.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## enableSync

```TypeScript
enableSync(enabled: boolean, callback: AsyncCallback<void>): void
```

Sets cross-device data sync, which can be enabled or disabled. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable data sync across devices. The value **true** means to enable data syncacross devices, and the value **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.enableSync(true, (err: BusinessError) => {
    if (err == undefined) {
      console.info('Succeeded in enabling sync');
    } else {
      console.error(`Failed to enable sync.code is ${err.code},message is ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## enableSync

```TypeScript
enableSync(enabled: boolean): Promise<void>
```

Sets cross-device data sync, which can be enabled or disabled. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable data sync across devices. The value **true** means to enable data syncacross devices, and the value **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.enableSync(true).then(() => {
    console.info('Succeeded in enabling sync');
  }).catch((err: BusinessError) => {
    console.error(`Failed to enable sync.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## get

```TypeScript
get(key: string, callback: AsyncCallback<boolean | string | number | number | Uint8Array>): void
```

Obtains the value of the specified key. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the value to obtain. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |
| callback | AsyncCallback&lt;boolean \| string \| number \| number \| Uint8Array&gt; | Yes | Callback used to return the valueobtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100004](../errorcode-distributedKVStore.md#15100004-failed-to-find-data) | Not found. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

## get

```TypeScript
get(key: string): Promise<boolean | string | number | number | Uint8Array>
```

Obtains the value of the specified key. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the value to obtain. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean \| string \| number \| number \| Uint8Array&gt; | Promise used to return the value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100004](../errorcode-distributedKVStore.md#15100004-failed-to-find-data) | Not found. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

## getEntries

```TypeScript
getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void
```

Obtains all KV pairs that match the specified key prefix. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid andall data in the RDB store will be returned. |
| callback | AsyncCallback&lt;Entry[]&gt; | Yes | Callback used to return the KV pairs that match the specified prefix. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

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
    if (err != undefined) {
      console.error(`Failed to put Batch.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in putting Batch');
    if (kvStore != null) {
      kvStore.getEntries('batch_test_string_key', (err: BusinessError, entries: distributedKVStore.Entry[]) => {
        if (err != undefined) {
          console.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in getting Entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message} `);
}

```

## getEntries

```TypeScript
getEntries(keyPrefix: string): Promise<Entry[]>
```

Obtains all KV pairs that match the specified key prefix. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid andall data in the RDB store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entry[]&gt; | Promise used to return the KV pairs that match the specified prefix. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

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
        console.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to put Batch.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message} `);
}

```

## getEntries

```TypeScript
getEntries(query: Query, callback: AsyncCallback<Entry[]>): void
```

Obtains the KV pairs that match the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | Key prefix to match. |
| callback | AsyncCallback&lt;Entry[]&gt; | Yes | Callback used to return the KV pairs that match the specified **Query**object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

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
  console.info(`entries: {entries}`);
  kvStore.putBatch(entries, async (err: BusinessError) => {
    console.info('Succeeded in putting Batch');
    const query = new distributedKVStore.Query();
    query.prefixKey("batch_test");
    if (kvStore != null) {
      kvStore.getEntries(query, (err: BusinessError, entries: distributedKVStore.Entry[]) => {
        if (err != undefined) {
          console.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in getting Entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to get Entries.code is ${error.code},message is ${error.message}`);
}

```

## getEntries

```TypeScript
getEntries(query: Query): Promise<Entry[]>
```

Obtains the KV pairs that match the specified **Query** object. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | **Query** object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entry[]&gt; | Promise used to return the KV pairs that match the specified **Query** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

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
  console.info(`entries: {entries}`);
  kvStore.putBatch(entries).then(async () => {
    console.info('Succeeded in putting Batch');
    const query = new distributedKVStore.Query();
    query.prefixKey("batch_test");
    if (kvStore != null) {
      kvStore.getEntries(query).then((entries: distributedKVStore.Entry[]) => {
        console.info('Succeeded in getting Entries');
      }).catch((err: BusinessError) => {
        console.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`)
  });
  console.info('Succeeded in getting Entries');
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to get Entries.code is ${error.code},message is ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains a result set with the specified prefix from this single KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid andall data in the RDB store will be returned. |
| callback | AsyncCallback&lt;KVStoreResultSet&gt; | Yes | Callback used to return the result set with the specified prefix. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [15100001](../errorcode-distributedKVStore.md#15100001-subscription-count-reaches-the-limit) | Over max limits.<br>**Applicable version:** 10 |

**Example**

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
    if (err != undefined) {
      console.error(`Failed to put batch.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    if (kvStore != null) {
      kvStore.getResultSet('batch_test_string_key', async (err: BusinessError, result: distributedKVStore.KVStoreResultSet) => {
        if (err != undefined) {
          console.error(`Failed to get resultset.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in getting result set');
        resultSet = result;
        if (kvStore != null) {
          kvStore.closeResultSet(resultSet, (err :BusinessError) => {
            if (err != undefined) {
              console.error(`Failed to close resultset.code is ${err.code},message is ${err.message}`);
              return;
            }
            console.info('Succeeded in closing result set');
          });
        }
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(keyPrefix: string): Promise<KVStoreResultSet>
```

Obtains a result set with the specified prefix from this single KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. It cannot contain '^'; otherwise, the predicate becomes invalid andall data in the RDB store will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KVStoreResultSet&gt; | Promise used to return the result set with the specified prefix. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [15100001](../errorcode-distributedKVStore.md#15100001-subscription-count-reaches-the-limit) | Over max limits.<br>**Applicable version:** 10 |

**Example**

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
    console.error(`Failed to put batch.code is ${err.code},message is ${err.message}`);
  });
  kvStore.getResultSet('batch_test_string_key').then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('Succeeded in getting result set');
    resultSet = result;
    if (kvStore != null) {
      kvStore.closeResultSet(resultSet).then(() => {
        console.info('Succeeded in closing result set');
      }).catch((err: BusinessError) => {
        console.error(`Failed to close resultset.code is ${err.code},message is ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultset.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(query: Query, callback: AsyncCallback<KVStoreResultSet>): void
```

Obtains a **KVStoreResultSet** object that matches the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | **Query** object to match. |
| callback | AsyncCallback&lt;KVStoreResultSet&gt; | Yes | Callback used to return the **KVStoreResultSet** object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [15100001](../errorcode-distributedKVStore.md#15100001-subscription-count-reaches-the-limit) | Over max limits.<br>**Applicable version:** 10 |

**Example**

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
    if (err != undefined) {
      console.error(`Failed to put batch.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in putting batch');
    const query = new distributedKVStore.Query();
    query.prefixKey("batch_test");
    if (kvStore != null) {
      kvStore.getResultSet(query, async (err: BusinessError, result: distributedKVStore.KVStoreResultSet) => {
        if (err != undefined) {
          console.error(`Failed to get resultset.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in getting result set');
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## getResultSet

```TypeScript
getResultSet(query: Query): Promise<KVStoreResultSet>
```

Obtains a **KVStoreResultSet** object that matches the specified **Query** object. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | **Query** object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KVStoreResultSet&gt; | Promise used to return the **KVStoreResultSet** object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [15100001](../errorcode-distributedKVStore.md#15100001-subscription-count-reaches-the-limit) | Over max limits.<br>**Applicable version:** 10 |

**Example**

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
    console.error(`Failed to put batch.code is ${err.code},message is ${err.message}`);
  });
  const query = new distributedKVStore.Query();
  query.prefixKey("batch_test");
  kvStore.getResultSet(query).then((result: distributedKVStore.KVStoreResultSet) => {
    console.info('Succeeded in getting result set');
    resultSet = result;
  }).catch((err: BusinessError) => {
    console.error(`Failed to get resultset.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## getResultSize

```TypeScript
getResultSize(query: Query, callback: AsyncCallback<number>): void
```

Obtains the number of results that match the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | **Query** object to match. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the number of results obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100004](../errorcode-distributedKVStore.md#15100004-failed-to-find-data) | Not found. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

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
    console.info('Succeeded in putting batch');
    const query = new distributedKVStore.Query();
    query.prefixKey("batch_test");
    if (kvStore != null) {
      kvStore.getResultSize(query, (err: BusinessError, resultSize: number) => {
        if (err != undefined) {
          console.error(`Failed to get result size.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in getting result set size');
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## getResultSize

```TypeScript
getResultSize(query: Query): Promise<number>
```

Obtains the number of results that match the specified **Query** object. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | **Query** object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of results obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100004](../errorcode-distributedKVStore.md#15100004-failed-to-find-data) | Not found. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

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
    console.error(`Failed to put batch.code is ${err.code},message is ${err.message}`);
  });
  const query = new distributedKVStore.Query();
  query.prefixKey("batch_test");
  kvStore.getResultSize(query).then((resultSize: number) => {
    console.info('Succeeded in getting result set size');
  }).catch((err: BusinessError) => {
    console.error(`Failed to get result size.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## getSecurityLevel

```TypeScript
getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void
```

Obtains the security level of this KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SecurityLevel&gt; | Yes | Callback used to return the security level of the KV store. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.getSecurityLevel((err: BusinessError, data: distributedKVStore.SecurityLevel) => {
    if (err != undefined) {
      console.error(`Failed to get SecurityLevel.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in getting securityLevel');
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## getSecurityLevel

```TypeScript
getSecurityLevel(): Promise<SecurityLevel>
```

Obtains the security level of this KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SecurityLevel&gt; | Promise used to return the security level of the KV store. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.getSecurityLevel().then((data: distributedKVStore.SecurityLevel) => {
    console.info('Succeeded in getting securityLevel');
  }).catch((err: BusinessError) => {
    console.error(`Failed to get SecurityLevel.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## off

```TypeScript
off(event: 'dataChange', listener?: Callback<ChangeNotification>): void
```

Unsubscribes from data changes.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is **dataChange**, which indicates a data change event. |
| listener | Callback&lt;ChangeNotification&gt; | No | Callback to unregister. If this parameter is not specified, this APIunregisters all callbacks for data changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class KvstoreModel {
  call(data: distributedKVStore.ChangeNotification) {
    console.info(`dataChange : ${data}`);
  }

  subscribeDataChange() {
    try {
      if (kvStore != null) {
        kvStore.on('dataChange', distributedKVStore.SubscribeType.SUBSCRIBE_TYPE_REMOTE, this.call);
      }
    } catch (err) {
      let error = err as BusinessError;
      console.error(`Failed to subscribeDataChange.code is ${error.code},message is ${error.message}`);
    }
  }

  unsubscribeDataChange() {
    try {
      if (kvStore != null) {
        kvStore.off('dataChange', this.call);
      }
    } catch (err) {
      let error = err as BusinessError;
      console.error(`Failed to unsubscribeDataChange.code is ${error.code},message is ${error.message}`);
    }
  }
}

```

## off

```TypeScript
off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void
```

Unsubscribes from the cross-device data sync completion events.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is **syncComplete**, which indicates a sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]&gt;&gt; | No | Callback to unregister. If this parameter is not set, allcallbacks used to listen for the data sync completion event are unregistered. When multiple ArkTS instances (obtained through the[getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-1)API) of the same database all register the callback used to listen for the sync completion event, if all thesecallbacks are unregistered by one of the ArkTS instances, then the callbacks of the others are also unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class KvstoreModel {
  call(data: [string, number][]) {
    console.info(`syncComplete : ${data}`);
  }

  subscribeDataChange() {
    try {
      if (kvStore != null) {
        kvStore.on('syncComplete', this.call);
      }
    } catch (err) {
      let error = err as BusinessError;
      console.error(`Failed to subscribeDataChange.code is ${error.code},message is ${error.message}`);
    }
  }

  unsubscribeDataChange() {
    try {
      if (kvStore != null) {
        kvStore.off('syncComplete', this.call);
      }
    } catch (err) {
      let error = err as BusinessError;
      console.error(`Failed to unsubscribeDataChange.code is ${error.code},message is ${error.message}`);
    }
  } 
}

```

## on

```TypeScript
on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void
```

Subscribes to data changes of the specified type.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is **dataChange**, which indicates a data change event. |
| type | SubscribeType | Yes | Type of data change. |
| listener | Callback&lt;ChangeNotification&gt; | Yes | Callback used to return the object to be notified when the datachanges. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100001](../errorcode-distributedKVStore.md#15100001-subscription-count-reaches-the-limit) | Over max limits. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.on('dataChange', distributedKVStore.SubscribeType.SUBSCRIBE_TYPE_LOCAL, (data: distributedKVStore.ChangeNotification) => {
    console.info(`dataChange callback call data: ${data}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## on

```TypeScript
on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void
```

Subscribes to the cross-device data sync completion events.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is **syncComplete**, which indicates the sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]&gt;&gt; | Yes | Callback used to return the sync completion event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';


const KEY_TEST_FLOAT_ELEMENT = 'key_test_float';
const VALUE_TEST_FLOAT_ELEMENT = 321.12;
try {
  kvStore.on('syncComplete', (data: [string, number][]) => {
    console.info(`syncComplete ${data}`);
  });
  kvStore.put(KEY_TEST_FLOAT_ELEMENT, VALUE_TEST_FLOAT_ELEMENT).then(() => {
    console.info('succeeded in putting');
  }).catch((err: BusinessError) => {
    console.error(`Failed to put.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to subscribe syncComplete.code is ${error.code},message is ${error.message}`);
}

```

## put

```TypeScript
put(key: string, value: Uint8Array | string | number | number | boolean, callback: AsyncCallback<void>): void
```

Adds a KV pair of the specified type to this KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to add. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |
| value | Uint8Array \| string \| number \| number \| boolean | Yes | Value of the KV pair to add. The value type can be Uint8Array, long , double, string, or boolean. A value of the Uint8Array or string type cannot exceed[MAX_VALUE_LENGTH](arkts-arkdata-constants-i.md#constants). |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

## put

```TypeScript
put(key: string, value: Uint8Array | string | number | number | boolean): Promise<void>
```

Adds a KV pair of the specified type to this KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to add. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |
| value | Uint8Array \| string \| number \| number \| boolean | Yes | Value of the KV pair to add. The value type can be Uint8Array, long , double, string, or boolean. A value of the Uint8Array or string type cannot exceed[MAX_VALUE_LENGTH](arkts-arkdata-constants-i.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types;<br>3.Parameter verification failed. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

## putBatch

```TypeScript
putBatch(entries: Entry[], callback: AsyncCallback<void>): void
```

Batch inserts KV pairs to this single KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entries | Entry[] | Yes | KV pairs to insert, which cannot exceed 512 MB. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

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
    if (err != undefined) {
      console.error(`Failed to put Batch.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in putting Batch');
    if (kvStore != null) {
      kvStore.getEntries('batch_test_string_key', (err: BusinessError, entries: distributedKVStore.Entry[]) => {
        if (err != undefined) {
          console.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);
        }
        console.info('Succeeded in getting Entries');
        console.info(`entries.length: ${entries.length}`);
        console.info(`entries[0]: ${entries[0]}`);
      });
    } else {
      console.error('KvStore is null'); // The subsequent sample code is the same as the code here.
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message} `);
}

```

## putBatch

```TypeScript
putBatch(entries: Entry[]): Promise<void>
```

Batch inserts KV pairs to this single KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entries | Entry[] | Yes | KV pairs to insert, which cannot exceed 512 MB. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

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
        console.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);
      });
    }
  }).catch((err: BusinessError) => {
    console.error(`Failed to put Batch.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message} `);
}

```

## rekey

```TypeScript
rekey(): Promise<void>
```

Update the key used to encrypt the database.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| 15100006 | Failed to update the key. |

## removeDeviceData

```TypeScript
removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void
```

Deletes data of a device. This API uses an asynchronous callback to return the result. > **NOTE** > > **deviceId** is **networkId** in > [DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicebasicinfo-i.md#devicebasicinfo), which can be > obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-i.md#getavailabledevicelistsync-1) > . > > For details about how to obtain **deviceId**, see [sync()](arkts-arkdata-syncmode-e.md#syncmode).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Network ID of the target device. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const KEY_TEST_STRING_ELEMENT = 'key_test_string_2';
const VALUE_TEST_STRING_ELEMENT = 'value-string-002';
try {
  kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, async (err: BusinessError) => {
    console.info('Succeeded in putting data');
    const deviceid = 'no_exist_device_id';
    if (kvStore != null) {
      kvStore.removeDeviceData(deviceid, async (err: BusinessError) => {
        if (err == undefined) {
          console.info('succeeded in removing device data');
        } else {
          console.error(`Failed to remove device data.code is ${err.code},message is ${err.message} `);
          if (kvStore != null) {
            kvStore.get(KEY_TEST_STRING_ELEMENT, async (err: BusinessError, data: boolean | string | number | Uint8Array) => {
              console.info('Succeeded in getting data');
            });
          }
        }
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`)
}

```

## removeDeviceData

```TypeScript
removeDeviceData(deviceId: string): Promise<void>
```

Deletes data of a device. This API uses a promise to return the result. > **NOTE** > > **deviceId** is **networkId** in > [DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicebasicinfo-i.md#devicebasicinfo), which can be > obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-i.md#getavailabledevicelistsync-1) > . > > For details about how to obtain **deviceId**, see [sync()](arkts-arkdata-syncmode-e.md#syncmode).

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Network ID of the target device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const KEY_TEST_STRING_ELEMENT = 'key_test_string_2';
const VALUE_TEST_STRING_ELEMENT = 'value-string-001';
try {
  kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then(() => {
    console.info('Succeeded in putting data');
  }).catch((err: BusinessError) => {
    console.error(`Failed to put data.code is ${err.code},message is ${err.message} `);
  });
  const deviceid = 'no_exist_device_id';
  kvStore.removeDeviceData(deviceid).then(() => {
    console.info('succeeded in removing device data');
  }).catch((err: BusinessError) => {
    console.error(`Failed to remove device data.code is ${err.code},message is ${err.message} `);
  });
  kvStore.get(KEY_TEST_STRING_ELEMENT).then((data: boolean | string | number | Uint8Array) => {
    console.info('Succeeded in getting data');
  }).catch((err: BusinessError) => {
    console.error(`Failed to get data.code is ${err.code},message is ${err.message} `);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`)
}

```

## restore

```TypeScript
restore(file: string, callback: AsyncCallback<void>): void
```

Restores a distributed KV store from a database file. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| file | string | Yes | Name of the database file. The value cannot be empty or exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let backupFile = "BK001";
try {
  kvStore.restore(backupFile, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to restore.code is ${err.code},message is ${err.message}`);
    } else {
      console.info(`Succeeded in restoring data`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## restore

```TypeScript
restore(file: string): Promise<void>
```

Restores a distributed KV store from a database file. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| file | string | Yes | Name of the database file. The value cannot be empty or exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-i.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Parameter verification failed. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let backupFile = "BK001";
try {
  kvStore.restore(backupFile).then(() => {
    console.info(`Succeeded in restoring data`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to restore.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## restoreEx

```TypeScript
restoreEx(backupConfig: BackupConfig): Promise<void>
```

Restores a database by specifying {@code BackupConfig}.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backupConfig | BackupConfig | Yes | Indicates the {@code BackupConfig} object for restore database. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 15100000 | Input parameters do not meet the API requirements, such as invalid valueranges, length limits, or incorrect formats. |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

## rollback

```TypeScript
rollback(callback: AsyncCallback<void>): void
```

Rolls back the transaction in this single KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.rollback((err: BusinessError) => {
    if (err == undefined) {
      console.info('Succeeded in rolling back');
    } else {
      console.error(`Failed to rollback.code is ${err.code},message is ${err.message}`);
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## rollback

```TypeScript
rollback(): Promise<void>
```

Rolls back the transaction in this single KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  kvStore.rollback().then(async () => {
    console.info('Succeeded in rolling back');
  }).catch((err: BusinessError) => {
    console.error(`Failed to rollback.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## setSyncParam

```TypeScript
setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void
```

Sets the default delay for cross-device data sync. This API uses an asynchronous callback to return the result. > **NOTE** > > After the default delay is set, calling [sync](arkts-arkdata-syncmode-e.md#syncmode) will not trigger the cross- > device data sync immediately. Instead, the data sync will be executed only after the specified delay duration.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| defaultAllowedDelayMs | number | Yes | Delay time to set, in ms. The value can be **0** or ranges from 100 to 86400000. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const defaultAllowedDelayMs = 500;
  kvStore.setSyncParam(defaultAllowedDelayMs, (err: BusinessError) => {
    if (err != undefined) {
      console.error(`Failed to set syncParam.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in setting syncParam');
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## setSyncParam

```TypeScript
setSyncParam(defaultAllowedDelayMs: number): Promise<void>
```

Sets the default delay for cross-device data sync. This API uses a promise to return the result. > **NOTE** > > After the default delay is set, calling [sync](arkts-arkdata-syncmode-e.md#syncmode) will not trigger the cross- > device data sync immediately. Instead, the data sync will be executed only after the specified delay duration.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| defaultAllowedDelayMs | number | Yes | Delay time to set, in ms. The value can be **0** or ranges from 100 to 86400000. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const defaultAllowedDelayMs = 500;
  kvStore.setSyncParam(defaultAllowedDelayMs).then(() => {
    console.info('Succeeded in setting syncParam');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set syncParam.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## setSyncRange

```TypeScript
setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void
```

Sets the data sync range. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localLabels | string[] | Yes | Sync labels set for the local device. |
| remoteSupportLabels | string[] | Yes | Sync labels set for remote devices. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const localLabels = ['A', 'B'];
  const remoteSupportLabels = ['C', 'D'];
  kvStore.setSyncRange(localLabels, remoteSupportLabels, (err: BusinessError) => {
    if (err != undefined) {
      console.error(`Failed to set syncRange.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in setting syncRange');
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## setSyncRange

```TypeScript
setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>
```

Sets the data sync range. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localLabels | string[] | Yes | Sync labels set for the local device. |
| remoteSupportLabels | string[] | Yes | Sync labels set for remote devices. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const localLabels = ['A', 'B'];
  const remoteSupportLabels = ['C', 'D'];
  kvStore.setSyncRange(localLabels, remoteSupportLabels).then(() => {
    console.info('Succeeded in setting syncRange');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set syncRange.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);
}

```

## startTransaction

```TypeScript
startTransaction(callback: AsyncCallback<void>): void
```

Starts the transaction in this single KV store. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function putBatchString(len: number, prefix: string) {
  let entries: distributedKVStore.Entry[] = [];
  for (let i = 0; i < len; i++) {
    let entry: distributedKVStore.Entry = {
      key: prefix + i,
      value: {
        type: distributedKVStore.ValueType.STRING,
        value: 'batch_test_string_value'
      }
    }
    entries.push(entry);
  }
  return entries;
} // Custom function used outside the scope to prevent syntax check errors.

try {
  let count = 0;
  kvStore.on('dataChange', 0, (data: distributedKVStore.ChangeNotification) => {
    console.info(`startTransaction 0 ${data}`);
    count++;
  });
  kvStore.startTransaction(async (err: BusinessError) => {
    if (err != undefined) {
      console.error(`Failed to start Transaction.code is ${err.code},message is ${err.message}`);
      return;
    }
    console.info('Succeeded in starting Transaction');
    let entries = putBatchString(10, 'batch_test_string_key');
    console.info(`entries: ${entries}`);
    if (kvStore != null) {
      kvStore.putBatch(entries, async (err: BusinessError) => {
        if (err != undefined) {
          console.error(`Failed to put batch.code is ${err.code},message is ${err.message}`);
          return;
        }
        console.info('Succeeded in putting Batch');
      });
    }
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to start Transaction.code is ${error.code},message is ${error.message}`);
}

```

## startTransaction

```TypeScript
startTransaction(): Promise<void>
```

Starts the transaction in this single KV store. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [15100005](../errorcode-distributedKVStore.md#15100005-kv-store-or-result-set-closed) | Database or result set already closed. |
| [14800047](../errorcode-data-rdb.md#14800047-wal-file-size-exceeds-the-default-limit) | The WAL file size exceeds the default limit.<br>**Applicable version:** 10 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let count = 0;
  kvStore.on('dataChange', distributedKVStore.SubscribeType.SUBSCRIBE_TYPE_ALL, (data: distributedKVStore.ChangeNotification) => {
    console.info(`startTransaction 0 ${data}`);
    count++;
  });
  kvStore.startTransaction().then(async () => {
    console.info('Succeeded in starting Transaction');
  }).catch((err: BusinessError) => {
    console.error(`Failed to start Transaction.code is ${err.code},message is ${err.message}`);
  });
} catch (e) {
  let error = e as BusinessError;
  console.error(`Failed to start Transaction.code is ${error.code},message is ${error.message}`);
}

```

## sync

```TypeScript
sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void
```

Starts cross-device data sync manually. For details about the sync modes of KV stores, see [Cross-Device Synchronization of KV Stores](../../../../database/data-sync-of-kv-store.md). > **NOTE** > > **deviceIds** is **networkId** in > [DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicebasicinfo-i.md#devicebasicinfo), which can be > obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-i.md#getavailabledevicelistsync-1) > .

**Since:** 9

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceIds | string[] | Yes | List of **networkId**s of the devices in the same networking environment to besynchronized. |
| mode | SyncMode | Yes | Sync mode. |
| delayMs | number | No | Delay time allowed, in ms. The default value is **0**. If **delayMs** is set, data sync will beexecuted **delayMs** after **sync()** is called. If **delayMs** is not set, the delay set in[setSyncParam](arkts-arkdata-singlekvstore-i.md#setsyncparam-1)is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100004](../errorcode-distributedKVStore.md#15100004-failed-to-find-data) | Not found. |

**Example**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let devManager: distributedDeviceManager.DeviceManager;
const KEY_TEST_SYNC_ELEMENT = 'key_test_sync';
const VALUE_TEST_SYNC_ELEMENT = 'value-string-001';
// create deviceManager
export default class EntryAbility extends UIAbility {
  onCreate() {
    let context = this.context;
    try {
      devManager = distributedDeviceManager.createDeviceManager(context.applicationInfo.name);
      let deviceIds: string[] = [];
      if (devManager != null) {
        let devices = devManager.getAvailableDeviceListSync();
        for (let i = 0; i < devices.length; i++) {
          deviceIds[i] = devices[i].networkId as string;
        }
      }
      try {
        if (kvStore != null) {
          kvStore.on('syncComplete', (data: [string, number][]) => {
            console.info('Sync dataChange');
          });
          if (kvStore != null) {
            kvStore.put(KEY_TEST_SYNC_ELEMENT + 'testSync101', VALUE_TEST_SYNC_ELEMENT, (err: BusinessError) => {
              if (err != undefined) {
                console.error(`Failed to sync.code is ${err.code},message is ${err.message}`);
                return;
              }
              console.info('Succeeded in putting data');
              const mode = distributedKVStore.SyncMode.PULL_ONLY;
              if (kvStore != null) {
                kvStore.sync(deviceIds, mode, 1000);
              }
            });
          }
        }
      } catch (e) {
        let error = e as BusinessError;
        console.error(`Failed to sync.code is ${error.code},message is ${error.message}`);
      }

    } catch (err) {
      let error = err as BusinessError;
      console.error("createDeviceManager errCode:" + error.code + ",errMessage:" + error.message);
    }
  }
}

```

## sync

```TypeScript
sync(deviceIds: string[], query: Query, mode: SyncMode, delayMs?: number): void
```

Starts cross-device data sync manually. This API returns the result synchronously. For details about the sync modes of KV stores, see [Cross-Device Synchronization of KV Stores](../../../../database/data-sync-of-kv-store.md). > **NOTE** > > **deviceIds** is **networkId** in > [DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicebasicinfo-i.md#devicebasicinfo), which can be > obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-i.md#getavailabledevicelistsync-1) > .

**Since:** 9

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceIds | string[] | Yes | List of **networkId**s of the devices in the same networking environment to besynchronized. |
| query | Query | Yes | **Query** object to match. |
| mode | SyncMode | Yes | Sync mode. |
| delayMs | number | No | Delay time allowed, in ms. The default value is **0**. If **delayMs** is set, data sync will beexecuted **delayMs** after **sync()** is called. If **delayMs** is not set, the delay set in[setSyncParam](arkts-arkdata-singlekvstore-i.md#setsyncparam-1)is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameters types. |
| [15100003](../errorcode-distributedKVStore.md#15100003-kv-store-corrupted) | Database corrupted. |
| [15100004](../errorcode-distributedKVStore.md#15100004-failed-to-find-data) | Not found. |

**Example**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const KEY_TEST_SYNC_ELEMENT = 'key_test_sync';
const VALUE_TEST_SYNC_ELEMENT = 'value-string-001';
// create deviceManager
export default class EntryAbility extends UIAbility {
  onCreate() {
    let context = this.context;
    try {
      let devManager = distributedDeviceManager.createDeviceManager(context.applicationInfo.name);
      let deviceIds: string[] = [];
      if (devManager != null) {
        let devices = devManager.getAvailableDeviceListSync();
        for (let i = 0; i < devices.length; i++) {
          deviceIds[i] = devices[i].networkId as string;
        }
      }
      try {
        if (kvStore != null) {
          kvStore.on('syncComplete', (data: [string, number][]) => {
            console.info('Sync dataChange');
          });
          if (kvStore != null) {
            kvStore.put(KEY_TEST_SYNC_ELEMENT + 'testSync101', VALUE_TEST_SYNC_ELEMENT, (err: BusinessError) => {
              if (err != undefined) {
                console.error(`Failed to sync.code is ${err.code},message is ${err.message}`);
                return;
              }
              console.info('Succeeded in putting data');
              const mode = distributedKVStore.SyncMode.PULL_ONLY;
              const query = new distributedKVStore.Query();
              query.prefixKey("batch_test");
              query.deviceId(devManager.getLocalDeviceNetworkId());
              if (kvStore != null) {
                kvStore.sync(deviceIds, query, mode, 1000);
              }
            });
          }
        }
      } catch (e) {
        let error = e as BusinessError;
        console.error(`Failed to sync.code is ${error.code},message is ${error.message}`);
      }

    } catch (err) {
      let error = err as BusinessError;
      console.error("createDeviceManager errCode:" + error.code + ",errMessage:" + error.message);
    }
  }
}

```

