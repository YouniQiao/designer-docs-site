# isControlSupported

## Modules to Import

```TypeScript
import { mechanicManager } from '@ohos.distributedHardware.mechanicManager';
```

## isControlSupported

```TypeScript
function isControlSupported(mechDeviceType?: MechDeviceType): boolean
```

Checks whether the current device supports embodied control for a specific type of device.

**Since:** 26.0.0

**System capability:** SystemCapability.Mechanic.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mechDeviceType | MechDeviceType | No | Associated device type.<br>Default: If this parameter is not provided, it represents all device types. As long as one or more typesare supported, the result returned will be supported. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns whether embodied control is supported. |

