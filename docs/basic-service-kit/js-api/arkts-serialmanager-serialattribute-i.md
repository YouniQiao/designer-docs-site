# SerialAttribute

串口的配置参数。

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## Modules to Import

```TypeScript
import { serialManager } from '@kit.BasicServicesKit';
```

## baudRate

```TypeScript
baudRate: BaudRates
```

串口波特率。

**Type:** BaudRates

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## stopBits

```TypeScript
stopBits?: StopBits
```

串口停止位，默认值为1位。

**Type:** StopBits

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## parity

```TypeScript
parity?: Parity
```

串口奇偶校验，默认值为None，无奇偶校验。

**Type:** Parity

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

## dataBits

```TypeScript
dataBits?: DataBits
```

串口数据位，默认值为8位。

**Type:** DataBits

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

