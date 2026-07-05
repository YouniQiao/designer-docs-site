# offBatteryChange

## offBatteryChange

```TypeScript
function offBatteryChange(callback?: Callback<BatteryInfo>): void
```

Unsubscribe the event of battery state changes from a remote device.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;BatteryInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported.  Only can be called on phone, tablet, and 2in1 devices.  Failed to call the API when the short-range chip is not inserted on 2in1 device. |
| 2900099 | Operation failed. |

