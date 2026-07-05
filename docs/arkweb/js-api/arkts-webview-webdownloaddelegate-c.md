# WebDownloadDelegate

下载任务的状态会通过该类的回调接口通知给用户。

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## onBeforeDownload

```TypeScript
onBeforeDownload(callback: Callback<WebDownloadItem>): void
```

下载开始前通知给用户，用户需要在此接口中调用WebDownloadItem.start("xxx")并提供下载路径，否则下载会一直处于PENDING状态。 > **说明：** > > 处于PENDING状态的下载任务会首先将文件保存至临时目录。在调用WebDownloadItem.start并指定目标路径后，临时文件将被重命名为目标文件名，未完成下载的部分会在调用 > WebDownloadItem.start并指定目标路径后直接下载到目标路径。若希望避免在调用WebDownloadItem.start前生成临时文件，可先通过WebDownloadItem.cancel来取消当前的下载任 > 务，之后再使用WebDownloadManager.resumeDownload来恢复被取消的下载任务。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WebDownloadItem> | Yes | 触发下载的回调。 |

## onDownloadFailed

```TypeScript
onDownloadFailed(callback: Callback<WebDownloadItem>): void
```

下载失败的通知。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WebDownloadItem> | Yes | 下载失败的回调。 |

## onDownloadFinish

```TypeScript
onDownloadFinish(callback: Callback<WebDownloadItem>): void
```

下载完成的通知。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WebDownloadItem> | Yes | 下载完成的回调。 |

## onDownloadUpdated

```TypeScript
onDownloadUpdated(callback: Callback<WebDownloadItem>): void
```

下载过程中的回调，通过该回调的参数可以了解下载进度等信息。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WebDownloadItem> | Yes | 下载更新的回调。 |

