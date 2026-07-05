# rotate

## rotate

```TypeScript
function rotate(mechId: int, angles: RotationAngles, duration: int): Promise<Result>
```

Rotates a mechanical device to the relative angles.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mechId | int | Yes | ID of the mechanical device. |
| angles | RotationAngles | Yes | Relative angles. |
| duration | int | Yes | Rotation duration. Unit: millisecond. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result> | Promise that return the execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |

**Example**

```TypeScript
console.info('Start rotate');
let degree: mechanicManager.RotationAngles = {
  yaw: 0.1 * Math.PI,
  roll: 0.0,
  pitch: 0.0
}
mechanicManager.rotate(0, degree, 500)
  .then((result: mechanicManager.Result) => {
    console.info(`'Rotate result:' ${result}`);
  });
console.info('End rotation');

```

