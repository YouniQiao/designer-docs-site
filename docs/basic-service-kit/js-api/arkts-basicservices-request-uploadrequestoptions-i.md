# UploadRequestOptions

> **NOTE**  
>  
> This API has been supported since API version 3 and deprecated since API version 9. You are advised to use  
> [UploadConfig](arkts-basicservices-agent-config-i.md) instead.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** [UploadConfig](arkts-basicservices-request-uploadconfig-i.md)

<!--Device-unnamed-export interface UploadRequestOptions--><!--Device-unnamed-export interface UploadRequestOptions-End-->

**System capability:** SystemCapability.MiscServices.Upload

## Modules to Import

```TypeScript
import { UploadResponse, RequestData, DownloadRequestOptions, DownloadResponse, RequestFile, OnDownloadCompleteOptions, OnDownloadCompleteResponse, UploadRequestOptions } from '@kit.BasicServicesKit';
```

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-UploadRequestOptions-complete?: () => void--><!--Device-UploadRequestOptions-complete?: () => void-End-->

**System capability:** SystemCapability.MiscServices.Upload

## data

```TypeScript
data?: Array<RequestData>
```

Form data in the request body.

**Type:** Array<RequestData>

**Since:** 3

**Deprecated since:** 9

**Substitutes:** data

<!--Device-UploadRequestOptions-data?: Array<RequestData>--><!--Device-UploadRequestOptions-data?: Array<RequestData>-End-->

**System capability:** SystemCapability.MiscServices.Upload

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when uploading fails.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-UploadRequestOptions-fail?: (data: any, code: number) => void--><!--Device-UploadRequestOptions-fail?: (data: any, code: number) => void-End-->

**System capability:** SystemCapability.MiscServices.Upload

## files

```TypeScript
files: Array<RequestFile>
```

List of files to upload, which is submitted through multipart/form-data.

**Type:** Array<RequestFile>

**Since:** 3

**Deprecated since:** 9

**Substitutes:** data

<!--Device-UploadRequestOptions-files: Array<RequestFile>--><!--Device-UploadRequestOptions-files: Array<RequestFile>-End-->

**System capability:** SystemCapability.MiscServices.Upload

## header

```TypeScript
header?: Object
```

Request header.

**Type:** Object

**Since:** 3

**Deprecated since:** 9

**Substitutes:** headers

<!--Device-UploadRequestOptions-header?: Object--><!--Device-UploadRequestOptions-header?: Object-End-->

**System capability:** SystemCapability.MiscServices.Upload

## method

```TypeScript
method?: string
```

Request methods available: POST and PUT. The default value is POST.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** method

<!--Device-UploadRequestOptions-method?: string--><!--Device-UploadRequestOptions-method?: string-End-->

**System capability:** SystemCapability.MiscServices.Upload

## success

```TypeScript
success?: (data: UploadResponse) => void
```

Called when the files are uploaded successfully.

**Type:** (data: UploadResponse) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-UploadRequestOptions-success?: (data: UploadResponse) => void--><!--Device-UploadRequestOptions-success?: (data: UploadResponse) => void-End-->

**System capability:** SystemCapability.MiscServices.Upload

## url

```TypeScript
url: string
```

Resource URL.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** url

<!--Device-UploadRequestOptions-url: string--><!--Device-UploadRequestOptions-url: string-End-->

**System capability:** SystemCapability.MiscServices.Upload

