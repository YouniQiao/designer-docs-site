# getCurrentLocation

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
```

## getCurrentLocation

```TypeScript
function getCurrentLocation(request: CurrentLocationRequest, callback: AsyncCallback<Location>): void
```

Obtain current location

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCurrentLocation

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | CurrentLocationRequest | Yes | Indicates the location request parameters. |
| callback | AsyncCallback&lt;Location&gt; | Yes | Indicates the callback for reporting the location result. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
import BusinessError from "@ohos.base"
let requestInfo:geolocation.CurrentLocationRequest = {'priority': 0x203, 'scenario': 0x300,'maxAccuracy': 0};
let locationChange = (err:BusinessError.BusinessError, location:geolocation.Location) => {
    if (err) {
        console.info('locationChanger: err=' + JSON.stringify(err));
    }
    if (location) {
        console.info('locationChanger: location=' + JSON.stringify(location));
    }
};
geolocation.getCurrentLocation(requestInfo, locationChange);

```


## getCurrentLocation

```TypeScript
function getCurrentLocation(callback: AsyncCallback<Location>): void
```

Obtain current location

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCurrentLocation

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Location&gt; | Yes | Indicates the callback for reporting the location result. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
import BusinessError from "@ohos.base"
let locationChange = (err:BusinessError.BusinessError, location:geolocation.Location):void => {
    if (err) {
        console.info('locationChanger: err=' + JSON.stringify(err));
    }
    if (location) {
        console.info('locationChanger: location=' + JSON.stringify(location));
    }
};
geolocation.getCurrentLocation(locationChange);

```


## getCurrentLocation

```TypeScript
function getCurrentLocation(request?: CurrentLocationRequest): Promise<Location>
```

Obtain current location

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCurrentLocation

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | CurrentLocationRequest | No | Indicates the location request parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Location&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let requestInfo:geolocation.CurrentLocationRequest = {'priority': 0x203, 'scenario': 0x300,'maxAccuracy': 0};
geolocation.getCurrentLocation(requestInfo).then((result) => {
    console.info('current location: ' + JSON.stringify(result));
});

```

