# getMaxRotationSpeed

## getMaxRotationSpeed

```TypeScript
function getMaxRotationSpeed(mechId: int): RotationSpeed
```

Obtains the maximum rotation speed of a mechanical device.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mechId | int | Yes | ID of the mechanical device. |

**Return value:**

| Type | Description |
| --- | --- |
| RotationSpeed | Maximum speed. Only the absolute value of the speed is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**Example**

```TypeScript
console.info('Query rotation speed');
let speedLimit: mechanicManager.RotationSpeed = mechanicManager.getMaxRotationSpeed(0);
console.info(`'Query rotation speed successful, speed limit information:' ${speedLimit}`);

```

