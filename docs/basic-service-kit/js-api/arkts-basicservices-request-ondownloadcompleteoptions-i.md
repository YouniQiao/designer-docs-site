# OnDownloadCompleteOptions

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-unnamed-export interface OnDownloadCompleteOptions--><!--Device-unnamed-export interface OnDownloadCompleteOptions-End-->

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

<!--Device-OnDownloadCompleteOptions-complete?: () => void--><!--Device-OnDownloadCompleteOptions-complete?: () => void-End-->

**System capability:** SystemCapability.MiscServices.Download

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when API call has failed. Header information and HTTP status code returned when the upload task fails.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-OnDownloadCompleteOptions-fail?: (data: any, code: number) => void--><!--Device-OnDownloadCompleteOptions-fail?: (data: any, code: number) => void-End-->

**System capability:** SystemCapability.MiscServices.Download

## success

```TypeScript
success?: (data: OnDownloadCompleteResponse) => void
```

Called when API call is successful.

**Type:** (data: OnDownloadCompleteResponse) => void

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

<!--Device-OnDownloadCompleteOptions-success?: (data: OnDownloadCompleteResponse) => void--><!--Device-OnDownloadCompleteOptions-success?: (data: OnDownloadCompleteResponse) => void-End-->

**System capability:** SystemCapability.MiscServices.Download

## token

```TypeScript
token: string
```

Result token returned by the download API.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** tid

<!--Device-OnDownloadCompleteOptions-token: string--><!--Device-OnDownloadCompleteOptions-token: string-End-->

**System capability:** SystemCapability.MiscServices.Download

