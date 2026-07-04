# FileGetOption

Defines the options used in get().

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## complete

```TypeScript
complete?: () => void
```

Callback invoked when the API call is complete.

**Type:** () => void

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when the API call fails. **data** indicates the error information. **code** indicates the returned error code: **202**: invalid parameter **300**: I/O error **301**: file or directory not found

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## recursive

```TypeScript
recursive?: boolean
```

Indicates whether to recursively obtain the file list in a subdirectory. The value **true** indicates to recursively obtain the file list, and **false** indicates the opposite. The default value is **false**.

**Type:** boolean

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## success

```TypeScript
success?: (file: FileResponse) => void
```

Callback invoked when the API call is successful. **file** is [FileResponse](arkts-corefile-fileresponse-depr-i.md#fileresponse).

**Type:** (file: FileResponse) => void

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## uri

```TypeScript
uri: string
```

URI of the file. Restricted by the underlying file system of lite wearables, the value must meet the following requirements: 1. The URI cannot contain the following special characters: \"*+,:;<=>?[]|\x7F. 2. The value can contain a maximum of 128 characters.

**Type:** string

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

