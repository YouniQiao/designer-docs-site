# requestEnableLocation

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

## requestEnableLocation

```TypeScript
function requestEnableLocation(callback: AsyncCallback<boolean>): void
```

Request enable location

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function requestEnableLocation(callback: AsyncCallback<boolean>): void--><!--Device-geolocation-function requestEnableLocation(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Indicates the callback for reporting the location switch status. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.requestEnableLocation((err, data) => {
    if (err) {
        console.info('requestEnableLocation: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('requestEnableLocation: data=' + JSON.stringify(data));
    }
});

```


## requestEnableLocation

```TypeScript
function requestEnableLocation(): Promise<boolean>
```

Request enable location

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function requestEnableLocation(): Promise<boolean>--><!--Device-geolocation-function requestEnableLocation(): Promise<boolean>-End-->

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.requestEnableLocation().then((result) => {
    console.info('promise, requestEnableLocation: ' + JSON.stringify(result));
});

```

