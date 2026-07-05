# ConnectOptions

Connection options for the application.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## 导入模块

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## needSendStream

```TypeScript
needSendStream?: boolean
```

Send Stream Data Configuration Options. WiFi needs to be turned on.

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

## needSendData

```TypeScript
needSendData?: boolean
```

Whether to send data. The value **true** indicates that data needs to be sent, and the value **false** indicates the opposite.

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## parameters

```TypeScript
parameters?: Record<string, string>
```

Additional configuration for the connection.

**类型：** Record<string, string>

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## startOptions

```TypeScript
startOptions?: StartOptionParams
```

Application startup options.

**类型：** StartOptionParams

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## needReceiveStream

```TypeScript
needReceiveStream?: boolean
```

Receive Stream Data Configuration Options. WiFi needs to be turned on.

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

