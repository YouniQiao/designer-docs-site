# LazyWaterFlowLayoutAttribute

Defines the lazy waterflow layout attribute.

**Inheritance/Implementation:** LazyWaterFlowLayoutAttribute extends [CommonMethod<T>](CommonMethod<T>)

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyVWaterFlowLayout, LazyWaterFlowLayoutAttribute, LazyVWaterFlowLayoutAttribute } from '@ohos.arkui.components.ArkLazyWaterFlowLayout';
```

## columnsGap

```TypeScript
columnsGap(value: LengthMetrics | undefined): T
```

The spacing between columns.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | Yes | The spacing between columns.<br>Default value: LengthMetrics.vp(0) |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## footer

```TypeScript
footer(builder: CustomBuilder | undefined): T
```

Sets the footer of the lazy waterflow layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | The footer builder function.<br>Passing undefined will remove the footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## header

```TypeScript
header(builder: CustomBuilder | undefined): T
```

Sets the header of the lazy waterflow layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | The header builder function.<br>Passing undefined will remove the header. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T
```

Called when the first or last item displayed in the component changes. It is triggered once when the component is initialized.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnVisibleIndexesChangeCallback \| undefined | Yes | callback function, triggeredwhen the index of child components in the visible area changes.<br>Passing undefined will unregister the callback. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## rowsGap

```TypeScript
rowsGap(value: LengthMetrics | undefined): T
```

The spacing between rows.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | Yes | The spacing between rows.<br>Default value: LengthMetrics.vp(0) |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined): T
```

Sets the sticky style for header and footer.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sticky | StickyStyle \| undefined | Yes | The sticky style for header and footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

