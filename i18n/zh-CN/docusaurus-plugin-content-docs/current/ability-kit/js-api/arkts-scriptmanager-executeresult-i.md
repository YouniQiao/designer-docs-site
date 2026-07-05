# ExecuteResult

Result of arkTS script execution.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## 导入模块

```TypeScript
import { scriptManager } from '@kit.AbilityKit';
```

## result

```TypeScript
result?: Record<string, Object>
```

Indicates execute result.

**类型：** Record<string, Object>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## uris

```TypeScript
uris?: Array<string>
```

Indicates the URIs will be authorized to the caller.

**类型：** Array<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## code

```TypeScript
code: number
```

Indicates result code. The value range is all integers.

**类型：** number

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## flags

```TypeScript
flags?: number
```

Indicates the URIs read and write permissions which consistent with {@link Want#flags}, flags must be one of {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}, {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}, {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}| {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}. The value range is all integers.

**类型：** number

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

