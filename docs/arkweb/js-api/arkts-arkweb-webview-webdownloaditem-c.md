# WebDownloadItem

Represents a download task, You can use this object to operate the corresponding download task.Currently, the maximum length of the download file name supported by **WebDownloadItem** is 255 bytes.

**Since:** 11

<!--Device-webview-class WebDownloadItem--><!--Device-webview-class WebDownloadItem-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="cancel"></a>
## cancel

```TypeScript
cancel(): void
```

Cancel the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-cancel(): void--><!--Device-WebDownloadItem-cancel(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="deserialize"></a>
## deserialize

```TypeScript
static deserialize(serializedData: Uint8Array): WebDownloadItem
```

Deserialize web download from typed array.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-static deserialize(serializedData: Uint8Array): WebDownloadItem--><!--Device-WebDownloadItem-static deserialize(serializedData: Uint8Array): WebDownloadItem-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serializedData | Uint8Array | Yes | The serialized data. |

**Return value:**

| Type | Description |
| --- | --- |
| [WebDownloadItem](arkts-arkweb-webview-webdownloaditem-c.md) | - Deserialize the serialized data into a WebDownloadItem. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types.<br>2. Parameter verification failed. |

<a id="getcurrentspeed"></a>
## getCurrentSpeed

```TypeScript
getCurrentSpeed(): number
```

Get current speed, in bytes per second.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getCurrentSpeed(): number--><!--Device-WebDownloadItem-getCurrentSpeed(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns the current download speed. |

<a id="getfullpath"></a>
## getFullPath

```TypeScript
getFullPath(): string
```

Get full path of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getFullPath(): string--><!--Device-WebDownloadItem-getFullPath(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the full path of the download. |

<a id="getguid"></a>
## getGuid

```TypeScript
getGuid(): string
```

Get guid.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getGuid(): string--><!--Device-WebDownloadItem-getGuid(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the download's guid. |

<a id="getlasterrorcode"></a>
## getLastErrorCode

```TypeScript
getLastErrorCode(): WebDownloadErrorCode
```

Get last error code of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getLastErrorCode(): WebDownloadErrorCode--><!--Device-WebDownloadItem-getLastErrorCode(): WebDownloadErrorCode-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [WebDownloadErrorCode](arkts-arkweb-webview-webdownloaderrorcode-e.md) | - Returns the last error code. |

<a id="getmethod"></a>
## getMethod

```TypeScript
getMethod(): string
```

Get http method of the web download request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getMethod(): string--><!--Device-WebDownloadItem-getMethod(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the http request method. |

<a id="getmimetype"></a>
## getMimeType

```TypeScript
getMimeType(): string
```

Get mime type of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getMimeType(): string--><!--Device-WebDownloadItem-getMimeType(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the mimetype. |

<a id="getoriginalurl"></a>
## getOriginalUrl

```TypeScript
getOriginalUrl(): string
```

Get the original url of the web download.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebDownloadItem-getOriginalUrl(): string--><!--Device-WebDownloadItem-getOriginalUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the original url of the download. |

<a id="getpercentcomplete"></a>
## getPercentComplete

```TypeScript
getPercentComplete(): number
```

Get percent complete.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getPercentComplete(): number--><!--Device-WebDownloadItem-getPercentComplete(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns -1 if progress is unknown. 100 if the download is already complete. |

<a id="getreceivedbytes"></a>
## getReceivedBytes

```TypeScript
getReceivedBytes(): number
```

Get received bytes.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getReceivedBytes(): number--><!--Device-WebDownloadItem-getReceivedBytes(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns the received bytes. |

<a id="getreferrerurl"></a>
## getReferrerUrl

```TypeScript
getReferrerUrl(): string
```

Get the referrer url of the web download.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebDownloadItem-getReferrerUrl(): string--><!--Device-WebDownloadItem-getReferrerUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the referrer url of the download. |

<a id="getstate"></a>
## getState

```TypeScript
getState(): WebDownloadState
```

Get state of the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getState(): WebDownloadState--><!--Device-WebDownloadItem-getState(): WebDownloadState-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [WebDownloadState](arkts-arkweb-webview-webdownloadstate-e.md) | - Returns the current download state. |

<a id="getsuggestedfilename"></a>
## getSuggestedFileName

```TypeScript
getSuggestedFileName(): string
```

Get suggested file name of the web download request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getSuggestedFileName(): string--><!--Device-WebDownloadItem-getSuggestedFileName(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the suggested file name. |

<a id="gettotalbytes"></a>
## getTotalBytes

```TypeScript
getTotalBytes(): number
```

Get total bytes.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getTotalBytes(): number--><!--Device-WebDownloadItem-getTotalBytes(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns the total bytes received, -1 if the total size is unknown. |

<a id="geturl"></a>
## getUrl

```TypeScript
getUrl(): string
```

Get url of the web download request.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-getUrl(): string--><!--Device-WebDownloadItem-getUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns the url. |

<a id="pause"></a>
## pause

```TypeScript
pause(): void
```

Pause the web download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-pause(): void--><!--Device-WebDownloadItem-pause(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100019](../errorcode-webview.md#17100019-download-not-started-yet) | The download task is not started yet. |

<a id="resume"></a>
## resume

```TypeScript
resume(): void
```

Resume the web download.Use WebDownloadManager.resumeDownload to resume deserialized downloads.WebDownloadItem.resume is only used to resume the currently paused download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-resume(): void--><!--Device-WebDownloadItem-resume(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100016](../errorcode-webview.md#17100016-download-task-not-paused) | The download task is not paused. |

<a id="serialize"></a>
## serialize

```TypeScript
serialize(): Uint8Array
```

Serialize web download to typed array.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-serialize(): Uint8Array--><!--Device-WebDownloadItem-serialize(): Uint8Array-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | - Returns the serialized data. |

<a id="start"></a>
## start

```TypeScript
start(downloadPath: string): void
```

Start the web download.<p><strong>API Note</strong>:<br>This API must be used in the **onBeforeDownload** callback of **WebDownloadDelegate**. If it is not called in the callback, the download task remains in the PENDING state and is downloaded to a temporary directory. After the target path is specified by **WebDownloadItem.start**, the temporary files are renamed to the target path and the unfinished files are directly downloaded to the target path. If you do not want to download the file to the temporary directory before invoking **WebDownloadItem.start**, you can call **WebDownloadItem.cancel** to cancel the current download task and then call **WebDownloadManager.resumeDownload** to resume the task.</p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebDownloadItem-start(downloadPath: string): void--><!--Device-WebDownloadItem-start(downloadPath: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| downloadPath | string | Yes | The content will be downloaded to this file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types.<br>2. Parameter verification failed. |

