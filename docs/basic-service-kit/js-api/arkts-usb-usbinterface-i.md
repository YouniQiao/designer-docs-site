# USBInterface

一个[USBConfig]usb.USBConfig中可以含有多个USBInterface，每个USBInterface提供一个功能。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## endpoints

```TypeScript
endpoints: Array<USBEndpoint>
```

当前接口所包含的端点。

**Type:** Array<USBEndpoint>

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface.endpoints

**System capability:** SystemCapability.USB.USBManager

## protocol

```TypeScript
protocol: number
```

接口的协议。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface.protocol

**System capability:** SystemCapability.USB.USBManager

## subClass

```TypeScript
subClass: number
```

设备子类。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface.subClass

**System capability:** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

接口名称。

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface.name

**System capability:** SystemCapability.USB.USBManager

## id

```TypeScript
id: number
```

接口的唯一标识。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface.id

**System capability:** SystemCapability.USB.USBManager

## alternateSetting

```TypeScript
alternateSetting: number
```

在同一个接口中的多个描述符中进行切换设置。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface.alternateSetting

**System capability:** SystemCapability.USB.USBManager

## clazz

```TypeScript
clazz: number
```

设备类型。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager.USBInterface.clazz

**System capability:** SystemCapability.USB.USBManager

