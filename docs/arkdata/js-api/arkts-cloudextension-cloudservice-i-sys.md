# CloudService

提供对接同步云服务的类。开发者需要继承此类并实现类的接口，系统内部通过该类的接口连接并使用同步云服务。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudExtension } from '@kit.ArkData';
```

## connectAssetLoader

```TypeScript
connectAssetLoader(bundleName: string, database: Database): Promise<rpc.RemoteObject>
```

系统内部通过该接口获取AssetLoader的RemoteObject对象，可以通过createAssetLoaderStub接口进行创建，使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。 |
| database | Database | Yes | 需要连接的数据库。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject> | Promise对象，返回AssetLoader的RemoteObject对象。 |

## connectDB

```TypeScript
connectDB(bundleName: string, database: Database): Promise<rpc.RemoteObject>
```

系统内部通过该接口获取CloudDB的RemoteObject对象，可以通过createCloudDBStub接口进行创建，使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。 |
| database | Database | Yes | 需要连接的数据库。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject> | Promise对象，返回CloudDB的RemoteObject对象。 |

## connectShareCenter

```TypeScript
connectShareCenter(userId: int, bundleName: string): Promise<rpc.RemoteObject>
```

系统内部通过该接口获取ShareCenter的RemoteObject对象，可以通过createShareServiceStub接口进行创建，使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | 表示用户账号ID。 |
| bundleName | string | Yes | 应用包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;rpc.RemoteObject> | Promise对象，返回ShareCenter的RemoteObject对象。 |

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

获取简要应用信息。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, AppBriefInfo>> | Promise对象，返回以bundleName为键、AppBriefInfo为值的键值对。  in KV pairs. |

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

获取应用Schema（数据库模式）信息。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;AppSchema>> | Promise对象，返回数据库的schema信息。 |

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

获取服务器上的信息。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ServiceInfo> | Promise对象，返回获取的服务器信息。 |

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
      expirationTime: long
    ): Promise<Result<SubscribeInfo>>
```

订阅云数据库的变化通知。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subInfo | Record&lt;string, Array&lt;Database>> | Yes | 需要订阅的数据，由应用包名称和数据库信息组成的键值对。 |
| expirationTime | long | Yes | 表示订阅到期时间（ms）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;SubscribeInfo>> | Promise对象，返回订阅的结果，包含订阅的过期时间和订阅信息。 |

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
unsubscribe(unsubscribeInfo: Record<string, Array<string>>): Promise<int>
```

取消已订阅的云数据变化通知。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| unsubscribeInfo | Record&lt;string, Array&lt;string>> | Yes | 需要取消订阅的数据信息，由应用包名和数据库名组成的键值对。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回取消订阅结果的错误码。 |

