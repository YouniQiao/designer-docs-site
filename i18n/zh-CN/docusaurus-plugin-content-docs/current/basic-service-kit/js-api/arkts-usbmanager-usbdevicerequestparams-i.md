# USBDeviceRequestParams

控制传输参数。

**起始版本：** 12

**系统能力：** SystemCapability.USB.USBManager

## 导入模块

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## wValue

```TypeScript
wValue: int
```

请求参数。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.USB.USBManager

## wIndex

```TypeScript
wIndex: int
```

请求参数value对应的索引值。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.USB.USBManager

## data

```TypeScript
data: Uint8Array
```

用于写入或读取的缓冲区。

**类型：** Uint8Array

**起始版本：** 12

**系统能力：** SystemCapability.USB.USBManager

## wLength

```TypeScript
wLength: int
```

请求数据的长度。（单位：字节）。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.USB.USBManager

## bRequest

```TypeScript
bRequest: int
```

请求类型。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.USB.USBManager

## bmRequestType

```TypeScript
bmRequestType: int
```

请求控制类型。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.USB.USBManager

