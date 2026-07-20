# WebDownloadDelegate

The download state is notified through this delegate.

**Since:** 11

<!--Device-webview-class WebDownloadDelegate--><!--Device-webview-class WebDownloadDelegate-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## onBeforeDownload

```TypeScript
onBeforeDownload(callback: Callback<WebDownloadItem>): void
```

Callback will be triggered before web download start.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadDelegate-onBeforeDownload(callback: Callback<WebDownloadItem>): void--><!--Device-WebDownloadDelegate-onBeforeDownload(callback: Callback<WebDownloadItem>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<WebDownloadItem> | Yes | The callback of download will be start. |

## onDownloadFailed

```TypeScript
onDownloadFailed(callback: Callback<WebDownloadItem>): void
```

Callback will be triggered when web download is interrupted or canceled.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadDelegate-onDownloadFailed(callback: Callback<WebDownloadItem>): void--><!--Device-WebDownloadDelegate-onDownloadFailed(callback: Callback<WebDownloadItem>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<WebDownloadItem> | Yes | The callback of download did fail. |

## onDownloadFinish

```TypeScript
onDownloadFinish(callback: Callback<WebDownloadItem>): void
```

Callback will be triggered when web download is completed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadDelegate-onDownloadFinish(callback: Callback<WebDownloadItem>): void--><!--Device-WebDownloadDelegate-onDownloadFinish(callback: Callback<WebDownloadItem>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<WebDownloadItem> | Yes | The callback of download did finish. |

## onDownloadUpdated

```TypeScript
onDownloadUpdated(callback: Callback<WebDownloadItem>): void
```

Callback will be triggered when web download is processing.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadDelegate-onDownloadUpdated(callback: Callback<WebDownloadItem>): void--><!--Device-WebDownloadDelegate-onDownloadUpdated(callback: Callback<WebDownloadItem>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<WebDownloadItem> | Yes | The callback of download did update. |

