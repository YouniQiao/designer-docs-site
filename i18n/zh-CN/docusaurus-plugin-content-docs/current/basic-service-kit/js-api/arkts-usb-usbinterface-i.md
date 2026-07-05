# USBInterface

一个[USBConfig]usb.USBConfig中可以含有多个USBInterface，每个USBInterface提供一个功能。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface

**系统能力：** SystemCapability.USB.USBManager

## 导入模块

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## endpoints

```TypeScript
endpoints: Array<USBEndpoint>
```

当前接口所包含的端点。

**类型：** Array<USBEndpoint>

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface.endpoints

**系统能力：** SystemCapability.USB.USBManager

## protocol

```TypeScript
protocol: number
```

接口的协议。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface.protocol

**系统能力：** SystemCapability.USB.USBManager

## subClass

```TypeScript
subClass: number
```

设备子类。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface.subClass

**系统能力：** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

接口名称。

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface.name

**系统能力：** SystemCapability.USB.USBManager

## id

```TypeScript
id: number
```

接口的唯一标识。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface.id

**系统能力：** SystemCapability.USB.USBManager

## alternateSetting

```TypeScript
alternateSetting: number
```

在同一个接口中的多个描述符中进行切换设置。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface.alternateSetting

**系统能力：** SystemCapability.USB.USBManager

## clazz

```TypeScript
clazz: number
```

设备类型。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.usbManager:usbManager.USBInterface.clazz

**系统能力：** SystemCapability.USB.USBManager

