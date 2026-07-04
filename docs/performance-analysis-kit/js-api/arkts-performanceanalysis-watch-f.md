# watch

## Modules to Import

```TypeScript
import { jsLeakWatcher } from '@ohos.hiviewdfx.jsLeakWatcher';
```

## watch

```TypeScript
function watch(obj: object, msg: string): void
```

Registers the object to be checked.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiChecker

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | object | Yes | Name of the object to be checked.<br>Note: You can pass objects of any type. |
| msg | string | Yes | Custom object information. |

**Example**

```TypeScript
let obj:Object = new Object();
jsLeakWatcher.watch(obj, "Trace Object");

```

