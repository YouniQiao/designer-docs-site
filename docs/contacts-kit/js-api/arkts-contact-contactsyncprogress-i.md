# ContactSyncProgress

联系人同步进度的信息。 包含同步ID、当前批次和总批次。

**Since:** 26.0.0

**System capability:** SystemCapability.Applications.ContactsData

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## totalBatches

```TypeScript
totalBatches: int
```

表示要同步的联系人批次总数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## currentBatch

```TypeScript
currentBatch: int
```

表示要同步的当前联系人批次的标识符。 值的范围是从1到totalBatches。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## syncId

```TypeScript
syncId: int
```

表示用于同步所有联系人的同步标识符。 该值应从0开始。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

