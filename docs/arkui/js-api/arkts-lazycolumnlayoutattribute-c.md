# LazyColumnLayoutAttribute

Defines the lazy column layout attribute.

**Inheritance:** LazyColumnLayoutAttributeextends: CommonMethod<LazyColumnLayoutAttribute>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyColumnLayoutAttribute,LazyColumnLayout } from '@kit.ArkUI';
```

## alignItems

```TypeScript
alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute
```

Sets the horizontal alignment of the row content.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | HorizontalAlign \| undefined | Yes | the horizontal alignment of the row content.  Default value HorizontalAlign.Center. |

**Return value:**

| Type | Description |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## footer

```TypeScript
footer(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute
```

Sets the footer of the lazy column layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | The footer builder function  Passing undefined will remove the footer. |

**Return value:**

| Type | Description |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## header

```TypeScript
header(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute
```

Sets the header of the lazy column layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | The header builder function  Passing undefined will remove the header. |

**Return value:**

| Type | Description |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute
```

Triggered when the index of child components in the visible area changes.

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
| LazyColumnLayoutAttribute |  |

## space

```TypeScript
space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute
```

The spacing between rows.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| space | LengthMetrics \| undefined | Yes | the spacing between rows.  Default value: 0. Range: [0, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined): LazyColumnLayoutAttribute
```

Sets sticky style for header and footer.

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
| LazyColumnLayoutAttribute |  |

