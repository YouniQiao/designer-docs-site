# createNetConnection

## createNetConnection

```TypeScript
function createNetConnection(netSpecifier?: NetSpecifier, timeout?: int): NetConnection
```

Create a network connection with optional netSpecifier and timeout.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netSpecifier | NetSpecifier | No |  |
| timeout | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| NetConnection | the NetConnection of the NetSpecifier. |

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

