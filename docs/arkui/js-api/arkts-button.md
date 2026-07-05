# button

Defines Button Component instance.

## button

```TypeScript
button()
```

创建一个空按钮。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
button(options: ButtonOptions)
```

创建可以包含单个子组件的按钮。未通过该接口设置时，则按照ButtonOptions中各参数的默认值配置。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ButtonOptions | Yes | 配置按钮的显示样式。 |

```TypeScript
button(label: ResourceStr, options?: ButtonOptions)
```

使用文本内容创建相应的按钮组件，此时Button无法包含子组件。 文本内容默认单行显示。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | ResourceStr | Yes | 按钮文本内容。 说明： 当文本字符的长度超过按钮本身的宽度时，文本将会被截断。 |
| options | ButtonOptions | No | 配置按钮的显示样式。 未设置时，则按照ButtonOptions中各参数的默认值配置。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ButtonAttribute](arkts-buttonattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ButtonConfiguration](arkts-buttonconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [ButtonInterface](arkts-buttoninterface-i.md) | 按钮组件，可快速创建不同样式的按钮。 > **说明： |
| [ButtonOptions](arkts-buttonoptions-i.md) | 按钮的样式。 |
| [LabelStyle](arkts-labelstyle-i.md) | Button组件的label文本及其字体样式。 |

### Enums

| Name | Description |
| --- | --- |
| [ButtonRole](arkts-buttonrole-e.md) | 按钮的角色。 |
| [ButtonStyleMode](arkts-buttonstylemode-e.md) | 按钮的重要程度。 |
| [ButtonType](arkts-buttontype-e.md) | 按钮的类型。 > **说明：** > > - 按钮圆角通过 > [通用属性borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}设置。 > > - 当按钮类型为Capsule时，borderRadius设置不生效，按钮圆角始终为宽、高中较小值的一半。 > > - 当按钮类型为Circle时，若同时设置了宽和高，则borderRadius不生效，且按钮半径为宽高中较小值的一半；若只设置宽、高中的一个，则borderRadius不生效，且按钮半径为所设宽或所设高值的一半；若不设置宽高，则 > borderRadius为按钮半径；若borderRadius的值为负，则borderRadius的值按照0处理。 > > - 按钮文本通过[fontSize]{@link ButtonAttribute#fontSize}、[fontColor]{@link ButtonAttribute#fontColor}、 > [fontStyle]{@link ButtonAttribute#fontStyle}、[fontFamily]{@link ButtonAttribute#fontFamily}、 > [fontWeight]{@link ButtonAttribute#fontWeight}进行设置。 > > - 设置[颜色渐变]{@link common}需先设置[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}为透明色。 > > - 在不设置borderRadius时，圆角矩形按钮的圆角大小保持默认值不变。圆角大小不会随按钮高度变化而变化，和controlSize属性有关，controlSize为NORMAL时圆角大小20vp，controlSize为 > SMALL时圆角大小14vp。 > > - 设置Button的[border]{@link CommonMethod#border}时，会有默认的 > [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}值。如果同时使用 > `border`和`borderRadius`，需将`borderRadius`放在`border`之后，以确保`borderRadius`不会被`border`中的默认`radius`覆盖。 |
| [ControlSize](arkts-controlsize-e.md) | 按钮的尺寸。 |

### Types

| Name | Description |
| --- | --- |
| [ButtonTriggerClickCallback](arkts-buttontriggerclickcallback-t.md) | 定义ButtonConfiguration中使用的回调类型。 |

### Constants

| Name | Description |
| --- | --- |
| [Button](arkts-button-con.md#Button) | 按钮组件，可快速创建不同样式的按钮。 > **说明：** ###### 子组件 可以包含单个子组件。 |
| [ButtonInstance](arkts-button-con.md#ButtonInstance) | Defines Button Component instance. |

