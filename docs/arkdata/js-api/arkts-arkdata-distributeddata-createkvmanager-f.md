# createKVManager

## createKVManager

```TypeScript
function createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>): void
```

Creates a **KVManager** instance to manage KV stores. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createKVManager

<!--Device-distributedData-function createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>): void--><!--Device-distributedData-function createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [KVManagerConfig](arkts-arkdata-distributedkvstore-kvmanagerconfig-i.md) | Yes | Configuration of the **KVManager** instance, including the bundle name and user information of the caller. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<KVManager> | Yes | Callback used to return the **KVManager** instance created. |

**Example**

```TypeScript

let kvManager;
try {
    const kvManagerConfig = {
        bundleName : 'com.example.datamanagertest',
        userInfo : {
            userId : '0',
            userType : distributedData.UserType.SAME_USER_ID
        }
    }
    distributedData.createKVManager(kvManagerConfig, function (err, manager) {
        if (err) {
            console.log("Failed to create KVManager: "  + JSON.stringify(err));
            return;
        }
        console.log("Succeeded in creating KVManager");
        kvManager = manager;
    });
} catch (e) {
    console.log("An unexpected error occurred. Error:" + e);
}

```


## createKVManager

```TypeScript
function createKVManager(config: KVManagerConfig): Promise<KVManager>
```

Creates a **KVManager** instance to manage KV stores. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createKVManager

<!--Device-distributedData-function createKVManager(config: KVManagerConfig): Promise<KVManager>--><!--Device-distributedData-function createKVManager(config: KVManagerConfig): Promise<KVManager>-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [KVManagerConfig](arkts-arkdata-distributedkvstore-kvmanagerconfig-i.md) | Yes | Configuration of the **KVManager** instance, including the bundle name and user information of the caller. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<KVManager> | Promise used to return the **KVManager** instance created. |

**Example**

```TypeScript

try {
  const kvManagerConfig = {
    bundleName: 'com.example.datamanagertest',
    userInfo: {
      userId: '0',
      userType: distributedData.UserType.SAME_USER_ID
    }
  }
  distributedData.createKVManager(kvManagerConfig).then((manager) => {
    console.log("Succeeded in creating KVManager");
    kvManager = manager;
  }).catch((err) => {
    console.error("Failed to create KVManager: " + JSON.stringify(err));
  });
} catch (e) {
  console.log("An unexpected error occurred. Error:" + e);
}

```

