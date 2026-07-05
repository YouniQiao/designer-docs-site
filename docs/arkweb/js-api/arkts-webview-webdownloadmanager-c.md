# WebDownloadManager

可以通过该类提供的接口来恢复失败的下载任务。

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## resumeDownload

```TypeScript
static resumeDownload(webDownloadItem: WebDownloadItem): void
```

恢复一个失败的下载任务。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| webDownloadItem | WebDownloadItem | Yes | 待恢复的下载任务。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100018 | No WebDownloadDelegate has been set yet. |

## setDownloadDelegate

```TypeScript
static setDownloadDelegate(delegate: WebDownloadDelegate): void
```

设置用于接收从WebDownloadManager触发的下载进度的委托。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delegate | WebDownloadDelegate | Yes | 用来接收下载进度的委托。 |

