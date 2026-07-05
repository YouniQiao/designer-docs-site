# USBConfig

USB配置，一个[USBDevice]usb.USBDevice中可以含有多个配置。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration

**系统能力：** SystemCapability.USB.USBManager

## 导入模块

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## interfaces

```TypeScript
interfaces: Array<USBInterface>
```

配置支持的接口属性。

**类型：** Array<USBInterface>

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration.interfaces

**系统能力：** SystemCapability.USB.USBManager

## isSelfPowered

```TypeScript
isSelfPowered: boolean
```

检查当前配置是否支持独立电源。

**类型：** boolean

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration.isSelfPowered

**系统能力：** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

配置的名称，可以为空。

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration.name

**系统能力：** SystemCapability.USB.USBManager

## attributes

```TypeScript
attributes: number
```

配置的属性。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration.attributes

**系统能力：** SystemCapability.USB.USBManager

## id

```TypeScript
id: number
```

配置的唯一标识。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration.id

**系统能力：** SystemCapability.USB.USBManager

## maxPower

```TypeScript
maxPower: number
```

最大功耗，以毫安为单位。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration.maxPower

**系统能力：** SystemCapability.USB.USBManager

## isRemoteWakeup

```TypeScript
isRemoteWakeup: boolean
```

检查当前配置是否支持远程唤醒。

**类型：** boolean

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBConfiguration.isRemoteWakeup

**系统能力：** SystemCapability.USB.USBManager

