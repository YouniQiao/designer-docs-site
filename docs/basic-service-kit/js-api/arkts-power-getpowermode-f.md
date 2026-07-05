# getPowerMode

## getPowerMode

```TypeScript
function getPowerMode(): DevicePowerMode
```

获取当前设备的电源模式。

**Since:** 9

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| DevicePowerMode | 电源模式。 |

**Example**

```TypeScript
let mode = power.getPowerMode();
console.info('power mode: ' + mode);

```

