# @ohos.net.sharing

Provides network sharing related interfaces.

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.NetSharing

## Modules to Import

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getSharableRegexes](arkts-network-getsharableregexes-f-sys.md#getsharableregexes-1) | Get a list regular expression that defines any interface that can support network sharing. |
| [getSharableRegexes](arkts-network-getsharableregexes-f-sys.md#getsharableregexes-2) | Get a list regular expression that defines any interface that can support network sharing. |
| [getSharingIfaces](arkts-network-getsharingifaces-f-sys.md#getsharingifaces-1) | Obtains the names of interfaces in each sharing state. |
| [getSharingIfaces](arkts-network-getsharingifaces-f-sys.md#getsharingifaces-2) | Obtains the names of interfaces in each sharing state. |
| [getSharingState](arkts-network-getsharingstate-f-sys.md#getsharingstate-1) | Obtains the network sharing state for given type. |
| [getSharingState](arkts-network-getsharingstate-f-sys.md#getsharingstate-2) | Obtains the network sharing state for given type. |
| [getStatsRxBytes](arkts-network-getstatsrxbytes-f-sys.md#getstatsrxbytes-1) | Obtains the number of downlink data bytes of the sharing network interfaces. |
| [getStatsRxBytes](arkts-network-getstatsrxbytes-f-sys.md#getstatsrxbytes-2) | Obtains the number of downlink data bytes of the sharing network interfaces. |
| [getStatsTotalBytes](arkts-network-getstatstotalbytes-f-sys.md#getstatstotalbytes-1) | Obtains the number of total data bytes of the sharing network interfaces. |
| [getStatsTotalBytes](arkts-network-getstatstotalbytes-f-sys.md#getstatstotalbytes-2) | Obtains the number of total data bytes of the sharing network interfaces. |
| [getStatsTxBytes](arkts-network-getstatstxbytes-f-sys.md#getstatstxbytes-1) | Obtains the number of uplink data bytes of the sharing network interfaces. |
| [getStatsTxBytes](arkts-network-getstatstxbytes-f-sys.md#getstatstxbytes-2) | Obtains the number of uplink data bytes of the sharing network interfaces. |
| [isSharing](arkts-network-issharing-f-sys.md#issharing-1) | Return the global network sharing state. |
| [isSharing](arkts-network-issharing-f-sys.md#issharing-2) | Return the global network sharing state. |
| [isSharingSupported](arkts-network-issharingsupported-f-sys.md#issharingsupported-1) | Checks whether this device allows for network sharing. |
| [isSharingSupported](arkts-network-issharingsupported-f-sys.md#issharingsupported-2) | Checks whether this device allows for network sharing. |
| [off](arkts-network-off-f-sys.md#off-1) | Unregister a callback for the global network sharing state change. |
| [off](arkts-network-off-f-sys.md#off-2) | Unregister a callback for the interface network sharing state change. |
| [off](arkts-network-off-f-sys.md#off-3) | Unregister a callback for the sharing upstream network change. |
| [on](arkts-network-on-f-sys.md#on-1) | Register a callback for the global network sharing state change. |
| [on](arkts-network-on-f-sys.md#on-2) | Register a callback for the interface network sharing state change. |
| [on](arkts-network-on-f-sys.md#on-3) | Register a callback for the sharing upstream network change. |
| [startSharing](arkts-network-startsharing-f-sys.md#startsharing-1) | Start network sharing for given type. |
| [startSharing](arkts-network-startsharing-f-sys.md#startsharing-2) | Start network sharing for given type. |
| [stopSharing](arkts-network-stopsharing-f-sys.md#stopsharing-1) | Stop network sharing for given type. |
| [stopSharing](arkts-network-stopsharing-f-sys.md#stopsharing-2) | Stop network sharing for given type. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [InterfaceSharingStateInfo](arkts-network-interfacesharingstateinfo-i-sys.md) | The interface is used to notify listeners of changes in shared interface status. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [SharingIfaceState](arkts-network-sharingifacestate-e-sys.md) | Enumerates the network sharing states of an NIC. |
| [SharingIfaceType](arkts-network-sharingifacetype-e-sys.md) | Enumerates the network sharing types of an NIC. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [NetHandle](arkts-network-nethandle-t.md) | Get the handle of the data network. |

