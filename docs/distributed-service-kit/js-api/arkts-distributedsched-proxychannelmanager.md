# @ohos.distributedsched.proxyChannelManager

DSoftBus provides stable and reliable underlying channels for cross-device communication. This module is developed based on DSoftBus. It supports efficient data exchange between phones and wearables, providing users with a seamless device interconnection experience. During collaboration between the phone application and watch application, if the phone application is not running in the foreground, its downlink messages are forwarded to the notification server and then sent to the watch through the proxy module. The core functions of this module include proxy channel management, data route management, application state awareness and wakeup, and link state monitoring.

- Proxy channel management: Manages bidirectional data channels established between phones and wearables via the Bluetooth Basic Rate (BR) protocol.  
- Data route management: Accurately forwards data of wearables based on the specified service UUID.  
- Application state awareness and wakeup: After a proxy channel is enabled, dynamically analyzes and wakes up the corresponding application process on the phone after receiving data sent by the wearable.  
- Link state monitoring: Monitors the channel connection state in real time through callback.

**Since:** 20

<!--Device-unnamed-declare namespace proxyChannelManager--><!--Device-unnamed-declare namespace proxyChannelManager-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { proxyChannelManager } from '@kit.DistributedServiceKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [closeProxyChannel](arkts-distributedservice-proxychannelmanager-closeproxychannel-f.md#closeproxychannel) | Closes a proxy channel that has been opened. |
| [off](arkts-distributedservice-proxychannelmanager-off-f.md#off) | Unsubscribes from data receiving events. |
| [off](arkts-distributedservice-proxychannelmanager-off-f.md#off-1) | Unsubscribes from channel state change events. |
| [on](arkts-distributedservice-proxychannelmanager-on-f.md#on) | Subscribes to data receiving events. This API returns the result asynchronously through a callback. |
| [on](arkts-distributedservice-proxychannelmanager-on-f.md#on-1) | Subscribes to channel state change events. This API returns the result asynchronously through a callback. |
| [openProxyChannel](arkts-distributedservice-proxychannelmanager-openproxychannel-f.md#openproxychannel) | Opens a proxy channel. This API uses a promise to return the result. |
| [sendData](arkts-distributedservice-proxychannelmanager-senddata-f.md#senddata) | Sends data to the peer end. This API uses a promise to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| [ChannelInfo](arkts-distributedservice-proxychannelmanager-channelinfo-i.md) | Represents the proxy channel information, including the MAC address and service UUID of the peer device. |
| [ChannelStateInfo](arkts-distributedservice-proxychannelmanager-channelstateinfo-i.md) | Represents the connection state information of the proxy channel. |
| [DataInfo](arkts-distributedservice-proxychannelmanager-datainfo-i.md) | Represents the received data, including the channel ID and data. |

### Enums

| Name | Description |
| --- | --- |
| [ChannelState](arkts-distributedservice-proxychannelmanager-channelstate-e.md) | Enumerates the connection states of the proxy channel. |
| [LinkType](arkts-distributedservice-proxychannelmanager-linktype-e.md) | Enumerates the link types. |

