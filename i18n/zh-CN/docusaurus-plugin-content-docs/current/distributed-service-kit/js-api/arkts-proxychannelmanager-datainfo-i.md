# DataInfo

存放接收的数据信息，包括通道Id和数据。

**起始版本：** 20

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## 导入模块

```TypeScript
import { proxyChannelManager } from '@kit.DistributedServiceKit';
```

## data

```TypeScript
data: ArrayBuffer
```

接收到的字节数据。

**类型：** ArrayBuffer

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## channelId

```TypeScript
channelId: int
```

代理通道的channelId。

**类型：** int

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

