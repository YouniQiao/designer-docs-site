# DownloadRequestOptions

> **NOTE**  
>  
> This API has been supported since API version 3 and deprecated since API version 9. You are advised to use  
> [UploadConfig](arkts-basicservices-agent-config-i.md) instead.

**Since:** 3

**Deprecated since:** 9

**Substitutes:** [UploadConfig](arkts-basicservices-request-uploadconfig-i.md)

<!--Device-unnamed-export interface DownloadRequestOptions--><!--Device-unnamed-export interface DownloadRequestOptions-End-->

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { UploadResponse, RequestData, DownloadRequestOptions, DownloadResponse, RequestFile, OnDownloadCompleteOptions, OnDownloadCompleteResponse, UploadRequestOptions } from '@kit.BasicServicesKit';
```

## complete

```TypeScript
complete?: () => void
```

Called when API call is complete.

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-DownloadRequestOptions-complete?: () => void--><!--Device-DownloadRequestOptions-complete?: () => void-End-->

**System capability:** SystemCapability.MiscServices.Download

## description

```TypeScript
description?: string
```

Download description.The default value is the file name.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** description

<!--Device-DownloadRequestOptions-description?: string--><!--Device-DownloadRequestOptions-description?: string-End-->

**System capability:** SystemCapability.MiscServices.Download

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when downloading fails.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-DownloadRequestOptions-fail?: (data: any, code: number) => void--><!--Device-DownloadRequestOptions-fail?: (data: any, code: number) => void-End-->

**System capability:** SystemCapability.MiscServices.Download

## filename

```TypeScript
filename?: string
```

Name of the file to downloaded.The value is obtained from the current request or resource URL by default.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** saveas

<!--Device-DownloadRequestOptions-filename?: string--><!--Device-DownloadRequestOptions-filename?: string-End-->

**System capability:** SystemCapability.MiscServices.Download

## header

```TypeScript
header?: string
```

Request header.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** headers

<!--Device-DownloadRequestOptions-header?: string--><!--Device-DownloadRequestOptions-header?: string-End-->

**System capability:** SystemCapability.MiscServices.Download

## success

```TypeScript
success?: (data: DownloadResponse) => void
```

Called when the files are successfully downloaded.

**Type:** (data: DownloadResponse) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-DownloadRequestOptions-success?: (data: DownloadResponse) => void--><!--Device-DownloadRequestOptions-success?: (data: DownloadResponse) => void-End-->

**System capability:** SystemCapability.MiscServices.Download

## url

```TypeScript
url: string
```

Resource URL.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** url

<!--Device-DownloadRequestOptions-url: string--><!--Device-DownloadRequestOptions-url: string-End-->

**System capability:** SystemCapability.MiscServices.Download

