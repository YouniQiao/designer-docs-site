# LazyColumnLayoutAttribute

Defines the lazy column layout attribute.

**Inheritance/Implementation:** LazyColumnLayoutAttribute extends [CommonMethod<LazyColumnLayoutAttribute>](CommonMethod<LazyColumnLayoutAttribute>)

**Since:** 26.0.0

<!--Device-unnamed-export declare class LazyColumnLayoutAttribute extends CommonMethod<LazyColumnLayoutAttribute>--><!--Device-unnamed-export declare class LazyColumnLayoutAttribute extends CommonMethod<LazyColumnLayoutAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyColumnLayoutAttribute, LazyColumnLayout } from '@kit.ArkUI';
```

<a id="alignitems"></a>
## alignItems

```TypeScript
alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute
```

Sets the horizontal alignment of the row content.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyColumnLayoutAttribute-alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute--><!--Device-LazyColumnLayoutAttribute-alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [HorizontalAlign](arkts-arkui-horizontalalign-e.md) \| undefined | Yes | the horizontal alignment of the row content.<br>Default value HorizontalAlign.Center. |

**Return value:**

| Type | Description |
| --- | --- |
| [LazyColumnLayoutAttribute](arkts-arkui-arkui-components-arklazycolumnlayout-lazycolumnlayoutattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="footer"></a>
## footer

```TypeScript
footer(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute
```

Sets the footer of the lazy column layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyColumnLayoutAttribute-footer(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute--><!--Device-LazyColumnLayoutAttribute-footer(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](../arkts-components/arkts-arkui-custombuilder-t.md) \| undefined | Yes | The footer builder function<br>Passing undefined will remove the footer. |

**Return value:**

| Type | Description |
| --- | --- |
| [LazyColumnLayoutAttribute](arkts-arkui-arkui-components-arklazycolumnlayout-lazycolumnlayoutattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="header"></a>
## header

```TypeScript
header(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute
```

Sets the header of the lazy column layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyColumnLayoutAttribute-header(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute--><!--Device-LazyColumnLayoutAttribute-header(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](../arkts-components/arkts-arkui-custombuilder-t.md) \| undefined | Yes | The header builder function<br>Passing undefined will remove the header. |

**Return value:**

| Type | Description |
| --- | --- |
| [LazyColumnLayoutAttribute](arkts-arkui-arkui-components-arklazycolumnlayout-lazycolumnlayoutattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onvisibleindexeschange"></a>
## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute
```

Triggered when the index of child components in the visible area changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyColumnLayoutAttribute-onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute--><!--Device-LazyColumnLayoutAttribute-onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnVisibleIndexesChangeCallback](../arkts-components/arkts-arkui-onvisibleindexeschangecallback-t.md) \| undefined | Yes | callback function, triggered when the index of child components in the visible area changes.<br>Passing undefined will unregister the callback. |

**Return value:**

| Type | Description |
| --- | --- |
| [LazyColumnLayoutAttribute](arkts-arkui-arkui-components-arklazycolumnlayout-lazycolumnlayoutattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="space"></a>
## space

```TypeScript
space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute
```

The spacing between rows.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyColumnLayoutAttribute-space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute--><!--Device-LazyColumnLayoutAttribute-space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| space | [LengthMetrics](arkts-arkui-lengthmetrics-t.md) \| undefined | Yes | the spacing between rows.<br>Default value: 0. <br>Range: [0, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| [LazyColumnLayoutAttribute](arkts-arkui-arkui-components-arklazycolumnlayout-lazycolumnlayoutattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="sticky"></a>
## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined): LazyColumnLayoutAttribute
```

Sets sticky style for header and footer.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-LazyColumnLayoutAttribute-sticky(sticky: StickyStyle | undefined): LazyColumnLayoutAttribute--><!--Device-LazyColumnLayoutAttribute-sticky(sticky: StickyStyle | undefined): LazyColumnLayoutAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sticky | [StickyStyle](../arkts-components/arkts-arkui-stickystyle-e.md) \| undefined | Yes | The sticky style for header and footer. |

**Return value:**

| Type | Description |
| --- | --- |
| [LazyColumnLayoutAttribute](arkts-arkui-arkui-components-arklazycolumnlayout-lazycolumnlayoutattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

