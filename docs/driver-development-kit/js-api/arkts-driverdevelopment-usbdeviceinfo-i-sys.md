# USBDeviceInfo (System API)

Defines detailed information about the USB device. It is inherited from [DeviceInfo](arkts-driverdevelopment-deviceinfo-i-sys.md).

**Inheritance/Implementation:** USBDeviceInfo extends [DeviceInfo](arkts-driverdevelopment-deviceinfo-i-sys.md)

**Since:** 12

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
```

## interfaceDescList

```TypeScript
interfaceDescList: Array<Readonly<USBInterfaceDesc>>
```

List of interface descriptors of the USB device.

**Type:** Array<Readonly<USBInterfaceDesc>>

**Since:** 12

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

## productId

```TypeScript
productId: number
```

Product ID of the USB device.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

## vendorId

```TypeScript
vendorId: number
```

Vendor ID of the USB device.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

