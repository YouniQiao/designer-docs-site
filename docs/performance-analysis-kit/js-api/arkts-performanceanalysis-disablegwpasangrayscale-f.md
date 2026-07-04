# disableGwpAsanGrayscale

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## disableGwpAsanGrayscale

```TypeScript
function disableGwpAsanGrayscale(): void
```

Disables GWP-ASan. This API is used to cancel the custom configuration and restore the default parameter [GwpAsanOptions](arkts-performanceanalysis-gwpasanoptions-i.md#gwpasanoptions).

**Since:** 20

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { taskpool } from '@kit.ArkTS';

@Concurrent
function disableGwpAsanTask(): void {
  hidebug.disableGwpAsanGrayscale();
}
taskpool.execute(disableGwpAsanTask).then(() => {
  console.info(`Disable GWP-ASan succeeded.`);
})

```

