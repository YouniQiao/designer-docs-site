# getRotationLimits

## getRotationLimits

```TypeScript
function getRotationLimits(mechId: int): RotationLimits
```

Obtains the maximum rotation angles relative to the reference point for the specified mechanical device.

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
| RotationLimits | Maximum rotation angles. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**Example**

```TypeScript
console.info('Query rotation limit information');
let degreeLimit: mechanicManager.RotationLimits = mechanicManager.getRotationLimits(0);
console.info(`'Query the rotation limit information successfully, limit information:' ${degreeLimit}`);

```

