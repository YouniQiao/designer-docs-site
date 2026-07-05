# CompletionHandlerForAbilityStartCallback

CompletionHandlerForAbilityStartCallback提供了onRequestSuccess和onRequestFailure两个回调函数属性，分别在拉起指定类型的Ability组件成功和失败时回调。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { CompletionHandlerForAbilityStartCallback,AbilityStartFailureCode } from '@kit.AbilityKit';
```

## onRequestSuccess

```TypeScript
onRequestSuccess?: OnRequestSuccessFn
```

拉起指定类型的Ability组件成功时的回调函数。 从API version 21开始，该接口支持在原子化服务中使用。

**Type:** OnRequestSuccessFn

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onRequestFailure

```TypeScript
onRequestFailure?: OnRequestFailureFn
```

拉起指定类型的Ability组件失败时的回调函数。 从API version 21开始，该接口支持在原子化服务中使用。

**Type:** OnRequestFailureFn

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

