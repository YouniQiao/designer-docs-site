# turnBySpeed

## turnBySpeed

```TypeScript
function turnBySpeed(mechId: int, angleSpeed: double, duration: int): Promise<Result>
```

Rotate in place according to the speed.

**Since:** 26.0.0

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mechId | int | Yes | ID of the mechanical device.  The value should be an integer. |
| angleSpeed | double | Yes | angular velocity. |
| duration | int | Yes | Duration of movement, unit ms.  The value should be an integer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result> | Promise that returns the execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |

