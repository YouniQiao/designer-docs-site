# SetStorageOptions

**Since:** 3

**Deprecated since:** 6

<!--Device-unnamed-export interface SetStorageOptions--><!--Device-unnamed-export interface SetStorageOptions-End-->

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

<!--Device-SetStorageOptions-complete?: () => void--><!--Device-SetStorageOptions-complete?: () => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the stored content fails to be modified.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-SetStorageOptions-fail?: (data: string, code: number) => void--><!--Device-SetStorageOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## key

```TypeScript
key: string
```

Index of the stored content to be modified.the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.

**Type:** string

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-SetStorageOptions-key: string--><!--Device-SetStorageOptions-key: string-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## success

```TypeScript
success?: () => void
```

Called when the stored content is modified successfully.

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-SetStorageOptions-success?: () => void--><!--Device-SetStorageOptions-success?: () => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## value

```TypeScript
value: string
```

Target storage content.

**Type:** string

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-SetStorageOptions-value: string--><!--Device-SetStorageOptions-value: string-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

