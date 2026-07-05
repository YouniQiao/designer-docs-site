# USBConfiguration

USB配置，一个[USBDevice]usbManager.USBDevice中可以含有多个配置。

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## interfaces

```TypeScript
interfaces: Array<USBInterface>
```

配置支持的接口属性。

**Type:** Array<USBInterface>

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## isSelfPowered

```TypeScript
isSelfPowered: boolean
```

检查当前配置是否支持独立电源。true表示支持，false表示不支持。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

配置的名称，可以为空。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## attributes

```TypeScript
attributes: int
```

配置的属性。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## id

```TypeScript
id: int
```

配置的唯一标识。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## maxPower

```TypeScript
maxPower: int
```

最大功耗。（单位：毫安）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## isRemoteWakeup

```TypeScript
isRemoteWakeup: boolean
```

检查当前配置是否支持远程唤醒。true表示支持，false表示不支持。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

