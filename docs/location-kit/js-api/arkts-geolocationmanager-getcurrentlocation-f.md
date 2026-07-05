# getCurrentLocation

## getCurrentLocation

```TypeScript
function getCurrentLocation(request: CurrentLocationRequest | SingleLocationRequest,
  callback: AsyncCallback<Location>): void
```

Obtain current location.

**Since:** 22

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | CurrentLocationRequest \| SingleLocationRequest | Yes | Indicates the location request parameters. |
| callback | AsyncCallback&lt;Location> | Yes | Indicates the callback for reporting the location result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCurrentLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the geographical location. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';
// Method 1: Use CurrentLocationRequest as the input parameter.
let requestInfo: geoLocationManager.CurrentLocationRequest = {
  'priority': geoLocationManager.LocationRequestPriority.FIRST_FIX,
  'scenario': geoLocationManager.LocationRequestScenario.UNSET,
  'maxAccuracy': 0
};
let locationChange = (err: BusinessError, location: geoLocationManager.Location): void => {
  if (err) {
    console.error('locationChange: err=' + JSON.stringify(err));
  }
  if (location) {
    console.info('locationChange: location=' + JSON.stringify(location));
  }
};

try {
  geoLocationManager.getCurrentLocation(requestInfo, locationChange);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

// Method 2: Use SingleLocationRequest as the input parameter.
let request: geoLocationManager.SingleLocationRequest = {
  'locatingTimeoutMs': 10000,
  'locatingPriority': geoLocationManager.LocatingPriority.PRIORITY_ACCURACY
};
let locationCallback = (err: BusinessError, location: geoLocationManager.Location): void => {
  if (err) {
    console.error('locationChange: err=' + JSON.stringify(err));
  }
  if (location) {
    console.info('locationChange: location=' + JSON.stringify(location));
  }
};

try {
  geoLocationManager.getCurrentLocation(request, locationCallback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getCurrentLocation

```TypeScript
function getCurrentLocation(callback: AsyncCallback<Location>): void
```

Obtain current location.

**Since:** 22

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Location> | Yes | Indicates the callback for reporting the location result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCurrentLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the geographical location. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let locationChange = (err: BusinessError, location: geoLocationManager.Location) => {
  if (err) {
    console.error('locationChange: err=' + JSON.stringify(err));
  }
  if (location) {
    console.info('locationChange: location=' + JSON.stringify(location));
  }
};

try {
  geoLocationManager.getCurrentLocation(locationChange);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getCurrentLocation

```TypeScript
function getCurrentLocation(request?: CurrentLocationRequest | SingleLocationRequest):
  Promise<Location>
```

Obtain current location.

**Since:** 22

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | CurrentLocationRequest \| SingleLocationRequest | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Location> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does  not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCurrentLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the geographical location. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Method 1: Use CurrentLocationRequest as the input parameter.
let requestInfo: geoLocationManager.CurrentLocationRequest = {
  'priority': geoLocationManager.LocationRequestPriority.FIRST_FIX,
  'scenario': geoLocationManager.LocationRequestScenario.UNSET,
  'maxAccuracy': 0
};
try {
  geoLocationManager.getCurrentLocation(requestInfo).then((result) => {
    console.info('current location: ' + JSON.stringify(result));
  })
    .catch((error: BusinessError) => {
      console.error('promise, getCurrentLocation: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

// Method 2: Use SingleLocationRequest as the input parameter.
let request: geoLocationManager.SingleLocationRequest = {
  'locatingTimeoutMs': 10000,
  'locatingPriority': geoLocationManager.LocatingPriority.PRIORITY_ACCURACY
};
try {
  geoLocationManager.getCurrentLocation(request).then((result) => {
    console.info('current location: ' + JSON.stringify(result));
  })
    .catch((error: BusinessError) => {
      console.error('promise, getCurrentLocation: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

