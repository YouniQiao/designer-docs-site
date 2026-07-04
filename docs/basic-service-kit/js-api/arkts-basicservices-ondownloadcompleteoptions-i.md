# OnDownloadCompleteOptions

**Since:** 3

**Deprecated since:** 9

**Substitutes:** on

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { UploadResponse, RequestData, DownloadRequestOptions, DownloadResponse, RequestFile, OnDownloadCompleteOptions, OnDownloadCompleteResponse, UploadRequestOptions } from '@system.request';
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

**System capability:** SystemCapability.MiscServices.Download

