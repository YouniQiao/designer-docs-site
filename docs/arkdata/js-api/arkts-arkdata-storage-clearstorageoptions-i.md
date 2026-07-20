# ClearStorageOptions

**Since:** 3

**Deprecated since:** 6

<!--Device-unnamed-export interface ClearStorageOptions--><!--Device-unnamed-export interface ClearStorageOptions-End-->

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

<!--Device-ClearStorageOptions-complete?: () => void--><!--Device-ClearStorageOptions-complete?: () => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the stored content fails to be cleared.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-ClearStorageOptions-fail?: (data: string, code: number) => void--><!--Device-ClearStorageOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## success

```TypeScript
success?: () => void
```

Called when the stored content is cleared successfully.

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-ClearStorageOptions-success?: () => void--><!--Device-ClearStorageOptions-success?: () => void-End-->

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

