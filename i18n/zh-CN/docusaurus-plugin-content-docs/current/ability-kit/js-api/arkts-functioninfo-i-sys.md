# FunctionInfo

FunctionInfo describes the basic information of a CLI function.

**起始版本：** 26.1.0

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## outputSchema

```TypeScript
readonly outputSchema?: string
```

Output result JSON Schema (optional), describes the structure of the function return value.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## inputSchema

```TypeScript
readonly inputSchema?: string
```

Input parameter JSON Schema, describes the structure of parameters accepted by the function.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## functionName

```TypeScript
readonly functionName: string
```

The name of the function.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## description

```TypeScript
readonly description: string
```

Human-readable function description, used for AI Agent decision-making.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## functionNamespace

```TypeScript
readonly functionNamespace: string
```

The namespace of the function.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

## version

```TypeScript
readonly version: string
```

The version of the function (format defined by provider, e.g., "1.0.0").

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

