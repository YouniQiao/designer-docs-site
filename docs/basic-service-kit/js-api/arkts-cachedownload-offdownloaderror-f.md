# offDownloadError

## offDownloadError

```TypeScript
function offDownloadError(url: string, callback?: Callback<DownloadError>): void
```

取消订阅预下载的错误事件。使用callback异步回调。

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | 待注册回调的url，url字符串最大长度为8192字节。 |
| callback | Callback&lt;DownloadError> | No |  |

**Example**

```TypeScript
import { cacheDownload } from '@kit.BasicServicesKit';

try {
  const errorCallback = (error: cacheDownload.DownloadError) => {
    console.info(`Error callback from cacheDownload.error code: ${error.errorCode}, error message: ${error.message}`);
  };
  // Subscribe to pre-download error events. When a download error occurs, the callback is invoked to return error information.
  cacheDownload.onDownloadError("https://www.example.com", errorCallback);
  // Unsubscribe from the pre-download error events.
  cacheDownload.offDownloadError("https://www.example.com", errorCallback);
  // Download the resource. If the download is successful, the resource will be cached to the specified file in the application memory or sandbox directory. 
  cacheDownload.download("https://www.example.com", {});
} catch (err) {
  console.error(`Failed to download the resource. err code: ${err.code}, err message: ${err.message}`);
}

```

