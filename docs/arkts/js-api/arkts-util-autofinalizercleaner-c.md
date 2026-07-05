# AutoFinalizerCleaner

用于通过开发者自定义回调释放由开发者管理的资源的 cleaner。

**Since:** 22

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## register

```TypeScript
static register<T>(obj: AutoFinalizer<T>, heldValue: T): void
```

注册释放由开发者管理的资源的对象。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | AutoFinalizer&lt;T> | Yes | 注册到 cleaner 的对象。 |
| heldValue | T | Yes | 传递给 finalizer 的值。 |

