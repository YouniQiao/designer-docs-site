# LazyWaterFlowLayoutAttribute

Defines the lazy waterflow layout attribute.

**Inheritance/Implementation:** LazyWaterFlowLayoutAttribute extends [CommonMethod<T>](CommonMethod<T>)

**Since:** 26.0.0

<!--Device-unnamed-export declare class LazyWaterFlowLayoutAttribute<T> extends CommonMethod<T>--><!--Device-unnamed-export declare class LazyWaterFlowLayoutAttribute<T> extends CommonMethod<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyVWaterFlowLayout, LazyWaterFlowLayoutAttribute, LazyVWaterFlowLayoutAttribute } from '@kit.ArkUI';
```

<a id="columnsgap"></a>
## columnsGap

```TypeScript
columnsGap(value: LengthMetrics | undefined): T
```

The spacing between columns.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyWaterFlowLayoutAttribute-columnsGap(value: LengthMetrics | undefined): T--><!--Device-LazyWaterFlowLayoutAttribute-columnsGap(value: LengthMetrics | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](arkts-arkui-lengthmetrics-t.md) \| undefined | Yes | The spacing between columns.<br>Default value: LengthMetrics.vp(0) |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="footer"></a>
## footer

```TypeScript
footer(builder: CustomBuilder | undefined): T
```

Sets the footer of the lazy waterflow layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyWaterFlowLayoutAttribute-footer(builder: CustomBuilder | undefined): T--><!--Device-LazyWaterFlowLayoutAttribute-footer(builder: CustomBuilder | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](../arkts-components/arkts-arkui-custombuilder-t.md) \| undefined | Yes | The footer builder function.<br>Passing undefined will remove the footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="header"></a>
## header

```TypeScript
header(builder: CustomBuilder | undefined): T
```

Sets the header of the lazy waterflow layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyWaterFlowLayoutAttribute-header(builder: CustomBuilder | undefined): T--><!--Device-LazyWaterFlowLayoutAttribute-header(builder: CustomBuilder | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](../arkts-components/arkts-arkui-custombuilder-t.md) \| undefined | Yes | The header builder function.<br>Passing undefined will remove the header. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onvisibleindexeschange"></a>
## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T
```

Called when the first or last item displayed in the component changes.It is triggered once when the component is initialized.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyWaterFlowLayoutAttribute-onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T--><!--Device-LazyWaterFlowLayoutAttribute-onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnVisibleIndexesChangeCallback](../arkts-components/arkts-arkui-onvisibleindexeschangecallback-t.md) \| undefined | Yes | callback function, triggered when the index of child components in the visible area changes.<br>Passing undefined will unregister the callback. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="rowsgap"></a>
## rowsGap

```TypeScript
rowsGap(value: LengthMetrics | undefined): T
```

The spacing between rows.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyWaterFlowLayoutAttribute-rowsGap(value: LengthMetrics | undefined): T--><!--Device-LazyWaterFlowLayoutAttribute-rowsGap(value: LengthMetrics | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](arkts-arkui-lengthmetrics-t.md) \| undefined | Yes | The spacing between rows.<br>Default value: LengthMetrics.vp(0) |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="sticky"></a>
## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined): T
```

Sets the sticky style for header and footer.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyWaterFlowLayoutAttribute-sticky(sticky: StickyStyle | undefined): T--><!--Device-LazyWaterFlowLayoutAttribute-sticky(sticky: StickyStyle | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sticky | [StickyStyle](../arkts-components/arkts-arkui-stickystyle-e.md) \| undefined | Yes | The sticky style for header and footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

