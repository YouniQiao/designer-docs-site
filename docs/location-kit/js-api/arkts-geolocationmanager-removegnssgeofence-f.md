# removeGnssGeofence

## removeGnssGeofence

```TypeScript
function removeGnssGeofence(geofenceId: int): Promise<void>
```

Remove a geofence.

**Since:** 12

**Required permissions:** 

- API version12  to  24: ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Geofence

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| geofenceId | int | Yes | Indicates the ID of geofence. [since 12] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. [since 12] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not  have the permission required to call the API. [since 12 - 24] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters  are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. [since 12] |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.removeGnssGeofence} due to limited device capabilities. [since 12] |
| 3301000 | The location service is unavailable. [since 12] |
| 3301602 | Failed to delete a geofence due to an incorrect ID. [since 12] |

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

