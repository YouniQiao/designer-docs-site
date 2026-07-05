# setJsRawHeapTrimLevel

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## setJsRawHeapTrimLevel

```TypeScript
function setJsRawHeapTrimLevel(level: JsRawHeapTrimLevel): void
```

Sets the raw heap snapshot trimming level for the current process.

**Since:** 20

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | JsRawHeapTrimLevel | Yes | The trimming level of raw heap snapshot. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

hidebug.setJsRawHeapTrimLevel(hidebug.JsRawHeapTrimLevel.TRIM_LEVEL_2);

```

