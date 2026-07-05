# NavigationTransitionProxy

自定义转场动画代理对象。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## cancelTransition

```TypeScript
cancelTransition?(): void
```

取消本次交互转场，恢复到页面跳转前的路由栈(不支持取消不可交互转场动画)。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## finishTransition

```TypeScript
finishTransition(): void
```

结束本次自定义转场动画，开发者需要主动触发该方法来结束本次转场，否则系统会在timeout的时间后结束本次转场。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## updateTransition

```TypeScript
updateTransition?(progress: number): void
```

更新交互转场动画进度(不可交互动画不支持动画进度设置)。 > **说明：** > > 不建议在[aboutToAppear]BaseCustomComponent#aboutToAppear中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| progress | number | Yes | 设置交互转场动画进度百分比。取值范围：[0, 1] |

## isInteractive

```TypeScript
isInteractive?: boolean
```

本次转场动画是否为可交互转场。 true：本次转场动画是可交互转场；false：本次转场动画不是可交互转场。 默认值：false

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## from

```TypeScript
from: NavContentInfo
```

退场页面信息。

**Type:** NavContentInfo

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## to

```TypeScript
to: NavContentInfo
```

进场页面信息。

**Type:** NavContentInfo

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

