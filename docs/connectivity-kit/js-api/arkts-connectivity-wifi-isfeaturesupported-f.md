# isFeatureSupported

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="isfeaturesupported"></a>
## isFeatureSupported

```TypeScript
function isFeatureSupported(featureId: number): boolean
```

Checks whether this device supports a specified feature.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isFeatureSupported

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function isFeatureSupported(featureId: number): boolean--><!--Device-wifi-function isFeatureSupported(featureId: number): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureId | number | Yes | Indicates the ID of the feature. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if this device supports the specified feature, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let featureId = 0;
  let ret = wifi.isFeatureSupported(featureId);
  console.info("isFeatureSupported:" + ret);
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}


```

