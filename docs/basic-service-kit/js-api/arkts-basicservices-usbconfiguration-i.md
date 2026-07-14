# USBConfiguration

Represents the USB configuration. One [USBDevice](arkts-basicservices-usbdevice-i.md) can contain multiple **USBConfig** instances.

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## attributes

```TypeScript
attributes: number
```

Configuration attributes.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## id

```TypeScript
id: number
```

Unique ID of the USB configuration.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## interfaces

```TypeScript
interfaces: Array<USBInterface>
```

Supported interface attributes.

**Type:** Array<USBInterface>

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## isRemoteWakeup

```TypeScript
isRemoteWakeup: boolean
```

Whether remote wakeup is supported. The value **true** indicates that the remote wakeup is supported, and **false ** indicates the opposite.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## isSelfPowered

```TypeScript
isSelfPowered: boolean
```

Whether an independent power supply is supported. The value **true** indicates that an independent power supply is supported, and **false** indicates the opposite.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## maxPower

```TypeScript
maxPower: number
```

Maximum power consumption.Unit: mA.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

Configuration name, which can be left empty.

**Type:** string

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

