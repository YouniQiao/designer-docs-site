# SubmitTransferCallback

Transfers USB data packets in an asynchronous manner.

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

## isoPacketDescs

```TypeScript
isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>
```

Packet information transferred in real time.

**Type:** Array<Readonly<UsbIsoPacketDescriptor>>

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## status

```TypeScript
status: UsbTransferStatus
```

Status after reading or writing is complete.

**Type:** UsbTransferStatus

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

