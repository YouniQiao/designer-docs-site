# @ohos.usb

The **usb** module provides USB device management functions, including USB device list query, bulk data transfer, control transfer, and permission control. > **NOTE** > > The initial APIs of this module are supported since API version 8. Newly added APIs will be marked with > a superscript to indicate their earliest API version. > The APIs provided by this module are no longer maintained since API version 9. You are advised to use > [@ohos.usbManager](arkts-usbmanager.md).

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [usbManager:usbManager](arkts-usbmanager.md)

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [bulkTransfer](arkts-basicservices-bulktransfer-f.md#bulktransfer-1) | Performs bulk transfer. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list and endpoints, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter, and call [usb.claimInterface](arkts-basicservices-claiminterface-f.md#claiminterface-1) to claim the USB interface. |
| [claimInterface](arkts-basicservices-claiminterface-f.md#claiminterface-1) | Claims a USB interface. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list and USB interfaces, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter. |
| [closePipe](arkts-basicservices-closepipe-f.md#closepipe-1) | Closes a USB device pipe. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter. |
| [connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) | Connects to a USB device. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list, and then call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission. |
| [controlTransfer](arkts-basicservices-controltransfer-f.md#controltransfer-1) | Performs control transfer. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter. |
| [getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) | Obtains the USB device list. |
| [getFileDescriptor](arkts-basicservices-getfiledescriptor-f.md#getfiledescriptor-1) | Obtains the file descriptor. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter. |
| [getRawDescriptor](arkts-basicservices-getrawdescriptor-f.md#getrawdescriptor-1) | Obtains the raw USB descriptor. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter. |
| [hasRight](arkts-basicservices-hasright-f.md#hasright-1) | Checks whether the application has the permission to access the device. |
| [releaseInterface](arkts-basicservices-releaseinterface-f.md#releaseinterface-1) | Releases a USB interface. Before you do this, ensure that you have claimed the interface by calling [usb.claimInterface](arkts-basicservices-claiminterface-f.md#claiminterface-1). |
| [requestRight](arkts-basicservices-requestright-f.md#requestright-1) | Requests the temporary permission for the application to access a USB device. This API uses a promise to return the result. System applications are granted the device access permission by default, and you do not need to apply for the permission separately. |
| [setConfiguration](arkts-basicservices-setconfiguration-f.md#setconfiguration-1) | Sets the device configuration. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list and device configuration, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter. |
| [setInterface](arkts-basicservices-setinterface-f.md#setinterface-1) | Sets a USB interface. Before you do this, call [usb.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1) to obtain the USB device list and interfaces, call [usb.requestRight](arkts-basicservices-requestright-f.md#requestright-1) to request the device access permission, call [usb.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter, and call [usb.claimInterface](arkts-basicservices-claiminterface-f.md#claiminterface-1) to claim the USB interface. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getCurrentFunctions](arkts-basicservices-getcurrentfunctions-f-sys.md#getcurrentfunctions-1) | Obtains the numeric mask combination for the USB function list in Device mode. |
| [getPorts](arkts-basicservices-getports-f-sys.md#getports-1) | Obtains the list of all physical USB ports. |
| [getSupportedModes](arkts-basicservices-getsupportedmodes-f-sys.md#getsupportedmodes-1) | Obtains the mask combination for the supported mode list of a given USB port. |
| [setCurrentFunctions](arkts-basicservices-setcurrentfunctions-f-sys.md#setcurrentfunctions-1) | Sets the current USB function list in Device mode. |
| [setPortRoles](arkts-basicservices-setportroles-f-sys.md#setportroles-1) | Sets the role types supported by a specified port, which can be **powerRole** (for charging) and **dataRole** (for data transfer). |
| [usbFunctionsFromString](arkts-basicservices-usbfunctionsfromstring-f-sys.md#usbfunctionsfromstring-1) | Converts the USB function list in the string format to a numeric mask in Device mode. |
| [usbFunctionsToString](arkts-basicservices-usbfunctionstostring-f-sys.md#usbfunctionstostring-1) | Converts the USB function list in the numeric mask format to a string in Device mode. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [USBConfig](arkts-basicservices-usbconfig-i.md) | Represents the USB configuration. One [USBDevice](arkts-basicservices-usbdevice-i.md) can contain multiple **USBConfig** instances. |
| [USBControlParams](arkts-basicservices-usbcontrolparams-i.md) | Represents control transfer parameters. |
| [USBDevice](arkts-basicservices-usbdevice-i.md) | Represents the USB device information. |
| [USBDevicePipe](arkts-basicservices-usbdevicepipe-i.md) | Represents a USB device pipe, which is used to determine a USB device. |
| [USBEndpoint](arkts-basicservices-usbendpoint-i.md) | Represents the USB endpoint from which data is sent or received. You can obtain the USB endpoint through [USBInterface](arkts-basicservices-usbinterface-i.md). |
| [USBInterface](arkts-basicservices-usbinterface-i.md) | Represents a USB interface. One [USBConfig](arkts-basicservices-usbconfig-i.md) can contain multiple **USBInterface** instances, each providing a specific function. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [USBPort](arkts-basicservices-usbport-i-sys.md) | Represents a USB port. |
| [USBPortStatus](arkts-basicservices-usbportstatus-i-sys.md) | Enumerates USB port roles. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [USBControlRequestType](arkts-basicservices-usbcontrolrequesttype-e.md) | Enumerates control request types. |
| [USBRequestDirection](arkts-basicservices-usbrequestdirection-e.md) | Enumerates request directions. |
| [USBRequestTargetType](arkts-basicservices-usbrequesttargettype-e.md) | Enumerates request target types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DataRoleType](arkts-basicservices-dataroletype-e-sys.md) | Enumerates data role types. |
| [FunctionType](arkts-basicservices-functiontype-e-sys.md) | Enumerates USB device function types. |
| [PortModeType](arkts-basicservices-portmodetype-e-sys.md) | Enumerates USB port mode types. |
| [PowerRoleType](arkts-basicservices-powerroletype-e-sys.md) | Enumerates power role types. |
<!--DelEnd-->

