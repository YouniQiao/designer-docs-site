# @ohos.usbManager

The **usbManager** module provides USB device management functions, including USB device list query, bulk data transfer, control transfer, and permission control on the host side as well as USB interface management,and function switch and query on the device side.

> **NOTE**  
>  
> Perform the following steps when using the APIs with the [usbManager.USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) parameter:  
> **Before use**:  
> 1. Call [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1) to obtain the USB device list.  
> 2. Call [usbManager.requestRight](arkts-basicservices-usbmanager-requestright-f.md#requestright-1) to request the temporary device access permission.  
> 3. Call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain [usbManager.USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) as an input parameter.  
> **After use**:  
> Call [usbManager.closePipe](usbManager.closePipe(USBDevicePipe: pipe)) to close a USB device pipe.  
>

**Since:** 9

<!--Device-unnamed-declare namespace usbManager--><!--Device-unnamed-declare namespace usbManager-End-->

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [bulkTransfer](arkts-basicservices-usbmanager-bulktransfer-f.md#bulktransfer-1) | Performs bulk transfer. This API uses a promise to return the result. |
| [cancelAccessoryRight](arkts-basicservices-usbmanager-cancelaccessoryright-f.md#cancelaccessoryright-1) | Cancels the permission of the current application to access USB accessories.You need to call [usbManager.getAccessoryList](arkts-basicservices-usbmanager-getaccessorylist-f.md#getaccessorylist-1) to obtain the accessory list and use [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) as a parameter. |
| [claimInterface](arkts-basicservices-usbmanager-claiminterface-f.md#claiminterface-1) | Claims a USB device interface. |
| [closeAccessory](arkts-basicservices-usbmanager-closeaccessory-f.md#closeaccessory-1) | Closes the accessory file descriptor.You need to call [usbManager.openAccessory](arkts-basicservices-usbmanager-openaccessory-f.md#openaccessory-1) to obtain the accessory list and use [USBAccessoryHandle](arkts-basicservices-usbmanager-usbaccessoryhandle-i.md) as a parameter. |
| [closePipe](arkts-basicservices-usbmanager-closepipe-f.md#closepipe-1) | Closes a USB device pipe.1. Call [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1) to obtain the USB device list.2. Call [usbManager.requestRight](arkts-basicservices-usbmanager-requestright-f.md#requestright-1) to request the device access permission.3. Call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter. |
| [connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) | Connects to the USB device based on the device information returned by **getDevices()**. If the USB service is abnormal, **undefined** may be returned. Check whether the return value of the API is empty.1. Call [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1) to obtain the USB device list.2. Call [usbManager.requestRight](arkts-basicservices-usbmanager-requestright-f.md#requestright-1) to request the device access permission. |
| [controlTransfer](arkts-basicservices-usbmanager-controltransfer-f.md#controltransfer-1) | Performs control transfer. This API uses a promise to return the result. |
| [getAccessoryList](arkts-basicservices-usbmanager-getaccessorylist-f.md#getaccessorylist-1) | Obtains the list of USB accessories connected to the host. |
| [getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1) | Obtains the list of USB devices connected to the host. |
| [getFileDescriptor](arkts-basicservices-usbmanager-getfiledescriptor-f.md#getfiledescriptor-1) | Obtains a file descriptor. |
| [getRawDescriptor](arkts-basicservices-usbmanager-getrawdescriptor-f.md#getrawdescriptor-1) | Obtains a raw USB descriptor. If the USB service is abnormal, **undefined** may be returned. Check whether the return value of the API is empty. |
| [hasAccessoryRight](arkts-basicservices-usbmanager-hasaccessoryright-f.md#hasaccessoryright-1) | Checks whether the application has the permission to access the USB accessory.You need to call [usbManager.getAccessoryList](arkts-basicservices-usbmanager-getaccessorylist-f.md#getaccessorylist-1) to obtain the accessory list and use [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) as a parameter. |
| [hasRight](arkts-basicservices-usbmanager-hasright-f.md#hasright-1) | Checks whether the application has the permission to access the device.Checks whether the user, for example, the application or system, has the device access permissions. The value ** true** is returned if the user has the device access permissions; the value **false** is returned otherwise. |
| [openAccessory](arkts-basicservices-usbmanager-openaccessory-f.md#openaccessory-1) | Obtains the accessory handle and opens the accessory file descriptor. Then, the host can communicate with the accessory through the **read** and **write** APIs provided by Core File Kit.You need to call [usbManager.getAccessoryList](arkts-basicservices-usbmanager-getaccessorylist-f.md#getaccessorylist-1) to obtain the accessory list and use [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) as a parameter. |
| [releaseInterface](arkts-basicservices-usbmanager-releaseinterface-f.md#releaseinterface-1) | Releases the claimed communication interface. |
| [removeRight](arkts-basicservices-usbmanager-removeright-f.md#removeright-1) | Removes the device access permission for the application. System applications are granted the device access permission by default, and calling this API will not revoke the permission. |
| [requestAccessoryRight](arkts-basicservices-usbmanager-requestaccessoryright-f.md#requestaccessoryright-1) | Requests the permission to access a USB accessory for a specified application. This API uses a promise to return the result.You need to call [usbManager.getAccessoryList](arkts-basicservices-usbmanager-getaccessorylist-f.md#getaccessorylist-1) to obtain the accessory list and use [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) as a parameter. |
| [requestRight](arkts-basicservices-usbmanager-requestright-f.md#requestright-1) | Requests the temporary device access permission for the application. This API uses a promise to return the result.System applications are granted the device access permission by default, and you do not need to apply for the permission separately. |
| [resetUsbDevice](arkts-basicservices-usbmanager-resetusbdevice-f.md#resetusbdevice-1) | Resets a USB peripheral. |
| [setConfiguration](arkts-basicservices-usbmanager-setconfiguration-f.md#setconfiguration-1) | Sets the device configuration. |
| [setInterface](arkts-basicservices-usbmanager-setinterface-f.md#setinterface-1) | Sets a USB interface. |
| [usbCancelTransfer](arkts-basicservices-usbmanager-usbcanceltransfer-f.md#usbcanceltransfer-1) | Cancels an asynchronous USB data transfer request. |
| [usbControlTransfer](arkts-basicservices-usbmanager-usbcontroltransfer-f.md#usbcontroltransfer-1) | Performs control transfer. This API uses a promise to return the result. |
| [usbSubmitTransfer](arkts-basicservices-usbmanager-usbsubmittransfer-f.md#usbsubmittransfer-1) | Requests a USB data transfer. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addAccessoryRight](arkts-basicservices-usbmanager-addaccessoryright-f-sys.md#addaccessoryright-1) | Adds the permission to applications for accessing USB accessories.[usbManager.requestAccessoryRight]{(@link usbManager.requestAccessoryRight)} triggers a dialog box to request user authorization. **addAccessoryRight** does not trigger a dialog box but directly adds the device access permission for the application. |
| [addDeviceAccessRight](arkts-basicservices-usbmanager-adddeviceaccessright-f-sys.md#adddeviceaccessright-1) | Adds the device access permission for the application. System applications are granted the device access permission by default, and calling this API will not revoke the permission.[usbManager.requestRight]{(@link usbManager.requestRight)} triggers a dialog box to request for user authorization, whereas addDeviceAccessRight adds the access permission directly without displaying a dialog box. |
| [getCurrentFunctions](arkts-basicservices-usbmanager-getcurrentfunctions-f-sys.md#getcurrentfunctions-1) | Obtains the numeric mask combination for the USB function list in Device mode. When the developer mode is disabled,**undefined** may be returned if no device is connected. Check whether the return value of the API is empty. |
| [getDeviceFunctions](arkts-basicservices-usbmanager-getdevicefunctions-f-sys.md#getdevicefunctions-1) | Obtains the numeric mask combination for the USB function list in Device mode. When the developer mode is disabled,**undefined** may be returned if no device is connected. Check whether the return value of the API is empty. |
| [getFunctionsFromString](arkts-basicservices-usbmanager-getfunctionsfromstring-f-sys.md#getfunctionsfromstring-1) | Converts the USB function list in the string format to a numeric mask in Device mode. |
| [getPortList](arkts-basicservices-usbmanager-getportlist-f-sys.md#getportlist-1) | Obtains the list of all physical USB ports. When the developer mode is disabled, **undefined** may be returned if no device is connected. Check whether the return value of the API is empty. |
| [getPortSupportModes](arkts-basicservices-usbmanager-getportsupportmodes-f-sys.md#getportsupportmodes-1) | Obtains the mask combination for the supported mode list of a given USB port. |
| [getPorts](arkts-basicservices-usbmanager-getports-f-sys.md#getports-1) | Obtains the list of all physical USB ports. When the developer mode is disabled, **undefined** may be returned if no device is connected. Check whether the return value of the API is empty. |
| [getStringFromFunctions](arkts-basicservices-usbmanager-getstringfromfunctions-f-sys.md#getstringfromfunctions-1) | Converts the USB function list in the numeric mask format to a string in Device mode. |
| [getSupportedModes](arkts-basicservices-usbmanager-getsupportedmodes-f-sys.md#getsupportedmodes-1) | Obtains the mask combination for the supported mode list of a given USB port. |
| [setCurrentFunctions](arkts-basicservices-usbmanager-setcurrentfunctions-f-sys.md#setcurrentfunctions-1) | Sets the current USB function list in Device mode. This API uses a promise to return the result. |
| [setDeviceFunctions](arkts-basicservices-usbmanager-setdevicefunctions-f-sys.md#setdevicefunctions-1) | Sets the current USB function list in Device mode. This API uses a promise to return the result. |
| [setPortRoleTypes](arkts-basicservices-usbmanager-setportroletypes-f-sys.md#setportroletypes-1) | Sets the role types supported by a specified port, which can be **powerRole** (for charging) and **dataRole** (for data transfer). This API uses a promise to return the result. |
| [setPortRoles](arkts-basicservices-usbmanager-setportroles-f-sys.md#setportroles-1) | Sets the role types supported by a specified port, which can be **powerRole** (for charging) and **dataRole** (for data transfer). This API uses a promise to return the result. |
| [usbFunctionsFromString](arkts-basicservices-usbmanager-usbfunctionsfromstring-f-sys.md#usbfunctionsfromstring-1) | Converts the USB function list in the string format to a numeric mask in Device mode. |
| [usbFunctionsToString](arkts-basicservices-usbmanager-usbfunctionstostring-f-sys.md#usbfunctionstostring-1) | Converts the USB function list in the numeric mask format to a string in Device mode. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [SubmitTransferCallback](arkts-basicservices-usbmanager-submittransfercallback-i.md) | Transfers USB data packets in an asynchronous manner. |
| [USBAccessory](arkts-basicservices-usbmanager-usbaccessory-i.md) | Describes the USB accessory information. |
| [USBAccessoryHandle](arkts-basicservices-usbmanager-usbaccessoryhandle-i.md) | Describes the USB accessory handle. |
| [USBConfiguration](arkts-basicservices-usbmanager-usbconfiguration-i.md) | Represents the USB configuration. One [USBDevice](arkts-basicservices-usbmanager-usbdevice-i.md) can contain multiple **USBConfig** instances. |
| [USBControlParams](arkts-basicservices-usbmanager-usbcontrolparams-i.md) | Represents control transfer parameters. |
| [USBDevice](arkts-basicservices-usbmanager-usbdevice-i.md) | Represents the USB device information. |
| [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Represents a USB device pipe, which is used to determine a USB device. |
| [USBDeviceRequestParams](arkts-basicservices-usbmanager-usbdevicerequestparams-i.md) | Represents control transfer parameters. |
| [USBEndpoint](arkts-basicservices-usbmanager-usbendpoint-i.md) | Represents the USB endpoint from which data is sent or received. You can obtain the USB endpoint through [USBInterface](arkts-basicservices-usbmanager-usbinterface-i.md). |
| [USBInterface](arkts-basicservices-usbmanager-usbinterface-i.md) | Represents a USB interface. One [USBConfiguration](arkts-basicservices-usbmanager-usbconfiguration-i.md) object can contain multiple **USBInterface** instances, each providing a specific function. |
| [UsbDataTransferParams](arkts-basicservices-usbmanager-usbdatatransferparams-i.md) | As a USB data transfer interface, it is required for a client to initiate a transfer request. |
| [UsbIsoPacketDescriptor](arkts-basicservices-usbmanager-usbisopacketdescriptor-i.md) | Describes packet information returned in real time by the transfer callback. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [USBPort](arkts-basicservices-usbmanager-usbport-i-sys.md) | Represents a USB port. |
| [USBPortStatus](arkts-basicservices-usbmanager-usbportstatus-i-sys.md) | Enumerates USB port roles. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [USBControlRequestType](arkts-basicservices-usbmanager-usbcontrolrequesttype-e.md) | Enumerates control request types. |
| [USBRequestDirection](arkts-basicservices-usbmanager-usbrequestdirection-e.md) | Enumerates request directions. |
| [USBRequestTargetType](arkts-basicservices-usbmanager-usbrequesttargettype-e.md) | Enumerates request target types. |
| [UsbEndpointTransferType](arkts-basicservices-usbmanager-usbendpointtransfertype-e.md) | Enumerates USB transfer types. |
| [UsbTransferFlags](arkts-basicservices-usbmanager-usbtransferflags-e.md) | Enumerates USB transfer flags. |
| [UsbTransferStatus](arkts-basicservices-usbmanager-usbtransferstatus-e.md) | Enumerates the status code returned after data processing is complete. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DataRoleType](arkts-basicservices-usbmanager-dataroletype-e-sys.md) | Enumerates data role types. |
| [FunctionType](arkts-basicservices-usbmanager-functiontype-e-sys.md) | Enumerates USB device function types. |
| [PortModeType](arkts-basicservices-usbmanager-portmodetype-e-sys.md) | Enumerates USB port mode types. |
| [PowerRoleType](arkts-basicservices-usbmanager-powerroletype-e-sys.md) | Enumerates power role types. |
<!--DelEnd-->

