# getLevel

## Modules to Import

```TypeScript
import { thermal } from '@ohos.thermal';
```

## getLevel

```TypeScript
function getLevel(): ThermalLevel
```

Obtains the current thermal level.

**Since:** 9

**System capability:** SystemCapability.PowerManager.ThermalManager

**Return value:**

| Type | Description |
| --- | --- |
| ThermalLevel | Thermal level. |

**Example**

```TypeScript
let level = thermal.getLevel();
console.info('thermal level is: ' + level);

```

