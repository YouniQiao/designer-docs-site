# cancel

## cancel

```TypeScript
function cancel(url: string): void
```

根据url移除一个正在执行的缓存下载任务，已保存的内存缓存和文件缓存不会受到影响。 - 当不存在对应url的任务时无其他效果。 - 使用该方法同步执行时，不阻塞调用线程。

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | 目标资源的地址。支持HTTP和HTTPS协议，长度不超过8192字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

**Example**

```TypeScript
import { cacheDownload, BusinessError } from '@kit.BasicServicesKit';

// Provide configuration options for the download task.
let options: cacheDownload.CacheDownloadOptions = {};

try {
  // Download the resource. If the download is successful, the resource will be cached to the specified file in the application memory or sandbox directory. 
  cacheDownload.download("https://www.example.com", options);
} catch (err) {
  console.error(`Failed to download the resource. err code: ${err.code}, err message: ${err.message}`);
}

// Other service logic is omitted here.

try {
  // Cancel the download task when it is not required. The cached data is not affected.
  cacheDownload.cancel("https://www.example.com");
} catch (err) {
  console.error(`Failed to cancel the task. err code: ${err.code}, err message: ${err.message}`);
}

```

