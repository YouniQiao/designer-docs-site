# USBDriverInfo (System API)

Defines detailed information about the USB device driver. It is inherited from [DriverInfo](arkts-driverdevelopment-driverinfo-i-sys.md#driverinfo).

**Inheritance/Implementation:** USBDriverInfo extends [DriverInfo](arkts-driverdevelopment-driverinfo-i-sys.md#driverinfo)

**Since:** 12

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { deviceManager } from '@ohos.driver.deviceManager';
```

## productIdList

```TypeScript
productIdList: Array<number>
```

Product ID list of the USB devices supported by the driver.

**Type:** Array<number>

**Since:** 12

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

## vendorIdList

```TypeScript
vendorIdList: Array<number>
```

Vendor ID list of the USB devices supported by the driver.

**Type:** Array<number>

**Since:** 12

**System capability:** SystemCapability.Driver.ExternalDevice

**System API:** This is a system API.

