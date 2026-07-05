# @ohos.nearlink.manager

Provides methods to manage NearLink devices.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getLocalName](arkts-connectivity-getlocalname-f.md#getlocalname-1) | Gets the local device's name. |
| [getPairedDevices](arkts-connectivity-getpaireddevices-f.md#getpaireddevices-1) | Gets the list of devices that have been paired with the current device. If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned. Otherwise, a random device address is returned. |
| [getState](arkts-connectivity-getstate-f.md#getstate-1) | Gets the NearLink state. |
| [isNearLinkSupported](arkts-connectivity-isnearlinksupported-f.md#isnearlinksupported-1) | Check whether the current device supports NearLink. |
| [offStateChange](arkts-connectivity-offstatechange-f.md#offstatechange-1) | Unsubscribes from state change events. |
| [onStateChange](arkts-connectivity-onstatechange-f.md#onstatechange-1) | Subscribes to state change events. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disable](arkts-connectivity-disable-f-sys.md#disable-1) | Turns off NearLink. |
| [enable](arkts-connectivity-enable-f-sys.md#enable-1) | Turns on NearLink. |
| [factoryReset](arkts-connectivity-factoryreset-f-sys.md#factoryreset-1) | Restores NearLink settings. |
| [getLocalAddress](arkts-connectivity-getlocaladdress-f-sys.md#getlocaladdress-1) | Gets the MAC address of the local device. |
| [setConnectionMode](arkts-connectivity-setconnectionmode-f-sys.md#setconnectionmode-1) | Sets the NearLink connection mode for a device. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [NearlinkState](arkts-connectivity-nearlinkstate-e.md) | The enum of NearLink state. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ConnectionMode](arkts-connectivity-connectionmode-e-sys.md) | The enum of connection mode. |
<!--DelEnd-->

