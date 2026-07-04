# setMemoryCacheSize

## Modules to Import

```TypeScript
import { cacheDownload } from '@ohos.request.cacheDownload';
```

## setMemoryCacheSize

```TypeScript
function setMemoryCacheSize(bytes: number): void
```

Sets the upper limit of the memory cache size for the **cacheDownload** component. - When this API is used to adjust the cache size, the LRU mode is used by default to clear redundant cached data in the memory. - This API returns the result synchronously, without blocking the calling thread.

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bytes | number | Yes | Upper limit of the cache, in bytes. The default value is **0**, and the maximum valuecannot exceed **1073741824** (1 GB). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter error. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed. |

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

