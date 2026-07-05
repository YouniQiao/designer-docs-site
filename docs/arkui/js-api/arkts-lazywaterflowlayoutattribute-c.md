# LazyWaterFlowLayoutAttribute

Defines the lazy waterflow layout attribute.

**Inheritance:** LazyWaterFlowLayoutAttributeextends: CommonMethod<T>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyVWaterFlowLayout,LazyWaterFlowLayoutAttribute,LazyVWaterFlowLayoutAttribute } from '@kit.ArkUI';
```

## columnsGap

```TypeScript
columnsGap(value: LengthMetrics | undefined): T
```

The spacing between columns.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | Yes | The spacing between columns.  Default value: LengthMetrics.vp(0) |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## footer

```TypeScript
footer(builder: CustomBuilder | undefined): T
```

Sets the footer of the lazy waterflow layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | The footer builder function.  Passing undefined will remove the footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## header

```TypeScript
header(builder: CustomBuilder | undefined): T
```

Sets the header of the lazy waterflow layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | The header builder function.  Passing undefined will remove the header. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T
```

Called when the first or last item displayed in the component changes. It is triggered once when the component is initialized.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnVisibleIndexesChangeCallback \| undefined | Yes | callback function, triggered  when the index of child components in the visible area changes.  Passing undefined will unregister the callback. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## rowsGap

```TypeScript
rowsGap(value: LengthMetrics | undefined): T
```

The spacing between rows.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | Yes | The spacing between rows.  Default value: LengthMetrics.vp(0) |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined): T
```

Sets the sticky style for header and footer.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sticky | StickyStyle \| undefined | Yes | The sticky style for header and footer. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

