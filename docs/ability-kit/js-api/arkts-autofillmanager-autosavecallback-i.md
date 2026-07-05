# AutoSaveCallback

当保存请求完成时所触发的回调接口。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { autoFillManager } from '@kit.AbilityKit';
```

## onFailure

```TypeScript
onFailure(): void
```

当保存请求失败时，该回调被调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onSuccess

```TypeScript
onSuccess(): void
```

当保存请求成功时，该回调被调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onFailure

```TypeScript
onFailure: OnFailureFn
```

当保存请求失败时，该回调被调用。

**Type:** OnFailureFn

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onSuccess

```TypeScript
onSuccess: OnSuccessFn
```

当保存请求成功时，该回调被调用。

**Type:** OnSuccessFn

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

