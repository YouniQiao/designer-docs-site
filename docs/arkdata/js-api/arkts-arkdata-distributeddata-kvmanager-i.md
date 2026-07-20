# KVManager

Creates a **KVManager** object to obtain KV store information. Before calling any method in **KVManager**, you must use [createKVManager](arkts-arkdata-distributeddata-createkvmanager-f.md#createkvmanager-1)to create a **KVManager** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** KVManager

<!--Device-distributedData-interface KVManager--><!--Device-distributedData-interface KVManager-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## closeKVStore

```TypeScript
closeKVStore(appId: string, storeId: string, kvStore: KVStore, callback: AsyncCallback<void>): void
```

Closes a KV store. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** closeKVStore

<!--Device-KVManager-closeKVStore(appId: string, storeId: string, kvStore: KVStore, callback: AsyncCallback<void>): void--><!--Device-KVManager-closeKVStore(appId: string, storeId: string, kvStore: KVStore, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Bundle name of the app that invokes the KV store. |
| storeId | string | Yes | Unique identifier of the KV store to close. The length cannot exceed [MAX_STORE_ID_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |
| kvStore | [KVStore](arkts-arkdata-distributeddata-kvstore-i.md) | Yes | KV store to close. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** closeKVStore

<!--Device-KVManager-closeKVStore(appId: string, storeId: string, kvStore: KVStore): Promise<void>--><!--Device-KVManager-closeKVStore(appId: string, storeId: string, kvStore: KVStore): Promise<void>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Bundle name of the app that invokes the KV store. |
| storeId | string | Yes | Unique identifier of the KV store to close. The length cannot exceed [MAX_STORE_ID_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |
| kvStore | [KVStore](arkts-arkdata-distributeddata-kvstore-i.md) | Yes | KV store to close. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deleteKVStore

<!--Device-KVManager-deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void--><!--Device-KVManager-deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Bundle name of the app that invokes the KV store. |
| storeId | string | Yes | Unique identifier of the KV store to delete. The length cannot exceed [MAX_STORE_ID_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deleteKVStore

<!--Device-KVManager-deleteKVStore(appId: string, storeId: string): Promise<void>--><!--Device-KVManager-deleteKVStore(appId: string, storeId: string): Promise<void>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Bundle name of the app that invokes the KV store. |
| storeId | string | Yes | Unique identifier of the KV store to delete. The length cannot exceed [MAX_STORE_ID_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Example**

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

Obtains the IDs of all KV stores that are created by [getKVStore()](arkts-arkdata-distributeddata-kvmanager-i.md#getkvstore-2)and have not been deleted by [deleteKVStore()](arkts-arkdata-distributeddata-kvmanager-i.md#deletekvstore-1). This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAllKVStoreId

<!--Device-KVManager-getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void--><!--Device-KVManager-getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Bundle name of the app that invokes the KV store. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string[]> | Yes | Callback used to return the IDs of all created KV stores. |

**Example**

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

Obtains the IDs of all KV stores that are created by [getKVStore()](arkts-arkdata-distributeddata-kvmanager-i.md#getkvstore-2)and have not been deleted by [deleteKVStore()](arkts-arkdata-distributeddata-kvmanager-i.md#deletekvstore-1). This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAllKVStoreId

<!--Device-KVManager-getAllKVStoreId(appId: string): Promise<string[]>--><!--Device-KVManager-getAllKVStoreId(appId: string): Promise<string[]>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Bundle name of the app that invokes the KV store. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string[]> | Promise used to return the IDs of all created KV stores. |

**Example**

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

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getKVStore

<!--Device-KVManager-getKVStore<T extends KVStore>(storeId: string, options: Options): Promise<T>--><!--Device-KVManager-getKVStore<T extends KVStore>(storeId: string, options: Options): Promise<T>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| storeId | string | Yes | Unique identifier of the KV store. The length cannot exceed [MAX_STORE_ID_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |
| options | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | Yes | Configuration of the KV store. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<T> | Promise used to return the KV store instance created. |

**Example**

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

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getKVStore

<!--Device-KVManager-getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>): void--><!--Device-KVManager-getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| storeId | string | Yes | Unique identifier of the KV store. The length cannot exceed [MAX_STORE_ID_LENGTH](arkts-arkdata-distributeddata-constants-n.md#constants). |
| options | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | Yes | Configuration of the KV store. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<T> | Yes | Callback used to return the KV store instance created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

<!--Device-KVManager-off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void--><!--Device-KVManager-off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'distributedDataServiceDie' | Yes | Event type. The value is **distributedDataServiceDie**, which indicates service status changes. |
| deathCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | No | Callback to unregister. If this parameter is not specified, all callbacks for service status changes will be unregistered. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on

<!--Device-KVManager-on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void--><!--Device-KVManager-on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'distributedDataServiceDie' | Yes | Event type. The value is **distributedDataServiceDie**, which indicates service status changes. |
| deathCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | Callback used to return the result. |

**Example**

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

