# InvokeResult

Encapsulates the success or failure status of function invocation.

**起始版本：** 26.1.0

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { functionManager } from '@kit.AbilityKit';
```

## data

```TypeScript
data?: any
```

The returned data on success. The type can be any JSON value. Only present when {@link InvokeResult.success } is true.

**类型：** any

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## success

```TypeScript
success: boolean
```

Indicates whether the invocation was successful (at business logic level). true: Invocation succeeded, {@link InvokeResult.data } contains the returned data. false: Invocation failed, {@link InvokeResult.errorCode } and {@link InvokeResult.errorMsg } contain error information.

**类型：** boolean

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## errorCode

```TypeScript
errorCode?: number
```

The error code on failure (numeric). Only present when {@link InvokeResult.success } is false.

**类型：** number

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## errorMsg

```TypeScript
errorMsg?: string
```

The error description on failure. Only present when {@link InvokeResult.success } is false.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

