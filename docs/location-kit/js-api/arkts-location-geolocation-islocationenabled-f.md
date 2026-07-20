# isLocationEnabled

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

## isLocationEnabled

```TypeScript
function isLocationEnabled(callback: AsyncCallback<boolean>): void
```

Obtain current location switch status

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isLocationEnabled

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function isLocationEnabled(callback: AsyncCallback<boolean>): void--><!--Device-geolocation-function isLocationEnabled(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Indicates the callback for reporting the location switch result. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isLocationEnabled((err, data) => {
    if (err) {
        console.info('isLocationEnabled: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('isLocationEnabled: data=' + JSON.stringify(data));
    }
});

```


## isLocationEnabled

```TypeScript
function isLocationEnabled(): Promise<boolean>
```

Obtain current location switch status

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isLocationEnabled

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function isLocationEnabled(): Promise<boolean>--><!--Device-geolocation-function isLocationEnabled(): Promise<boolean>-End-->

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isLocationEnabled().then((result) => {
    console.info('promise, isLocationEnabled: ' + JSON.stringify(result));
});

```

