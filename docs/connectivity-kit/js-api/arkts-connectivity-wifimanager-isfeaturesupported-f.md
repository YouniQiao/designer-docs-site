# isFeatureSupported

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="isfeaturesupported"></a>
## isFeatureSupported

```TypeScript
function isFeatureSupported(featureId: number): boolean
```

Check whether the device supports a specified feature.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function isFeatureSupported(featureId: long): boolean--><!--Device-wifiManager-function isFeatureSupported(featureId: long): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureId | number | Yes | Indicates the ID of the feature. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if this device supports the specified feature, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2401000](../errorcode-wifi.md#2401000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let featureId = 0;
    let ret = wifiManager.isFeatureSupported(featureId);
    console.info("isFeatureSupported:" + ret);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

