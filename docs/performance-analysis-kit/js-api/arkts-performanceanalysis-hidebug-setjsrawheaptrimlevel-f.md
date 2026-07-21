# setJsRawHeapTrimLevel

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

<a id="setjsrawheaptrimlevel"></a>
## setJsRawHeapTrimLevel

```TypeScript
function setJsRawHeapTrimLevel(level: JsRawHeapTrimLevel): void
```

Sets the raw heap snapshot trimming level for the current process.

**Since:** 20

<!--Device-hidebug-function setJsRawHeapTrimLevel(level: JsRawHeapTrimLevel): void--><!--Device-hidebug-function setJsRawHeapTrimLevel(level: JsRawHeapTrimLevel): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | [JsRawHeapTrimLevel](arkts-performanceanalysis-hidebug-jsrawheaptrimlevel-e.md) | Yes | The trimming level of raw heap snapshot. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

hidebug.setJsRawHeapTrimLevel(hidebug.JsRawHeapTrimLevel.TRIM_LEVEL_2);

```

