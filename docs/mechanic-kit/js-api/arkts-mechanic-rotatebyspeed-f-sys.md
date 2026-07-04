# rotateBySpeed (System API)

## Modules to Import

```TypeScript
import { mechanicManager } from '@ohos.distributedHardware.mechanicManager';
```

## rotateBySpeed

```TypeScript
function rotateBySpeed(mechId: number, speed: RotationSpeed, duration: number): Promise<Result>
```

Rotates a mechanical device at the specified speed.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mechId | number | Yes | ID of the mechanical device. |
| speed | RotationSpeed | Yes | Rotation speed. |
| duration | number | Yes | Rotation duration. Unit: millisecond. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&gt; | Promise that return the execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [33300001](../errorcode-mechanic.md#33300001-system-error) | Service exception. |
| [33300002](../errorcode-mechanic.md#33300002-device-not-connected) | Device not connected. |

**Example**

```TypeScript
console.info('Start rotate');
let degree: mechanicManager.RotationSpeed = {
  yawSpeed: 3 * Math.PI,
  rollSpeed: 3 * Math.PI,
  pitchSpeed: 3 * Math.PI
}
mechanicManager.rotateBySpeed(0, degree, 500)
  .then((result) => {
    console.info(`'Rotate result:' ${result}`);
  });
console.info('Rotate finish');

```

