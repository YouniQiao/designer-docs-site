# @ohos.arkui.ArcSwiper

## Modules to Import

```TypeScript
import { ArcSwiperAttribute,ArcSwiper,ArcDirection,ArcSwiperController,ArcDotIndicator } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ArcDotIndicator](arkts-arcdotindicator-c.md) | 提供弧形圆点指示器属性及功能。 |
| [ArcSwiperAttribute](arkts-arcswiperattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性。 |
| [ArcSwiperController](arkts-arcswipercontroller-c.md) | ArcSwiper容器组件的控制器，可以将此对象绑定至ArcSwiper组件，可以通过它控制翻页。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ArcSwiperInterface](arkts-arcswiperinterface-i.md) | Provide an interface for ArcSwiper. |
| [SwiperContentAnimatedTransition](arkts-swipercontentanimatedtransition-i.md) | ArcSwiper自定义切换动画相关信息。 |
| [SwiperContentTransitionProxy](arkts-swipercontenttransitionproxy-i.md) | ArcSwiper自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画视窗内的页面信息，同时，也可以通过调用该对象的finishTransition接口通知ArcSwiper组件页面自定义动画已结 束。 > **说明：** > - 假设当前选中的子组件的索引为0，从第0页切换到第1页的动画过程中，每帧都会对视窗内所有页面触发回调，当视窗内有第0页和第1页两页时，每帧会触发两次回调。其中第一次回调的selectedIndex为0，index为0， > position为当前帧第0页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第0页的长度；第二次回调的selectedIndex仍为0，index为1，position为当前帧第1页相对于动画开始前第0 > 页的移动比例，mainAxisLength为主轴方向上第1页的长度。 > > - 若动画曲线为弹簧插值曲线，从第0页切换到第1页的动画过程中，可能会因为离手时的位置和速度，先过滑到第2页，再回弹到第1页，该过程中每帧会对视窗内第1页和第2页触发回调。 |

### Enums

| Name | Description |
| --- | --- |
| [ArcDirection](arkts-arcdirection-e.md) | 弧形方向。 |

### Types

| Name | Description |
| --- | --- |
| [AnimationEndHandler](arkts-animationendhandler-t.md) | 切换动画结束时的回调。 |
| [AnimationStartHandler](arkts-animationstarthandler-t.md) | 切换动画开始时的回调。 |
| [FinishAnimationHandler](arkts-finishanimationhandler-t.md) | 停止播放动画时，告知应用。 |
| [GestureSwipeHandler](arkts-gestureswipehandler-t.md) | 在页面跟手滑动过程中，逐帧触发的回调。 |
| [IndexChangedHandler](arkts-indexchangedhandler-t.md) | 当前显示元素的索引变化时，告知应用。 |

