# getPowerModel

## Modules to Import

```TypeScript
import { wifiext } from '@kit.ConnectivityKit';
```

<a id="getpowermodel"></a>
## getPowerModel

```TypeScript
function getPowerModel(): Promise<PowerModel>
```

Obtains the current Wi-Fi power mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getPowerMode

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiext-function getPowerModel(): Promise<PowerModel>--><!--Device-wifiext-function getPowerModel(): Promise<PowerModel>-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PowerModel&gt; | Returns the current Wi-Fi power mode. If a value less than zero is returned, it indicates a failure. |


<a id="getpowermodel-1"></a>
## getPowerModel

```TypeScript
function getPowerModel(callback: AsyncCallback<PowerModel>): void
```

Obtains the current Wi-Fi power mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getPowerMode

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiext-function getPowerModel(callback: AsyncCallback<PowerModel>): void--><!--Device-wifiext-function getPowerModel(callback: AsyncCallback<PowerModel>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;PowerModel&gt; | Yes | callback function, no return value. |

