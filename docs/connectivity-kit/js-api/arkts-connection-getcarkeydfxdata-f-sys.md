# getCarKeyDfxData

## getCarKeyDfxData

```TypeScript
function getCarKeyDfxData(): string
```

Get the dfx data of car key.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the dfx data in character string format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported.  Failed to call the API when the short-range chip is not inserted on the 2in1 device. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

