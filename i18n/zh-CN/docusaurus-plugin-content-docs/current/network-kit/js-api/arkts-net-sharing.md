# @ohos.net.sharing

Provides network sharing related interfaces.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.NetSharing

## 导入模块

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getSharableRegexes](arkts-sharing-getsharableregexes-f-sys.md#getSharableRegexes-1) | Get a list regular expression that defines any interface that can support network sharing. |
| <!--DelRow-->[getSharableRegexes](arkts-sharing-getsharableregexes-f-sys.md#getSharableRegexes-2) | Get a list regular expression that defines any interface that can support network sharing. |
| <!--DelRow-->[getSharingIfaces](arkts-sharing-getsharingifaces-f-sys.md#getSharingIfaces-1) | Obtains the names of interfaces in each sharing state. |
| <!--DelRow-->[getSharingIfaces](arkts-sharing-getsharingifaces-f-sys.md#getSharingIfaces-2) | Obtains the names of interfaces in each sharing state. |
| <!--DelRow-->[getSharingState](arkts-sharing-getsharingstate-f-sys.md#getSharingState-1) | Obtains the network sharing state for given type. |
| <!--DelRow-->[getSharingState](arkts-sharing-getsharingstate-f-sys.md#getSharingState-2) | Obtains the network sharing state for given type. |
| <!--DelRow-->[getStatsRxBytes](arkts-sharing-getstatsrxbytes-f-sys.md#getStatsRxBytes-1) | Obtains the number of downlink data bytes of the sharing network interfaces. |
| <!--DelRow-->[getStatsRxBytes](arkts-sharing-getstatsrxbytes-f-sys.md#getStatsRxBytes-2) | Obtains the number of downlink data bytes of the sharing network interfaces. |
| <!--DelRow-->[getStatsTotalBytes](arkts-sharing-getstatstotalbytes-f-sys.md#getStatsTotalBytes-1) | Obtains the number of total data bytes of the sharing network interfaces. |
| <!--DelRow-->[getStatsTotalBytes](arkts-sharing-getstatstotalbytes-f-sys.md#getStatsTotalBytes-2) | Obtains the number of total data bytes of the sharing network interfaces. |
| <!--DelRow-->[getStatsTxBytes](arkts-sharing-getstatstxbytes-f-sys.md#getStatsTxBytes-1) | Obtains the number of uplink data bytes of the sharing network interfaces. |
| <!--DelRow-->[getStatsTxBytes](arkts-sharing-getstatstxbytes-f-sys.md#getStatsTxBytes-2) | Obtains the number of uplink data bytes of the sharing network interfaces. |
| <!--DelRow-->[isSharing](arkts-sharing-issharing-f-sys.md#isSharing-1) | Return the global network sharing state. |
| <!--DelRow-->[isSharing](arkts-sharing-issharing-f-sys.md#isSharing-2) | Return the global network sharing state. |
| <!--DelRow-->[isSharingSupported](arkts-sharing-issharingsupported-f-sys.md#isSharingSupported-1) | Checks whether this device allows for network sharing. |
| <!--DelRow-->[isSharingSupported](arkts-sharing-issharingsupported-f-sys.md#isSharingSupported-2) | Checks whether this device allows for network sharing. |
| <!--DelRow-->[off](arkts-sharing-off-f-sys.md#off-1) | Unregister a callback for the global network sharing state change. |
| <!--DelRow-->[off](arkts-sharing-off-f-sys.md#off-2) | Unregister a callback for the interface network sharing state change. |
| <!--DelRow-->[off](arkts-sharing-off-f-sys.md#off-3) | Unregister a callback for the sharing upstream network change. |
| <!--DelRow-->[on](arkts-sharing-on-f-sys.md#on-1) | Register a callback for the global network sharing state change. |
| <!--DelRow-->[on](arkts-sharing-on-f-sys.md#on-2) | Register a callback for the interface network sharing state change. |
| <!--DelRow-->[on](arkts-sharing-on-f-sys.md#on-3) | Register a callback for the sharing upstream network change. |
| <!--DelRow-->[startSharing](arkts-sharing-startsharing-f-sys.md#startSharing-1) | Start network sharing for given type. |
| <!--DelRow-->[startSharing](arkts-sharing-startsharing-f-sys.md#startSharing-2) | Start network sharing for given type. |
| <!--DelRow-->[stopSharing](arkts-sharing-stopsharing-f-sys.md#stopSharing-1) | Stop network sharing for given type. |
| <!--DelRow-->[stopSharing](arkts-sharing-stopsharing-f-sys.md#stopSharing-2) | Stop network sharing for given type. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[InterfaceSharingStateInfo](arkts-sharing-interfacesharingstateinfo-i-sys.md) | The interface is used to notify listeners of changes in shared interface status. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [NetHandle](arkts-sharing-nethandle-t.md) | Get the handle of the data network. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SharingIfaceState](arkts-sharing-sharingifacestate-e-sys.md) | Enumerates the network sharing states of an NIC. |
| <!--DelRow-->[SharingIfaceType](arkts-sharing-sharingifacetype-e-sys.md) | Enumerates the network sharing types of an NIC. |

