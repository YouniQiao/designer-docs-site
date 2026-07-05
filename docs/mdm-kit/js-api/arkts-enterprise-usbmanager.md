# @ohos.enterprise.usbManager

The **usbManager** module provides APIs for USB management. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a device administrator application that is enabled. For details, see > [MDM Kit Development](../../../../mdm/mdm-kit-guide.md). > > The global restriction policy is provided by **restrictions**. To disable USB globally, see > [@ohos.enterprise.restrictions (restriction policy)](arkts-enterprise-restrictions.md#restrictions).

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.enterprise.usbManager';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedUsbDevices](arkts-mdm-addallowedusbdevices-f.md#addallowedusbdevices-1) | Adds allowed USB devices. A policy conflict is reported when this API is called in the following scenarios: 1. The USB capability of the device or the USB-to-Serial capability has been disabled using the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. 2. The USB storage device access policy has been disabled using the [setUsbStorageDeviceAccessPolicy](arkts-mdm-setusbstoragedeviceaccesspolicy-f.md#setusbstoragedeviceaccesspolicy-1) API. 3. Disallowed USB device types have been added using the [addDisallowedUsbDevices](arkts-mdm-adddisallowedusbdevices-f.md#adddisallowedusbdevices-1) API. |
| [addDisallowedPermissiveUsbDevices](arkts-mdm-adddisallowedpermissiveusbdevices-f.md#adddisallowedpermissiveusbdevices-1) | Adds disallowed USB devices via an array of {@link PermissiveUsbDeviceType}. |
| [addDisallowedUsbDevices](arkts-mdm-adddisallowedusbdevices-f.md#adddisallowedusbdevices-1) | Adds disallowed USB device types. A policy conflict is reported when this API is called in the following scenarios: 1. The USB capability of the device has been disabled using the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. 2. The available USB devices have been added through [addAllowedUsbDevices](arkts-mdm-addallowedusbdevices-f.md#addallowedusbdevices-1). 3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount](arkts-mdm-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-1) API. |
| [getAllowedUsbDevices](arkts-mdm-getallowedusbdevices-f.md#getallowedusbdevices-1) | Obtains allowed USB devices. |
| [getDisallowedPermissiveUsbDevices](arkts-mdm-getdisallowedpermissiveusbdevices-f.md#getdisallowedpermissiveusbdevices-1) | Gets the list of disallowed USB devices. |
| [getDisallowedUsbDevices](arkts-mdm-getdisallowedusbdevices-f.md#getdisallowedusbdevices-1) | Obtains the disallowed USB device types. |
| [getUsbStorageDeviceAccessPolicy](arkts-mdm-getusbstoragedeviceaccesspolicy-f.md#getusbstoragedeviceaccesspolicy-1) | Obtains the access policy of the USB storage device. |
| [removeAllowedUsbDevices](arkts-mdm-removeallowedusbdevices-f.md#removeallowedusbdevices-1) | Removes allowed USB devices. |
| [removeDisallowedPermissiveUsbDevices](arkts-mdm-removedisallowedpermissiveusbdevices-f.md#removedisallowedpermissiveusbdevices-1) | Removes disallowed USB devices via an array of {@link PermissiveUsbDeviceType}. |
| [removeDisallowedUsbDevices](arkts-mdm-removedisallowedusbdevices-f.md#removedisallowedusbdevices-1) | Removes the disallowed USB device types. |
| [setUsbStorageDeviceAccessPolicy](arkts-mdm-setusbstoragedeviceaccesspolicy-f.md#setusbstoragedeviceaccesspolicy-1) | Sets the access policy of the USB storage device. &gt; **NOTE** &gt; &gt; Before calling the API, read and write operations on the USB storage device should be suspended to ensure &gt; operational stability and data integrity. Otherwise, unexpected exceptions may occur. A policy conflict occurs when you set the USB storage device access policy to read, write, or read-only in the following scenarios: 1. The USB capability of the device has been disabled using the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. 2. The USB storage device has been disallowed to use through [addDisallowedUsbDevices](arkts-mdm-adddisallowedusbdevices-f.md#adddisallowedusbdevices-1). 3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount](arkts-mdm-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-1) API. A policy conflict is reported if the USB storage device access policy is disabled by calling this API in the following scenarios: 1. The USB capability of the device has been disabled using the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API. 2. The available USB devices have been added through [addAllowedUsbDevices](arkts-mdm-addallowedusbdevices-f.md#addallowedusbdevices-1). 3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount](arkts-mdm-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-1) API. You can disable a USB storage device by calling this API or [addDisallowedUsbDevices](arkts-mdm-adddisallowedusbdevices-f.md#adddisallowedusbdevices-1). The latter is recommended. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableUsb](arkts-mdm-disableusb-f-sys.md#disableusb-1) | Enables or disables USB. |
| [isUsbDisabled](arkts-mdm-isusbdisabled-f-sys.md#isusbdisabled-1) | Queries whether the USB is disabled. |
| [setUsbPolicy](arkts-mdm-setusbpolicy-f-sys.md#setusbpolicy-1) | Sets the USB read/write policy. This API uses an asynchronous callback to return the result. |
| [setUsbPolicy](arkts-mdm-setusbpolicy-f-sys.md#setusbpolicy-2) | Sets the USB read/write policy. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [PermissiveUsbDeviceType](arkts-mdm-permissiveusbdevicetype-i.md) | Permissive USB device Type. |
| [UsbDeviceId](arkts-mdm-usbdeviceid-i.md) | Represents the USB device identity information. |
| [UsbDeviceType](arkts-mdm-usbdevicetype-i.md) | Represents the USB device type information. |

### Enums

| Name | Description |
| --- | --- |
| [Descriptor](arkts-mdm-descriptor-e.md) | Enumerates USB descriptors. |
| [UsbPolicy](arkts-mdm-usbpolicy-e.md) | Enumerates the USB access policies. |

