# Summary

Summarizes the data information of the **unifiedData** object, including the data type and size.

**Since:** 10

<!--Device-unifiedDataChannel-class Summary--><!--Device-unifiedDataChannel-class Summary-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## overview

```TypeScript
get overview(): Record<string, number>
```

Indicates the overview information of unifiedData.

**Type:** Record<string, number>

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Summary-get overview(): Record<string, long>--><!--Device-Summary-get overview(): Record<string, long>-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## summary

```TypeScript
set summary(value: Record<string, number>)
```

A map for each type and data size, key is data type, value is the corresponding data size

**Type:** Record<string, number>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Summary-set summary(value: Record<string, long>)--><!--Device-Summary-set summary(value: Record<string, long>)-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## totalSize

```TypeScript
set totalSize(value: number)
```

Total data size of data in Bytes

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Summary-set totalSize(value: long)--><!--Device-Summary-set totalSize(value: long)-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

