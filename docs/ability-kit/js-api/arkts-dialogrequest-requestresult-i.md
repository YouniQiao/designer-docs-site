# RequestResult

模态弹框请求结果，包含结果码ResultCode和请求结果ResultWant。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { dialogRequest } from '@kit.AbilityKit';
```

## result

```TypeScript
result: ResultCode
```

表示结果码。

**Type:** ResultCode

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## want

```TypeScript
want?: Want
```

表示Want类型信息，如ability名称，包名等。

**Type:** Want

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

