# USBEndpoint

Represents the USB endpoint from which data is sent or received. You can obtain the USB endpoint through [USBInterface](arkts-basicservices-usbinterface-i.md#usbinterface). > **NOTE** > > The host controller schedules the endpoint based on the endpoint type. > > The transmission characteristics are determined by the type during protocol layer packaging.

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## address

```TypeScript
address: number
```

Endpoint address.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## attributes

```TypeScript
attributes: number
```

Endpoint attributes.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## direction

```TypeScript
direction: USBRequestDirection
```

Endpoint direction.

**Type:** USBRequestDirection

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## interfaceId

```TypeScript
interfaceId: number
```

Unique ID of the interface to which the endpoint belongs.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## interval

```TypeScript
interval: number
```

Endpoint interval.Unit: milliseconds.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## maxPacketSize

```TypeScript
maxPacketSize: number
```

Maximum size of data packets on the endpoint.Unit: bytes.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## number

```TypeScript
number: number
```

Endpoint number.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

## type

```TypeScript
type: number
```

Endpoint type. For details, see [UsbEndpointTransferType](arkts-basicservices-usbendpointtransfertype-e.md#usbendpointtransfertype).

**Type:** number

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

