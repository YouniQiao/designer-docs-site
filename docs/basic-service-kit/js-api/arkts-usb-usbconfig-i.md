# USBConfig

USB配置，一个[USBDevice]usb.USBDevice中可以含有多个配置。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## interfaces

```TypeScript
interfaces: Array<USBInterface>
```

配置支持的接口属性。

**Type:** Array<USBInterface>

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration.interfaces

**System capability:** SystemCapability.USB.USBManager

## isSelfPowered

```TypeScript
isSelfPowered: boolean
```

检查当前配置是否支持独立电源。

**Type:** boolean

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration.isSelfPowered

**System capability:** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

配置的名称，可以为空。

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration.name

**System capability:** SystemCapability.USB.USBManager

## attributes

```TypeScript
attributes: number
```

配置的属性。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration.attributes

**System capability:** SystemCapability.USB.USBManager

## id

```TypeScript
id: number
```

配置的唯一标识。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration.id

**System capability:** SystemCapability.USB.USBManager

## maxPower

```TypeScript
maxPower: number
```

最大功耗，以毫安为单位。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration.maxPower

**System capability:** SystemCapability.USB.USBManager

## isRemoteWakeup

```TypeScript
isRemoteWakeup: boolean
```

检查当前配置是否支持远程唤醒。

**Type:** boolean

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBConfiguration.isRemoteWakeup

**System capability:** SystemCapability.USB.USBManager

