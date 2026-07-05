# getCountryCode

## getCountryCode

```TypeScript
function getCountryCode(callback: AsyncCallback<CountryCode>): void
```

Obtain the current country code.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CountryCode> | Yes | Indicates the callback for reporting the country code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCountryCode} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301500 | Failed to query the area information. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.getCountryCode((err, result) => {
    if (err) {
      console.error('getCountryCode: err=' + JSON.stringify(err));
    }
    if (result) {
      console.info('getCountryCode: result=' + JSON.stringify(result));
    }
  });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getCountryCode

```TypeScript
function getCountryCode(): Promise<CountryCode>
```

Obtain the current country code.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CountryCode> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCountryCode} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301500 | Failed to query the area information. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  geoLocationManager.getCountryCode()
    .then((result) => {
      console.info('promise, getCountryCode: result=' + JSON.stringify(result));
    })
    .catch((error: BusinessError) => {
      console.error('promise, getCountryCode: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

