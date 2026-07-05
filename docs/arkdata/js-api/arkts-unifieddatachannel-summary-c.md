# Summary

Summarizes the data information of the **unifiedData** object, including the data type and size.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## summary

```TypeScript
get summary(): Record<string, long>
```

A map for each type and data size, key is data type, value is the corresponding data size

**Type:** Record<string, long>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set summary(value: Record<string, long>)
```

A map for each type and data size, key is data type, value is the corresponding data size

**Type:** Record<string, long>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## overview

```TypeScript
get overview(): Record<string, long>
```

Indicates the overview information of unifiedData.

**Type:** Record<string, long>

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## totalSize

```TypeScript
get totalSize(): long
```

Total data size of data in Bytes

**Type:** long

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set totalSize(value: long)
```

Total data size of data in Bytes

**Type:** long

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

