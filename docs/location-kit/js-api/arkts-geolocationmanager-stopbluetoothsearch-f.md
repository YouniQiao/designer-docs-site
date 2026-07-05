# stopBluetoothSearch

## stopBluetoothSearch

```TypeScript
function stopBluetoothSearch(callback?: Callback<BluetoothScanResult>): void
```

Stop Bluetooth scanning and searching.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;BluetoothScanResult> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.startBluetoothSearch} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

