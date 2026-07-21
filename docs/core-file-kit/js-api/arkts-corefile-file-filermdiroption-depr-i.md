# FileRmdirOption

Defines the options used in rmdir().

**Since:** 3

**Deprecated since:** 10

<!--Device-unnamed-export interface FileRmdirOption--><!--Device-unnamed-export interface FileRmdirOption-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## complete

```TypeScript
complete?: () => void
```

Callback invoked when the API call is complete.

**Type:** () =&gt; void

**Since:** 3

**Deprecated since:** 10

<!--Device-FileRmdirOption-complete?: () => void--><!--Device-FileRmdirOption-complete?: () => void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when the API call fails.**data** indicates the error information.**code** indicates the returned error code:**202**: invalid parameter **300**: I/O error **301**: file or directory not found

**Type:** (data: string, code: number) =&gt; void

**Since:** 3

**Deprecated since:** 10

<!--Device-FileRmdirOption-fail?: (data: string, code: number) => void--><!--Device-FileRmdirOption-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## recursive

```TypeScript
recursive?: boolean
```

Whether to recursively delete files and subdirectories of the specified directory. The default value is **false**.The value **true** means to recursively delete files and subdirectories of the specified directory; the value **false** means the opposite.

**Type:** boolean

**Since:** 3

**Deprecated since:** 10

<!--Device-FileRmdirOption-recursive?: boolean--><!--Device-FileRmdirOption-recursive?: boolean-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## success

```TypeScript
success?: () => void
```

Callback invoked when the API call is successful.

**Type:** () =&gt; void

**Since:** 3

**Deprecated since:** 10

<!--Device-FileRmdirOption-success?: () => void--><!--Device-FileRmdirOption-success?: () => void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## uri

```TypeScript
uri: string
```

URI of the directory. Restricted by the underlying file system of lite wearables, the value must meet the following requirements:1. The URI cannot contain the following special characters: \"*+,:;<=>?[]|\x7F.2. The value can contain a maximum of 128 characters.

**Type:** string

**Since:** 3

**Deprecated since:** 10

<!--Device-FileRmdirOption-uri: string--><!--Device-FileRmdirOption-uri: string-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

