# getMaxRotationTime

## getMaxRotationTime

```TypeScript
function getMaxRotationTime(mechId: int): int
```

Obtains the maximum continuous rotation duration of a mechanical device.

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
| int | Maximum rotation duration. Unit: millisecond. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**Example**

```TypeScript
console.info('Query maximum rotation time');
let maxTime = mechanicManager.getMaxRotationTime(0);
console.info(`'Query maximum rotation time successful, maximum time:' ${maxTime}`);

```

