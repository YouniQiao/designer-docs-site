# createVpnObserver

## createVpnObserver

```TypeScript
function createVpnObserver(): VpnObserver
```

Create a VPN observer.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VpnObserver | The VpnObserver instance. |

**示例：**

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';

let vpnObserver: vpnExtension.VpnObserver = vpnExtension.createVpnObserver();

```

