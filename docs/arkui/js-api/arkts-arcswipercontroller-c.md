# ArcSwiperController

ArcSwiper容器组件的控制器，可以将此对象绑定至ArcSwiper组件，可以通过它控制翻页。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSwiperAttribute,ArcSwiper,ArcDirection,ArcSwiperController,ArcDotIndicator } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor()
```

ArcSwiperController的构造函数。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## finishAnimation

```TypeScript
finishAnimation(handler?: FinishAnimationHandler)
```

停止播放动画。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | FinishAnimationHandler | No | 动画结束的回调。 默认值：不传入的情况，无回调 |

## showNext

```TypeScript
showNext()
```

翻至下一页。翻页带动效切换过程，时长通过[duration](arkts-arcswiperattribute-c.md#duration)指定。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## showPrevious

```TypeScript
showPrevious()
```

翻至上一页。翻页带动效切换过程，时长通过[duration](arkts-arcswiperattribute-c.md#duration)指定。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

