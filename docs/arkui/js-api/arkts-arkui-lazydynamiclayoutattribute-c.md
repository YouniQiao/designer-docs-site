# LazyDynamicLayoutAttribute

Defines the LazyDynamicLayout attribute functions.

**Inheritance/Implementation:** LazyDynamicLayoutAttribute extends [CommonMethod<LazyDynamicLayoutAttribute>](CommonMethod<LazyDynamicLayoutAttribute>)

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyDynamicLayoutAttribute, LazyDynamicLayout } from '@ohos.arkui.components.ArkLazyDynamicLayout';
```

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: Callback<number[]> | undefined): LazyDynamicLayoutAttribute
```

Called when visible indexes change.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;number[]&gt; \| undefined | Yes | Callback used to return the list of indexnumbers of visible subcomponents.<br>Passing undefined will unregister the callback. |

**Return value:**

| Type | Description |
| --- | --- |
| LazyDynamicLayoutAttribute | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

