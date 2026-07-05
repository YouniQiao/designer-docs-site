# USBInterface

一个[USBConfiguration]usbManager.USBConfiguration中可以含有多个USBInterface，每个USBInterface提供一个功能。

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## endpoints

```TypeScript
endpoints: Array<USBEndpoint>
```

当前接口所包含的端点。

**Type:** Array<USBEndpoint>

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## protocol

```TypeScript
protocol: int
```

接口的协议。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## subClass

```TypeScript
subClass: int
```

设备子类。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## name

```TypeScript
name: string
```

接口名称。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## id

```TypeScript
id: int
```

接口的唯一标识。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## alternateSetting

```TypeScript
alternateSetting: int
```

在同一个接口中的多个描述符中进行切换设置。值的大小表示支持可选模式个数，其中0表示不支持可选模式。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## clazz

```TypeScript
clazz: int
```

设备类型。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

