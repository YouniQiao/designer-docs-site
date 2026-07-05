# createVpnObserver

## Modules to Import

```TypeScript
import { vpnExtension } from '@ohos.net.vpnExtension';
```

## createVpnObserver

```TypeScript
function createVpnObserver(): VpnObserver
```

Create a VPN observer.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Return value:**

| Type | Description |
| --- | --- |
| VpnObserver | The VpnObserver instance. |

**Example**

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';

let vpnObserver: vpnExtension.VpnObserver = vpnExtension.createVpnObserver();

```

