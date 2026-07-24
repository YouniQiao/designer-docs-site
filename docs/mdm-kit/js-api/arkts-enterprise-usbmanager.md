# @ohos.enterprise.usbManager

The **usbManager** module provides APIs for USB management.
> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../mdm/mdm-kit-guide.md).  
>  
> The global restriction policy is provided by **restrictions**. To disable USB globally, see  
> [@ohos.enterprise.restrictions (restriction policy)](arkts-enterprise-restrictions.md).

**Since:** 10

<!--Device-unnamed-declare namespace usbManager--><!--Device-unnamed-declare namespace usbManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedUsbDevices](arkts-mdm-usbmanager-addallowedusbdevices-f.md#addallowedusbdevices) | Adds allowed USB devices.  A policy conflict is reported when this API is called in the following scenarios:  1. The USB capability of the device or the USB-to-Serial capability has been disabled using the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy) API.2. The USB storage device access policy has been disabled using the [setUsbStorageDeviceAccessPolicy](arkts-mdm-usbmanager-setusbstoragedeviceaccesspolicy-f.md#setusbstoragedeviceaccesspolicy) API.3. Disallowed USB device types have been added using the [addDisallowedUsbDevices](arkts-mdm-usbmanager-adddisallowedusbdevices-f.md#adddisallowedusbdevices) API. |
| [addDisallowedPermissiveUsbDevices](arkts-mdm-usbmanager-adddisallowedpermissiveusbdevices-f.md#adddisallowedpermissiveusbdevices) | Adds disallowed USB devices via an array of {@link PermissiveUsbDeviceType}. |
| [addDisallowedUsbDevices](arkts-mdm-usbmanager-adddisallowedusbdevices-f.md#adddisallowedusbdevices) | Adds disallowed USB device types.  A policy conflict is reported when this API is called in the following scenarios:  1. The USB capability of the device has been disabled using the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy) API.2. The available USB devices have been added through [addAllowedUsbDevices](arkts-mdm-usbmanager-addallowedusbdevices-f.md#addallowedusbdevices).3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount](arkts-mdm-restrictions-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount) API. |
| [getAllowedUsbDevices](arkts-mdm-usbmanager-getallowedusbdevices-f.md#getallowedusbdevices) | Obtains allowed USB devices. |
| [getDisallowedPermissiveUsbDevices](arkts-mdm-usbmanager-getdisallowedpermissiveusbdevices-f.md#getdisallowedpermissiveusbdevices) | Gets the list of disallowed USB devices. |
| [getDisallowedUsbDevices](arkts-mdm-usbmanager-getdisallowedusbdevices-f.md#getdisallowedusbdevices) | Obtains the disallowed USB device types. |
| [getUsbStorageDeviceAccessPolicy](arkts-mdm-usbmanager-getusbstoragedeviceaccesspolicy-f.md#getusbstoragedeviceaccesspolicy) | Obtains the access policy of the USB storage device. |
| [removeAllowedUsbDevices](arkts-mdm-usbmanager-removeallowedusbdevices-f.md#removeallowedusbdevices) | Removes allowed USB devices. |
| [removeDisallowedPermissiveUsbDevices](arkts-mdm-usbmanager-removedisallowedpermissiveusbdevices-f.md#removedisallowedpermissiveusbdevices) | Removes disallowed USB devices via an array of {@link PermissiveUsbDeviceType}. |
| [removeDisallowedUsbDevices](arkts-mdm-usbmanager-removedisallowedusbdevices-f.md#removedisallowedusbdevices) | Removes the disallowed USB device types. |
| [setUsbStorageDeviceAccessPolicy](arkts-mdm-usbmanager-setusbstoragedeviceaccesspolicy-f.md#setusbstoragedeviceaccesspolicy) | Sets the access policy of the USB storage device. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableUsb](arkts-mdm-usbmanager-disableusb-f-sys.md#disableusb) | Enables or disables USB. |
| [isUsbDisabled](arkts-mdm-usbmanager-isusbdisabled-f-sys.md#isusbdisabled) | Queries whether the USB is disabled. |
| [setUsbPolicy](arkts-mdm-usbmanager-setusbpolicy-f-sys.md#setusbpolicy) | Sets the USB read/write policy. This API uses an asynchronous callback to return the result. |
| [setUsbPolicy](arkts-mdm-usbmanager-setusbpolicy-f-sys.md#setusbpolicy-1) | Sets the USB read/write policy. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [PermissiveUsbDeviceType](arkts-mdm-usbmanager-permissiveusbdevicetype-i.md) | Permissive USB device Type. |
| [UsbDeviceId](arkts-mdm-usbmanager-usbdeviceid-i.md) | Represents the USB device identity information. |
| [UsbDeviceType](arkts-mdm-usbmanager-usbdevicetype-i.md) | Represents the USB device type information. |

### Enums

| Name | Description |
| --- | --- |
| [Descriptor](arkts-mdm-usbmanager-descriptor-e.md) | Enumerates USB descriptors. |
| [UsbPolicy](arkts-mdm-usbmanager-usbpolicy-e.md) | Enumerates the USB access policies. |

