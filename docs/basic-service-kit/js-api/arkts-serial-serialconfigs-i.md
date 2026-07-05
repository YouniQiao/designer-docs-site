# SerialConfigs

串口通信配置

**Since:** 26.0.0

**System capability:** SystemCapability.BusManager.Serial

## Modules to Import

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

## baudRate

```TypeScript
baudRate?: int
```

波特率 取值限定为整数。 取值约束:标准波特率。 <br>单位:bps。 <br>默认值:115200。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

## rtscts

```TypeScript
rtscts?: boolean
```

是否开启硬件自动流控 <br>默认值:false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

## stopBits

```TypeScript
stopBits?: StopBits
```

停止位 <br>默认值:ONE。

**Type:** StopBits

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

## xon

```TypeScript
xon?: boolean
```

是否启用XON软件流控发送 <br>默认值:false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

## parity

```TypeScript
parity?: Parity
```

校验位 <br>默认值:NONE。

**Type:** Parity

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

## dataBits

```TypeScript
dataBits?: DataBits
```

数据位 <br>默认值:EIGHT。

**Type:** DataBits

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

## xany

```TypeScript
xany?: boolean
```

是否启用XANY软件流控 <br>默认值:false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

## xoff

```TypeScript
xoff?: boolean
```

是否启用XOFF软件流控接收 <br>默认值:false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

