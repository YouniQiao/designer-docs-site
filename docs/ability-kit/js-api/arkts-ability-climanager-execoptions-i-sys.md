# ExecOptions (System API)

Tool execution options.

**Since:** 26.0.0

<!--Device-cliManager-interface ExecOptions--><!--Device-cliManager-interface ExecOptions-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cliManager } from '@kit.AbilityKit';
```

## background

```TypeScript
background?: boolean
```

Indicates whether the tool is executed in the background

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ExecOptions-background?: boolean--><!--Device-ExecOptions-background?: boolean-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## timeout

```TypeScript
timeout?: number
```

Indicates the maximum execution time of the tool, in seconds.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ExecOptions-timeout?: long--><!--Device-ExecOptions-timeout?: long-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## yieldMs

```TypeScript
yieldMs?: number
```

Indicates the foreground waiting timeout in milliseconds.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ExecOptions-yieldMs?: long--><!--Device-ExecOptions-yieldMs?: long-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

