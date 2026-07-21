# createNetConnection

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="createnetconnection"></a>
## createNetConnection

```TypeScript
function createNetConnection(netSpecifier?: NetSpecifier, timeout?: number): NetConnection
```

Create a network connection with optional netSpecifier and timeout.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-connection-function createNetConnection(netSpecifier?: NetSpecifier, timeout?: int): NetConnection--><!--Device-connection-function createNetConnection(netSpecifier?: NetSpecifier, timeout?: int): NetConnection-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netSpecifier | [NetSpecifier](arkts-network-connection-netspecifier-i.md) | No | Indicates the network specifier. See {@link NetSpecifier}. |
| timeout | number | No | The time in milliseconds to attempt looking for a suitable network before{@link NetConnection#netUnavailable} is called. |

**Return value:**

| Type | Description |
| --- | --- |
| [NetConnection](arkts-network-connection-netconnection-i.md) | the NetConnection of the NetSpecifier. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

// Example 1: Only the default network is concerned. You do not need to specify the netSpecifier parameter. If the timeout parameter is not passed, the timeout interval is not used. In this case, the value of timeout is 0.
let netConnection = connection.createNetConnection();

// Example 2: Only the cellular network is concerned. You need to specify the network type to cellular.
let timeout = 1000;
let netConnectionCellular = connection.createNetConnection({
  netCapabilities: {
    bearerTypes: [connection.NetBearType.BEARER_CELLULAR]
  }
}, timeout);

// Example 3: Both the cellular and Wi-Fi networks are concerned. You need to specify the network type to cellular and Wi-Fi.
let netConnectionCellularAndWifi = connection.createNetConnection({
  netCapabilities: {
    bearerTypes: [connection.NetBearType.BEARER_CELLULAR,
      connection.NetBearType.BEARER_WIFI]
  }
});

```

