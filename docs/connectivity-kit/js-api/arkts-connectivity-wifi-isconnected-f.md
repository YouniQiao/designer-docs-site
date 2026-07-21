# isConnected

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="isconnected"></a>
## isConnected

```TypeScript
function isConnected(): boolean
```

Checks whether a Wi-Fi connection has been set up.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isConnected

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function isConnected(): boolean--><!--Device-wifi-function isConnected(): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if a Wi-Fi connection has been set up, returns {@code false} otherwise. |

