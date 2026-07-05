# UploadRequestOptions

**Since:** 3

**Deprecated since:** 9

**Substitute:** @ohos.request:request.UploadConfig

**System capability:** SystemCapability.MiscServices.Upload

## Modules to Import

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when uploading fails.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Upload

## method

```TypeScript
method?: string
```

Request methods available: POST and PUT. The default value is POST.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.method

**System capability:** SystemCapability.MiscServices.Upload

## data

```TypeScript
data?: Array<RequestData>
```

Form data in the request body.

**Type:** Array<RequestData>

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.data

**System capability:** SystemCapability.MiscServices.Upload

## success

```TypeScript
success?: (data: UploadResponse) => void
```

Called when the files are uploaded successfully.

**Type:** (data: UploadResponse) => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Upload

## header

```TypeScript
header?: Object
```

Request header.

**Type:** Object

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.headers

**System capability:** SystemCapability.MiscServices.Upload

## files

```TypeScript
files: Array<RequestFile>
```

List of files to upload, which is submitted through multipart/form-data.

**Type:** Array<RequestFile>

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.data

**System capability:** SystemCapability.MiscServices.Upload

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Upload

## url

```TypeScript
url: string
```

Resource URL.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.url

**System capability:** SystemCapability.MiscServices.Upload

