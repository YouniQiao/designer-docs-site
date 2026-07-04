# getPowerModel

## Modules to Import

```TypeScript
import { wifiext } from '@ohos.wifiext';
```

## getPowerModel

```TypeScript
function getPowerModel(): Promise<PowerModel>
```

Obtains the current Wi-Fi power mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getPowerMode

**Required permissions:** ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PowerModel&gt; | Returns the current Wi-Fi power mode. If a value less than zero is returned, it indicates a failure. |


## getPowerModel

```TypeScript
function getPowerModel(callback: AsyncCallback<PowerModel>): void
```

Obtains the current Wi-Fi power mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getPowerMode

**Required permissions:** ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PowerModel&gt; | Yes | callback function, no return value. |

