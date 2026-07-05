# isBasSupported

## isBasSupported

```TypeScript
function isBasSupported(): boolean
```

Determine whether the local device can obtain the battery level of the remote device.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the battery service is enabled; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |
| 2900099 | Operation failed. |

