# RadioStyle

单选框的颜色。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## uncheckedBorderColor

```TypeScript
uncheckedBorderColor?: ResourceColor
```

关闭状态描边颜色。 默认值：`$r('sys.color.ohos_id_color_switch_outline_off')`

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## checkedBackgroundColor

```TypeScript
checkedBackgroundColor?: ResourceColor
```

开启状态底板颜色。 默认值：`$r('sys.color.ohos_id_color_text_primary_activated')`

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## indicatorColor

```TypeScript
indicatorColor?: ResourceColor
```

开启状态内部圆饼颜色。从API version 12开始，indicatorType设置为RadioIndicatorType.TICK和RadioIndicatorType.DOT时，支持修改内部颜色。indicatorType 设置为RadioIndicatorType.CUSTOM时，不支持修改内部颜色。 默认值：`$r('sys.color.ohos_id_color_foreground_contrary')`

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

