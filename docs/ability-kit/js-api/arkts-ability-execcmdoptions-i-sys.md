# ExecCmdOptions (System API)

Options for executing a command.

**Since:** 26.1.0

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cliManager } from '@ohos.app.cli.cliManager';
```

## background

```TypeScript
background?: boolean
```

Indicates whether the command is executed in the background. Default value is false.

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## callback

```TypeScript
callback?: ToolEventCallback
```

Indicates the event callback for receiving tool events. If provided, auto-subscribe is performed.

**Type:** ToolEventCallback

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## env

```TypeScript
env?: Record<string, string>
```

Indicates the environment variables for the command.

**Type:** Record<string, string>

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## policy

```TypeScript
policy?: string
```

Indicates the security policy.

**Type:** string

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## timeout

```TypeScript
timeout?: number
```

Indicates the maximum execution time of the command, in seconds. Default value is 1800.

**Type:** number

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## workDir

```TypeScript
workDir?: string
```

Indicates the working directory for the command.

**Type:** string

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## yieldMs

```TypeScript
yieldMs?: number
```

Indicates the foreground waiting timeout in milliseconds. Default value is 0.

**Type:** number

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

