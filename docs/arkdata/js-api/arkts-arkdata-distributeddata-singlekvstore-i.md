# SingleKVStore

Provides APIs to query and synchronize data in a single KV store. This class inherits from [KVStore](arkts-arkdata-distributeddata-kvstoretype-e.md).

Data is not distinguished by device in a single KV store. The data written to different devices using the same key will be overwritten. For example, a single KV store can be used to synchronize a user's calendar and contact data between different devices.Before calling any method in **SingleKVStore**, you must use [getKVStore](distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>))to obtain a **SingleKVStore** instance.

**Inheritance/Implementation:** SingleKVStore extends [KVStore](arkts-arkdata-distributeddata-kvstore-i.md)

**Since:** 7

**Deprecated since:** 9

**Substitutes:** SingleKVStore

<!--Device-distributedData-interface SingleKVStore extends KVStore--><!--Device-distributedData-interface SingleKVStore extends KVStore-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

<a id="closeresultset"></a>
## closeResultSet

```TypeScript
closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void
```

Closes the **KvStoreResultSet** object obtained by [SingleKVStore.getResultSet](arkts-arkdata-distributeddata-singlekvstore-i.md#getresultset-1). This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** closeResultSet

<!--Device-SingleKVStore-closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void--><!--Device-SingleKVStore-closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resultSet | [KvStoreResultSet](arkts-arkdata-distributeddata-kvstoreresultset-i.md) | Yes | **KvStoreResultSet** object to close. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

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

<a id="closeresultset-1"></a>
## closeResultSet

```TypeScript
closeResultSet(resultSet: KvStoreResultSet): Promise<void>
```

Closes the **KvStoreResultSet** object obtained by [SingleKVStore.getResultSet](arkts-arkdata-distributeddata-singlekvstore-i.md#getresultset-1). This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** closeResultSet

<!--Device-SingleKVStore-closeResultSet(resultSet: KvStoreResultSet): Promise<void>--><!--Device-SingleKVStore-closeResultSet(resultSet: KvStoreResultSet): Promise<void>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resultSet | [KvStoreResultSet](arkts-arkdata-distributeddata-kvstoreresultset-i.md) | Yes | **KvStoreResultSet** object to close. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

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

<a id="get"></a>
## get

```TypeScript
get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void
```

Obtains the value of the specified key. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** get

<!--Device-SingleKVStore-get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void--><!--Device-SingleKVStore-get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the value to obtain. It cannot be empty, and the length cannot exceed [MAX_KEY_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Uint8Array \| string \| boolean \| number&gt; | Yes | Callback used to return the value obtained. |

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
        kvStore.get(KEY_TEST_STRING_ELEMENT, function (err,data) {
            console.log("get success data: " + data);
        });
    });
}catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

<a id="get-1"></a>
## get

```TypeScript
get(key: string): Promise<Uint8Array | string | boolean | number>
```

Obtains the value of the specified key. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** get

<!--Device-SingleKVStore-get(key: string): Promise<Uint8Array | string | boolean | number>--><!--Device-SingleKVStore-get(key: string): Promise<Uint8Array | string | boolean | number>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the value to obtain. It cannot be empty, and the length cannot exceed [MAX_KEY_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array \| string \| boolean \| number&gt; | Promise used to return the value obtained. |

**Example**

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

<a id="getentries"></a>
## getEntries

```TypeScript
getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void
```

Obtains all KV pairs that match the specified key prefix. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getEntries

<!--Device-SingleKVStore-getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void--><!--Device-SingleKVStore-getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Entry[]&gt; | Yes | Callback used to return the KV pairs that match the specified prefix. |

**Example**

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

<a id="getentries-1"></a>
## getEntries

```TypeScript
getEntries(keyPrefix: string): Promise<Entry[]>
```

Obtains all KV pairs that match the specified key prefix. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getEntries

<!--Device-SingleKVStore-getEntries(keyPrefix: string): Promise<Entry[]>--><!--Device-SingleKVStore-getEntries(keyPrefix: string): Promise<Entry[]>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entry[]&gt; | Promise used to return the KV pairs that match the specified prefix. |

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

<a id="getentries-2"></a>
## getEntries

```TypeScript
getEntries(query: Query, callback: AsyncCallback<Entry[]>): void
```

Obtains the KV pairs that match the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getEntries

<!--Device-SingleKVStore-getEntries(query: Query, callback: AsyncCallback<Entry[]>): void--><!--Device-SingleKVStore-getEntries(query: Query, callback: AsyncCallback<Entry[]>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | [Query](arkts-arkdata-distributeddata-query-c.md) | Yes | Key prefix to match. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Entry[]&gt; | Yes | Callback used to return the KV pairs that match the specified **Query** object. |

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

<a id="getentries-3"></a>
## getEntries

```TypeScript
getEntries(query: Query): Promise<Entry[]>
```

Obtains the KV pairs that match the specified **Query** object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getEntries

<!--Device-SingleKVStore-getEntries(query: Query): Promise<Entry[]>--><!--Device-SingleKVStore-getEntries(query: Query): Promise<Entry[]>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | [Query](arkts-arkdata-distributeddata-query-c.md) | Yes | **Query** object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entry[]&gt; | Promise used to return the KV pairs that match the specified **Query** object. |

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

<a id="getresultset"></a>
## getResultSet

```TypeScript
getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void
```

Obtains the result set with the specified prefix. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getResultSet

<!--Device-SingleKVStore-getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void--><!--Device-SingleKVStore-getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;KvStoreResultSet&gt; | Yes | Callback used to return the result set with the specified prefix. |

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

<a id="getresultset-1"></a>
## getResultSet

```TypeScript
getResultSet(keyPrefix: string): Promise<KvStoreResultSet>
```

Obtains the result set with the specified prefix. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getResultSet

<!--Device-SingleKVStore-getResultSet(keyPrefix: string): Promise<KvStoreResultSet>--><!--Device-SingleKVStore-getResultSet(keyPrefix: string): Promise<KvStoreResultSet>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyPrefix | string | Yes | Key prefix to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KvStoreResultSet&gt; | Promise used to return the result set with the specified prefix. |

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

<a id="getresultset-2"></a>
## getResultSet

```TypeScript
getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void
```

Obtains a **KvStoreResultSet** object that matches the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getResultSet

<!--Device-SingleKVStore-getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void--><!--Device-SingleKVStore-getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | [Query](arkts-arkdata-distributeddata-query-c.md) | Yes | **Query** object to match. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;KvStoreResultSet&gt; | Yes | Callback used to return the **KvStoreResultSet** object obtained. |

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
        kvStore.getResultSet(query, async function (err, result) {
            console.log('getResultSet succeed.');
            resultSet = result;
        });
    });
} catch(e) {
    console.log('GetResultSet e ' + e);
}

```

<a id="getresultset-3"></a>
## getResultSet

```TypeScript
getResultSet(query: Query): Promise<KvStoreResultSet>
```

Obtains a **KvStoreResultSet** object that matches the specified **Query** object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getResultSet

<!--Device-SingleKVStore-getResultSet(query: Query): Promise<KvStoreResultSet>--><!--Device-SingleKVStore-getResultSet(query: Query): Promise<KvStoreResultSet>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | [Query](arkts-arkdata-distributeddata-query-c.md) | Yes | **Query** object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KvStoreResultSet&gt; | Promise used to return the **KvStoreResultSet** object obtained. |

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

<a id="getresultsize"></a>
## getResultSize

```TypeScript
getResultSize(query: Query, callback: AsyncCallback<number>): void
```

Obtains the number of results that match the specified **Query** object. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getResultSize

<!--Device-SingleKVStore-getResultSize(query: Query, callback: AsyncCallback<number>): void--><!--Device-SingleKVStore-getResultSize(query: Query, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | [Query](arkts-arkdata-distributeddata-query-c.md) | Yes | **Query** object to match. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the number of results that match the specified **Query** object. |

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
        kvStore.getResultSize(query, async function (err, resultSize) {
            console.log('getResultSet succeed.');
        });
    });
} catch(e) {
    console.log('GetResultSize e ' + e);
}

```

<a id="getresultsize-1"></a>
## getResultSize

```TypeScript
getResultSize(query: Query): Promise<number>
```

Obtains the number of results that match the specified **Query** object. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getResultSize

<!--Device-SingleKVStore-getResultSize(query: Query): Promise<number>--><!--Device-SingleKVStore-getResultSize(query: Query): Promise<number>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | [Query](arkts-arkdata-distributeddata-query-c.md) | Yes | **Query** object to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of results obtained. |

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
    kvStore.getResultSize(query).then((resultSize) => {
        console.log('getResultSet succeed.');
    }).catch((err) => {
        console.log('getResultSet failed: ' + JSON.stringify(err));
    });
}catch(e) {
    console.log('GetResultSize e ' + e);
}

```

<a id="getsecuritylevel"></a>
## getSecurityLevel

```TypeScript
getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void
```

Obtains the security level of this KV store. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getSecurityLevel

<!--Device-SingleKVStore-getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void--><!--Device-SingleKVStore-getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SecurityLevel&gt; | Yes | Callback used to return the security level of the KV store. |

**Example**

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

<a id="getsecuritylevel-1"></a>
## getSecurityLevel

```TypeScript
getSecurityLevel(): Promise<SecurityLevel>
```

Obtains the security level of this KV store. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getSecurityLevel

<!--Device-SingleKVStore-getSecurityLevel(): Promise<SecurityLevel>--><!--Device-SingleKVStore-getSecurityLevel(): Promise<SecurityLevel>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SecurityLevel&gt; | Promise used to return the security level of the KV store. |

**Example**

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

<a id="off"></a>
## off

```TypeScript
off(event: 'dataChange', listener?: Callback<ChangeNotification>): void
```

Unsubscribes from data changes.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

<!--Device-SingleKVStore-off(event: 'dataChange', listener?: Callback<ChangeNotification>): void--><!--Device-SingleKVStore-off(event: 'dataChange', listener?: Callback<ChangeNotification>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is **dataChange**, which indicates data changes. |
| listener | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ChangeNotification&gt; | No | Callback to unregister. If this parameter is not specified, all callbacks for data changes will be unregistered. |

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

<a id="off-1"></a>
## off

```TypeScript
off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void
```

Unsubscribes from sync completion events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

<!--Device-SingleKVStore-off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void--><!--Device-SingleKVStore-off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is **syncComplete**, which indicates a sync completion event. |
| syncCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;[string, number]&gt;&gt; | No | Callback to unregister. If this parameter is not specified,all callbacks for data changes will be unregistered. |

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

<a id="on"></a>
## on

```TypeScript
on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void
```

Subscribes to data changes of the specified type.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on

<!--Device-SingleKVStore-on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void--><!--Device-SingleKVStore-on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Event type. The value is **dataChange**, which indicates data changes. |
| type | [SubscribeType](../../apis-notification-kit/arkts-apis/arkts-notification-notificationextensionsubscription-subscribetype-e.md) | Yes | Type of data change. |
| listener | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ChangeNotification&gt; | Yes | Callback used to return the result. |

**Example**

```TypeScript
let kvStore;
kvStore.on('dataChange', distributedData.SubscribeType.SUBSCRIBE_TYPE_LOCAL, function (data) {
    console.log("dataChange callback call data: " + JSON.stringify(data));
});

```

<a id="on-1"></a>
## on

```TypeScript
on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void
```

Subscribes to sync completion events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on

<!--Device-SingleKVStore-on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void--><!--Device-SingleKVStore-on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'syncComplete' | Yes | Event type. The value is **syncComplete**, which indicates a sync completion event. |
| syncCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;[string, number]&gt;&gt; | Yes | Callback used to return a sync completion event. |

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

<a id="removedevicedata"></a>
## removeDeviceData

```TypeScript
removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void
```

Deletes data of a device. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The value of **deviceId** can be obtained by <!--RP1-->  
> [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-devicemanager-i-sys.md#gettrusteddevicelistsync-1).  
> <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system  
> applications.  
> For details about how to obtain **deviceId**, see [sync()](arkts-arkdata-distributeddata-singlekvstore-i.md#sync-1).

**Since:** 8

**Deprecated since:** 9

**Substitutes:** removeDeviceData

<!--Device-SingleKVStore-removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void--><!--Device-SingleKVStore-removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

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

<a id="removedevicedata-1"></a>
## removeDeviceData

```TypeScript
removeDeviceData(deviceId: string): Promise<void>
```

Deletes data of a device. This API uses a promise to return the result.

> **NOTE**  
>  
> The value of **deviceId** can be obtained by <!--RP1-->  
> [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-devicemanager-i-sys.md#gettrusteddevicelistsync-1).  
> <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system  
> applications.  
> For details about how to obtain **deviceId**, see [sync()](arkts-arkdata-distributeddata-singlekvstore-i.md#sync-1).

**Since:** 8

**Deprecated since:** 9

**Substitutes:** removeDeviceData

<!--Device-SingleKVStore-removeDeviceData(deviceId: string): Promise<void>--><!--Device-SingleKVStore-removeDeviceData(deviceId: string): Promise<void>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | ID of the target device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

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

<a id="setsyncparam"></a>
## setSyncParam

```TypeScript
setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void
```

Sets the default delay allowed for KV store sync. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setSyncParam

<!--Device-SingleKVStore-setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void--><!--Device-SingleKVStore-setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| defaultAllowedDelayMs | number | Yes | Default delay allowed for database sync, in ms. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

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

<a id="setsyncparam-1"></a>
## setSyncParam

```TypeScript
setSyncParam(defaultAllowedDelayMs: number): Promise<void>
```

Sets the default delay allowed for KV store sync. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setSyncParam

<!--Device-SingleKVStore-setSyncParam(defaultAllowedDelayMs: number): Promise<void>--><!--Device-SingleKVStore-setSyncParam(defaultAllowedDelayMs: number): Promise<void>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| defaultAllowedDelayMs | number | Yes | Default delay allowed for database sync, in ms. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

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

<a id="sync"></a>
## sync

```TypeScript
sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void
```

Synchronizes the KV store manually.

> **NOTE**  
>  
> **deviceIds** is **networkId** in <!--RP2-->  
> [DeviceInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-deviceinfo-i-sys.md), which can be obtained by  
> [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-devicemanager-i-sys.md#gettrusteddevicelistsync-1).  
> <!--RP2End-->The APIs of the **deviceManager** module are system interfaces and available only to system  
> applications.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** sync

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

<!--Device-SingleKVStore-sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void--><!--Device-SingleKVStore-sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceIds | string[] | Yes | List of **networkId**s of the devices in the same networking environment to be synchronized. |
| mode | [SyncMode](arkts-arkdata-relationalstore-syncmode-e.md) | Yes | Sync mode. |
| delayMs | number | No | Delay time allowed, in milliseconds. The default value is **0**. |

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

