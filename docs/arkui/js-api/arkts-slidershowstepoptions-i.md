# SliderShowStepOptions

Slider刻度点的无障碍文本信息映射集。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stepsAccessibility

```TypeScript
stepsAccessibility?: Map<number, SliderStepItemAccessibility>
```

用于设置刻度点提供辅助功能文本，供屏幕阅读器等工具读取，增强无障碍功能。 Key取值范围：[0, INT32_MAX]，当Key设定为负数和小数时，设定项不生效。 默认值：{}

**Type:** Map<number, SliderStepItemAccessibility>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

