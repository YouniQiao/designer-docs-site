# ToggleType

```TypeScript
declare enum ToggleType
```

Toggle的样式。 > **说明：** > > Toggle的样式继承对应组件样式的默认值，且不支持设置。例如，如果ToggleType为Button，则该组件样式继承[ButtonType]ButtonType的默认值。由于Button.type从API > version 18开始，默认类型从胶囊型变更为圆角矩形，胶囊型按钮不支持设置 > [borderRadius]CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)，此时使用 > Toggle组件设置borderRadius也不生效。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Checkbox

```TypeScript
Checkbox
```

提供单选框样式。 **说明：** API version 11开始，Checkbox默认样式由圆角方形变为圆形。 [通用属性margin]CommonMethod#margin的默认值为： { top: '14px', right: '14px', bottom: '14px', left: '14px' }。 默认尺寸为： {width:'20vp', height:'20vp'}。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Switch

```TypeScript
Switch
```

提供开关样式。 **说明：** [通用属性margin]CommonMethod#margin默认值为： { top: '6px', right: '14px', bottom: '6px', left: '14px' }。 默认尺寸为： {width:'36vp', height:'20vp'}。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Button

```TypeScript
Button
```

提供状态按钮样式。如子组件设置文本，文本内容将显示在按钮内。默认高度为28vp，宽度无默认值。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

