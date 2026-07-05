# SerialConfigs

串口通信配置

**起始版本：** 26.0.0

**系统能力：** SystemCapability.BusManager.Serial

## 导入模块

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

## baudRate

```TypeScript
baudRate?: int
```

波特率 取值限定为整数。 取值约束:标准波特率。 <br>单位:bps。 <br>默认值:115200。

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## rtscts

```TypeScript
rtscts?: boolean
```

是否开启硬件自动流控 <br>默认值:false。

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## stopBits

```TypeScript
stopBits?: StopBits
```

停止位 <br>默认值:ONE。

**类型：** StopBits

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## xon

```TypeScript
xon?: boolean
```

是否启用XON软件流控发送 <br>默认值:false。

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## parity

```TypeScript
parity?: Parity
```

校验位 <br>默认值:NONE。

**类型：** Parity

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## dataBits

```TypeScript
dataBits?: DataBits
```

数据位 <br>默认值:EIGHT。

**类型：** DataBits

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## xany

```TypeScript
xany?: boolean
```

是否启用XANY软件流控 <br>默认值:false。

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

## xoff

```TypeScript
xoff?: boolean
```

是否启用XOFF软件流控接收 <br>默认值:false。

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

