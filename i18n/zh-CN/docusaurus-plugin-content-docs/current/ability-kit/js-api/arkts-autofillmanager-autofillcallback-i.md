# AutoFillCallback

Auto fill callback.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## 导入模块

```TypeScript
import { autoFillManager } from '@kit.AbilityKit';
```

## onFailure

```TypeScript
onFailure: OnFillFailureFn
```

Called when auto fill request is failed to be handled.

**类型：** OnFillFailureFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onSuccess

```TypeScript
onSuccess: OnFillSuccessFn
```

Called when auto fill request is successfully handled.

**类型：** OnFillSuccessFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

