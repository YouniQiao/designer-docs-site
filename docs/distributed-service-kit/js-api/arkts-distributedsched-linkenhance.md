# @ohos.distributedsched.linkEnhance

The **linkEnhance** module delivers highly efficient Bluetooth connectivity and data transmission capabilities, significantly enhancing the cross-device connection stability. By employing a multi-channel merging algorithm, it not only increases the number of available cross-device connections but also strengthens cross-device data transmission capabilities, thereby improving the overall user experience.

**Since:** 20

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createConnection](arkts-distributedservice-createconnection-f.md#createconnection-1) | Creates a **Connection** object on the device that functions as the client. The device can then initiate connection requests to the device that functions as the server. |
| [createServer](arkts-distributedservice-createserver-f.md#createserver-1) | Creates a **Server** object. After **start()** is called, the device can be connected to other devices as a server. |

### Interfaces

| Name | Description |
| --- | --- |
| [ConnectResult](arkts-distributedservice-connectresult-i.md) | Represents the connection result, which is returned after the client calls **connect()**. |
| [Connection](arkts-distributedservice-connection-i.md) | Represents a **Connection** object, which provides methods for connecting to and disconnecting from a peer device, obtaining the device's ID, sending data, and registering or unregistering event callbacks. |
| [Server](arkts-distributedservice-server-i.md) | Represents a **Server** object, which provides methods for starting, stopping, and closing the server, and registering or unregistering event callbacks. |

