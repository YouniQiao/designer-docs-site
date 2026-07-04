# getGwpAsanGrayscaleState

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## getGwpAsanGrayscaleState

```TypeScript
function getGwpAsanGrayscaleState(): number
```

Obtain the remaining days of GWP-ASan grayscale for your application.

**Since:** 20

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| number | The remaining days of GWP-ASan grayscale. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { taskpool } from '@kit.ArkTS';

@Concurrent
function getGwpAsanStateTask(): number {
  return hidebug.getGwpAsanGrayscaleState();
}
taskpool.execute(getGwpAsanStateTask).then((remainDays: Object) => {
  console.info(`GWP-ASan remain days: ${remainDays as number}.`);
})

```

