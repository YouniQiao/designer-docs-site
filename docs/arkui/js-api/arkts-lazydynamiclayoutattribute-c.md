# LazyDynamicLayoutAttribute

Defines the LazyDynamicLayout attribute functions.

**Inheritance:** LazyDynamicLayoutAttributeextends: CommonMethod<LazyDynamicLayoutAttribute>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyDynamicLayoutAttribute,LazyDynamicLayout } from '@kit.ArkUI';
```

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: Callback<int[]> | undefined): LazyDynamicLayoutAttribute
```

Called when visible indexes change.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int[]> \| undefined | Yes | Callback used to return the list of index  numbers of visible subcomponents.  Passing undefined will unregister the callback. |

**Return value:**

| Type | Description |
| --- | --- |
| LazyDynamicLayoutAttribute |  |

