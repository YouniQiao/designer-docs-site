# Request

**Since:** 3

**Deprecated since:** 9

**Substitutes:** [request:request](arkts-basicservices-request-n.md)

<!--Device-unnamed-export default class Request--><!--Device-unnamed-export default class Request-End-->

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { UploadResponse, RequestData, DownloadRequestOptions, DownloadResponse, RequestFile, OnDownloadCompleteOptions, OnDownloadCompleteResponse, UploadRequestOptions } from '@kit.BasicServicesKit';
```

<a id="download"></a>
## download

```TypeScript
static download(options: DownloadRequestOptions): void
```

Downloads a file. This API returns no value.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** [downloadFile(context:](arkts-basicservices-request-downloadfile-f.md#downloadfile-1)

<!--Device-Request-static download(options: DownloadRequestOptions): void--><!--Device-Request-static download(options: DownloadRequestOptions): void-End-->

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [DownloadRequestOptions](arkts-basicservices-request-downloadrequestoptions-i.md) | Yes | Download configurations. |

<a id="ondownloadcomplete"></a>
## onDownloadComplete

```TypeScript
static onDownloadComplete(options: OnDownloadCompleteOptions): void
```

Listens for download task status. This API returns no value.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** show(id:

<!--Device-Request-static onDownloadComplete(options: OnDownloadCompleteOptions): void--><!--Device-Request-static onDownloadComplete(options: OnDownloadCompleteOptions): void-End-->

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [OnDownloadCompleteOptions](arkts-basicservices-request-ondownloadcompleteoptions-i.md) | Yes | Configurations of the download task. |

<a id="upload"></a>
## upload

```TypeScript
static upload(options: UploadRequestOptions): void
```

Uploads a file. This API returns no value.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** [uploadFile(context:](arkts-basicservices-request-uploadfile-f.md#uploadfile-1)

<!--Device-Request-static upload(options: UploadRequestOptions): void--><!--Device-Request-static upload(options: UploadRequestOptions): void-End-->

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [UploadRequestOptions](arkts-basicservices-request-uploadrequestoptions-i.md) | Yes | Upload configurations. |

