# enable

## Modules to Import

```TypeScript
import { jsLeakWatcher } from '@kit.PerformanceAnalysisKit';
```

<a id="enable"></a>
## enable

```TypeScript
function enable(isEnable: boolean): void
```

Enables the detection for JS object leaks. This function is disabled by default.

**Since:** 12

<!--Device-jsLeakWatcher-function enable(isEnable: boolean): void--><!--Device-jsLeakWatcher-function enable(isEnable: boolean): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiChecker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnable | boolean | Yes | Whether to enable **jsLeakWatcher**. **true**: yes; **false**: no. |

**Example**

```TypeScript
jsLeakWatcher.enable(true);

```

