# stopBluetoothSearch

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## stopBluetoothSearch

```TypeScript
function stopBluetoothSearch(callback?: Callback<BluetoothScanResult>): void
```

Stop Bluetooth scanning and searching.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;BluetoothScanResult&gt; | No | Callback used to return ${BluetoothScanResult}.It should be the same as the callback passed to ${geoLocationManager.startBluetoothSearch}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.startBluetoothSearch} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

