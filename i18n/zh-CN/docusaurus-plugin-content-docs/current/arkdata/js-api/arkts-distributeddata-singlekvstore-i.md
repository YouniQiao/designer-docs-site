# SingleKVStore

Provides APIs to query and synchronize data in a single KV store. This class inherits from [KVStore]distributedData.KVStoreType. Data is not distinguished by device in a single KV store. The data written to different devices using the same key will be overwritten. For example, a single KV store can be used to synchronize a user's calendar and contact data between different devices. Before calling any method in **SingleKVStore**, you must use [getKVStore]distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>) to obtain a **SingleKVStore** instance.

**继承实现关系：** SingleKVStore继承自：KVStore。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## closeResultSet

```TypeScript
closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void
```

Closes the **KvStoreResultSet** object obtained by [SingleKVStore.getResultSet]distributedData.SingleKVStore.getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>) . This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#closeResultSet

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resultSet | KvStoreResultSet | 是 | KvStoreResultSet object to close. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
let kvStore;
try {
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

Closes the **KvStoreResultSet** object obtained by [SingleKVStore.getResultSet]distributedData.SingleKVStore.getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>) . This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#closeResultSet

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resultSet | KvStoreResultSet | 是 | KvStoreResultSet object to close. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
let kvStore;
try {
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
get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void
```

Obtains the value of the specified key. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#get

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the value to obtain. It cannot be empty, and the length cannot exceed  [MAX_KEY_LENGTH]distributedData.Constants. |
| callback | AsyncCallback&lt;Uint8Array \| string \| boolean \| number> | 是 | Callback used to return the value obtained. |

**示例：**

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
        kvStore.get(KEY_TEST_STRING_ELEMENT, function (err,data) {
            console.log("get success data: " + data);
        });
    });
}catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## get

```TypeScript
get(key: string): Promise<Uint8Array | string | boolean | number>
```

Obtains the value of the specified key. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#get

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the value to obtain. It cannot be empty, and the length cannot exceed  [MAX_KEY_LENGTH]distributedData.Constants. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Uint8Array \| string \| boolean \| number> | Promise used to return the value obtained. |

**示例：**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string';
const VALUE_TEST_STRING_ELEMENT = 'value-test-string';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then((data) => {
        console.log("put success: " + JSON.stringify(data));
        kvStore.get(KEY_TEST_STRING_ELEMENT).then((data) => {
            console.log("get success data: " + data);
        }).catch((err) => {
            console.log("get err: " + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log("put err: " + JSON.stringify(err));
    });
}catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## getEntries

```TypeScript
getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void
```

Obtains all KV pairs that match the specified key prefix. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getEntries

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. |
| callback | AsyncCallback&lt;Entry[]> | 是 | Callback used to return the KV pairs that match the specified prefix. |

**示例：**

```TypeScript
let kvStore;
try {
    let entries = [];
    for (var i = 0; i < 10; i++) {
        var key = 'batch_test_number_key';
        var entry = {
            key : key + i,
            value : {
                type : distributedData.ValueType.INTEGER,
                value : 222
            }
        }
        entries.push(entry);
    }
    kvStore.putBatch(entries, async function (err,data) {
        console.log('putBatch success');
        kvStore.getEntries('batch_test_number_key', function (err,entries) {
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
getEntries(keyPrefix: string): Promise<Entry[]>
```

Obtains all KV pairs that match the specified key prefix. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getEntries

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return the KV pairs that match the specified prefix. |

**示例：**

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
        kvStore.getEntries('batch_test_string_key').then((entries) => {
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getEntries

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Key prefix to match. |
| callback | AsyncCallback&lt;Entry[]> | 是 | Callback used to return the KV pairs that match the specified Query  object. |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getEntries

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Entry[]> | Promise used to return the KV pairs that match the specified Query object. |

**示例：**

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

## getResultSet

```TypeScript
getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void
```

Obtains the result set with the specified prefix. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getResultSet

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. |
| callback | AsyncCallback&lt;KvStoreResultSet> | 是 | Callback used to return the result set with the specified prefix. |

**示例：**

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
        console.log('GetResultSet putBatch success');
        kvStore.getResultSet('batch_test_string_key', async function (err, result) {
            console.log('GetResultSet getResultSet succeed.');
            resultSet = result;
            kvStore.closeResultSet(resultSet, function (err, data) {
                console.log('GetResultSet closeResultSet success');
            })
        });
    });
}catch(e) {
    console.log('GetResultSet e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(keyPrefix: string): Promise<KvStoreResultSet>
```

Obtains the result set with the specified prefix. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getResultSet

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyPrefix | string | 是 | Key prefix to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KvStoreResultSet> | Promise used to return the result set with the specified prefix. |

**示例：**

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
        console.log('PutBatch putBatch fail ' + JSON.stringify(err));
    });
    kvStore.getResultSet('batch_test_string_key').then((result) => {
        console.log('GetResult getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
    });
    kvStore.closeResultSet(resultSet).then((err) => {
        console.log('GetResult closeResultSet success');
    }).catch((err) => {
        console.log('closeResultSet fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetResult e ' + e);
}

```

## getResultSet

```TypeScript
getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void
```

Obtains a **KvStoreResultSet** object that matches the specified **Query** object. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getResultSet

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |
| callback | AsyncCallback&lt;KvStoreResultSet> | 是 | Callback used to return the KvStoreResultSet object obtained. |

**示例：**

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
        kvStore.getResultSet(query, async function (err, result) {
            console.log('getResultSet succeed.');
            resultSet = result;
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getResultSet

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KvStoreResultSet> | Promise used to return the KvStoreResultSet object obtained. |

**示例：**

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
        console.log('putBatch fail ' + JSON.stringify(err));
    });
    const query = new distributedData.Query();
    query.prefixKey("batch_test");
    kvStore.getResultSet(query).then((result) => {
        console.log(' getResultSet succeed.');
        resultSet = result;
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getResultSize

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the number of results that match the specified  Query object. |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getResultSize

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | Query | 是 | Query object to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of results obtained. |

**示例：**

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
    kvStore.getResultSize(query).then((resultSize) => {
        console.log('getResultSet succeed.');
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetResultSize e ' + e);
}

```

## getSecurityLevel

```TypeScript
getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void
```

Obtains the security level of this KV store. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getSecurityLevel

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SecurityLevel> | 是 | Callback used to return the security level of the KV store. |

**示例：**

```TypeScript
let kvStore;
try {
    kvStore.getSecurityLevel(function (err,data) {
        console.log('getSecurityLevel success');
    });
}catch(e) {
    console.log('GetSecurityLevel e ' + e);
}

```

## getSecurityLevel

```TypeScript
getSecurityLevel(): Promise<SecurityLevel>
```

Obtains the security level of this KV store. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#getSecurityLevel

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SecurityLevel> | Promise used to return the security level of the KV store. |

**示例：**

```TypeScript
let kvStore;
try {
    kvStore.getSecurityLevel().then((data) => {
        console.log(' getSecurityLevel success');
    }).catch((err) => {
        console.log('getSecurityLevel fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetSecurityLevel e ' + e);
}

```

## off

```TypeScript
off(event: 'dataChange', listener?: Callback<ChangeNotification>): void
```

Unsubscribes from data changes.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#off

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | Event type. The value is dataChange, which indicates data changes. |
| listener | Callback&lt;ChangeNotification> | 否 | Callback to unregister. If this parameter is not specified, all  callbacks for data changes will be unregistered. |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#off

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'syncComplete' | 是 | Event type. The value is syncComplete, which indicates a sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]>> | 否 | Callback to unregister. If this parameter is not specified,  all callbacks for data changes will be unregistered. |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#on

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | Event type. The value is dataChange, which indicates data changes. |
| type | SubscribeType | 是 | Type of data change. |
| listener | Callback&lt;ChangeNotification> | 是 | Callback used to return the result. |

**示例：**

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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#on

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'syncComplete' | 是 | Event type. The value is syncComplete, which indicates a sync completion event. |
| syncCallback | Callback&lt;Array&lt;[string, number]>> | 是 | Callback used to return a sync completion event. |

**示例：**

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

Deletes data of a device. This API uses an asynchronous callback to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#removeDeviceData

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string_2';
const VALUE_TEST_STRING_ELEMENT = 'value-string-002';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, async function (err,data) {
        console.log('put success');
        const deviceid = 'no_exist_device_id';
        kvStore.removeDeviceData(deviceid, async function (err,data) {
            if (err == undefined) {
                console.log('removeDeviceData success');
            } else {
                console.log('removeDeviceData fail');
                kvStore.get(KEY_TEST_STRING_ELEMENT, async function (err,data) {
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

Deletes data of a device. This API uses a promise to return the result. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#removeDeviceData

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the target device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
let kvStore;
const KEY_TEST_STRING_ELEMENT = 'key_test_string_2';
const VALUE_TEST_STRING_ELEMENT = 'value-string-001';
try {
    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT).then((err) => {
        console.log('removeDeviceData put success');
    }).catch((err) => {
        console.log('put fail ' + JSON.stringify(err));
    });
    const deviceid = 'no_exist_device_id';
    kvStore.removeDeviceData(deviceid).then((err) => {
        console.log('removeDeviceData success');
    }).catch((err) => {
        console.log('removeDeviceData fail ' + JSON.stringify(err));
    });
    kvStore.get(KEY_TEST_STRING_ELEMENT).then((data) => {
        console.log('get success data:' + data);
    }).catch((err) => {
        console.log('RemoveDeviceData get fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('RemoveDeviceData e ' + e);
}

```

## setSyncParam

```TypeScript
setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void
```

Sets the default delay allowed for KV store sync. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#setSyncParam

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| defaultAllowedDelayMs | number | 是 | Default delay allowed for database sync, in ms. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
let kvStore;
try {
    const defaultAllowedDelayMs = 500;
    kvStore.setSyncParam(defaultAllowedDelayMs, function (err,data) {
        console.log('SetSyncParam put success');
    });
}catch(e) {
    console.log('testSingleKvStoreSetSyncParam e ' + e);
}

```

## setSyncParam

```TypeScript
setSyncParam(defaultAllowedDelayMs: number): Promise<void>
```

Sets the default delay allowed for KV store sync. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#setSyncParam

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| defaultAllowedDelayMs | number | 是 | Default delay allowed for database sync, in ms. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
let kvStore;
try {
    const defaultAllowedDelayMs = 500;
    kvStore.setSyncParam(defaultAllowedDelayMs).then((err) => {
        console.log('SetSyncParam put success');
    }).catch((err) => {
        console.log('SetSyncParam put fail ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('SetSyncParam e ' + e);
}

```

## sync

```TypeScript
sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void
```

Synchronizes the KV store manually. > **NOTE** > > **deviceIds** is **networkId** in <!--RP2--> > [DeviceInfo](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-deviceinfo-i-sys.md#DeviceInfo), which can be obtained by > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP2End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.SingleKVStore#sync

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceIds | string[] | 是 | List of networkIds of the devices in the same networking environment to be  synchronized. |
| mode | SyncMode | 是 | Sync mode. |
| delayMs | number | 否 | Delay time allowed, in milliseconds. The default value is 0. |

**示例：**

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

