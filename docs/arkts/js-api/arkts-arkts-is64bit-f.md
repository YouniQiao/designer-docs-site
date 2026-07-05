# is64Bit

## Modules to Import

```TypeScript
import { process } from '@ohos.process';
```

## is64Bit

```TypeScript
function is64Bit(): boolean
```

Checks whether this process is running in a 64-bit environment.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** is returned if the process is running in a 64-bitenvironment; otherwise, **false** is returned. |

**Example**

```TypeScript
let result = process.is64Bit();

```

