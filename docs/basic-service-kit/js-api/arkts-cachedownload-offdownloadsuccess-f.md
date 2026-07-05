# offDownloadSuccess

## offDownloadSuccess

```TypeScript
function offDownloadSuccess(url: string, callback?: Callback<void>): void
```

取消订阅预下载的完成事件。使用callback异步回调。

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | 待注册回调的url，url字符串的最大长度为8192字节。 |
| callback | Callback&lt;void> | No |  |

**Example**

```TypeScript
import { cacheDownload } from '@kit.BasicServicesKit';

try {
  const successCallback = () => {
    console.info("Succeeded in getting callback from cacheDownload");
  };
  // Subscribe to the pre-download completion events. Callback is invoked when the download is complete.
  cacheDownload.onDownloadSuccess("https://www.example.com", successCallback);
  // Unsubscribe from the pre-download completion events.
  cacheDownload.offDownloadSuccess("https://www.example.com", successCallback);
  // Download the resource. If the download is successful, the resource will be cached to the specified file in the application memory or sandbox directory. 
  cacheDownload.download("https://www.example.com", {});
} catch (err) {
  console.error(`Failed to download the resource. err code: ${err.code}, err message: ${err.message}`);
}

```

