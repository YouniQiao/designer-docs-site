# UsbDataTransferParams

As a USB data transfer interface, it is required for a client to initiate a transfer request.

**Since:** 18

<!--Device-usbManager-interface UsbDataTransferParams--><!--Device-usbManager-interface UsbDataTransferParams-End-->

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## buffer

```TypeScript
buffer: Uint8Array
```

Buffer, which is used to store data for read or write requests.

**Type:** Uint8Array

**Since:** 18

<!--Device-UsbDataTransferParams-buffer: Uint8Array--><!--Device-UsbDataTransferParams-buffer: Uint8Array-End-->

**System capability:** SystemCapability.USB.USBManager

## callback

```TypeScript
callback: AsyncCallback<SubmitTransferCallback>
```

Information returned by the callback.

**Type:** AsyncCallback<SubmitTransferCallback>

**Since:** 18

<!--Device-UsbDataTransferParams-callback: AsyncCallback<SubmitTransferCallback>--><!--Device-UsbDataTransferParams-callback: AsyncCallback<SubmitTransferCallback>-End-->

**System capability:** SystemCapability.USB.USBManager

## devPipe

```TypeScript
devPipe: USBDevicePipe
```

USB device pipe, which is used to determine the bus number and device address. You need to call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1)to obtain its value.

**Type:** USBDevicePipe

**Since:** 18

<!--Device-UsbDataTransferParams-devPipe: USBDevicePipe--><!--Device-UsbDataTransferParams-devPipe: USBDevicePipe-End-->

**System capability:** SystemCapability.USB.USBManager

## endpoint

```TypeScript
endpoint: number
```

Endpoint address, which is a positive integer.

**Type:** number

**Since:** 18

<!--Device-UsbDataTransferParams-endpoint: int--><!--Device-UsbDataTransferParams-endpoint: int-End-->

**System capability:** SystemCapability.USB.USBManager

## flags

```TypeScript
flags: UsbTransferFlags
```

USB transfer flag.

**Type:** UsbTransferFlags

**Since:** 18

<!--Device-UsbDataTransferParams-flags: UsbTransferFlags--><!--Device-UsbDataTransferParams-flags: UsbTransferFlags-End-->

**System capability:** SystemCapability.USB.USBManager

## isoPacketCount

```TypeScript
isoPacketCount: number
```

Number of data packets during real-time transfer, used only for I/Os with real-time transfer endpoints. The value must be a non-negative number.

**Type:** number

**Since:** 18

<!--Device-UsbDataTransferParams-isoPacketCount: int--><!--Device-UsbDataTransferParams-isoPacketCount: int-End-->

**System capability:** SystemCapability.USB.USBManager

## length

```TypeScript
length: number
```

Length of the data buffer.Unit: bytes. The value must be a non-negative number (expected length).

**Type:** number

**Since:** 18

<!--Device-UsbDataTransferParams-length: int--><!--Device-UsbDataTransferParams-length: int-End-->

**System capability:** SystemCapability.USB.USBManager

## timeout

```TypeScript
timeout: number
```

Timeout duration.Unit: milliseconds.

**Type:** number

**Since:** 18

<!--Device-UsbDataTransferParams-timeout: int--><!--Device-UsbDataTransferParams-timeout: int-End-->

**System capability:** SystemCapability.USB.USBManager

## type

```TypeScript
type: UsbEndpointTransferType
```

Transfer type.

**Type:** UsbEndpointTransferType

**Since:** 18

<!--Device-UsbDataTransferParams-type: UsbEndpointTransferType--><!--Device-UsbDataTransferParams-type: UsbEndpointTransferType-End-->

**System capability:** SystemCapability.USB.USBManager

## userData

```TypeScript
userData: Uint8Array
```

User data.

**Type:** Uint8Array

**Since:** 18

<!--Device-UsbDataTransferParams-userData: Uint8Array--><!--Device-UsbDataTransferParams-userData: Uint8Array-End-->

**System capability:** SystemCapability.USB.USBManager

