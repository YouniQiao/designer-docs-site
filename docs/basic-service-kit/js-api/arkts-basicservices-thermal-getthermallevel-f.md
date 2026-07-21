# getThermalLevel

## Modules to Import

```TypeScript
import { thermal } from '@kit.BasicServicesKit';
```

<a id="getthermallevel"></a>
## getThermalLevel

```TypeScript
function getThermalLevel(): ThermalLevel
```

Obtains the current thermal level.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getLevel](arkts-basicservices-thermal-getlevel-f.md#getlevel-1)

<!--Device-thermal-function getThermalLevel(): ThermalLevel--><!--Device-thermal-function getThermalLevel(): ThermalLevel-End-->

**System capability:** SystemCapability.PowerManager.ThermalManager

**Return value:**

| Type | Description |
| --- | --- |
| [ThermalLevel](arkts-basicservices-thermal-thermallevel-e.md) | Thermal level. |

**Example**

```TypeScript
let level = thermal.getThermalLevel();
console.info('thermal level is: ' + level);

```

