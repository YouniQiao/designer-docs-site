# Request

**Since:** 3

**Deprecated since:** 9

**Substitutes:** [request:request](arkts-basicservices-request-n.md#request)

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { UploadResponse, RequestData, DownloadRequestOptions, DownloadResponse, RequestFile, OnDownloadCompleteOptions, OnDownloadCompleteResponse, UploadRequestOptions } from '@system.request';
```

## download

```TypeScript
static download(options: DownloadRequestOptions): void
```

Downloads a file. This API returns no value.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** downloadFile(context:

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DownloadRequestOptions | Yes | Download configurations. |

## onDownloadComplete

```TypeScript
static onDownloadComplete(options: OnDownloadCompleteOptions): void
```

Listens for download task status. This API returns no value.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** show(id:

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | OnDownloadCompleteOptions | Yes | Configurations of the download task. |

## upload

```TypeScript
static upload(options: UploadRequestOptions): void
```

Uploads a file. This API returns no value.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** uploadFile(context:

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | UploadRequestOptions | Yes | Upload configurations. |

