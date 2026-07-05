# AssetLoader

提供资产上传下载接口的类。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudExtension } from '@kit.ArkData';
```

## download

```TypeScript
download(table: string, gid: string, prefix: string, assets: Array<CloudAsset>): Promise<Array<Result<CloudAsset>>>
```

通过该接口实现资产的下载。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | 表名。 |
| gid | string | Yes | 数据上云后生成的唯一标记。 |
| prefix | string | Yes | 表示资产下载目录的前缀信息。 |
| assets | Array&lt;CloudAsset> | Yes | 表示需要下载的资产。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;CloudAsset>>> | Promise对象，返回资产下载结果，包含资产ID和资产哈希值。 |

**Example**

```TypeScript
class MyAssetLoader implements cloudExtension.AssetLoader {
  async download(table: string, gid: string, prefix: string, assets: Array<cloudExtension.CloudAsset>): Promise<Array<cloudExtension.Result<cloudExtension.CloudAsset>>> {
    console.info(`download asset loader, table: ${table}, gid: ${gid}, prefix: ${prefix}`);
    let downloadRes = Array<cloudExtension.Result<cloudExtension.CloudAsset>>();
    // ...
    return downloadRes;
  }
}

```

## upload

```TypeScript
upload(table: string, gid: string, assets: Array<CloudAsset>): Promise<Array<Result<CloudAsset>>>
```

通过该接口实现资产的上传。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Server

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | 表名。 |
| gid | string | Yes | 表示GID，数据上云后生成的唯一标记。 |
| assets | Array&lt;CloudAsset> | Yes | 表示需要上传的资产。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Result&lt;CloudAsset>>> | Promise对象，返回资产上云的结果，包含资产ID和资产哈希值。 |

**Example**

```TypeScript
class MyAssetLoader implements cloudExtension.AssetLoader {
  async upload(table: string, gid: string, assets: Array<cloudExtension.CloudAsset>): Promise<Array<cloudExtension.Result<cloudExtension.CloudAsset>>> {
    console.info(`upload asset loader, table: ${table}, gid: ${gid}`);
    let uploadRes = Array<cloudExtension.Result<cloudExtension.CloudAsset>>();
    // ...
    return uploadRes;
  }
    // ...
}

```

