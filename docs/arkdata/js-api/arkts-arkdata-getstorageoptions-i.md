# GetStorageOptions

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## default

```TypeScript
default?: string
```

Default value returned when the key does not exist.
If this parameter is not specified, an empty string is returned.

**Type:** string

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the stored content fails to be read.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## key

```TypeScript
key: string
```

Content index.
the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.

**Type:** string

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## success

```TypeScript
success?: (data: any) => void
```

Called when the stored content is read successfully.

**Type:** (data: any) => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

