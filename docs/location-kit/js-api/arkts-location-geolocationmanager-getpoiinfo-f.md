# getPoiInfo

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

<a id="getpoiinfo"></a>
## getPoiInfo

```TypeScript
function getPoiInfo(): Promise<PoiInfo>
```

Obtaining POI Information.

**Since:** 20

**Required permissions:** ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-geoLocationManager-function getPoiInfo(): Promise<PoiInfo>--><!--Device-geoLocationManager-function getPoiInfo(): Promise<PoiInfo>-End-->

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PoiInfo&gt; | The promise returned by the function, for reporting POI info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getPoiInfo} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301100](../errorcode-geoLocationManager.md#3301100-positioning-failed-because-the-location-switch-is-turned-off) | The location switch is off. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  if (geoLocationManager.isPoiServiceSupported()) {
    geoLocationManager.getPoiInfo().then((poiInfo) => {
      if (poiInfo !== undefined) {
        console.info("get PoiInfo:" + JSON.stringify(poiInfo));
      }
    })
  }
} catch (error) {
  console.error("getPoiInfo errCode:" + error.code + ", errMessage:" + error.message);
}

```

