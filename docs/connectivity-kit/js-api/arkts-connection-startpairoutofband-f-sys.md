# startPairOutOfBand

## startPairOutOfBand

```TypeScript
function startPairOutOfBand(deviceId: string, transport: BluetoothTransport, p192Data?: OobData,
    p256Data?: OobData): Promise<void>
```

Starts pairing with the specific remote Bluetooth device using the Out Of Band mechanism. This function is asynchronous, and the pairing status is obtained by listening to the bondStateChange event. If both p192Data and p256Data are not used, the function call will fail. If both p192Data and p256Data are used simultaneously, p256Data takes effect.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| transport | BluetoothTransport | Yes | Indicates the transport of a remote Bluetooth device. |
| p192Data | OobData | No |  |
| p256Data | OobData | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

