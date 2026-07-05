# ON

用于便捷构建{@link On}对象的静态构造器，使用示例：ON.text('txt').enabled(true)。

**起始版本：** 23

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [belongingDisplay](arkts-on-belongingdisplay-f.md#belongingDisplay-1) | 指定目标组件所属的displayId。 |
| [checkable](arkts-on-checkable-f.md#checkable-1) | 指定目标组件的可勾选状态。 |
| [checked](arkts-on-checked-f.md#checked-1) | 指定目标组件的勾选状态。 |
| [clickable](arkts-on-clickable-f.md#clickable-1) | 指定目标组件的可点击状态。 |
| [description](arkts-on-description-f.md#description-1) | 指定目标组件的描述。 |
| [enabled](arkts-on-enabled-f.md#enabled-1) | 指定目标组件的可用状态。 |
| [focused](arkts-on-focused-f.md#focused-1) | 指定目标组件的聚焦状态。 |
| [hint](arkts-on-hint-f.md#hint-1) | 指定目标组件的提示文本。 |
| [id](arkts-on-id-f.md#id-1) | 指定目标组件的id。 |
| [id](arkts-on-id-f.md#id-2) | 指定目标组件的id。 |
| [inWindow](arkts-on-inwindow-f.md#inWindow-1) | 指定目标组件所在窗口所属应用的bundleName。 |
| [isAfter](arkts-on-isafter-f.md#isAfter-1) | 要求目标组件位于给定{@link On}对象指定的组件后方，用于相对定位组件。 |
| [isAfter](arkts-on-isafter-f.md#isAfter-2) | 要求目标组件位于给定{@link Component}对象指定的组件后方，用于相对定位组件。 |
| [isBefore](arkts-on-isbefore-f.md#isBefore-1) | 要求目标组件位于给定{@link On}对象指定的组件前方，用于相对定位组件。 |
| [isBefore](arkts-on-isbefore-f.md#isBefore-2) | 要求目标组件位于给定{@link Component}对象指定的组件前方，用于相对定位组件。 |
| [longClickable](arkts-on-longclickable-f.md#longClickable-1) | 指定目标组件的可长按状态。 |
| [originalText](arkts-on-originaltext-f.md#originalText-1) | 指定目标组件的原始文本。 如果组件的无障碍属性 [accessibilityLevel]./@internal/component/ets/common:CommonMethod#accessibilityLevel 设置为'no'或'no-hide-descendants'， 将无法使用{@link On.text}匹配具有指定原始文本的组件，但可以使用此方法实现； 如果组件未设置上述无障碍属性，此方法与{@link On.text}无区别。 |
| [scrollable](arkts-on-scrollable-f.md#scrollable-1) | 指定目标组件的可滚动状态。 |
| [selected](arkts-on-selected-f.md#selected-1) | 指定目标组件的选中状态。 |
| [text](arkts-on-text-f.md#text-1) | 指定目标组件的文本。 |
| [type](arkts-on-type-f.md#type-1) | 指定目标组件的类型。 |
| [type](arkts-on-type-f.md#type-2) | 指定目标组件的类型。 |
| [within](arkts-on-within-f.md#within-1) | 要求目标组件位于给定{@link On}对象指定的组件内部，用于相对定位组件。 |
| [within](arkts-on-within-f.md#within-2) | 要求目标组件位于给定{@link Component}对象指定的组件内部，用于相对定位组件。 |

