# createAssetLoaderStub (System API)

## Modules to Import

```TypeScript
import { cloudExtension } from '@kit.ArkData';
```

## createAssetLoaderStub

```TypeScript
function createAssetLoaderStub(instance: AssetLoader): Promise<rpc.RemoteObject>
```

Creates a RemoteObject instance based on an AssetLoader instance.The system uses this object to call the APIs of the AssetLoader instance.This API uses a promise to return the result.

**Since:** 11

<!--Device-cloudExtension-function createAssetLoaderStub(instance: AssetLoader): Promise<rpc.RemoteObject>--><!--Device-cloudExtension-function createAssetLoaderStub(instance: AssetLoader): Promise<rpc.RemoteObject>-End-->

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instance | [AssetLoader](arkts-arkdata-cloudextension-assetloader-i-sys.md) | Yes | AssetLoader instance. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<rpc.RemoteObject> | Promise used to return the rpc.RemoteObject instance of AssetLoader. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';

class MyAssetLoader implements cloudExtension.AssetLoader {
  // ...
}

class MyCloudService implements cloudExtension.CloudService {
  constructor() {}
  // ...   
  async connectAssetLoader(bundleName: string, database: cloudExtension.Database): Promise<rpc.RemoteObject> {
    console.info(`connect asset loader, bundle: ${bundleName}`);
    return cloudExtension.createAssetLoaderStub(new MyAssetLoader());
  }
}

```

