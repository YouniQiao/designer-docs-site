# ContinueResultInfo

Describes the quick start result returned by the callback.

**起始版本：** 18

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

## 导入模块

```TypeScript
import { continueManager } from '@kit.AbilityKit';
```

## resultState

```TypeScript
resultState: ContinueStateCode
```

Status code of the operation result.

**类型：** ContinueStateCode

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

## resultInfo

```TypeScript
resultInfo?: string
```

Description of the operation result. This API can be used only in the stage model.

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

