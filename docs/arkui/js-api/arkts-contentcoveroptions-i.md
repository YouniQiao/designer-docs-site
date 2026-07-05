# ContentCoverOptions

继承自[BindOptions](arkts-bindoptions-i.md#BindOptions)。 全屏模态页面内容选项。

**Inheritance:** ContentCoverOptionsextends: BindOptions.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableSafeArea

```TypeScript
enableSafeArea?: boolean
```

全屏模态是否适配安全区域，true表示全屏模态适配安全区域，将内容限制在安全区内，避让导航条和状态栏，false表示不做处理，和之前的样式保持一致。默认值为false。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transition

```TypeScript
transition?: TransitionEffect
```

全屏模态页面的自定义转场方式。

**Type:** TransitionEffect

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDismiss

```TypeScript
onWillDismiss?: Callback<DismissContentCoverAction>
```

全屏模态页面交互式关闭回调函数。 **说明：** 当用户执行back事件关闭交互操作时，如果注册该回调函数，则不会立刻关闭。在回调函数中可以通过reason得到阻拦关闭页面的操作类型，从而根据原因选择是否关闭全屏模态页面。在onWillDismiss回调中，不能再做 onWillDismiss拦截。

**Type:** Callback<DismissContentCoverAction>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## modalTransition

```TypeScript
modalTransition?: ModalTransition
```

全屏模态页面的系统转场方式。 默认值：ModalTransition.DEFAULT。 **说明：** 与transition同时设置时，此属性不生效。

**Type:** ModalTransition

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

