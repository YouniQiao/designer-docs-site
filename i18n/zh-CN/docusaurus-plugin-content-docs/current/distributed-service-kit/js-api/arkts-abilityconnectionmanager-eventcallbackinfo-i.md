# EventCallbackInfo

Defines the event callback information.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## 导入模块

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## msg

```TypeScript
msg?: string
```

Received message.

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## image

```TypeScript
image?: image.PixelMap
```

Received image.

**类型：** image.PixelMap

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

## reason

```TypeScript
reason?: DisconnectReason
```

Disconnection reason.

**类型：** DisconnectReason

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## data

```TypeScript
data?: ArrayBuffer
```

Received byte stream.

**类型：** ArrayBuffer

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## sessionId

```TypeScript
sessionId: int
```

Collaboration session ID.

**类型：** int

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

