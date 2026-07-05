# setMemoryCacheSize

## setMemoryCacheSize

```TypeScript
function setMemoryCacheSize(bytes: long): void
```

设置缓存下载组件能够保存的内存缓存上限。 - 使用该接口调整缓存大小时，默认使用“LRU”（最近最少使用）方式清除多余的已缓存的内存缓存内容。 - 该方法为同步方法，不阻塞调用线程。

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bytes | long | Yes | 设置的缓存上限。默认值为0B，最大值不超过1073741824B（即1GB）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

**Example**

```TypeScript
import { cacheDownload, BusinessError } from '@kit.BasicServicesKit';

try {
  // Set the upper limit of the memory cache size. 
  cacheDownload.setMemoryCacheSize(10 * 1024 * 1024);
} catch (err) {
  console.error(`Failed to set memory cache size. err code: ${err.code}, err message: ${err.message}`);
}

```

