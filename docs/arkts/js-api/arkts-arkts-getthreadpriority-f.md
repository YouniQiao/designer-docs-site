# getThreadPriority

## Modules to Import

```TypeScript
import { process } from '@ohos.process';
```

## getThreadPriority

```TypeScript
function getThreadPriority(v: number): number
```

Obtains the thread priority based on the specified TID.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getThreadPriority](arkts-arkts-processmanager-c.md#getthreadpriority-1)

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| v | number | Yes | TID. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Priority of the thread. The priority depends on the operating system. |

**Example**

```TypeScript
let tid = process.tid;
let pres = process.getThreadPriority(tid);

```

