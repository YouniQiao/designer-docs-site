# scroll

定义Scroll组件实例。

## scroll

```TypeScript
scroll(scroller?: Scroller)
```

创建Scroll滚动容器。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scroller | Scroller | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ScrollAttribute](arkts-scrollattribute-c.md) | 定义Scroll组件的属性函数。 |
| [Scroller](arkts-scroller-c.md) | 可滚动容器组件的控制器，可以将此组件绑定至容器组件，然后通过它控制容器组件的滚动。同一个控制器不可以控制多个容器组件，目前支持绑定到ArcList、ArcScrollBar、List、Scroll、ScrollBar、Grid、WaterFlow上。 <p><strong>说明</strong> <br>1、Scroller控制器与滚动容器组件的绑定发生在组件创建阶段。 <br>2、Scroller控制器与滚动容器组件绑定后才可以正常调用Scroller方法，否则根据调用接口不同会不生效或者抛异常。 <br>3、以aboutToAppear为例，aboutToAppear在创建自定义组件的新实例后，在执行其build()方法之前执行。因此如果滚动组件在自定义组件build内，在该自定义组件aboutToAppear执行时，内部滚动组件还没有创建，是不能正常调用上述Scroller方法的。 <br>4、以onAppear为例，组件挂载显示后触发此回调。因此在滚动组件的onAppear回调执行时，滚动组件已经创建并已经和Scroller绑定成功，是可以正常调用Scroller方法的。 </p> |

### 接口

| 名称 | 描述 |
| --- | --- |
| [OffsetOptions](arkts-offsetoptions-i.md) | 设置初始滚动偏移量的参数。 |
| [OffsetResult](arkts-offsetresult-i.md) | 表示滚动操作产生的偏移量。 |
| [OnScrollFrameBeginHandlerResult](arkts-onscrollframebeginhandlerresult-i.md) | onScrollFrameBegin回调返回的实际滚动偏移量。 |
| [ScrollAnimationOptions](arkts-scrollanimationoptions-i.md) | 自定义滚动动画的参数。 |
| [ScrollEdgeOptions](arkts-scrolledgeoptions-i.md) | 滚动到容器边缘的参数。 |
| [ScrollInterface](arkts-scrollinterface-i.md) | 可滚动的容器组件，当子组件的布局尺寸超过父组件的尺寸时，内容可以滚动。 |
| [ScrollOptions](arkts-scrolloptions-i.md) | 滑动到指定位置的参数。 |
| [ScrollPageOptions](arkts-scrollpageoptions-i.md) | 翻页滚动行为的参数。 |
| [ScrollSnapOptions](arkts-scrollsnapoptions-i.md) | 限位滚动模式对象。 |
| [ScrollToIndexOptions](arkts-scrolltoindexoptions-i.md) | 滚动到指定索引的参数。 |
| [UIScrollEvent](arkts-uiscrollevent-i.md) | 定义UIScrollEvent，用于设置目标组件的不同通用事件。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ScrollAlign](arkts-scrollalign-e.md) | 滚动对齐模式枚举。 |
| [ScrollDirection](arkts-scrolldirection-e.md) | 滚动方向枚举。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OnScrollEdgeCallback](arkts-onscrolledgecallback-t.md) | 滚动到边缘时触发的回调。 |
| [OnScrollFrameBeginCallback](arkts-onscrollframebegincallback-t.md) | Scroll每帧滚动前触发的回调。 |
| [ScrollOnDidZoomCallback](arkts-scrollondidzoomcallback-t.md) | Scroll每帧缩放完成时触发的回调。 |
| [ScrollOnScrollCallback](arkts-scrollonscrollcallback-t.md) | Scroll滚动时触发的回调。 <p><strong>说明</strong> <br>若通过onScrollFrameBegin事件和scrollBy方法实现容器嵌套滚动，需设置子滚动节点的EdgeEffect为None。如Scroll嵌套List滚动时，List组件的edgeEffect属性需设置为EdgeEffect.None。 </p> |
| [ScrollOnWillScrollCallback](arkts-scrollonwillscrollcallback-t.md) | Scroll滚动前触发的回调。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Scroll](arkts-scroll-con.md#Scroll) | 可滚动的容器组件，当子组件的布局尺寸超过父组件的尺寸时，内容可以滚动。 > **说明：** > > - 该组件嵌套List子组件滚动时，若List不设置宽高，则默认全部加载，在对性能有要求的场景下建议指定List的宽高。 > - 该组件滚动的前提是主轴方向大小小于内容大小。 > - Scroll组件通用属性clip的默认值为true。 > ###### 子组件 支持单个子组件。 |
| [ScrollInstance](arkts-scroll-con.md#ScrollInstance) | 定义Scroll组件实例。 |

