# download

## download

```TypeScript
function download(url: string, options: CacheDownloadOptions): void
```

启动一个缓存下载任务，若传输成功，则将数据下载到内存缓存和文件缓存中。 - 目标资源经过HTTP传输自动解压后的大小不能超过20971520B（即20MB），否则不会保存到内存缓存或文件缓存中。 - 在缓存下载数据时，如果在该url下已存在缓存内容，新的缓存内容会覆盖旧缓存内容。 - 目标资源在存储到内存缓存或文件缓存中时，依照缓存下载组件的各类型缓存大小上限决定文件是否存储到指定位置，并默认使用“LRU”（最近最少使用）方式替换已有缓存内容。 - 该方法为同步方法，不阻塞调用线程。

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | 目标资源的地址。支持HTTP和HTTPS协议，长度不超过8192字节。 |
| options | CacheDownloadOptions | Yes | 目标资源的缓存下载选项。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied. |
| 401 | parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |

**Example**

```TypeScript
import { cacheDownload, BusinessError } from '@kit.BasicServicesKit';

// Provide configuration options for the download task.
let options: cacheDownload.CacheDownloadOptions = {
  headers: { 'Accept': 'application/json' },
  sslType: cacheDownload.SslType.TLS,
  caPath: '/path/to/ca.pem',
  cacheStrategy: cacheDownload.CacheStrategy.FORCE,
  retry: { maxRetryCount: 1 },
  timeout: {
    networkCheckTimeout: 20,
    httpTotalTimeout: 60,
  }
};

try {
  // Download the resource. If the download is successful, the resource will be cached to the specified file in the application memory or sandbox directory.
  cacheDownload.download("https://www.example.com", options);
} catch (err) {
  console.error(`Failed to download the resource. err code: ${err.code}, err message: ${err.message}`);
}

```

