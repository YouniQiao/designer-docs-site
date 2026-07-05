# enableLocationByUserId

## enableLocationByUserId

```TypeScript
function enableLocationByUserId(userId: int): Promise<void>
```

Turn on the location switch for a specified user.

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | Indicates the ID of a specified user. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.enableLocationByUserId} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Enable the location switch for the specified system account. For example, if the account ID is below 101, you can enable the location switch for the account whose ID is 100.
  let userId: number = 100;
  geoLocationManager.enableLocationByUserId(userId).then(() => {
    console.info('promise, enableLocationByUserId succeed');
  })
    .catch((error: BusinessError) => {
      console.error('promise, enableLocationByUserId: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

