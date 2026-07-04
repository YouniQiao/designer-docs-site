# isLocationEnabled

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
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

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback for reporting the location switch result. |

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

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isLocationEnabled().then((result) => {
    console.info('promise, isLocationEnabled: ' + JSON.stringify(result));
});

```

