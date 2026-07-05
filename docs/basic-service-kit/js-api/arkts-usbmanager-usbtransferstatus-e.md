# UsbTransferStatus

```TypeScript
export enum UsbTransferStatus
```

Enumerates the status code returned after data processing is complete.

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## TRANSFER_COMPLETED

```TypeScript
TRANSFER_COMPLETED = 0
```

传输完成。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## TRANSFER_ERROR

```TypeScript
TRANSFER_ERROR = 1
```

传输失败。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## TRANSFER_TIMED_OUT

```TypeScript
TRANSFER_TIMED_OUT = 2
```

传输超时。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## TRANSFER_CANCELED

```TypeScript
TRANSFER_CANCELED = 3
```

传输已被取消。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## TRANSFER_STALL

```TypeScript
TRANSFER_STALL = 4
```

检测到暂停（批量/中断端点）。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## TRANSFER_NO_DEVICE

```TypeScript
TRANSFER_NO_DEVICE = 5
```

设备已断开。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

## TRANSFER_OVERFLOW

```TypeScript
TRANSFER_OVERFLOW = 6
```

设备发送的数据比请求的多。

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

