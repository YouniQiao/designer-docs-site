# UsbIsoPacketDescriptor

实时传输模式回调返回的分包信息。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## actualLength

```TypeScript
actualLength: int
```

读写操作的实际长度值。（单位：字节）。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## length

```TypeScript
length: int
```

读写操作的期望长度值。（单位：字节）。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## status

```TypeScript
status: UsbTransferStatus
```

实时传输分包的状态码。

**Type:** UsbTransferStatus

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

