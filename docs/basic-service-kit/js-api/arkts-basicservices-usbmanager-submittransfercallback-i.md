# SubmitTransferCallback

Transfers USB data packets in an asynchronous manner.

**Since:** 18

<!--Device-usbManager-interface SubmitTransferCallback--><!--Device-usbManager-interface SubmitTransferCallback-End-->

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## actualLength

```TypeScript
actualLength: number
```

Actual length of the read or written data.Unit: bytes.

**Type:** number

**Since:** 18

<!--Device-SubmitTransferCallback-actualLength: int--><!--Device-SubmitTransferCallback-actualLength: int-End-->

**System capability:** SystemCapability.USB.USBManager

## isoPacketDescs

```TypeScript
isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>
```

Packet information transferred in real time.

**Type:** Array<Readonly<UsbIsoPacketDescriptor>>

**Since:** 18

<!--Device-SubmitTransferCallback-isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>--><!--Device-SubmitTransferCallback-isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>-End-->

**System capability:** SystemCapability.USB.USBManager

## status

```TypeScript
status: UsbTransferStatus
```

Status after reading or writing is complete.

**Type:** UsbTransferStatus

**Since:** 18

<!--Device-SubmitTransferCallback-status: UsbTransferStatus--><!--Device-SubmitTransferCallback-status: UsbTransferStatus-End-->

**System capability:** SystemCapability.USB.USBManager

