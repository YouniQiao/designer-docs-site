# USBConfiguration

USB配置，一个[USBDevice]usbManager.USBDevice中可以含有多个配置。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## 导入模块

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## interfaces

```TypeScript
interfaces: Array<USBInterface>
```

配置支持的接口属性。

**类型：** Array<USBInterface>

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## isSelfPowered

```TypeScript
isSelfPowered: boolean
```

检查当前配置是否支持独立电源。true表示支持，false表示不支持。

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

配置的名称，可以为空。

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## attributes

```TypeScript
attributes: int
```

配置的属性。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## id

```TypeScript
id: int
```

配置的唯一标识。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## maxPower

```TypeScript
maxPower: int
```

最大功耗。（单位：毫安）。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## isRemoteWakeup

```TypeScript
isRemoteWakeup: boolean
```

检查当前配置是否支持远程唤醒。true表示支持，false表示不支持。

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

