# ArcAlphabetIndexerAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** ArcAlphabetIndexerAttributeextends: CommonMethod<ArcAlphabetIndexerAttribute>.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcAlphabetIndexerAttribute,ArcAlphabetIndexer } from '@kit.ArkUI';
```

## autoCollapse

```TypeScript
autoCollapse(enable: Optional<boolean>): ArcAlphabetIndexerAttribute
```

设置是否使用自适应折叠模式。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean> | Yes | 是否使用自适应折叠模式。 默认值：true true：使用自适应折叠模式。 false：不使用自适应折叠模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## color

```TypeScript
color(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

设置普通状态下索引项文字颜色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics> | Yes | 文字颜色。 默认值：0xFFFFFF，显示为白色。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## font

```TypeScript
font(font: Optional<Font>): ArcAlphabetIndexerAttribute
```

设置字母索引条默认字体样式。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| font | Optional&lt;Font> | Yes | 字母索引条默认字体样式。 默认值： { size:'13.0fp', style:FontStyle.Normal,  weight:500, family:'HarmonyOS Sans' } |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## itemSize

```TypeScript
itemSize(size: Optional<LengthMetrics>): ArcAlphabetIndexerAttribute
```

设置字母索引条字母区域大小。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Optional&lt;LengthMetrics> | Yes | 字母索引条字母区域大小，字母区域为圆形，即圆形直径。不支持设置为百分比。 默认值：24.0 单位：vp |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## onSelect

```TypeScript
onSelect(handler: Optional<OnSelectCallback>): ArcAlphabetIndexerAttribute
```

索引条选中回调，返回值为当前选中索引。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;OnSelectCallback> | Yes | 回调函数类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## popupBackground

```TypeScript
popupBackground(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

设置提示弹窗背景色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics> | Yes | 提示弹窗背景色。 默认值：0xD8404040，显示为微透明的深灰色。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## popupBackgroundBlurStyle

```TypeScript
popupBackgroundBlurStyle(style: Optional<BlurStyle>): ArcAlphabetIndexerAttribute
```

设置提示弹窗的背景模糊材质。未通过该接口设置时，默认为关闭模糊，对应取值为BlurStyle中的NONE。 > **说明：** > 当通过popupBackgroundBlurStyle设置弹窗气泡的背景模糊材质时，不建议再通过 > [popupBackground](arkts-arcalphabetindexerattribute-c.md#popupBackground)设置背景色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;BlurStyle> | Yes | 设置提示弹窗的背景模糊材质。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## popupColor

```TypeScript
popupColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

设置提示弹窗文字颜色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics> | Yes | 提示弹窗文字颜色。 默认值：0xFFFFFF，显示为白色。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## popupFont

```TypeScript
popupFont(font: Optional<Font>): ArcAlphabetIndexerAttribute
```

设置提示弹窗字体样式。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| font | Optional&lt;Font> | Yes | 提示弹窗字体样式。 默认值： { size:'19.0fp', style:FontStyle.Normal,  weight:500, family:'HarmonyOS Sans' } |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## selected

```TypeScript
selected(index: Optional<number>): ArcAlphabetIndexerAttribute
```

设置选中项索引值。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | Optional&lt;number> | Yes | 选中项索引值。 默认值：0 该参数支持  [!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

设置选中项背景颜色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics> | Yes | 选中项背景颜色。 默认值：0x1F71FF，显示为深蓝色。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## selectedColor

```TypeScript
selectedColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

设置选中项文字颜色。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics> | Yes | 选中项文字颜色。 默认值：0xFFFFFF，显示为白色。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## selectedFont

```TypeScript
selectedFont(font: Optional<Font>): ArcAlphabetIndexerAttribute
```

设置选中项文字尺寸、粗细、字体族、倾斜等样式。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| font | Optional&lt;Font> | Yes | 选中项文字样式。 默认值：{ size:'13.0fp', style:FontStyle.Normal, weight:500  , family:'HarmonyOS Sans' } |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

## usePopup

```TypeScript
usePopup(enabled: Optional<boolean>): ArcAlphabetIndexerAttribute
```

设置是否使用提示弹窗。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | 是否使用提示弹窗。 true表示使用提示弹窗；false表示不使用提示弹窗。 默认值：false |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

