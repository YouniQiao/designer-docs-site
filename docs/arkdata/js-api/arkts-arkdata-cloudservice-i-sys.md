# CloudService (System API)

Provides APIs for interacting with the cloud sync service. You need to inherit this class and implement APIs of this class. The system calls these APIs to connect to the cloud and use the cloud sync service.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudExtension } from '@ohos.data.cloudExtension';
```

## connectAssetLoader

```TypeScript
connectAssetLoader(bundleName: string, database: Database): Promise<rpc.RemoteObject>
```

Connects to an asset loader by obtaining a RemoteObject instance of AssetLoader, which is created by using createAssetLoaderStub. This API uses a promise to return the result. You can use this API to connect to the asset loader.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| database | Database | Yes | Database to connect. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject&gt; | Promise used to return the RemoteObject instance of AssetLoader. |

## connectDB

```TypeScript
connectDB(bundleName: string, database: Database): Promise<rpc.RemoteObject>
```

Connects to a cloud database by obtaining a RemoteObject instance of CloudDB, which is created by using createCloudDBStub. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| database | Database | Yes | Database to connect. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject&gt; | Promise used to return the RemoteObject instance of CloudDB. |

## connectShareCenter

```TypeScript
connectShareCenter(userId: number, bundleName: string): Promise<rpc.RemoteObject>
```

Connects to ShareCenter by obtaining a RemoteObject instance of ShareCenter, which is created by using createShareServiceStub. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. |
| bundleName | string | Yes | Bundle name of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject&gt; | Promise used to return the RemoteObject instance of ShareCenter. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';

class MyShareCenter implements cloudExtension.ShareCenter {
  constructor() {}
  // ...
}

class MyCloudService implements cloudExtension.CloudService {
  constructor() {}
  async connectShareCenter(userId: number, bundleName: string): Promise<rpc.RemoteObject> {
    console.info(`connect share center, bundle: ${bundleName}`);
    return cloudExtension.createShareServiceStub(new MyShareCenter());
  }
}

```

## getAppBriefInfo

```TypeScript
getAppBriefInfo(): Promise<Record<string, AppBriefInfo>>
```

Obtains brief application information. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, AppBriefInfo&gt;&gt; | Promise used to return bundleName and AppBriefInfo,in KV pairs. |

**Example**

```TypeScript
class MyCloudService implements cloudExtension.CloudService {
  constructor() {}
  // ...
  async getAppBriefInfo(): Promise<Record<string, cloudExtension.AppBriefInfo>> {
    console.info(`get app brief info`);
    // ...
    return {
      "test_bundle":
      {
        appId: "test_appID",
        bundleName: "test_bundlename",
        cloudSwitch: true,
        instanceId: 0,
      }
    };
  }
}

```

## getAppSchema

```TypeScript
getAppSchema(bundleName: string): Promise<Result<AppSchema>>
```

Obtains the application database schema information. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;AppSchema&gt;&gt; | Promise used to return the schema information obtained. |

**Example**

```TypeScript
class MyCloudService implements cloudExtension.CloudService {
  constructor() {
  }
  // ...
  async getAppSchema(bundleName: string): Promise<cloudExtension.Result<cloudExtension.AppSchema>> {
    console.info(`get app schema, bundleName:${bundleName}`);
    // ...
    return {
      code: cloudExtension.ErrorCode.SUCCESS,
      description: "get app schema success",
      value: {
        bundleName: "test_bundleName",
        version: 1,
        databases: []
      }
    };
  }
}

```

## getServiceInfo

```TypeScript
getServiceInfo(): Promise<ServiceInfo>
```

Obtains the server information. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ServiceInfo&gt; | Promise used to return the server information obtained. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';

let test_space: number = 100;
let test_userId: number = 1;

class MyCloudService implements cloudExtension.CloudService {
  constructor() {}
  // ...
  async getServiceInfo(): Promise<cloudExtension.ServiceInfo> {
    console.info(`get service info`);
    // ...
    return {
      enableCloud: true,
      id: "test_id",
      totalSpace: test_space,
      remainingSpace: test_space,
      user: test_userId,
    };
  }
}

```

## subscribe

```TypeScript
subscribe(
      subInfo: Record<string, Array<Database>>,
      expirationTime: number
    ): Promise<Result<SubscribeInfo>>
```

Subscribes to data. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subInfo | Record&lt;string, Array&lt;Database&gt;&gt; | Yes | Data to be subscribed to,in KV pairs of the application bundle name and database information. |
| expirationTime | number | Yes | Subscription expiration time, in ms. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;SubscribeInfo&gt;&gt; | Promise used to return the result,including the subscription expiration time and subscription information. |

**Example**

```TypeScript
let test_time: number = 10;
class MyCloudService implements cloudExtension.CloudService {
  constructor() {
  }
  // ...
  async subscribe(subInfo: Record<string, Array<cloudExtension.Database>>, expirationTime: number): Promise<cloudExtension.Result<cloudExtension.SubscribeInfo>> {
    console.info
    (`subscribe expirationTime: ${expirationTime}`);
    // ...
    return {
      code: cloudExtension.ErrorCode.SUCCESS,
      description: "subscribe success",
      value: {
        expirationTime: test_time,
        subscribe: {}
      }
    };
  }
}

```

## unsubscribe

```TypeScript
unsubscribe(unsubscribeInfo: Record<string, Array<string>>): Promise<number>
```

Unsubscribes from data changes in the cloud. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| unsubscribeInfo | Record&lt;string, Array&lt;string&gt;&gt; | Yes | Data to be unsubscribed from,in an array of KV pairs consisting of the application bundle name and database information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the result. |

