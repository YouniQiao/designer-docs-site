# removeGnssGeofence

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

<a id="removegnssgeofence"></a>
## removeGnssGeofence

```TypeScript
function removeGnssGeofence(geofenceId: number): Promise<void>
```

Remove a geofence.

**Since:** 12

**Required permissions:** 
- API version 12 - 24: ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

<!--Device-geoLocationManager-function removeGnssGeofence(geofenceId: int): Promise<void>--><!--Device-geoLocationManager-function removeGnssGeofence(geofenceId: int): Promise<void>-End-->

**System capability:** SystemCapability.Location.Location.Geofence

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| geofenceId | number | Yes | Indicates the ID of geofence. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API.<br>**Applicable version:** 12 - 24 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.removeGnssGeofence} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301602](../errorcode-geoLocationManager.md#3301602-failed-to-delete-a-geofence-due-to-an-incorrect-id) | Failed to delete a geofence due to an incorrect ID. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';
// fenceId is obtained after geoLocationManager.addGnssGeofence is successfully executed.
let fenceId = 1;
try {
  geoLocationManager.removeGnssGeofence(fenceId).then(() => {
    console.info("removeGnssGeofence success fenceId:" + fenceId);
  }).catch((error: BusinessError) => {
    console.error("removeGnssGeofence: error=" + JSON.stringify(error));
  });
} catch (error) {
  console.error("removeGnssGeofence: error=" + JSON.stringify(error));
}

```

