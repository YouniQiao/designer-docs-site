# requestEnableLocation

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
```

## requestEnableLocation

```TypeScript
function requestEnableLocation(callback: AsyncCallback<boolean>): void
```

Request enable location

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback for reporting the location switch status. |

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

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.requestEnableLocation().then((result) => {
    console.info('promise, requestEnableLocation: ' + JSON.stringify(result));
});

```

