# setAppNet

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## setAppNet

```TypeScript
function setAppNet(netHandle: NetHandle, callback: AsyncCallback<void>): void
```

Binds a process to {@code NetHandle}.
<p>All the sockets created from the process will be bound to the {@code NetHandle},
and the resolution of all host names will be managed by the {@code NetHandle}.</p>

**Since:** 9

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | NetHandle | Yes | Indicates the handle. For details, see {@link NetHandle}. |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback of setAppNet. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

The following example binds the application to a Wi-Fi network. It uses the [on('netAvailable')](#onnetavailable) API to bind the application when the Wi-Fi network is available, and the [on('netLost')](#onnetlost) API to unbind the application and switch to the default network when the Wi-Fi network is unavailable.

```TypeScript

import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a NetConnection object. To bind only to the Wi-Fi network, set the network type to Wi-Fi.
let netCon = connection.createNetConnection({
  netCapabilities: {
    bearerTypes: [connection.NetBearType.BEARER_WIFI]
  }
});

// Use the on API to enable listening for netAvailable events.
netCon.on('netAvailable', (netHandle: connection.NetHandle) => {
  console.info("Succeeded to get data: " + JSON.stringify(netHandle));
  connection.setAppNet(netHandle, (error: BusinessError, data: void) => {
    if (error) {
      console.error(`Failed to setAppNet. Code:${error.code}, message:${error.message}`);
      return;
    }
    console.info("Succeeded to setAppNet, netid: " + JSON.stringify(netHandle.netId));
  });
});

// Use the on API to enable listening for netLost events.
netCon.on('netLost', (netHandle: connection.NetHandle) => {
  console.info("Succeeded to get data: " + JSON.stringify(netHandle));
  // When the network is lost, proactively unbind the specified network.
  netHandle.netId = 0;
  connection.setAppNet(netHandle, (error: BusinessError, data: void) => {
    if (error) {
      console.error(`Failed to setAppNet. Code:${error.code}, message:${error.message}`);
      return;
    }
    console.info("Succeeded to setAppNet, netid: " + JSON.stringify(netHandle.netId));
  });
});

// Register a listener for network status change events. This API must be called after the on API.
netCon.register((error: BusinessError) => {
  if (error) {
    console.error(JSON.stringify(error));
  }
});


```


## setAppNet

```TypeScript
function setAppNet(netHandle: NetHandle): Promise<void>
```

Binds a process to {@code NetHandle}.
<p>All the sockets created from the process will be bound to the {@code NetHandle},
and the resolution of all host names will be managed by the {@code NetHandle}.</p>

**Since:** 9

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | NetHandle | Yes | Indicates the handle. For details, see {@link NetHandle}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

The following example binds the application to a Wi-Fi network. It uses the [on('netAvailable')](#onnetavailable) API to bind the application when the Wi-Fi network is available, and the [on('netLost')](#onnetlost) API to unbind the application and switch to the default network when the Wi-Fi network is unavailable.

```TypeScript

import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a NetConnection object. To bind only to the Wi-Fi network, set the network type to Wi-Fi.
let netCon = connection.createNetConnection({
  netCapabilities: {
    bearerTypes: [connection.NetBearType.BEARER_WIFI]
  }
});

// Use the on API to enable listening for netAvailable events.
netCon.on('netAvailable', (netHandle: connection.NetHandle) => {
  console.info("Succeeded to get data: " + JSON.stringify(netHandle));
  connection.setAppNet(netHandle).then(() => {
    console.info("setAppNet success, netid: " + JSON.stringify(netHandle.netId));
  }).catch((error: BusinessError) => {
    console.error(`Failed to setAppNet. Code:${error.code}, message:${error.message}`);
  })
});

// Use the on API to enable listening for netLost events.
netCon.on('netLost', (netHandle: connection.NetHandle) => {
  console.info("Succeeded to get data: " + JSON.stringify(netHandle));
  // When the network is lost, proactively unbind the specified network.
  netHandle.netId = 0;
  connection.setAppNet(netHandle).then(() => {
    console.info("setAppNet success, netid: " + JSON.stringify(netHandle.netId));
  }).catch((error: BusinessError) => {
    console.error(`Failed to setAppNet. Code:${error.code}, message:${error.message}`);
  })
});

// Register a listener for network status change events. This API must be called after the on API.
netCon.register((error: BusinessError) => {
  if (error) {
    console.error(JSON.stringify(error));
  }
});


```

