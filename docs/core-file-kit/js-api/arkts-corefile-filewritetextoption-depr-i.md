# FileWriteTextOption

Defines the options used in writeText().

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## append

```TypeScript
append?: boolean
```

Whether to enable the append mode. The default value is **false**. The value **true** means to enable the append
mode; the value **false** means the opposite.

**Type:** boolean

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

## encoding

```TypeScript
encoding?: string
```

Encoding format. The default format is **UTF-8**.

**Type:** string

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback invoked when the API call fails.
**data** indicates the error information.
**code** indicates the returned error code:
**202**: invalid parameter
**300**: I/O error

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## success

```TypeScript
success?: () => void
```

Callback invoked when the API call is successful.

**Type:** () => void

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## text

```TypeScript
text: string
```

String to write into the file.

**Type:** string

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

## uri

```TypeScript
uri: string
```

URI of a local file. If it does not exist, a file will be created. Restricted by the underlying file system of lite
wearables, the value must meet the following requirements:
1. The URI cannot contain the following special characters: \"*+,:;<=>?[]|\x7F.
2. The value can contain a maximum of 128 characters.

**Type:** string

**Since:** 3

**Deprecated since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO.Lite

