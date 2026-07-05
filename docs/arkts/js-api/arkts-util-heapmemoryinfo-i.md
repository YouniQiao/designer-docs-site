# HeapMemoryInfo

描述 ArkTS-VM 的堆内存信息，或当前进程的共享堆内存信息。

**Since:** 24

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## threadId

```TypeScript
threadId?: number
```

如果此内存信息描述的是 ArkTS-VM 的 local 堆，该值为表示运行线程 ID 的整数； 如果此内存信息描述的是 shared 堆，则该值为 undefined。

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

## heapType

```TypeScript
heapType: string
```

该值为字符串，表示此内存信息是来自 ArkTS-VM 的 local 堆还是 shared 堆。

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

## heapObjectSize

```TypeScript
heapObjectSize: number
```

该值为整数，表示来自 ArkTS-VM 的 local 堆或 shared 堆的所有堆对象的总大小（KB）。

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

## threadName

```TypeScript
threadName?: string
```

如果此内存信息描述的是 ArkTS-VM 的 local 堆，该值为表示运行线程名称的字符串； 如果此内存信息描述的是 shared 堆，则该值为 undefined。

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

