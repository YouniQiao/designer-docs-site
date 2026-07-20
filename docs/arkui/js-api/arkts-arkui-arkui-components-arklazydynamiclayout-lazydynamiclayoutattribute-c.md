# LazyDynamicLayoutAttribute

Defines the LazyDynamicLayout attribute functions.

**Inheritance/Implementation:** LazyDynamicLayoutAttribute extends [CommonMethod<LazyDynamicLayoutAttribute>](CommonMethod<LazyDynamicLayoutAttribute>)

**Since:** 26.0.0

<!--Device-unnamed-export declare class LazyDynamicLayoutAttribute extends CommonMethod<LazyDynamicLayoutAttribute>--><!--Device-unnamed-export declare class LazyDynamicLayoutAttribute extends CommonMethod<LazyDynamicLayoutAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyDynamicLayoutAttribute, LazyDynamicLayout } from '@kit.ArkUI';
```

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: Callback<number[]> | undefined): LazyDynamicLayoutAttribute
```

Called when visible indexes change.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyDynamicLayoutAttribute-onVisibleIndexesChange(callback: Callback<int[]> | undefined): LazyDynamicLayoutAttribute--><!--Device-LazyDynamicLayoutAttribute-onVisibleIndexesChange(callback: Callback<int[]> | undefined): LazyDynamicLayoutAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<number[]> \| undefined | Yes | Callback used to return the list of index numbers of visible subcomponents.<br>Passing undefined will unregister the callback. |

**Return value:**

| Type | Description |
| --- | --- |
| [LazyDynamicLayoutAttribute](arkts-arkui-arkui-components-arklazydynamiclayout-lazydynamiclayoutattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

