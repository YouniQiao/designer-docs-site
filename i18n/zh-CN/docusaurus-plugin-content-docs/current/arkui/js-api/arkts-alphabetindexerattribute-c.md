# AlphabetIndexerAttribute

[width]CommonMethod#width(value: Length)属性设置"auto"时表示自适应宽度，宽度会随索引项最大宽度变化。 [padding]CommonMethod#padding属性默认为4vp。 文本最大的字体缩放倍数[maxFontScale]TextAttribute#maxFontScale和最小的字体缩放倍数[minFontScale]TextAttribute#minFontScale 皆为1，不跟随系统字体大小调节变化。 除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**继承实现关系：** AlphabetIndexerAttribute继承自：CommonMethod<AlphabetIndexerAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## alignStyle

```TypeScript
alignStyle(value: IndexerAlign, offset?: Length)
```

设置索引条提示弹窗的对齐样式。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | IndexerAlign | 是 | 索引条提示弹窗的对齐样式，支持弹窗显示在索引条右侧和左侧。 默认值：IndexerAlign.END |
| offset | Length | 否 |  |

## autoCollapse

```TypeScript
autoCollapse(value: boolean)
```

设置是否使用自适应折叠模式。 如果索引项第一项为“#”，当除去第一项后剩余索引项数量 <= 9时，选择全显示模式；9 < 剩余索引项数量 <= 13时，根据索引条高度自适应选择全显示模式或者短折叠模式；剩余索引项数量 > 13时，根据索引条高度自适应选择短折叠 模式或者长折叠模式。 如果索引项第一项不为“#”，当所有索引项数量 <= 9时，选择全显示模式；9 < 所有索引项数量 <= 13时，根据索引条高度自适应选择全显示模式或者短折叠模式；所有索引项数量 > 13时，根据索引条高度自适应选择短折叠模式或者长 折叠模式。 > **说明：** > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否使用自适应折叠模式。 默认值： API version 12之前：false API version 12及之后：true  true：使用自适应折叠模式。 false：不使用自适应折叠模式。 |

## color

```TypeScript
color(value: ResourceColor)
```

设置未选中项文本颜色。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 未选中项文本颜色。 默认值：0x99182431，显示为略带透明的棕色。 |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(value: boolean)
```

设置是否开启触控反馈。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否支持触控反馈。 true：支持触控反馈。 false：不支持触控反馈。 默认值：true 开启触控反馈时，需要在工程的  [module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配置如下： "  requestPermissions": [{"name": "ohos.permission.VIBRATE"}] |

## font

```TypeScript
font(value: Font)
```

设置未选中项文本样式。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Font | 是 | 未选中索引项文本样式。 默认值： API version 11及以前： { size:'12.0fp', style:  FontStyle.Normal, weight:FontWeight.Regular, family:'HarmonyOS Sans' } API version 12及以后：{ size:'10.0vp', style:FontStyle.Normal, weight:FontWeight.Medium, family:'HarmonyOS Sans'} |

## itemBorderRadius

```TypeScript
itemBorderRadius(value: number)
```

设置索引项背板圆角半径。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | 设置索引项背板圆角半径。 。  单位为：vp。 |

## itemSize

```TypeScript
itemSize(value: string | number)
```

设置索引项区域大小。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string \| number | 是 | 索引项区域大小，索引项区域为正方形，即正方形边长。不支持设置为百分比。 实际取值会受到组件尺寸的约束，索引项宽度最大为组件宽度-左右  [padding]CommonMethod#padding，索引项高度最大为（组件高度-上下[padding]CommonMethod#padding）/索引项个数。传入值小于等于0时，按照  默认值处理。 默认值：16.0 单位：vp |

## onPopupSelect

```TypeScript
onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback)
```

提示弹窗二级索引选中事件，回调参数为当前选中二级索引项索引。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAlphabetIndexerPopupSelectCallback | 是 | 提示弹窗二级索引选中事件。 [since 18] |

## onRequestPopupData

```TypeScript
onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback)
```

设置提示弹窗二级索引项内容事件，回调参数为当前选中项索引，回调返回值为提示弹窗需显示的二级索引项内容。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAlphabetIndexerRequestPopupDataCallback | 是 | 设置提示弹窗二级索引项内容事件。 [since 18] |

## onSelect

```TypeScript
onSelect(callback: OnAlphabetIndexerSelectCallback)
```

索引项选中事件，回调参数为当前选中项索引。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAlphabetIndexerSelectCallback | 是 | 索引项选中事件。 [since 18] |

## onSelected

```TypeScript
onSelected(callback: (index: number) => void)
```

索引项选中事件，回调参数为当前选中项索引。 > **说明：** > 从API version 7开始支持，从API version 8开始废弃，建议使用[onSelect](arkts-alphabetindexerattribute-c.md#onSelect)替代。

**起始版本：** 7

**废弃版本：** 8

**替代接口：** onSelect

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (index: number) => void | 是 | 当前选中的索引。 |

## popupBackground

```TypeScript
popupBackground(value: ResourceColor)
```

设置提示弹窗背景颜色。 该接口未被主动调用或参数value传入undefined时： API version 11及以前版本，提示弹窗背景颜色默认为0xFFFFFFFF，显示为白色。 对于API version 12至API version 24版本，默认为#66808080，显示为半透明的灰色。 从API版本26.0.0开始，如果和[popupBackgroundBlurStyle](arkts-alphabetindexerattribute-c.md#popupBackgroundBlurStyle)均未被主动调用或参数 value传入undefined，高档、中档算力设备默认显示为沉浸式材质 [ImmersiveStyle](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle)的THIN样式，低档算力设备默认显示为白色背景。如果 popupBackgroundBlurStyle被主动调用且参数value传入有效值，提示弹窗背景颜色默认为#66808080，显示为半透明的灰色。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 提示弹窗背景颜色。 弹窗的背景模糊材质效果会对背景色产生影响，可通过设置  [popupBackgroundBlurStyle](arkts-alphabetindexerattribute-c.md#popupBackgroundBlurStyle)属性值为NONE关闭背景模糊材质效果。 |

## popupBackgroundBlurStyle

```TypeScript
popupBackgroundBlurStyle(value: BlurStyle)
```

设置提示弹窗的背景模糊材质。API版本26.0.0之前版本，未通过该接口设置时，默认为组件普通材质模糊，对应取值为BlurStyle中的COMPONENT_REGULAR。从API版本26.0.0开始， [popupBackground](arkts-alphabetindexerattribute-c.md#popupBackground)和popupBackgroundBlurStyle均未被主动调用或者传入undefined时，在高档 、中档算力设备默认显示为沉浸式材质[ImmersiveStyle](docroot://reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle)的THIN样式，低档 算力设备默认显示为白色背景。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | BlurStyle | 是 | 设置提示弹窗的背景模糊材质。 弹窗的背景模糊材质效果会对背景色  [popupBackground](arkts-alphabetindexerattribute-c.md#popupBackground)产生影响，可通过设置属性值为NONE关闭背景模糊材质效果。 |

## popupColor

```TypeScript
popupColor(value: ResourceColor)
```

设置提示弹窗一级索引项文本颜色。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 提示弹窗一级索引项文本颜色。 默认值：0xFF007DFF，显示为蓝色。 |

## popupFont

```TypeScript
popupFont(value: Font)
```

设置提示弹窗一级索引文本样式。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Font | 是 | 提示弹窗一级索引文本样式。 默认值： { size:'24.0vp', style:FontStyle.Normal, weight:  FontWeight.Medium, family:'HarmonyOS Sans' } |

## popupItemBackgroundColor

```TypeScript
popupItemBackgroundColor(value: ResourceColor)
```

设置提示弹窗二级索引项背景颜色。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 提示弹窗二级索引项背景颜色。 默认值： API version 11及以前：#FFFFFFFF，显示为白色。 API version  12及以后：#00000000，显示为透明色。 |

## popupItemBorderRadius

```TypeScript
popupItemBorderRadius(value: number)
```

设置提示弹窗索引项背板圆角半径。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | 设置提示弹窗索引项背板圆角半径。  默认值：24vp  不支持百分比，小于0时按照0设置。  提示弹窗背板圆角自适应变化（索引项圆角半径+4vp）。  单位为：vp。 |

## popupItemFont

```TypeScript
popupItemFont(value: Font)
```

设置提示弹窗二级索引项文本样式。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Font | 是 | 提示弹窗二级索引项文本样式。 默认值： { size:24, weight:FontWeight.Medium } |

## popupPosition

```TypeScript
popupPosition(value: Position)
```

设置弹出窗口相对于索引条上边框中点的位置。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Position | 是 | 弹出窗口相对于索引条上边框中点的位置。 默认值：{x: 60.0, y: 48.0} |

## popupSelectedColor

```TypeScript
popupSelectedColor(value: ResourceColor)
```

设置提示弹窗二级索引选中项文本颜色。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 提示弹窗二级索引选中项文本颜色。 默认值：#FF182431，显示为深暗蓝色。 |

## popupTitleBackground

```TypeScript
popupTitleBackground(value: ResourceColor)
```

设置提示弹窗一级索引项背景颜色。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 设置提示弹窗一级索引项背景颜色。 默认值： 提示弹窗只有一个索引项：#00FFFFFF。 提示弹窗有多个索引项：#0c182431。 |

## popupUnselectedColor

```TypeScript
popupUnselectedColor(value: ResourceColor)
```

设置提示弹窗二级索引未选中项文本颜色。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 提示弹窗二级索引未选中项文本颜色。 默认值：#FF182431，显示为深暗蓝色。 |

## selected

```TypeScript
selected(index: number)
```

设置选中项索引值。 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | 选中项索引值。 取值范围：[0, [arrayValue](arkts-alphabetindexeroptions-i.md#AlphabetIndexerOptions).length-1] 默认值：0 |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(value: ResourceColor)
```

设置选中项背景颜色。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 选中项背景颜色。 默认值：0x1A007DFF，显示为半透明的蓝绿色。 |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

设置选中项文本颜色。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 选中项文本颜色。 默认值：0xFF007DFF，显示为蓝色。 |

## selectedFont

```TypeScript
selectedFont(value: Font)
```

设置选中项文本样式。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Font | 是 | 选中项文本样式。 默认值： API version 11及以前： { size:'12.0fp', style:  FontStyle.Normal, weight:FontWeight.Regular, family:'HarmonyOS Sans' } API version 12及以后：{ size:'10.0vp', style:FontStyle.Normal, weight:FontWeight.Medium, family:'HarmonyOS Sans'} |

## usingPopup

```TypeScript
usingPopup(value: boolean)
```

设置是否显示提示弹窗。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否显示提示弹窗。 默认值：false true：显示提示弹窗。 false：不显示提示弹窗。 |

