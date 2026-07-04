# UploadResponse

**Since:** 3

**Deprecated since:** 9

**Substitutes:** [UploadConfig](arkts-basicservices-uploadconfig-i.md#uploadconfig)

**System capability:** SystemCapability.MiscServices.Upload

## Modules to Import

```TypeScript
import { UploadResponse, RequestData, DownloadRequestOptions, DownloadResponse, RequestFile, OnDownloadCompleteOptions, OnDownloadCompleteResponse, UploadRequestOptions } from '@system.request';
```

## code

```TypeScript
code: number
```

HTTP status code returned by the server.

**Type:** number

**Since:** 3

**Deprecated since:** 9

**Substitutes:** statusCode

**System capability:** SystemCapability.MiscServices.Upload

## data

```TypeScript
data: string
```

Content returned by the server. The value type is determined by the type in the returned headers.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitutes:** extras

**System capability:** SystemCapability.MiscServices.Upload

## headers

```TypeScript
headers: Object
```

Headers returned by the server.

**Type:** Object

**Since:** 3

**Deprecated since:** 9

**Substitutes:** headers

**System capability:** SystemCapability.MiscServices.Upload

