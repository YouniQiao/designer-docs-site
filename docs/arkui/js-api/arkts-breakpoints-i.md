# BreakPoints

设置栅格容器组件的断点。更多断点的说明参考[栅格容器断点](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)。 <!--code_no_check-->

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reference

```TypeScript
reference?: BreakpointsReference
```

断点切换参照物。 默认值：BreakpointsReference.WindowSize 非法值：按默认值处理。

**Type:** BreakpointsReference

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: Array<string>
```

设置断点位置的单调递增数组。 默认值：["320vp", "600vp", "840vp"] 非法值：按默认值处理。 单位：vp

**Type:** Array<string>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

