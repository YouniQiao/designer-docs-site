# WebDownloadManager

You can trigger download manually through this interface, or resume failed or canceled downloads.

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@ohos.web.webview';
```

## resumeDownload

```TypeScript
static resumeDownload(webDownloadItem: WebDownloadItem): void
```

Resume the canceled or failed download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| webDownloadItem | WebDownloadItem | Yes | Download that need to be resume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100018](../errorcode-webview.md#17100018-no-webdownloaddelegate-available) | No WebDownloadDelegate has been set yet. |

## setDownloadDelegate

```TypeScript
static setDownloadDelegate(delegate: WebDownloadDelegate): void
```

Set a delegate used to receive the progress of the download triggered from WebDownloadManager.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delegate | WebDownloadDelegate | Yes | Delegate used for download triggered from WebDownloadManager. |

