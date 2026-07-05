# @ohos.nearlink.remoteDevice

提供与远端设备的配对、连接等交互方式。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createRemoteDevice](arkts-remotedevice-createremotedevice-f.md#createRemoteDevice-1) | 创建远端设备实例。 |
| [offAcbStateChange](arkts-remotedevice-offacbstatechange-f.md#offAcbStateChange-1) | 取消订阅星闪 ACB连接状态更改事件。 |
| [offConnectionStateChange](arkts-remotedevice-offconnectionstatechange-f.md#offConnectionStateChange-1) | 取消订阅星闪连接状态更改事件。 |
| <!--DelRow-->[offPairingRequest](arkts-remotedevice-offpairingrequest-f-sys.md#offPairingRequest-1) | 取消订阅来自远端星闪设备的配对请求事件。 |
| [offPairingStateChange](arkts-remotedevice-offpairingstatechange-f.md#offPairingStateChange-1) | 取消订阅星闪配对状态更改事件。 |
| [onAcbStateChange](arkts-remotedevice-onacbstatechange-f.md#onAcbStateChange-1) | 订阅NearLink ACB连接状态变化事件。ACB采用异步双向链路。 > **说明** > 如果该用户具有ohos.permission.GET_NEARLINK_PEER_MAC权限，则真实设备地址为 > 返回。 > 否则，将返回一个随机的设备地址。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。 |
| [onConnectionStateChange](arkts-remotedevice-onconnectionstatechange-f.md#onConnectionStateChange-1) | 订阅星闪连接状态更改事件。 如果用户有ohos.permission.GET_NEARLINK_PEER_MAC权限，则返回真实设备地址。否则返回一个随机的设备地址。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。 |
| <!--DelRow-->[onPairingRequest](arkts-remotedevice-onpairingrequest-f-sys.md#onPairingRequest-1) | 订阅来自远程NearLink设备的配对请求事件。 如果用户被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址 只有授予了ohos.permission.NEARLINK_ACCESS权限的系统应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。 |
| [onPairingStateChange](arkts-remotedevice-onpairingstatechange-f.md#onPairingStateChange-1) | 订阅NearLink配对状态变更事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AcbStateParam](arkts-remotedevice-acbstateparam-i.md) | ACB连接状态参数。 |
| [ConnectionStateParam](arkts-remotedevice-connectionstateparam-i.md) | 连接状态参数。 |
| [DeviceInformation](arkts-remotedevice-deviceinformation-i.md) | 描述远端设备信息。 |
| <!--DelRow-->[DeviceModel](arkts-remotedevice-devicemodel-i-sys.md) | 远程设备的型号信息。 |
| [PairingRequestParam](arkts-remotedevice-pairingrequestparam-i.md) | 配对请求参数说明。 |
| [PairingStateParam](arkts-remotedevice-pairingstateparam-i.md) | 配对状态参数。 |
| [RemoteDevice](arkts-remotedevice-remotedevice-i.md) | 远程设备操作方法。 |

### Types

| Name | Description |
| --- | --- |
| [AcbState](arkts-remotedevice-acbstate-t.md) | ACB（异步面向连接的双向）连接状态。 |
| <!--DelRow-->[ConnectionInterval](arkts-remotedevice-connectioninterval-t-sys.md) | 连接间隔。 |
| [ConnectionState](arkts-remotedevice-connectionstate-t.md) | 连接状态。 |
| [DeviceClass](arkts-remotedevice-deviceclass-t.md) | 设备类型。 |
| [PairingState](arkts-remotedevice-pairingstate-t.md) | 配对状态。 |

### Enums

| Name | Description |
| --- | --- |
| [ConnectionReason](arkts-remotedevice-connectionreason-e.md) | 连接原因的枚举。 |
| [PairingReason](arkts-remotedevice-pairingreason-e.md) | 配对原因的枚举。 |
| [PairingType](arkts-remotedevice-pairingtype-e.md) | 配对类型的枚举。 |

