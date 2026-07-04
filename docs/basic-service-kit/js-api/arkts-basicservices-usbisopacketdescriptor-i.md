# UsbIsoPacketDescriptor

Describes packet information returned in real time by the transfer callback.

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## actualLength

```TypeScript
actualLength: number
```

Actual length of the read or written data.Unit: bytes.

**Type:** number

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## length

```TypeScript
length: number
```

Expected length of the read or written data.Unit: bytes.

**Type:** number

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## status

```TypeScript
status: UsbTransferStatus
```

Status returned by callback.

**Type:** UsbTransferStatus

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

