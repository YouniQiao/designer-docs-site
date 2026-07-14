# WebDownloadItem

Represents a download task, You can use this object to operate the corresponding download task. Currently, the maximum length of the download file name supported by **WebDownloadItem** is 255 bytes.

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## cancel

```TypeScript
cancel(): void
```

Cancel the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## deserialize

```TypeScript
static deserialize(serializedData: Uint8Array): WebDownloadItem
```

Deserialize web download from typed array.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serializedData | Uint8Array | Yes | The serialized data. |

**Return value:**

| Type | Description |
| --- | --- |
| WebDownloadItem | - Deserialize the serialized data into a WebDownloadItem. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types.<br>2. Parameter verification failed. |

## getCurrentSpeed

```TypeScript
getCurrentSpeed(): number
```

Get current speed, in bytes per second.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns the current download speed. |

## getFullPath

```TypeScript
getFullPath(): string
```

Get full path of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the full path of the download. |

## getGuid

```TypeScript
getGuid(): string
```

Get guid.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the download's guid. |

## getLastErrorCode

```TypeScript
getLastErrorCode(): WebDownloadErrorCode
```

Get last error code of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| WebDownloadErrorCode | - Returns the last error code. |

## getMethod

```TypeScript
getMethod(): string
```

Get http method of the web download request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the http request method. |

## getMimeType

```TypeScript
getMimeType(): string
```

Get mime type of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the mimetype. |

## getOriginalUrl

```TypeScript
getOriginalUrl(): string
```

Get the original url of the web download.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the original url of the download. |

## getPercentComplete

```TypeScript
getPercentComplete(): number
```

Get percent complete.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns -1 if progress is unknown. 100 if the download is already complete. |

## getReceivedBytes

```TypeScript
getReceivedBytes(): number
```

Get received bytes.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns the received bytes. |

## getReferrerUrl

```TypeScript
getReferrerUrl(): string
```

Get the referrer url of the web download.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the referrer url of the download. |

## getState

```TypeScript
getState(): WebDownloadState
```

Get state of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| WebDownloadState | - Returns the current download state. |

## getSuggestedFileName

```TypeScript
getSuggestedFileName(): string
```

Get suggested file name of the web download request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the suggested file name. |

## getTotalBytes

```TypeScript
getTotalBytes(): number
```

Get total bytes.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns the total bytes received, -1 if the total size is unknown. |

## getUrl

```TypeScript
getUrl(): string
```

Get url of the web download request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the url. |

## pause

```TypeScript
pause(): void
```

Pause the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100019](../errorcode-webview.md#17100019-download-not-started-yet) | The download task is not started yet. |

## resume

```TypeScript
resume(): void
```

Resume the web download. Use WebDownloadManager.resumeDownload to resume deserialized downloads. WebDownloadItem.resume is only used to resume the currently paused download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100016](../errorcode-webview.md#17100016-download-task-not-paused) | The download task is not paused. |

## serialize

```TypeScript
serialize(): Uint8Array
```

Serialize web download to typed array.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | - Returns the serialized data. |

## start

```TypeScript
start(downloadPath: string): void
```

Start the web download. <p><strong>API Note</strong>:<br> This API must be used in the **onBeforeDownload** callback of **WebDownloadDelegate**. If it is not called in the callback, the download task remains in the PENDING state and is downloaded to a temporary directory. After the target path is specified by **WebDownloadItem.start**, the temporary files are renamed to the target path and the unfinished files are directly downloaded to the target path. If you do not want to download the file to the temporary directory before invoking **WebDownloadItem.start**, you can call **WebDownloadItem.cancel** to cancel the current download task and then call **WebDownloadManager.resumeDownload** to resume the task. </p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| downloadPath | string | Yes | The content will be downloaded to this file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types.<br>2. Parameter verification failed. |

