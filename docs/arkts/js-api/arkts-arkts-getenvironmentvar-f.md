# getEnvironmentVar

## Modules to Import

```TypeScript
import { process } from '@ohos.process';
```

## getEnvironmentVar

```TypeScript
function getEnvironmentVar(name: string): string
```

Obtains the value of an environment variable.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getEnvironmentVar](arkts-arkts-processmanager-c.md#getenvironmentvar-1)

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Environment variable name. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Value of the environment variable. |

**Example**

```TypeScript
let pres = process.getEnvironmentVar("PATH");

```

