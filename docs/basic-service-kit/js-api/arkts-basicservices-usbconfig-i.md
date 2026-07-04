# USBConfig

Represents the USB configuration. One [USBDevice](arkts-basicservices-usbdevice-i.md#usbdevice) can contain multiple **USBConfig** instances.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [USBConfiguration](arkts-basicservices-usbconfiguration-i.md#usbconfiguration)

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usb } from '@ohos.usb';
```

## attributes

```TypeScript
attributes: number
```

Configuration attributes.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [attributes](arkts-basicservices-usbconfiguration-i.md#attributes)

**System capability:** SystemCapability.USB.USBManager

## id

```TypeScript
id: number
```

Unique ID of the USB configuration.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [id](arkts-basicservices-usbconfiguration-i.md#id)

**System capability:** SystemCapability.USB.USBManager

## interfaces

```TypeScript
interfaces: Array<USBInterface>
```

Supported interface attributes.

**Type:** Array<USBInterface>

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [interfaces](arkts-basicservices-usbconfiguration-i.md#interfaces)

**System capability:** SystemCapability.USB.USBManager

## isRemoteWakeup

```TypeScript
isRemoteWakeup: boolean
```

Support for remote wakeup.

**Type:** boolean

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isRemoteWakeup](arkts-basicservices-usbconfiguration-i.md#isremotewakeup)

**System capability:** SystemCapability.USB.USBManager

## isSelfPowered

```TypeScript
isSelfPowered: boolean
```

Support for independent power supplies.

**Type:** boolean

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isSelfPowered](arkts-basicservices-usbconfiguration-i.md#isselfpowered)

**System capability:** SystemCapability.USB.USBManager

## maxPower

```TypeScript
maxPower: number
```

Maximum power consumption, in mA.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [maxPower](arkts-basicservices-usbconfiguration-i.md#maxpower)

**System capability:** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

Configuration name, which can be left empty.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [name](arkts-basicservices-usbconfiguration-i.md#name)

**System capability:** SystemCapability.USB.USBManager

