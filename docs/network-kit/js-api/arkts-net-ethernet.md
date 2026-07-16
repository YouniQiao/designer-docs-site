# @ohos.net.ethernet

Provides interfaces to manage ethernet.

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

## Modules to Import

```TypeScript
import { ethernet } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getMacAddress](arkts-network-getmacaddress-f.md#getmacaddress-1) | Get the ethernet mac address list. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableEthernetInterface](arkts-network-disableethernetinterface-f-sys.md#disableethernetinterface-1) | Disable the ethernet interface. |
| [enableEthernetInterface](arkts-network-enableethernetinterface-f-sys.md#enableethernetinterface-1) | Enable the ethernet interface. |
| [getAllActiveIfaces](arkts-network-getallactiveifaces-f-sys.md#getallactiveifaces-1) | Gets the names of all active network interfaces. |
| [getAllActiveIfaces](arkts-network-getallactiveifaces-f-sys.md#getallactiveifaces-2) | Gets the names of all active network interfaces. |
| [getEthernetDeviceInfos](arkts-network-getethernetdeviceinfos-f-sys.md#getethernetdeviceinfos-1) | Get the ethernet mac address list. |
| [getIfaceConfig](arkts-network-getifaceconfig-f-sys.md#getifaceconfig-1) | Get the specified network interface information. |
| [getIfaceConfig](arkts-network-getifaceconfig-f-sys.md#getifaceconfig-2) | Get the specified network interface information. |
| [isEthernetEnabled](arkts-network-isethernetenabled-f-sys.md#isethernetenabled-1) | Check whether the global ethernet switch is enabled. |
| [isIfaceActive](arkts-network-isifaceactive-f-sys.md#isifaceactive-1) | Check whether the specified network is active. |
| [isIfaceActive](arkts-network-isifaceactive-f-sys.md#isifaceactive-2) | Check whether the specified network is active. |
| [off](arkts-network-off-f-sys.md#off-1) | Unregister a callback from the ethernet interface active state change. |
| [on](arkts-network-on-f-sys.md#on-1) | Register a callback for the ethernet interface active state change. |
| [setIfaceConfig](arkts-network-setifaceconfig-f-sys.md#setifaceconfig-1) | Set the specified network interface parameters. |
| [setIfaceConfig](arkts-network-setifaceconfig-f-sys.md#setifaceconfig-2) | Set the specified network interface parameters. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [MacAddressInfo](arkts-network-macaddressinfo-i.md) | Defines the mac address info of the Ethernet. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [EthernetDeviceInfos](arkts-network-ethernetdeviceinfos-i-sys.md) | Defines the device information of the Ethernet. |
| [InterfaceConfiguration](arkts-network-interfaceconfiguration-i-sys.md) | Defines the network configuration for the Ethernet connection. |
| [InterfaceStateInfo](arkts-network-interfacestateinfo-i-sys.md) | The interface is used to monitor network interface status changes. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DeviceConnectionType](arkts-network-deviceconnectiontype-e-sys.md) | Defines the Device Connection Mode of the Ethernet. |
| [IPSetMode](arkts-network-ipsetmode-e-sys.md) | Defines the configuration mode of the Ethernet connection. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [HttpProxy](arkts-network-httpproxy-t.md) |  |

