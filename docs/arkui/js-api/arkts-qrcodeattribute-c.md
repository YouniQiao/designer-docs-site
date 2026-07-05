# QRCodeAttribute

除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。

**Inheritance:** QRCodeAttributeextends: CommonMethod<QRCodeAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor(value: ResourceColor)
```

设置二维码背景颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 二维码背景颜色。 默认值：Color.White 从API version 11开始，默认值改为'#ffffffff'，且不跟随系统深浅色模式切换  而修改。 |

## color

```TypeScript
color(value: ResourceColor)
```

设置二维码颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 二维码颜色。默认值：'#ff000000'，且不跟随系统深浅色模式切换而修改。 |

## contentOpacity

```TypeScript
contentOpacity(value: number | Resource)
```

设置二维码内容颜色的不透明度。不透明度最小值为0，最大值为1。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| Resource | Yes | 二维码内容颜色的不透明度。 默认值：1 取值范围：[0, 1]，超出取值范围按默认值处理。 |

