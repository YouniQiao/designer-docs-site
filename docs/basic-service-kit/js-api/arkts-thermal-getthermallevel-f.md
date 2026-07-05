# getThermalLevel

## getThermalLevel

```TypeScript
function getThermalLevel(): ThermalLevel
```

获取当前热档位信息。

**Since:** 8

**Deprecated since:** 9

**Substitute:** thermal.getLevel

**System capability:** SystemCapability.PowerManager.ThermalManager

**Return value:**

| Type | Description |
| --- | --- |
| ThermalLevel | 热档位信息。 |

**Example**

```TypeScript
let level = thermal.getThermalLevel();
console.info('thermal level is: ' + level);

```

