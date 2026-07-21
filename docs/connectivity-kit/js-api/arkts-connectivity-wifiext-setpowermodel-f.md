# setPowerModel

## Modules to Import

```TypeScript
import { wifiext } from '@kit.ConnectivityKit';
```

<a id="setpowermodel"></a>
## setPowerModel

```TypeScript
function setPowerModel(model: PowerModel): boolean
```

Set the current Wi-Fi power mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setPowerMode

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT_EXT

<!--Device-wifiext-function setPowerModel(model: PowerModel): boolean--><!--Device-wifiext-function setPowerModel(model: PowerModel): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | [PowerModel](arkts-connectivity-wifiext-powermodel-e.md) | Yes | model indicates model file description to be loaded. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the Wi-Fi is active; returns {@code false} otherwise. |

