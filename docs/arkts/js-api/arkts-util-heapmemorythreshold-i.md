# HeapMemoryThreshold

描述 GC 后触发已注册回调的堆内存预警阈值。

**Since:** 24

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## localHeapThreshold

```TypeScript
localHeapThreshold?: number
```

该值为 70 到 95 之间的整数，表示 GC 后触发回调的 local 堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。 若未设置，则不会因 local 堆内存压力而触发回调。

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

## sharedHeapThreshold

```TypeScript
sharedHeapThreshold?: number
```

该值为 70 到 95 之间的整数，表示 GC 后触发回调的 shared 堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。 若未设置，则不会因 shared 堆内存压力而触发回调。

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

## processHeapThreshold

```TypeScript
processHeapThreshold?: number
```

该值为 70 到 95 之间的整数，表示 GC 后触发回调的进程总堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。 若未设置，则不会因进程堆内存压力而触发回调。

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

