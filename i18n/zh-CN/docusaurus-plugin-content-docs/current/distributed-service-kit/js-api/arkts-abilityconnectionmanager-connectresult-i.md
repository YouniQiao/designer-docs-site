# ConnectResult

Defines the connection result.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## 导入模块

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## reason

```TypeScript
reason?: string
```

Connection rejection reason.

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## isConnected

```TypeScript
isConnected: boolean
```

Whether the connection is successful. The value **true** indicates that the connection is successful, and the value **false** indicates the opposite.

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## errorCode

```TypeScript
errorCode?: ConnectErrorCode
```

Connection error code.

**类型：** ConnectErrorCode

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

