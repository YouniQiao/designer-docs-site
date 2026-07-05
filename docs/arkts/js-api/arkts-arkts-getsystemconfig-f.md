# getSystemConfig

## Modules to Import

```TypeScript
import { process } from '@ohos.process';
```

## getSystemConfig

```TypeScript
function getSystemConfig(name: number): number
```

Obtains the system configuration.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getSystemConfig](arkts-arkts-processmanager-c.md#getsystemconfig-1)

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | number | Yes | System configuration parameter name. |

**Return value:**

| Type | Description |
| --- | --- |
| number | System configuration obtained. |

**Example**

```TypeScript
let _SC_ARG_MAX = 0;
let pres = process.getSystemConfig(_SC_ARG_MAX);

```

