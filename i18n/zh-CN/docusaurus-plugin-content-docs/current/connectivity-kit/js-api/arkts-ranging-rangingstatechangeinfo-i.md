# RangingStateChangeInfo

Describes the ranging state change information.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

## 导入模块

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

## cause

```TypeScript
cause: RangingStoppedCause
```

Cause of ranging stop.

**类型：** RangingStoppedCause

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

## handle

```TypeScript
handle?: int
```

Indicates the handle number of ranging monitoring. The value should be an integer.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

## state

```TypeScript
state: RangingState
```

Ranging state.

**类型：** RangingState

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

## deviceId

```TypeScript
deviceId?: string
```

Address of the ranging device.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

