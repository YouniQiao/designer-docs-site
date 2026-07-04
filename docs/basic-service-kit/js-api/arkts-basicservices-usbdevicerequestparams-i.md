# USBDeviceRequestParams

Represents control transfer parameters.

**Since:** 12

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## bRequest

```TypeScript
bRequest: number
```

Request type.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.USB.USBManager

## bmRequestType

```TypeScript
bmRequestType: number
```

Control request type.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.USB.USBManager

## data

```TypeScript
data: Uint8Array
```

Buffer for writing or reading data.

**Type:** Uint8Array

**Since:** 12

**System capability:** SystemCapability.USB.USBManager

## wIndex

```TypeScript
wIndex: number
```

Index of the request parameter.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.USB.USBManager

## wLength

```TypeScript
wLength: number
```

Length of the requested data.Unit: bytes.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.USB.USBManager

## wValue

```TypeScript
wValue: number
```

Request parameter.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.USB.USBManager

