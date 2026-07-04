# enable

## Modules to Import

```TypeScript
import { jsLeakWatcher } from '@ohos.hiviewdfx.jsLeakWatcher';
```

## enable

```TypeScript
function enable(isEnable: boolean): void
```

Enables the detection for JS object leaks. This function is disabled by default.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiChecker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnable | boolean | Yes | Whether to enable **jsLeakWatcher**. **true**: yes; **false**: no. |

**Example**

```TypeScript
jsLeakWatcher.enable(true);

```

