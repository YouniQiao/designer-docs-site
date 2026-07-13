# ExecuteResult

Result of arkTS script execution.

**Since:** 26.0.0

**System capability:** SystemCapability.Ability.AgentRuntime.Core

## Modules to Import

```TypeScript
import { scriptManager } from '@kit.AbilityKit';
```

## code

```TypeScript
code: number
```

Indicates result code.
The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

## flags

```TypeScript
flags?: number
```

Indicates the URIs read and write permissions which consistent with {@link Want#flags},
flags must be one of {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION},
{@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION},
{@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}|
{@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}.
The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

## result

```TypeScript
result?: Record<string, Object>
```

Indicates execute result.

**Type:** Record<string, Object>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

## uris

```TypeScript
uris?: Array<string>
```

Indicates the URIs will be authorized to the caller.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

