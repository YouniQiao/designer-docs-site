# setPowerModel

## Modules to Import

```TypeScript
import { wifiext } from '@ohos.wifiext';
```

## setPowerModel

```TypeScript
function setPowerModel(model: PowerModel): boolean
```

Set the current Wi-Fi power mode.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setPowerMode

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT_EXT

**System capability:** SystemCapability.Communication.WiFi.AP.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | PowerModel | Yes | model indicates model file description to be loaded. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the Wi-Fi is active; returns {@code false} otherwise. |

