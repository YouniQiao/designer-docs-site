# SerialAttribute

串口的配置参数。

**起始版本：** 19

**系统能力：** SystemCapability.USB.USBManager.Serial

## 导入模块

```TypeScript
import { serialManager } from '@kit.BasicServicesKit';
```

## baudRate

```TypeScript
baudRate: BaudRates
```

串口波特率。

**类型：** BaudRates

**起始版本：** 19

**系统能力：** SystemCapability.USB.USBManager.Serial

## stopBits

```TypeScript
stopBits?: StopBits
```

串口停止位，默认值为1位。

**类型：** StopBits

**起始版本：** 19

**系统能力：** SystemCapability.USB.USBManager.Serial

## parity

```TypeScript
parity?: Parity
```

串口奇偶校验，默认值为None，无奇偶校验。

**类型：** Parity

**起始版本：** 19

**系统能力：** SystemCapability.USB.USBManager.Serial

## dataBits

```TypeScript
dataBits?: DataBits
```

串口数据位，默认值为8位。

**类型：** DataBits

**起始版本：** 19

**系统能力：** SystemCapability.USB.USBManager.Serial

