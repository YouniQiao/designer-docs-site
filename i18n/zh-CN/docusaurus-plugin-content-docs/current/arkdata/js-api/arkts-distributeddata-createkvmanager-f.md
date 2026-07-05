# createKVManager

## createKVManager

```TypeScript
function createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>): void
```

Creates a **KVManager** instance to manage KV stores. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore#createKVManager

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | KVManagerConfig | 是 | Configuration of the KVManager instance, including the bundle name and user  information of the caller. |
| callback | AsyncCallback&lt;KVManager> | 是 | Callback used to return the KVManager instance created. |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore#createKVManager

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | KVManagerConfig | 是 | Configuration of the KVManager instance, including the bundle name and user  information of the caller. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KVManager> | Promise used to return the KVManager instance created. |

**示例：**

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

