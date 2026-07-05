# ContactSyncInfo

调用应用程序相关的联系人同步的信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Applications.ContactsData

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## mode

```TypeScript
mode: ContactSyncMode
```

联系人同步模式。

**Type:** ContactSyncMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## lastSyncTime

```TypeScript
lastSyncTime: int
```

指示联系人同步的最新时间戳（毫秒）。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## completedBatches

```TypeScript
completedBatches: Array<int>
```

表示已成功同步的联系人的批处理标识符数组。 值的范围是从1到totalBatches。

**Type:** Array<int>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## totalBatches

```TypeScript
totalBatches: int
```

指示要同步的联系人批次总数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## syncId

```TypeScript
syncId: int
```

表示用于同步所有联系人的同步标识符。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

