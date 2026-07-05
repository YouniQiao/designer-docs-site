# KVManager

Creates a **KVManager** object to obtain KV store information. Before calling any method in **KVManager**, you must use [createKVManager]distributedData.createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>) to create a **KVManager** object.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## closeKVStore

```TypeScript
closeKVStore(appId: string, storeId: string, kvStore: KVStore, callback: AsyncCallback<void>): void
```

Closes a KV store. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#closeKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appId | string | 是 | Bundle name of the app that invokes the KV store. |
| storeId | string | 是 | Unique identifier of the KV store to close. The length cannot exceed  [MAX_STORE_ID_LENGTH]distributedData.Constants. |
| kvStore | KVStore | 是 | KV store to close. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
let kvStore;
let kvManager;
const options = {
    createIfMissing: true,
    encrypt: false,
    backup: false,
    autoSync: false,
    kvStoreType: distributedData.KVStoreType.SINGLE_VERSION,
    schema: undefined,
    securityLevel: distributedData.SecurityLevel.S3,
}
try {
    kvManager.getKVStore('storeId', options, async function (err, store) {
        console.log('getKVStore success');
        kvStore = store;
        kvManager.closeKVStore('appId', 'storeId', kvStore, function (err, data) {
            console.log('closeKVStore success');
        });
    });
} catch (e) {
    console.log('closeKVStore e ' + e);
}

```

## closeKVStore

```TypeScript
closeKVStore(appId: string, storeId: string, kvStore: KVStore): Promise<void>
```

Closes a KV store. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#closeKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appId | string | 是 | Bundle name of the app that invokes the KV store. |
| storeId | string | 是 | Unique identifier of the KV store to close. The length cannot exceed  [MAX_STORE_ID_LENGTH]distributedData.Constants. |
| kvStore | KVStore | 是 | KV store to close. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
let kvManager;
let kvStore;
const options = {
    createIfMissing: true,
    encrypt: false,
    backup: false,
    autoSync: false,
    kvStoreType: distributedData.KVStoreType.SINGLE_VERSION,
    schema: undefined,
    securityLevel: distributedData.SecurityLevel.S3,
}
try {
    kvManager.getKVStore('storeId', options).then(async (store) => {
        console.log('getKVStore success');
        kvStore = store;
        kvManager.closeKVStore('appId', 'storeId', kvStore).then(() => {
            console.log('closeKVStore success');
        }).catch((err) => {
            console.log('closeKVStore err ' + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log('CloseKVStore getKVStore err ' + JSON.stringify(err));
    });
} catch (e) {
    console.log('closeKVStore e ' + e);
}

```

## deleteKVStore

```TypeScript
deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void
```

Deletes a KV store. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#deleteKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appId | string | 是 | Bundle name of the app that invokes the KV store. |
| storeId | string | 是 | Unique identifier of the KV store to delete. The length cannot exceed  [MAX_STORE_ID_LENGTH]distributedData.Constants. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
let kvManager;
let kvStore;
const options = {
    createIfMissing : true,
    encrypt : false,
    backup : false,
    autoSync : true,
    kvStoreType : distributedData.KVStoreType.SINGLE_VERSION,
    schema : undefined,
    securityLevel : distributedData.SecurityLevel.S3,
}
try {
    kvManager.getKVStore('store', options, async function (err, store) {
        console.log('getKVStore success');
        kvStore = store;
        kvManager.deleteKVStore('appId', 'storeId', function (err, data) {
            console.log('deleteKVStore success');
        });
    });
} catch (e) {
    console.log('DeleteKVStore e ' + e);
}

```

## deleteKVStore

```TypeScript
deleteKVStore(appId: string, storeId: string): Promise<void>
```

Deletes a KV store. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#deleteKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appId | string | 是 | Bundle name of the app that invokes the KV store. |
| storeId | string | 是 | Unique identifier of the KV store to delete. The length cannot exceed  [MAX_STORE_ID_LENGTH]distributedData.Constants. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
let kvManager;
let kvStore;
const options = {
    createIfMissing : true,
    encrypt : false,
    backup : false,
    autoSync : true,
    kvStoreType : distributedData.KVStoreType.SINGLE_VERSION,
    schema : undefined,
    securityLevel : distributedData.SecurityLevel.S3,
}
try {
    kvManager.getKVStore('storeId', options).then(async (store) => {
        console.log('getKVStore success');
        kvStore = store;
        kvManager.deleteKVStore('appId', 'storeId').then(() => {
            console.log('deleteKVStore success');
        }).catch((err) => {
            console.log('deleteKVStore err ' + JSON.stringify(err));
        });
    }).catch((err) => {
        console.log('getKVStore err ' + JSON.stringify(err));
    });
} catch (e) {
    console.log('deleteKVStore e ' + e);
}

```

## getAllKVStoreId

```TypeScript
getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void
```

Obtains the IDs of all KV stores that are created by [getKVStore()]distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>) and have not been deleted by [deleteKVStore()]distributedData.KVManager.deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>) . This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#getAllKVStoreId

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appId | string | 是 | Bundle name of the app that invokes the KV store. |
| callback | AsyncCallback&lt;string[]> | 是 | Callback used to return the IDs of all created KV stores. |

**示例：**

```TypeScript
let kvManager;
try {
    kvManager.getAllKVStoreId('appId', function (err, data) {
        console.log('GetAllKVStoreId success');
        console.log('GetAllKVStoreId size = ' + data.length);
    });
} catch (e) {
    console.log('GetAllKVStoreId e ' + e);
}

```

## getAllKVStoreId

```TypeScript
getAllKVStoreId(appId: string): Promise<string[]>
```

Obtains the IDs of all KV stores that are created by [getKVStore()]distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>) and have not been deleted by [deleteKVStore()]distributedData.KVManager.deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>) . This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#getAllKVStoreId

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appId | string | 是 | Bundle name of the app that invokes the KV store. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string[]> | Promise used to return the IDs of all created KV stores. |

**示例：**

```TypeScript
let kvManager;
try {
    console.log('GetAllKVStoreId');
    kvManager.getAllKVStoreId('appId').then((data) => {
        console.log('getAllKVStoreId success');
        console.log('size = ' + data.length);
    }).catch((err) => {
        console.log('getAllKVStoreId err ' + JSON.stringify(err));
    });
} catch(e) {
    console.log('getAllKVStoreId e ' + e);
}

```

## getKVStore

```TypeScript
getKVStore<T extends KVStore>(storeId: string, options: Options): Promise<T>
```

Creates and obtains a KV store. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#getKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| storeId | string | 是 | Unique identifier of the KV store. The length cannot exceed  [MAX_STORE_ID_LENGTH]distributedData.Constants. |
| options | Options | 是 | Configuration of the KV store. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T> | Promise used to return the KV store instance created. |

**示例：**

```TypeScript
let kvStore;
let kvManager;
try {
    const options = {
        createIfMissing : true,
        encrypt : false,
        backup : false,
        autoSync : true,
        kvStoreType : distributedData.KVStoreType.SINGLE_VERSION,
        securityLevel : distributedData.SecurityLevel.S3,
    };
    kvManager.getKVStore('storeId', options).then((store) => {
        console.log("getKVStore success");
        kvStore = store;
    }).catch((err) => {
        console.log("getKVStore err: "  + JSON.stringify(err));
    });
} catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## getKVStore

```TypeScript
getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>): void
```

Creates and obtains a KV store. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#getKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| storeId | string | 是 | Unique identifier of the KV store. The length cannot exceed  [MAX_STORE_ID_LENGTH]distributedData.Constants. |
| options | Options | 是 | Configuration of the KV store. |
| callback | AsyncCallback&lt;T> | 是 | Callback used to return the KV store instance created. |

**示例：**

```TypeScript
let kvStore;
let kvManager;
try {
    const options = {
        createIfMissing : true,
        encrypt : false,
        backup : false,
        autoSync : true,
        kvStoreType : distributedData.KVStoreType.SINGLE_VERSION,
        securityLevel : distributedData.SecurityLevel.S3,
    };
    kvManager.getKVStore('storeId', options, function (err, store) {
        if (err) {
            console.log("getKVStore err: "  + JSON.stringify(err));
            return;
        }
        console.log("getKVStore success");
        kvStore = store;
    });
} catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

## off

```TypeScript
off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void
```

Unsubscribes from service status changes.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#off

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'distributedDataServiceDie' | 是 | Event type. The value is distributedDataServiceDie, which indicates  service status changes. |
| deathCallback | Callback&lt;void> | 否 | Callback to unregister. If this parameter is not specified, all callbacks for  service status changes will be unregistered. |

**示例：**

```TypeScript
let kvManager;
try {
    console.log('KVManagerOff');
    const deathCallback = function () {
        console.log('death callback call');
    }
    kvManager.off('distributedDataServiceDie', deathCallback);
} catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}
    

```

## on

```TypeScript
on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void
```

Subscribes to service status changes.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.KVManager#on

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'distributedDataServiceDie' | 是 | Event type. The value is distributedDataServiceDie, which indicates  service status changes. |
| deathCallback | Callback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
let kvManager;
try {
    console.log('KVManagerOn');
    const deathCallback = function () {
        console.log('death callback call');
    }
    kvManager.on('distributedDataServiceDie', deathCallback);
} catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```

