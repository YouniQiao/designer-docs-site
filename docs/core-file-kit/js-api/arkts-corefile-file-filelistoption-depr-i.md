# FileListOption

Defines the options used in list().

**Since:** 3

**Deprecated since:** 10

<!--Device-unnamed-export interface FileListOption--><!--Device-unnamed-export interface FileListOption-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## complete

```TypeScript
complete?: () => void
```

Callback invoked when the API call is complete.

**Type:** () => void

**Since:** 3

**Deprecated since:** 10

<!--Device-FileListOption-complete?: () => void--><!--Device-FileListOption-complete?: () => void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when the API call fails.**data** indicates the error information.**code** indicates the returned error code:**202**: invalid parameter **300**: I/O error **301**: file or directory not found

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 10

<!--Device-FileListOption-fail?: (data: string, code: number) => void--><!--Device-FileListOption-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## success

```TypeScript
success?: (data: FileListResponse) => void
```

Callback invoked when the API call is successful. **data** is [FileListResponse](arkts-corefile-file-filelistresponse-depr-i.md).

**Type:** (data: FileListResponse) => void

**Since:** 3

**Deprecated since:** 10

<!--Device-FileListOption-success?: (data: FileListResponse) => void--><!--Device-FileListOption-success?: (data: FileListResponse) => void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## uri

```TypeScript
uri: string
```

URI of the directory. Restricted by the underlying file system of lite wearables, the value must meet the following requirements:1. The URI cannot contain the following special characters: \"*+,:;<=>?[]|\x7F.2. The value can contain a maximum of 128 characters.

**Type:** string

**Since:** 3

**Deprecated since:** 10

<!--Device-FileListOption-uri: string--><!--Device-FileListOption-uri: string-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

