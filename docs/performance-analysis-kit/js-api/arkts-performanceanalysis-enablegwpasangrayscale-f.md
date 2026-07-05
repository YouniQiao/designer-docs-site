# enableGwpAsanGrayscale

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## enableGwpAsanGrayscale

```TypeScript
function enableGwpAsanGrayscale(options?: GwpAsanOptions, duration?: number): void
```

Enable the GWP-ASAN grayscale of your application.

**Since:** 20

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GwpAsanOptions | No | The options of GWP-ASAN grayscale. |
| duration | number | No | The duration days of GWP-ASAN grayscale. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [11400114](../errorcode-hiviewdfx-hidebug.md#11400114-failed-to-enable-gwpasan) | The number of GWP-ASAN applications of this device overflowed after last boot. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { taskpool } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

@Concurrent
function enableGwpAsanTask(): void {
  let options: hidebug.GwpAsanOptions = {
    alwaysEnabled: true,
    sampleRate: 2500,
    maxSimutaneousAllocations: 5000,
  };
  let duration: number = 4;
  hidebug.enableGwpAsanGrayscale(options, duration);
}

taskpool.execute(enableGwpAsanTask).then(() => {
  console.info(`Succeeded in enabling GWP-ASan.`);
}).catch((error: BusinessError) => {
  const err: BusinessError = error as BusinessError;
  console.error(`Failed to enable GWP-ASan. Code: ${err.code}, message: ${err.message}`);
})

```

