# KVStore

Provides APIs to manage data in a KV store, for example, adding or deleting data and subscribing to data changes or
completion of data sync.
Before calling any method in **KVStore**, you must use
[getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-2)
to obtain a **KVStore** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** SingleKVStore

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## commit

```TypeScript
commit(callback: AsyncCallback<void>): void
```

Commits the transaction in this KV store. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** commit

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
try {
    kvStore.commit(function (err,data) {
        if (err == undefined) {
            console.log('commit success');
        } else {
            console.log('commit fail');
        }
    });
}catch(e) {
    console.log('Commit e ' + e);
}

```

## commit

```TypeScript
commit(): Promise<void>
```

Commits the transaction in this KV store. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** commit

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
try {
    kvStore.commit().then(async (err) => {
        console.log('commit success');
    }).catch((err) => {
        console.log('commit fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('Commit e ' + e);
}

```

## delete

```TypeScript
delete(key: string, callback: AsyncCallback<void>): void
```

Deletes a KV pair from this KV store. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** delete

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to delete. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-n.md#constants). |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-test-string';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, function (err,data) {
        if (err != undefined) {
            console.log("put err: " + JSON.stringify(err));
            return;
        }
        console.log("put success");
        kvStore.delete(KEY_TEST_STRING_ELEMENT, function (err,data) {
            if (err != undefined) {
                console.log("delete err: " + JSON.stringify(err));
                return;
            }
            console.log("delete success");
        });
    });
}catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## delete

```TypeScript
delete(key: string): Promise<void>
```

Deletes a KV pair from this KV store. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** delete

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to delete. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-n.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-test-string';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then((data) => {
        console.log("put success: " + JSON.stringify(data));
        kvStore.delete(KEY_TEST_STRING_ELEMENT).then((data) => {
            console.log("delete success");
        }).catch((err) => {
            console.log("delete err: " + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log("put err: " + JSON.stringify(err));
    });
}catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## deleteBatch

```TypeScript
deleteBatch(keys: string[], callback: AsyncCallback<void>): void
```

Deletes KV pairs in batches from this KV store. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deleteBatch

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | string[] | Yes | KV pairs to delete in batches. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
try {
    let entries = [];
    let keys = [];
    for (var i = 0; i < 5; i++) {
        var key = 'batch_test_string_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.STRING,
                value : 'batch_test_string_value'
            }
        }
        entries.push(entry);
        keys.push(key + i);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries, async function (err,data) {
        console.log('putBatch success');
        kvStore.deleteBatch(keys, async function (err,data) {
            console.log('deleteBatch success');
        });
    });
}catch(e) {
    console.log('DeleteBatch e ' + e);
}

```

## deleteBatch

```TypeScript
deleteBatch(keys: string[]): Promise<void>
```

Deletes KV pairs in batches from this KV store. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deleteBatch

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | string[] | Yes | KV pairs to delete in batches. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
try {
    let entries = [];
    let keys = [];
    for (var i = 0; i < 5; i++) {
        var key = 'batch_test_string_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.STRING,
                value : 'batch_test_string_value'
            }
        }
        entries.push(entry);
        keys.push(key + i);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
        kvStore.deleteBatch(keys).then((err) => {
            console.log('deleteBatch success');
        }).catch((err) => {
            console.log('deleteBatch fail ' + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log('putBatch fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('DeleteBatch e ' + e);
}

```

## enableSync

```TypeScript
enableSync(enabled: boolean, callback: AsyncCallback<void>): void
```

Sets data sync, which can be enabled or disabled. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** enableSync

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable data sync. The value **true** means to enable data sync, and **false**means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
try {
    kvStore.enableSync(true, function (err,data) {
        if (err == undefined) {
            console.log('enableSync success');
        } else {
            console.log('enableSync fail');
        }
    });
}catch(e) {
    console.log('EnableSync e ' + e);
}

```

## enableSync

```TypeScript
enableSync(enabled: boolean): Promise<void>
```

Sets data sync, which can be enabled or disabled. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** enableSync

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable data sync. The value **true** means to enable data sync, and **false**means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
try {
    kvStore.enableSync(true).then((err) => {
        console.log('enableSync success');
    }).catch((err) => {
        console.log('enableSync fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('EnableSync e ' + e);
}

```

## off

```TypeScript
off(event: 'dataChange', listener?: Callback<ChangeNotification>): void
```

Unsubscribes from data changes.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is **dataChange**, which indicates data changes. |
| listener | Callback&lt;ChangeNotification&gt; | No | Callback to unregister. If this parameter is not specified, allcallbacks for data changes will be unregistered. |

**Example**

```TypeScript
let kvStore;
class KvstoreModel {
    call(data) {
        console.log("dataChange: " + data);
    }
    subscribeDataChange() {
        if (kvStore != null) {
            kvStore.on('dataChange', distributedData.SubscribeType.SUBSCRIBE_TYPE_REMOTE, this.call);
        }
    }
    unsubscribeDataChange() {
        if (kvStore != null) {
            kvStore.off('dataChange', this.call);
        }
    }
}

```

## off

```TypeScript
off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void
```

Unsubscribes from sync completion events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is **syncComplete**, which indicates a sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]&gt;&gt; | No | Callback to unregister. If this parameter is not specified,all callbacks for data changes will be unregistered. |

**Example**

```TypeScript
let kvStore;
class KvstoreModel {
    call(data) {
        console.log("syncComplete: " + data);
    }
    subscribeSyncComplete() {
        if (kvStore != null) {
            kvStore.on('syncComplete', this.call);
        }
    }
    unsubscribeSyncComplete() {
        if (kvStore != null) {
            kvStore.off('syncComplete', this.call);
        }
    }
}

```

## on

```TypeScript
on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void
```

Subscribes to data changes of the specified type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** on

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is **dataChange**, which indicates data changes. |
| type | SubscribeType | Yes | Type of data change. |
| listener | Callback&lt;ChangeNotification&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
kvStore.on('dataChange', distributedData.SubscribeType.SUBSCRIBE_TYPE_LOCAL, function (data) {
    console.log("dataChange callback call data: " + JSON.stringify(data));
});

```

## on

```TypeScript
on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void
```

Subscribes to sync completion events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** on

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is **syncComplete**, which indicates a sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]&gt;&gt; | Yes | Callback used to return a sync completion event. |

**Example**

```TypeScript
let kvStore;
kvStore.on('syncComplete', function (data) {
    console.log("callback call data: " + data);
});

```

## put

```TypeScript
put(key: string, value: Uint8Array | string | number | boolean, callback: AsyncCallback<void>): void
```

Adds a KV pair of the specified type to this KV store. This API uses an asynchronous callback to return the
result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** put

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to add. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-n.md#constants). |
| value | Uint8Array \| string \| number \| boolean | Yes | Value of the KV pair to add. The value type can be Uint8Array,number, string, or boolean. A value of the Uint8Array or string type cannot exceed[MAX_VALUE_LENGTH](arkts-arkdata-constants-n.md#constants). |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-test-string';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, function (err,data) {
        if (err != undefined) {
            console.log("put err: " + JSON.stringify(err));
            return;
        }
        console.log("put success");
    });
}catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## put

```TypeScript
put(key: string, value: Uint8Array | string | number | boolean): Promise<void>
```

Adds a KV pair of the specified type to this KV store. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** put

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the KV pair to add. It cannot be empty, and the length cannot exceed[MAX_KEY_LENGTH](arkts-arkdata-constants-n.md#constants). |
| value | Uint8Array \| string \| number \| boolean | Yes | Value of the KV pair to add. The value type can be Uint8Array,number, string, or boolean. A value of the Uint8Array or string type cannot exceed[MAX_VALUE_LENGTH](arkts-arkdata-constants-n.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-test-string';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then((data) => {
        console.log("put success: " + JSON.stringify(data));
    }).catch((err) => {
        console.log("put err: " + JSON.stringify(err));
    });
}catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## putBatch

```TypeScript
putBatch(entries: Entry[], callback: AsyncCallback<void>): void
```

Inserts KV pairs in batches to this KV store. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** putBatch

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entries | Entry[] | Yes | KV pairs to insert in batches. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
try {
    let entries = [];
    for (var i = 0; i < 10; i++) {
        var key = 'batch_test_string_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.STRING,
                value : 'batch_test_string_value'
            }
        }
        entries.push(entry);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries, async function (err,data) {
        console.log('putBatch success');
        kvStore.getEntries('batch_test_string_key', function (err,entries) {
            console.log('getEntries success');
            console.log('entries.length: ' + entries.length);
            console.log('entries[0]: ' + JSON.stringify(entries[0]));
        });
    });
}catch(e) {
    console.log('PutBatch e ' + JSON.stringify(e));
}

```

## putBatch

```TypeScript
putBatch(entries: Entry[]): Promise<void>
```

Inserts KV pairs in batches to this KV store. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** putBatch

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entries | Entry[] | Yes | KV pairs to insert in batches. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
try {
    let entries = [];
    for (var i = 0; i < 10; i++) {
        var key = 'batch_test_string_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.STRING,
                value : 'batch_test_string_value'
            }
        }
        entries.push(entry);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
        kvStore.getEntries('batch_test_string_key').then((entries) => {
            console.log('getEntries success');
            console.log('PutBatch ' + JSON.stringify(entries));
        }).catch((err) => {
            console.log('getEntries fail ' + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log('putBatch fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('PutBatch e ' + JSON.stringify(e));
}

```

## rollback

```TypeScript
rollback(callback: AsyncCallback<void>): void
```

Rolls back the transaction in this KV store. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** rollback

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
try {
    kvStore.rollback(function (err,data) {
        if (err == undefined) {
            console.log('commit success');
        } else {
            console.log('commit fail');
        }
    });
}catch(e) {
    console.log('Rollback e ' + e);
}

```

## rollback

```TypeScript
rollback(): Promise<void>
```

Rolls back the transaction in this KV store. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** rollback

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
try {
    kvStore.rollback().then(async (err) => {
        console.log('rollback success');
    }).catch((err) => {
        console.log('rollback fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('Rollback e ' + e);
}

```

## setSyncRange

```TypeScript
setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void
```

Sets the data sync range. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setSyncRange

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localLabels | string[] | Yes | Sync labels set for the local device. |
| remoteSupportLabels | string[] | Yes | Sync labels set for remote devices. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
try {
    const localLabels = ['A', 'B'];
    const remoteSupportLabels = ['C', 'D'];
    kvStore.setSyncRange(localLabels, remoteSupportLabels, function (err,data) {
        console.log('SetSyncRange put success');
    });
}catch(e) {
    console.log('SetSyncRange e ' + e);
}

```

## setSyncRange

```TypeScript
setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>
```

Sets the data sync range. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setSyncRange

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

**Example**

```TypeScript
let kvStore;
try {
    const localLabels = ['A', 'B'];
    const remoteSupportLabels = ['C', 'D'];
    kvStore.setSyncRange(localLabels, remoteSupportLabels).then((err) => {
        console.log('setSyncRange success');
    }).catch((err) => {
        console.log('delete fail ' + err);
    });
}catch(e) {
    console.log('SetSyncRange e ' + e);
}

```

## startTransaction

```TypeScript
startTransaction(callback: AsyncCallback<void>): void
```

Starts the transaction in this KV store. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** startTransaction

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
function putBatchString(len, prefix) {
    let entries = [];
    for (var i = 0; i < len; i++) {
        var entry = {
            key : prefix + i,
            value : {
                type : distributedData.ValueType.STRING,
                value : 'batch_test_string_value'
            }
        }
        entries.push(entry);
    }
    return entries;
}
try {
    var count = 0;
    kvStore.on('dataChange', 0, function (data) {
        console.log('startTransaction 0' + data)
        count++;
    });
    kvStore.startTransaction(async function (err,data) {
        console.log('startTransaction success');
        let entries = putBatchString(10, 'batch_test_string_key');
        console.log('entries: ' + JSON.stringify(entries));
        kvStore.putBatch(entries, async function (err,data) {
            console.log('putBatch success');
        });
    });
}catch(e) {
    console.log('startTransaction e ' + e);
}

```

## startTransaction

```TypeScript
startTransaction(): Promise<void>
```

Starts the transaction in this KV store. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** startTransaction

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
try {
    var count = 0;
    kvStore.on('dataChange', distributedData.SubscribeType.SUBSCRIBE_TYPE_ALL, function (data) {
        console.log('startTransaction ' + JSON.stringify(data));
        count++;
    });
    kvStore.startTransaction().then(async (err) => {
        console.log('startTransaction success');
    }).catch((err) => {
        console.log('startTransaction fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('startTransaction e ' + e);
}

```

