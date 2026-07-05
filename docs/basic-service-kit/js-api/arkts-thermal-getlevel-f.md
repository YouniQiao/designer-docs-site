# getLevel

## getLevel

```TypeScript
function getLevel(): ThermalLevel
```

获取当前热档位信息。

**Since:** 9

**System capability:** SystemCapability.PowerManager.ThermalManager

**Return value:**

| Type | Description |
| --- | --- |
| ThermalLevel | 热档位信息。 |

**Example**

```TypeScript
let level = thermal.getLevel();
console.info('thermal level is: ' + level);

```

