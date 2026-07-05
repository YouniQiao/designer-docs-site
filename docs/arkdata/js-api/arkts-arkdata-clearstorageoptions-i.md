# ClearStorageOptions

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

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the stored content fails to be cleared.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 6

**Model restriction:** This API can be used only in the FA model.

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

**System capability:** SystemCapability.DistributedDataManager.Preferences.Core.Lite

