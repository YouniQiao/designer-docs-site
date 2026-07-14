# @ohos.nearlink.remoteDevice

Provides interaction methods such as pairing and connection with remote devices.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createRemoteDevice](arkts-connectivity-createremotedevice-f.md#createremotedevice-1) | Creates a remote device instance. |
| [offAcbStateChange](arkts-connectivity-offacbstatechange-f.md#offacbstatechange-1) | Unsubscribes from the NearLink ACB connection status change event. |
| [offConnectionStateChange](arkts-connectivity-offconnectionstatechange-f.md#offconnectionstatechange-1) | Unsubscribes from NearLink connection state change events. |
| [offPairingStateChange](arkts-connectivity-offpairingstatechange-f.md#offpairingstatechange-1) | Unsubscribes from NearLink pairing state change events. |
| [onAcbStateChange](arkts-connectivity-onacbstatechange-f.md#onacbstatechange-1) | Subscribes to the NearLink ACB connection status change event. This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission. If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission, the callback returns the real device address; otherwise, a random device address is returned. |
| [onConnectionStateChange](arkts-connectivity-onconnectionstatechange-f.md#onconnectionstatechange-1) | Subscribes to NearLink connection state change events. This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission. If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission, the callback returns the real device address; otherwise, a random device address is returned. |
| [onPairingStateChange](arkts-connectivity-onpairingstatechange-f.md#onpairingstatechange-1) | Subscribes to NearLink pairing state change events. This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission. If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission, the callback returns the real device address; otherwise, a random device address is returned. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [offPairingRequest](arkts-connectivity-offpairingrequest-f-sys.md#offpairingrequest-1) | Unsubscribes from pairing request events from remote NearLink devices. |
| [onPairingRequest](arkts-connectivity-onpairingrequest-f-sys.md#onpairingrequest-1) | Subscribes to pairing request events from remote NearLink devices. This event is accessible only to system applications that granted the ohos.permission.NEARLINK_ACCESS permission. If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission, the callback returns the real device address; otherwise, a random device address is returned. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AcbStateParam](arkts-connectivity-acbstateparam-i.md) | ACB connection status parameter. |
| [ConnectionStateParam](arkts-connectivity-connectionstateparam-i.md) | Describes the connection state parameters. |
| [DeviceInformation](arkts-connectivity-deviceinformation-i.md) | Describes the remote device information. |
| [PairingRequestParam](arkts-connectivity-pairingrequestparam-i.md) | Describes pairing request parameters. |
| [PairingStateParam](arkts-connectivity-pairingstateparam-i.md) | Describes the pairing state parameters. |
| [RemoteDevice](arkts-connectivity-remotedevice-i.md) | Remote device operation methods. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceModel](arkts-connectivity-devicemodel-i-sys.md) | Describes the remote device's model information. |
| [RemoteDevice](arkts-connectivity-remotedevice-i-sys.md) | Remote device operation methods. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ConnectionReason](arkts-connectivity-connectionreason-e.md) | Enum for the connection reason. |
| [PairingReason](arkts-connectivity-pairingreason-e.md) | Enum for the pairing reason. |
| [PairingType](arkts-connectivity-pairingtype-e.md) | Enum for the pairing type. |

### Types

| Name | Description |
| --- | --- |
| [AcbState](arkts-connectivity-acbstate-t.md) | Indicates the ACB(Asynchronous Connection-Oriented Bidirectional) connection status. |
| [ConnectionState](arkts-connectivity-connectionstate-t.md) | Indicates the connection state. |
| [DeviceClass](arkts-connectivity-deviceclass-t.md) | Indicates the device class. |
| [PairingState](arkts-connectivity-pairingstate-t.md) | Indicates the pairing state. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ConnectionInterval](arkts-connectivity-connectioninterval-t-sys.md) | Indicates the connection interval. |
<!--DelEnd-->

