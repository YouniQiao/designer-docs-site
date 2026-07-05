# ToggleAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** ToggleAttributeextends: CommonMethod<ToggleAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<ToggleConfiguration>)
```

定制Toggle内容区的方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;ToggleConfiguration> | Yes | 在Toggle组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自定义class实现  ContentModifier接口。 |

## onChange

```TypeScript
onChange(callback: (isOn: boolean) => void)
```

开关状态切换时触发该事件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (isOn: boolean) => void | Yes |  |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

设置组件在打开状态下的背景颜色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 组件打开状态的背景颜色。 默认值： 当ToggleType为Switch时，默认值为  `$r('sys.color.ohos_id_color_emphasize')`。 当ToggleType为Checkbox时，默认值为  `$r('sys.color.ohos_id_color_emphasize')`。 当ToggleType为Button时，默认值为  `$r('sys.color.ohos_id_color_emphasize')`混合`$r('sys.float.ohos_id_alpha_highlight_bg')`的透明度。 |

## switchPointColor

```TypeScript
switchPointColor(color: ResourceColor)
```

设置Switch类型的圆形滑块颜色。仅当type为ToggleType.Switch生效。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ResourceColor | Yes | Switch类型的圆形滑块颜色。 默认值：$r('sys.color.ohos_id_color_foreground_contrary')  说明： 同时设置了[systemMaterial]CommonMethod#systemMaterial新材质时，设置此属性后会出现点光源效果，点光源颜色跟随此属性的设置。 |

## switchStyle

```TypeScript
switchStyle(value: SwitchStyle)
```

设置Switch类型的样式。仅当type为ToggleType.Switch生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SwitchStyle | Yes | Switch样式风格。 |

