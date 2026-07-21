# startBluetoothSearch

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

<a id="startbluetoothsearch"></a>
## startBluetoothSearch

```TypeScript
function startBluetoothSearch(
      request: BluetoothSearchRequestParams, callback: Callback<BluetoothScanResult>): void
```

Starts Bluetooth scanning and matches the device ID list in the input parameter with the Bluetooth scanning result. If the matching is successful, the Bluetooth device information is returned through the callback.

**Since:** 26.0.0

**Required permissions:** ohos.permission.APPROXIMATELY_LOCATION

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-geoLocationManager-function startBluetoothSearch(
      request: BluetoothSearchRequestParams, callback: Callback<BluetoothScanResult>): void--><!--Device-geoLocationManager-function startBluetoothSearch(
      request: BluetoothSearchRequestParams, callback: Callback<BluetoothScanResult>): void-End-->

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [BluetoothSearchRequestParams](arkts-location-geolocationmanager-bluetoothsearchrequestparams-i.md) | Yes | Indicates the configuration parameters for the Bluetooth search function. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;BluetoothScanResult&gt; | Yes | Callback used to return ${BluetoothScanResult}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.startBluetoothSearch} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301800](../errorcode-geoLocationManager.md#3301800-failed-to-start-wifi-or-bluetooth-scanning) | Failed to start Bluetooth scanning. |

