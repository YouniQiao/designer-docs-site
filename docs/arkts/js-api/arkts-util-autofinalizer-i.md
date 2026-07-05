# AutoFinalizer

提供一个可通过开发者自定义回调释放由开发者管理的资源的接口。

**Since:** 22

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## onFinalization

```TypeScript
onFinalization(heldValue: T): void
```

开发者自定义的用于释放资源的回调。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| heldValue | T | Yes | 传递给 finalizer 的值。 |

