# getThermalLevel

## Modules to Import

```TypeScript
import { thermal } from '@ohos.thermal';
```

## getThermalLevel

```TypeScript
function getThermalLevel(): ThermalLevel
```

Obtains the current thermal level.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getLevel](arkts-basicservices-getlevel-f.md#getlevel-1)

**System capability:** SystemCapability.PowerManager.ThermalManager

**Return value:**

| Type | Description |
| --- | --- |
| ThermalLevel | Thermal level. |

**Example**

```TypeScript
let level = thermal.getThermalLevel();
console.info('thermal level is: ' + level);

```

