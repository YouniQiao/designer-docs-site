# startBluetoothSearch

## startBluetoothSearch

```TypeScript
function startBluetoothSearch(
      request: BluetoothSearchRequest, callback: Callback<BluetoothScanResult>): void
```

Starts Bluetooth scanning and matches the device ID list in the input parameter with the Bluetooth scanning result. If the matching is successful, the Bluetooth device information is returned through the callback.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | BluetoothSearchRequest | Yes | Indicates the configuration parameters  for the Bluetooth search function. |
| callback | Callback&lt;BluetoothScanResult> | Yes | Callback used to return ${BluetoothScanResult}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does  not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.startBluetoothSearch} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301800 | Failed to start Bluetooth scanning. |

