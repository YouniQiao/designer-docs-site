# InvokeResult (System API)

Encapsulates the success or failure status of function invocation.

**Since:** 26.1.0

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { functionManager } from '@kit.AbilityKit';
```

## data

```TypeScript
data?: any
```

The returned data on success. The type can be any JSON value.
Only present when {@link InvokeResult.success } is true.

**Type:** any

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## errorCode

```TypeScript
errorCode?: number
```

The error code on failure (numeric).
Only present when {@link InvokeResult.success } is false.

**Type:** number

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## errorMsg

```TypeScript
errorMsg?: string
```

The error description on failure.
Only present when {@link InvokeResult.success } is false.

**Type:** string

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## success

```TypeScript
success: boolean
```

Indicates whether the invocation was successful (at business logic level).
true: Invocation succeeded, {@link InvokeResult.data } contains the returned data.
false: Invocation failed, {@link InvokeResult.errorCode } and {@link InvokeResult.errorMsg } contain error information.

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

