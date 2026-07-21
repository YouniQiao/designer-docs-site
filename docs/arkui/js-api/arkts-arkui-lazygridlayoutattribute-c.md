# LazyGridLayoutAttribute

Defines the lazy grid layout attribute.

**Inheritance/Implementation:** LazyGridLayoutAttribute extends [CommonMethod<T>](CommonMethod<T>)

**Since:** 19

<!--Device-unnamed-declare class LazyGridLayoutAttribute<T> extends CommonMethod<T>--><!--Device-unnamed-declare class LazyGridLayoutAttribute<T> extends CommonMethod<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="columnsgap"></a>
## columnsGap

```TypeScript
columnsGap(value: LengthMetrics): T
```

Sets the gap between columns. Values less than 0 are treated as the default value.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-LazyGridLayoutAttribute-columnsGap(value: LengthMetrics): T--><!--Device-LazyGridLayoutAttribute-columnsGap(value: LengthMetrics): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) | Yes | Gap between columns.<br>Default value: **0vp**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="footer"></a>
## footer

```TypeScript
footer(builder: CustomBuilder | undefined): T
```

Sets the footer of the lazy grid layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyGridLayoutAttribute-footer(builder: CustomBuilder | undefined): T--><!--Device-LazyGridLayoutAttribute-footer(builder: CustomBuilder | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| undefined | Yes | The footer builder function.<br>Passing undefined will remove the footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="header"></a>
## header

```TypeScript
header(builder: CustomBuilder | undefined): T
```

Sets the header of the lazy grid layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyGridLayoutAttribute-header(builder: CustomBuilder | undefined): T--><!--Device-LazyGridLayoutAttribute-header(builder: CustomBuilder | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| undefined | Yes | The header builder function.<br>Passing undefined will remove the header. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onvisibleindexeschange"></a>
## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T
```

Sets a callback for **onVisibleIndexesChange**. This callback is triggered when the index of a child component in the visible area of **LazyVGridLayout** changes. It returns the start and end indexes of the child components in the visible area. This API uses an asynchronous callback to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyGridLayoutAttribute-onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T--><!--Device-LazyGridLayoutAttribute-onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnVisibleIndexesChangeCallback](arkts-arkui-onvisibleindexeschangecallback-t.md) \| undefined | Yes | Callback for the **onVisibleIndexesChange** event. If the input parameter is **undefined**, the listening is canceled. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="rowsgap"></a>
## rowsGap

```TypeScript
rowsGap(value: LengthMetrics): T
```

Sets the gap between rows. Values less than 0 are treated as the default value.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-LazyGridLayoutAttribute-rowsGap(value: LengthMetrics): T--><!--Device-LazyGridLayoutAttribute-rowsGap(value: LengthMetrics): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) | Yes | Gap between rows.<br>Default value: **0vp** |

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

<!--Device-LazyGridLayoutAttribute-sticky(sticky: StickyStyle | undefined): T--><!--Device-LazyGridLayoutAttribute-sticky(sticky: StickyStyle | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sticky | [StickyStyle](arkts-arkui-stickystyle-e.md) \| undefined | Yes | The sticky style for header and footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

