# DeleteStorageOptions

**Since:** 3

**Deprecated since:** 6

<!--Device-unnamed-export interface DeleteStorageOptions--><!--Device-unnamed-export interface DeleteStorageOptions-End-->

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

<!--Device-DeleteStorageOptions-complete?: () => void--><!--Device-DeleteStorageOptions-complete?: () => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the stored content fails to be deleted.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-DeleteStorageOptions-fail?: (data: string, code: number) => void--><!--Device-DeleteStorageOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## key

```TypeScript
key: string
```

Content index.the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.

**Type:** string

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-DeleteStorageOptions-key: string--><!--Device-DeleteStorageOptions-key: string-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## success

```TypeScript
success?: () => void
```

Called when the stored content is deleted successfully.

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-DeleteStorageOptions-success?: () => void--><!--Device-DeleteStorageOptions-success?: () => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

