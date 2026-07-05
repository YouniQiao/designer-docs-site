# disableGwpAsanGrayscale

## disableGwpAsanGrayscale

```TypeScript
function disableGwpAsanGrayscale(): void
```

Disables GWP-ASan. This API is used to cancel the custom configuration and restore the default parameter [GwpAsanOptions]hidebug.GwpAsanOptions.

**起始版本：** 20

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**示例：**

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

