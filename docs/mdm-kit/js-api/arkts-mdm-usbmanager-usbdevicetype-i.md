# UsbDeviceType

Represents the USB device type information.

You can obtain the list of USB devices connected to the host device through the getDevices API, and then find the type of the current device in the returned list.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

<!--Device-usbManager-export interface UsbDeviceType--><!--Device-usbManager-export interface UsbDeviceType-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## baseClass

```TypeScript
baseClass: number
```

Type code.

First, determine the type of descriptor to pass in based on this value. If the descriptor is **DEVICE**, this field takes the value of the **USBDevice.clazz** field; if the descriptor is **INTERFACE**, this field takes the value of the **USBDevice.configs.interfaces.clazz** field.

If the field value is 255 (indicating the device's type code is a vendor-defined code), calling the  
[addDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ or  
[removeDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ API to enable or disable the device will not take effect. If the field value is not defined in  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_, calling the  
[addDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ or  
[removeDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_ API to enable or disable the device will also not take effect.

**Type:** number

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Model restriction:** This API can be used only in the stage model.

<!--Device-UsbDeviceType-baseClass: number--><!--Device-UsbDeviceType-baseClass: number-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## descriptor

```TypeScript
descriptor: Descriptor
```

USB descriptor.

If the value of **USBDevice.clazz** is **0**, you need to find the value of  
**USBDevice.configs.interfaces.clazz** in the Base Class column in  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_. The Descriptor Usage column in the row where the search result is located indicates the descriptor type to be transferred. If the value of Descriptor Usage is  
**Both**, both types can be transferred. If device-level disabling is required, transfer **DEVICE**. If interface  
-level disabling is required, transfer **INTERFACE**.

If the value of **USBDevice.clazz** is **255** (indicating the device's type code is a vendor-defined code),calling the [addDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ or  
[removeDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ API to enable or disable the device will not take effect. If the value of **USBDevice.clazz** is another value, search for the value in the Base Class column of \_\_\_MD\_LINK\_DESC\_USD\_1\_\_\_. The Descriptor Usage column in the row where the search result is located indicates the descriptor type to be transferred. If the value of Descriptor Usage is **Both**, both types can be transferred. If device-level disabling is required, transfer  
**DEVICE**. If interface-level disabling is required, transfer **INTERFACE**.

**Type:** Descriptor

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Model restriction:** This API can be used only in the stage model.

<!--Device-UsbDeviceType-descriptor: Descriptor--><!--Device-UsbDeviceType-descriptor: Descriptor-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## protocol

```TypeScript
protocol: number
```

Protocol code.

First, determine the type of descriptor to pass in based on the value of baseClass. If the descriptor is  
**DEVICE**, this field takes the value of the **USBDevice.protocol** field; if the descriptor is **INTERFACE**,this field takes the value of the **USBDevice.configs.interfaces.protocol** field.

If the field value is 255 (indicating the device's protocol code is a vendor-defined code), calling the  
[addDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ or  
[removeDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ API to enable or disable the device will not take effect. If the field value is not defined in  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_, calling the  
[addDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ or  
[removeDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_ API to enable or disable the device will also not take effect.

**Type:** number

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Model restriction:** This API can be used only in the stage model.

<!--Device-UsbDeviceType-protocol: number--><!--Device-UsbDeviceType-protocol: number-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## subClass

```TypeScript
subClass: number
```

Subtype code.

First, determine the type of descriptor to pass in based on the value of baseClass. If the descriptor is  
**DEVICE**, this field takes the value of the **USBDevice.subClass** field; if the descriptor is **INTERFACE**,this field takes the value of the **USBDevice.configs.interfaces.subClass** field.

If the field value is 255 (indicating that the subtype code of the device is a vendor-defined code), calling the  
[addDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ or  
[removeDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_ API to enable or disable the device will not take effect. If the field value is not defined in  
\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_, calling the  
[addDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_3\_\_\_ or  
[removeDisallowedUsbDevices]\_\_\_JSDOC\_LINK\_DESC\_USD\_4\_\_\_ API to enable or disable the device will also not take effect.

**Type:** number

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Model restriction:** This API can be used only in the stage model.

<!--Device-UsbDeviceType-subClass: number--><!--Device-UsbDeviceType-subClass: number-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

