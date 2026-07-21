# getCountryCode

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

<a id="getcountrycode"></a>
## getCountryCode

```TypeScript
function getCountryCode(callback: AsyncCallback<CountryCode>): void
```

Obtain the current country code.

**Since:** 9

<!--Device-geoLocationManager-function getCountryCode(callback: AsyncCallback<CountryCode>): void--><!--Device-geoLocationManager-function getCountryCode(callback: AsyncCallback<CountryCode>): void-End-->

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CountryCode&gt; | Yes | Indicates the callback for reporting the country code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getCountryCode} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301500](../errorcode-geoLocationManager.md#3301500-area-information-query-failed) | Failed to query the area information. |

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


<a id="getcountrycode-1"></a>
## getCountryCode

```TypeScript
function getCountryCode(): Promise<CountryCode>
```

Obtain the current country code.

**Since:** 9

<!--Device-geoLocationManager-function getCountryCode(): Promise<CountryCode>--><!--Device-geoLocationManager-function getCountryCode(): Promise<CountryCode>-End-->

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CountryCode&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getCountryCode} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301500](../errorcode-geoLocationManager.md#3301500-area-information-query-failed) | Failed to query the area information. |

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

