# getBtConnectionState

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## getBtConnectionState

```TypeScript
function getBtConnectionState(): ProfileConnectionState
```

Get the local device connection state to any profile of any remote device.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getBtConnectionState

**Required permissions:** ohos.permission.USE_BLUETOOTH

<!--Device-bluetooth-function getBtConnectionState(): ProfileConnectionState--><!--Device-bluetooth-function getBtConnectionState(): ProfileConnectionState-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ProfileConnectionState](arkts-connectivity-bluetooth-profileconnectionstate-e.md) | One of {@link ProfileConnectionState#STATE_DISCONNECTED},{@link ProfileConnectionState#STATE_CONNECTING}, {@link ProfileConnectionState#STATE_CONNECTED},{@link ProfileConnectionState#STATE_DISCONNECTING}. |

**Example**

```TypeScript
let connectionState : bluetooth.ProfileConnectionState = bluetooth.getBtConnectionState();

```

