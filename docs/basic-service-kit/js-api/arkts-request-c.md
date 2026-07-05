# Request

**Since:** 3

**Deprecated since:** 9

**Substitute:** @ohos.request:request

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## download

```TypeScript
static download(options: DownloadRequestOptions): void
```

下载文件，无返回值。

**Since:** 3

**Deprecated since:** 9

**Substitute:** @ohos.request:request.downloadFile(context:

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DownloadRequestOptions | Yes | 下载的配置信息。 |

## onDownloadComplete

```TypeScript
static onDownloadComplete(options: OnDownloadCompleteOptions): void
```

获取下载任务状态，无返回值。

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.show(id:

**System capability:** SystemCapability.MiscServices.Download

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | OnDownloadCompleteOptions | Yes | 监听下载任务的配置信息。 |

## upload

```TypeScript
static upload(options: UploadRequestOptions): void
```

上传文件，无返回值。

**Since:** 3

**Deprecated since:** 9

**Substitute:** @ohos.request:request.uploadFile(context:

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | UploadRequestOptions | Yes | 上传的配置信息。 |

