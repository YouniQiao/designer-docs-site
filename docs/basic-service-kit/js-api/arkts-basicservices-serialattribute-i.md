# SerialAttribute

Represents the configuration parameters of a serial port.

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## Modules to Import

```TypeScript
import { serialManager } from '@ohos.usbManager.serial';
```

## baudRate

```TypeScript
baudRate: BaudRates
```

Baud rate.

**Type:** BaudRates

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## dataBits

```TypeScript
dataBits?: DataBits
```

Data bits. The default value is **8**.

**Type:** DataBits

**Default:** DATABIT_8

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## parity

```TypeScript
parity?: Parity
```

Parity check. The default value is **None**, indicating that no parity check is performed.

**Type:** Parity

**Default:** NONE

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## stopBits

```TypeScript
stopBits?: StopBits
```

Stop bits. The default value is **1**.

**Type:** StopBits

**Default:** STOPBIT_1

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

