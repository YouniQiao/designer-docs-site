# DeviceKVStore

Provides APIs to query and synchronize data in a device KV store. This class inherits from [KVStore]distributedData.KVStoreType. Data is distinguished by device in a device KV store. Each device can only write and modify its own data. Data of other devices is read-only and cannot be modified. For example, a device KV store can be used to implement image sharing between devices. The images of other devices can be viewed, but not be modified or deleted. Before calling any method in **DeviceKVStore**, you must use [getKVStore]distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>) to obtain a **DeviceKVStore** object.

**Inheritance:** DeviceKVStoreextends: KVStore.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## closeResultSet

```TypeScript
closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void
```

Closes the **KvStoreResultSet** object obtained by [DeviceKVStore.getResultSet](arkts-distributeddata-devicekvstore-i.md#getResultSet). This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#closeResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resultSet | KvStoreResultSet | Yes | KvStoreResultSet object to close. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
try {
    console.log('CloseResultSet success');
    let resultSet = null;
    kvStore.closeResultSet(resultSet, function (err, data) {
        if (err == undefined) {
            console.log('closeResultSet success');
        } else {
            console.log('closeResultSet fail');
        }
    });
}catch(e) {
    console.log('CloseResultSet e ' + e);
}

```

## closeResultSet

```TypeScript
closeResultSet(resultSet: KvStoreResultSet): Promise<void>
```

Closes the **KvStoreResultSet** object obtained by [DeviceKVStore.getResultSet](arkts-distributeddata-devicekvstore-i.md#getResultSet). This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#closeResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resultSet | KvStoreResultSet | Yes | KvStoreResultSet object to close. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
try {
    console.log('CloseResultSet success');
    let resultSet = null;
    kvStore.closeResultSet(resultSet).then(() => {
        console.log('closeResultSet success');
    }).catch((err) => {
        console.log('closeResultSet fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('CloseResultSet e ' + e);
}

```

## get

```TypeScript
get(deviceId: string, key: string, callback: AsyncCallback<boolean | string | number | Uint8Array>): void
```

Obtains a string value that matches the specified device ID and key. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#get

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| key | string | Yes | Key to match. |
| callback | AsyncCallback&lt;boolean \| string \| number \| Uint8Array> | Yes | Callback used to return the value obtained. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string_2';
const VALUE_TEST_STRING_ELEMENT = 'value-string-002';
try{
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, async function (err,data) {
        console.log('put success');
        kvStore.get('localDeviceId', KEY_TEST_STRING_ELEMENT, function (err,data) {
            console.log('get success');
        });
    })
}catch(e) {
    console.log('get e' + e);
}

```

## get

```TypeScript
get(deviceId: string, key: string): Promise<boolean | string | number | Uint8Array>
```

Obtains a string value that matches the specified device ID and key. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#get

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| key | string | Yes | Key to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean \| string \| number \| Uint8Array> | Promise used to return the string value that matches the  given condition. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string_2';
const VALUE_TEST_STRING_ELEMENT = 'value-string-002';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then(async (data) => {
        console.log(' put success');
        kvStore.get('localDeviceId', KEY_TEST_STRING_ELEMENT).then((data) => {
            console.log('get success');
        }).catch((err) => {
            console.log('get fail ' + JSON.stringify(err));
        });
    }).catch((error) => {
        console.log('put error' + error);
    });
} catch (e) {
    console.log('Get e ' + e);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void
```

Obtains all KV pairs that match the specified device ID and key prefix. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getEntries

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| keyPrefix | string | Yes | Key prefix to match. |
| callback | AsyncCallback&lt;Entry[]> | Yes | Callback used to return the KV pairs obtained. |

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
    console.log('entries: ' + entries);
    kvStore.putBatch(entries, async function (err,data) {
        console.log('putBatch success');
        kvStore.getEntries('localDeviceId', 'batch_test_string_key', function (err,entries) {
            console.log('getEntries success');
            console.log('entries.length: ' + entries.length);
            console.log('entries[0]: ' + JSON.stringify(entries[0]));
        });
    });
}catch(e) {
    console.log('PutBatch e ' + e);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>
```

Obtains all KV pairs that match the specified device ID and key prefix. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getEntries

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| keyPrefix | string | Yes | Key prefix to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return all the KV pairs that match the given condition. |

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
    console.log('entries: ' + entries);
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
        kvStore.getEntries('localDeviceId', 'batch_test_string_key').then((entries) => {
            console.log('getEntries success');
            console.log('entries.length: ' + entries.length);
            console.log('entries[0]: ' + JSON.stringify(entries[0]));
            console.log('entries[0].value: ' + JSON.stringify(entries[0].value));
            console.log('entries[0].value.value: ' + entries[0].value.value);
        }).catch((err) => {
            console.log('getEntries fail ' + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log('putBatch fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('PutBatch e ' + e);
}

```

## getEntries

```TypeScript
getEntries(query: Query, callback: AsyncCallback<Entry[]>): void
```

Obtains the KV pairs that match the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getEntries

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | Query object to match. |
| callback | AsyncCallback&lt;Entry[]> | Yes | Callback used to return the KV pairs obtained. |

**Example**

```TypeScript
let kvStore;
try {
    var arr = new Uint8Array([21,31]);
    let entries = [];
    for (var i = 0; i < 10; i++) {
        var key = 'batch_test_bool_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.BYTE_ARRAY,
                value : arr
            }
        }
        entries.push(entry);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries, async function (err,data) {
        console.log('putBatch success');
        const query = new distributedData.Query();
        query.prefixKey("batch_test");
        query.deviceId('localDeviceId');
        kvStore.getEntries(query, function (err,entries) {
            console.log('getEntries success');
            console.log('entries.length: ' + entries.length);
            console.log('entries[0]: ' + JSON.stringify(entries[0]));
        });
    });
    console.log('GetEntries success');
}catch(e) {
    console.log('GetEntries e ' + e);
}

```

## getEntries

```TypeScript
getEntries(query: Query): Promise<Entry[]>
```

Obtains the KV pairs that match the specified **Query** object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getEntries

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | Query object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return the KV pairs that match the specified Query object. |

**Example**

```TypeScript
let kvStore;
try {
    var arr = new Uint8Array([21,31]);
    let entries = [];
    for (var i = 0; i < 10; i++) {
        var key = 'batch_test_bool_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.BYTE_ARRAY,
                value : arr
            }
        }
        entries.push(entry);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
        const query = new distributedData.Query();
        query.prefixKey("batch_test");
        kvStore.getEntries(query).then((entries) => {
            console.log('getEntries success');
        }).catch((err) => {
            console.log('getEntries fail ' + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log('GetEntries putBatch fail ' + JSON.stringify(err))
    });
    console.log('GetEntries success');
}catch(e) {
    console.log('GetEntries e ' + e);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, query: Query, callback: AsyncCallback<Entry[]>): void
```

Obtains the KV pairs that match the specified device ID and **Query** object. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getEntries

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| query | Query | Yes | Query object to match. |
| callback | AsyncCallback&lt;Entry[]> | Yes | Callback used to return the KV pairs that match the specified device ID and  Query object. |

**Example**

```TypeScript
let kvStore;
try {
    var arr = new Uint8Array([21,31]);
    let entries = [];
    for (var i = 0; i < 10; i++) {
        var key = 'batch_test_bool_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.BYTE_ARRAY,
                value : arr
            }
        }
        entries.push(entry);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries, async function (err,data) {
        console.log('putBatch success');
        var query = new distributedData.Query();
        query.deviceId('localDeviceId');
        query.prefixKey("batch_test");
        kvStore.getEntries('localDeviceId', query, function (err,entries) {
            console.log('getEntries success');
            console.log('entries.length: ' + entries.length);
            console.log('entries[0]: ' + JSON.stringify(entries[0]));
        })
    });
    console.log('GetEntries success');
}catch(e) {
    console.log('GetEntries e ' + e);
}

```

## getEntries

```TypeScript
getEntries(deviceId: string, query: Query): Promise<Entry[]>
```

Obtains the KV pairs that match the specified device ID and **Query** object. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getEntries

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| query | Query | Yes | Query object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return the KV pairs that match the specified device ID and Query  object. |

**Example**

```TypeScript
let kvStore;
try {
    var arr = new Uint8Array([21,31]);
    let entries = [];
    for (var i = 0; i < 10; i++) {
        var key = 'batch_test_bool_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.BYTE_ARRAY,
                value : arr
            }
        }
        entries.push(entry);
    }
    console.log('entries: ' + JSON.stringify(entries));
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
        var query = new distributedData.Query();
        query.deviceId('localDeviceId');
        query.prefixKey("batch_test");
        kvStore.getEntries('localDeviceId', query).then((entries) => {
            console.log('getEntries success');
        }).catch((err) => {
            console.log('getEntries fail ' + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log('putBatch fail ' + JSON.stringify(err));
    });
    console.log('GetEntries success');
}catch(e) {
    console.log('GetEntries e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void
```

Obtains a **KvStoreResultSet** object that matches the specified device ID and key prefix. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| keyPrefix | string | Yes | Key prefix to match. |
| callback | AsyncCallback&lt;KvStoreResultSet> | Yes | Callback used to return the KvStoreResultSet object that  matches the specified device ID and key prefix. |

**Example**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('localDeviceId', 'batch_test_string_key', async function (err, result) {
        console.log('getResultSet succeed.');
        resultSet = result;
        kvStore.closeResultSet(resultSet, function (err, data) {
            console.log('closeResultSet success');
        })
    });
}catch(e) {
    console.log('GetResultSet e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, keyPrefix: string): Promise<KvStoreResultSet>
```

Obtains a **KvStoreResultSet** object that matches the specified device ID and key prefix. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| keyPrefix | string | Yes | Key prefix to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KvStoreResultSet> | Promise used to return the KvStoreResultSet object that matches the specified  device ID and key prefix. |

**Example**

```TypeScript
let kvStore;
try {
    let resultSet;
    kvStore.getResultSet('localDeviceId', 'batch_test_string_key').then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
    });
    kvStore.closeResultSet(resultSet).then((err) => {
        console.log('closeResultSet success');
    }).catch((err) => {
        console.log('closeResultSet fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetResultSet e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void
```

Obtains a **KvStoreResultSet** object that matches the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | Query object to match. |
| callback | AsyncCallback&lt;KvStoreResultSet> | Yes | Callback used to return the KvStoreResultSet object obtained. |

**Example**

```TypeScript
let kvStore;
try {
    let resultSet;
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
    kvStore.putBatch(entries, async function (err, data) {
        console.log('putBatch success');
        const query = new distributedData.Query();
        query.prefixKey("batch_test");
        query.deviceId('localDeviceId');
        kvStore.getResultSet(query, async function (err, result) {
            console.log('getResultSet succeed.');
            resultSet = result;
            kvStore.closeResultSet(resultSet, function (err, data) {
                console.log('closeResultSet success');
            })
        });
    });
} catch(e) {
    console.log('GetResultSet e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(query: Query): Promise<KvStoreResultSet>
```

Obtains a **KvStoreResultSet** object that matches the specified **Query** object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | Query object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KvStoreResultSet> | Promise used to return the KvStoreResultSet object that matches the specified  Query object. |

**Example**

```TypeScript
let kvStore;
try {
    let resultSet;
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
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
    }).catch((err) => {
        console.log('putBatch fail ' + err);
    });
    const query = new distributedData.Query();
    query.deviceId('localDeviceId');
    query.prefixKey("batch_test");
    console.log("GetResultSet " + query.getSqlLike());
    kvStore.getResultSet(query).then((result) => {
        console.log('getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
    });
    kvStore.closeResultSet(resultSet).then((err) => {
        console.log('closeResultSet success');
    }).catch((err) => {
        console.log('closeResultSet fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetResultSet e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, query: Query, callback: AsyncCallback<KvStoreResultSet>): void
```

Obtains a **KvStoreResultSet** object that matches the specified device ID and **Query** object. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| query | Query | Yes | Query object to match. |
| callback | AsyncCallback&lt;KvStoreResultSet> | Yes | Callback used to return the KvStoreResultSet object that  matches the specified device ID and Query object. |

**Example**

```TypeScript
let kvStore;
try {
    let resultSet;
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
    kvStore.putBatch(entries, async function (err, data) {
        console.log('putBatch success');
        const query = new distributedData.Query();
        query.prefixKey("batch_test");
        kvStore.getResultSet('localDeviceId', query, async function (err, result) {
            console.log('getResultSet succeed.');
            resultSet = result;
            kvStore.closeResultSet(resultSet, function (err, data) {
                console.log('closeResultSet success');
            })
        });
    });
} catch(e) {
    console.log('GetResultSet e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(deviceId: string, query: Query): Promise<KvStoreResultSet>
```

Obtains a **KvStoreResultSet** object that matches the specified device ID and **Query** object. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSet

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| query | Query | Yes | Query object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KvStoreResultSet> | Promise used to return the KvStoreResultSet object that matches the specified  device ID and Query object. |

**Example**

```TypeScript
let kvStore;
try {
    let resultSet;
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
    kvStore.putBatch(entries).then(async (err) => {
        console.log('GetResultSet putBatch success');
    }).catch((err) => {
        console.log('PutBatch putBatch fail ' + JSON.stringify(err));
    });
    const query = new distributedData.Query();
    query.prefixKey("batch_test");
    kvStore.getResultSet('localDeviceId', query).then((result) => {
        console.log('GetResultSet getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('GetResultSet getResultSet failed: ' + JSON.stringify(err));
    });
    query.deviceId('localDeviceId');
    console.log("GetResultSet " + query.getSqlLike());
    kvStore.closeResultSet(resultSet).then((err) => {
        console.log('GetResultSet closeResultSet success');
    }).catch((err) => {
        console.log('GetResultSet closeResultSet fail ' + JSON.stringify(err));
    });

}catch(e) {
    console.log('GetResultSet e ' + e);
}

```

## getResultSize

```TypeScript
getResultSize(query: Query, callback: AsyncCallback<number>): void
```

Obtains the number of results that match the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSize

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | Query object to match. |
| callback | AsyncCallback&lt;number> | Yes | Callback used to return the number of results obtained. |

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
    kvStore.putBatch(entries, async function (err, data) {
        console.log('putBatch success');
        const query = new distributedData.Query();
        query.prefixKey("batch_test");
        query.deviceId('localDeviceId');
        kvStore.getResultSize(query, async function (err, resultSize) {
            console.log('getResultSet succeed.');
        });
    });
} catch(e) {
    console.log('GetResultSize e ' + e);
}

```

## getResultSize

```TypeScript
getResultSize(query: Query): Promise<number>
```

Obtains the number of results that match the specified **Query** object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSize

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | Query | Yes | Query object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of results obtained. |

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
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
    }).catch((err) => {
        console.log('putBatch fail ' + JSON.stringify(err));
    });
    const query = new distributedData.Query();
    query.prefixKey("batch_test");
    query.deviceId('localDeviceId');
    kvStore.getResultSize(query).then((resultSize) => {
        console.log('getResultSet succeed.');
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetResultSize e ' + e);
}

```

## getResultSize

```TypeScript
getResultSize(deviceId: string, query: Query, callback: AsyncCallback<number>): void
```

Obtains the number of results that match the specified device ID and **Query** object. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSize

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| query | Query | Yes | Query object to match. |
| callback | AsyncCallback&lt;number> | Yes | Callback used to return the number of results obtained. |

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
    kvStore.putBatch(entries, async function (err, data) {
        console.log('putBatch success');
        const query = new distributedData.Query();
        query.prefixKey("batch_test");
        kvStore.getResultSize('localDeviceId', query, async function (err, resultSize) {
            console.log('getResultSet succeed.');
        });
    });
} catch(e) {
    console.log('GetResultSize e ' + e);
}

```

## getResultSize

```TypeScript
getResultSize(deviceId: string, query: Query): Promise<number>
```

Obtains the number of results that match the specified device ID and **Query** object. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#getResultSize

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| query | Query | Yes | Query object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of results obtained. |

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
    kvStore.putBatch(entries).then(async (err) => {
        console.log('putBatch success');
    }).catch((err) => {
        console.log('putBatch fail ' + JSON.stringify(err));
    });
    var query = new distributedData.Query();
    query.prefixKey("batch_test");
    kvStore.getResultSize('localDeviceId', query).then((resultSize) => {
        console.log('getResultSet succeed.');
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetResultSize e ' + e);
}

```

## off

```TypeScript
off(event: 'dataChange', listener?: Callback<ChangeNotification>): void
```

Unsubscribes from data changes.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#off

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is dataChange, which indicates data changes. |
| listener | Callback&lt;ChangeNotification> | No | Callback to unregister. If this parameter is not specified, all  callbacks for data changes will be unregistered. |

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

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#off

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is syncComplete, which indicates a sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]>> | No | Callback to unregister. If this parameter is not specified,  all callbacks for data changes will be unregistered. |

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

## on(SubscribeType)

```TypeScript
on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void
```

Subscribes to data changes of the specified type.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#on

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is dataChange, which indicates data changes. |
| type | SubscribeType | Yes | Type of data change. |
| listener | Callback&lt;ChangeNotification> | Yes | Callback used to return the result. |

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#on

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is syncComplete, which indicates a sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]>> | Yes | Callback used to return a sync completion event. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_FLOAT_ELEMENT = 'key_test_float';
const VALUE_TEST_FLOAT_ELEMENT = 321.12;
try {
    kvStore.on('syncComplete', function (data) {
        console.log('syncComplete ' + data)
    });
    kvStore.put(KEY_TEST_FLOAT_ELEMENT, VALUE_TEST_FLOAT_ELEMENT).then((data) => {
        console.log('syncComplete put success');
    }).catch((error) => {
        console.log('syncComplete put fail ' + error);
    });
}catch(e) {
    console.log('syncComplete put e ' + e);
}

```

## removeDeviceData

```TypeScript
removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void
```

Deletes data of the specified device from this KV store. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#removeDeviceData

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-string-001';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, async function (err,data) {
        console.log('RemoveDeviceData  put success');
        const deviceid = 'no_exist_device_id';
        kvStore.removeDeviceData(deviceid, async function (err,data) {
            if (err == undefined) {
                console.log('removeDeviceData success');
            } else {
                console.log('removeDeviceData fail');
                kvStore.get('localDeviceId', KEY_TEST_STRING_ELEMENT, async function (err,data) {
                    console.log('RemoveDeviceData get success');
                });
            }
        });
    });
}catch(e) {
    console.log('RemoveDeviceData e ' + e);
}

```

## removeDeviceData

```TypeScript
removeDeviceData(deviceId: string): Promise<void>
```

Deletes data of the specified device from this KV store. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#removeDeviceData

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Example**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-string-001';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then((err) => {
        console.log('RemoveDeviceData put success');
    }).catch((err) => {
        console.log('RemoveDeviceData put fail ' + JSON.stringify(err));
    });
    const deviceid = 'no_exist_device_id';
    kvStore.removeDeviceData(deviceid).then((err) => {
        console.log('removeDeviceData success');
    }).catch((err) => {
        console.log('removeDeviceData fail ' + JSON.stringify(err));
    });
    kvStore.get('localDeviceId', KEY_TEST_STRING_ELEMENT).then((data) => {
        console.log('RemoveDeviceData get success data:' + data);
    }).catch((err) => {
        console.log('RemoveDeviceData get fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('RemoveDeviceData e ' + e);
}

```

## sync

```TypeScript
sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void
```

Synchronizes the KV store manually. > **NOTE** > > **deviceIds** is **networkId** in <!--RP2--> > [DeviceInfo](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-deviceinfo-i-sys.md#DeviceInfo), which can be obtained by > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP2End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.DeviceKVStore#sync

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceIds | string[] | Yes | networkIds of the devices to be synchronized. |
| mode | SyncMode | Yes | Sync mode. |
| delayMs | number | No | Delay time allowed, in milliseconds. The default value is 0. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';

let devManager;
let kvStore;
const KEY_TEST_SYNC_ELEMENT = 'key_test_sync';
const VALUE_TEST_SYNC_ELEMENT = 'value-string-001';
// create deviceManager
deviceManager.createDeviceManager('bundleName', (err, value) => {
  if (!err) {
    devManager = value;
    let deviceIds = [];
    if (devManager != null) {
      var devices = devManager.getTrustedDeviceListSync();
      for (var i = 0; i < devices.length; i++) {
        deviceIds[i] = devices[i].networkId;
      }
    }
    try {
      kvStore.on('syncComplete', function (data) {
        console.log('Sync dataChange');
      });
      kvStore.put(KEY_TEST_SYNC_ELEMENT + 'testSync101', VALUE_TEST_SYNC_ELEMENT, function (err, data) {
        if (err != undefined) {
          console.log("put err: " + JSON.stringify(err));
          return;
        }
        console.log('Succeeded in putting data');
        const mode = distributedData.SyncMode.PULL_ONLY;
        kvStore.sync(deviceIds, mode, 1000);
      });
    } catch (e) {
      console.log('Sync e' + e);
    }
  }
});

```

