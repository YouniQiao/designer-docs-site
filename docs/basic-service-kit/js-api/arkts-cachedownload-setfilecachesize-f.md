# setFileCacheSize

## setFileCacheSize

```TypeScript
function setFileCacheSize(bytes: long): void
```

设置缓存下载组件能够保存的文件缓存的上限。 - 使用该接口调整缓存大小时，默认使用“LRU”（最近最少使用）方式清除多余的已缓存的文件缓存内容。 - 使用该接口时，若bytes设置为0，将会删除所有缓存文件。 - 该方法为同步方法，不会阻塞调用线程。

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bytes | long | Yes | 设置的缓存上限。默认值为104857600B（即100MB），最大值不超过4294967296B（即4GB）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

**Example**

```TypeScript
import { cacheDownload, BusinessError } from '@kit.BasicServicesKit';

try {
  // Set the upper limit of the file cache size. 
  cacheDownload.setFileCacheSize(100 * 1024 * 1024);
} catch (err) {
  console.error(`Failed to set file cache size. err code: ${err.code}, err message: ${err.message}`);
}

```

