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
| <!--DelRow-->[disableEthernetInterface](arkts-ethernet-disableethernetinterface-f-sys.md#disableEthernetInterface-1) | Disable the ethernet interface. |
| <!--DelRow-->[enableEthernetInterface](arkts-ethernet-enableethernetinterface-f-sys.md#enableEthernetInterface-1) | Enable the ethernet interface. |
| <!--DelRow-->[getAllActiveIfaces](arkts-ethernet-getallactiveifaces-f-sys.md#getAllActiveIfaces-1) | Gets the names of all active network interfaces. |
| <!--DelRow-->[getAllActiveIfaces](arkts-ethernet-getallactiveifaces-f-sys.md#getAllActiveIfaces-2) | Gets the names of all active network interfaces. |
| <!--DelRow-->[getEthernetDeviceInfos](arkts-ethernet-getethernetdeviceinfos-f-sys.md#getEthernetDeviceInfos-1) | Get the ethernet mac address list. |
| <!--DelRow-->[getIfaceConfig](arkts-ethernet-getifaceconfig-f-sys.md#getIfaceConfig-1) | Get the specified network interface information. |
| <!--DelRow-->[getIfaceConfig](arkts-ethernet-getifaceconfig-f-sys.md#getIfaceConfig-2) | Get the specified network interface information. |
| [getMacAddress](arkts-ethernet-getmacaddress-f.md#getMacAddress-1) | Get the ethernet mac address list. |
| <!--DelRow-->[isEthernetEnabled](arkts-ethernet-isethernetenabled-f-sys.md#isEthernetEnabled-1) | Check whether the global ethernet switch is enabled. |
| <!--DelRow-->[isIfaceActive](arkts-ethernet-isifaceactive-f-sys.md#isIfaceActive-1) | Check whether the specified network is active. |
| <!--DelRow-->[isIfaceActive](arkts-ethernet-isifaceactive-f-sys.md#isIfaceActive-2) | Check whether the specified network is active. |
| <!--DelRow-->[off](arkts-ethernet-off-f-sys.md#off-1) | Unregister a callback from the ethernet interface active state change. |
| <!--DelRow-->[on](arkts-ethernet-on-f-sys.md#on-1) | Register a callback for the ethernet interface active state change. |
| <!--DelRow-->[setIfaceConfig](arkts-ethernet-setifaceconfig-f-sys.md#setIfaceConfig-1) | Set the specified network interface parameters. |
| <!--DelRow-->[setIfaceConfig](arkts-ethernet-setifaceconfig-f-sys.md#setIfaceConfig-2) | Set the specified network interface parameters. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[EthernetDeviceInfos](arkts-ethernet-ethernetdeviceinfos-i-sys.md) | Defines the device information of the Ethernet. |
| <!--DelRow-->[InterfaceConfiguration](arkts-ethernet-interfaceconfiguration-i-sys.md) | Defines the network configuration for the Ethernet connection. |
| <!--DelRow-->[InterfaceStateInfo](arkts-ethernet-interfacestateinfo-i-sys.md) | The interface is used to monitor network interface status changes. |
| [MacAddressInfo](arkts-ethernet-macaddressinfo-i.md) | Defines the mac address info of the Ethernet. |

### Types

| Name | Description |
| --- | --- |
| [HttpProxy](arkts-ethernet-httpproxy-t.md) |  |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DeviceConnectionType](arkts-ethernet-deviceconnectiontype-e-sys.md) | Defines the Device Connection Mode of the Ethernet. |
| <!--DelRow-->[IPSetMode](arkts-ethernet-ipsetmode-e-sys.md) | Defines the configuration mode of the Ethernet connection. |

