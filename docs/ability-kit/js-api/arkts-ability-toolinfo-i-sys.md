# ToolInfo (System API)

ToolInfo describes the basic information of a cli tool.

**Since:** 26.0.0

<!--Device-unnamed-export interface ToolInfo--><!--Device-unnamed-export interface ToolInfo-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## description

```TypeScript
readonly description: string
```

The description of the CLI tool.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly description: string--><!--Device-ToolInfo-readonly description: string-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## eventSchemas

```TypeScript
readonly eventSchemas?: Record<string, Record<string, Object>>
```

Schemas about custom event.

**Type:** Record<string, Record<string, Object>>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly eventSchemas?: Record<string, Record<string, Object>>--><!--Device-ToolInfo-readonly eventSchemas?: Record<string, Record<string, Object>>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## eventTypes

```TypeScript
readonly eventTypes?: Array<string>
```

Supported event types for custom event.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly eventTypes?: Array<string>--><!--Device-ToolInfo-readonly eventTypes?: Array<string>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## executablePath

```TypeScript
readonly executablePath: string
```

The executable path of the CLI tool.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly executablePath: string--><!--Device-ToolInfo-readonly executablePath: string-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## hasSubCommand

```TypeScript
readonly hasSubCommand?: boolean
```

Whether this tool has subcommand.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly hasSubCommand?: boolean--><!--Device-ToolInfo-readonly hasSubCommand?: boolean-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## inputSchema

```TypeScript
readonly inputSchema: Record<string, Object>
```

The input schema of the CLI tool.

**Type:** Record<string, Object>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly inputSchema: Record<string, Object>--><!--Device-ToolInfo-readonly inputSchema: Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## isLockScreenExecutionAllowed

```TypeScript
readonly isLockScreenExecutionAllowed?: boolean
```

Whether the tool can be executed when the screen is locked.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly isLockScreenExecutionAllowed?: boolean--><!--Device-ToolInfo-readonly isLockScreenExecutionAllowed?: boolean-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## name

```TypeScript
readonly name: string
```

The name of the CLI tool.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly name: string--><!--Device-ToolInfo-readonly name: string-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## outputSchema

```TypeScript
readonly outputSchema: Record<string, Object>
```

The output schema of the CLI tool.

**Type:** Record<string, Object>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly outputSchema: Record<string, Object>--><!--Device-ToolInfo-readonly outputSchema: Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## requirePermissions

```TypeScript
readonly requirePermissions?: Array<string>
```

The require permissions of the CLI tool.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly requirePermissions?: Array<string>--><!--Device-ToolInfo-readonly requirePermissions?: Array<string>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## subcommands

```TypeScript
readonly subcommands?: Record<string, SubCommandInfo>
```

SubCommandInfo list.

**Type:** Record<string, SubCommandInfo>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly subcommands?: Record<string, SubCommandInfo>--><!--Device-ToolInfo-readonly subcommands?: Record<string, SubCommandInfo>-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## version

```TypeScript
readonly version: string
```

The version of the CLI tool (format defined by provider, e.g., "1.0.0").

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ToolInfo-readonly version: string--><!--Device-ToolInfo-readonly version: string-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

