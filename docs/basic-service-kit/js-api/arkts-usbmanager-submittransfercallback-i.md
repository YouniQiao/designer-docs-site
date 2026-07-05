# SubmitTransferCallback

Usb异步传输回调。

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

## isoPacketDescs

```TypeScript
isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>
```

实时传输的分包信息。

**Type:** Array<Readonly<UsbIsoPacketDescriptor>>

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## status

```TypeScript
status: UsbTransferStatus
```

读写操作完成的状态。

**Type:** UsbTransferStatus

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

