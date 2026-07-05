# setDownloadInfoListSize

## setDownloadInfoListSize

```TypeScript
function setDownloadInfoListSize(size: long): void
```

设置下载信息列表的大小。 - 下载信息列表用于存储预下载信息。 - 下载信息和url一一对应，每次预下载都会生成一个下载信息，相同url下只会保存最新的下载信息。 - 使用该接口调整列表大小时，size更新增大，列表中原有的信息不变，更新减小，默认使用“LRU”（最近最少使用）方式清除多余的已缓存信息。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | long | Yes | 设置的下载信息列表大小。取值范围：[0, 8192]，默认为0，表示不会存储任何下载信息。 |

**Example**

```TypeScript
import { cacheDownload, BusinessError } from '@kit.BasicServicesKit';

try {
  // Set the size of the download information list. 
  cacheDownload.setDownloadInfoListSize(2048);
} catch (err) {
  console.error(`Failed to set download information list size. err code: ${err.code}, err message: ${err.message}`);
}

```

