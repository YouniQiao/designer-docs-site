# nav_destination

Defines NavDestination Component instance.

## nav_destination

```TypeScript
nav_destination()
```

创建[Navigation]{@link navigation}子页面的根容器。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Classes

| Name | Description |
| --- | --- |
| [NavDestinationAttribute](arkts-navdestinationattribute-c.md) | 支持[通用属性]{@link common}。 除支持[通用事件]{@link common}外，还支持如下事件： |

### Interfaces

| Name | Description |
| --- | --- |
| [NavDestinationCommonTitle](arkts-navdestinationcommontitle-i.md) | NavDestination通用标题。 |
| [NavDestinationContext](arkts-navdestinationcontext-i.md) | NavDestination上下文信息。 |
| [NavDestinationCustomTitle](arkts-navdestinationcustomtitle-i.md) | NavDestination自定义标题。 |
| [NavDestinationInterface](arkts-navdestinationinterface-i.md) | 作为子页面的根容器，用于显示[Navigation]{@link navigation}的内容区。 > **说明：** > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea([SafeAreaType.SYSTEM], > [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link common}属性实现 > 安全区避让。 > > - NavDestination组件必须配合Navigation使用，作为Navigation目的页面的根节点，单独使用只能作为普通容器组件，不具备路由相关属性能力。 > > - 如果路由栈中间页面的生命周期发生变化，跳转之前的栈顶NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)与跳转之后的栈顶 > NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)均在最后触发。 > > - NavDestination未设置主副标题并且没有返回键时，不显示标题栏。 > > - 不建议设置位置、大小等布局相关属性，可能会造成页面显示异常。例如在NavDestination上添加[zIndex]{@link CommonMethod#zIndex}属性时，会覆盖掉系统设置的层级，可能导致出现显示异常。 |
| [NavDestinationTransition](arkts-navdestinationtransition-i.md) | NavDestination自定义动画接口。 |
| [NestedScrollInfo](arkts-nestedscrollinfo-i.md) | 嵌套可滚动容器组件信息 |
| [RouteMapConfig](arkts-routemapconfig-i.md) | 路由配置信息。 |

### Enums

| Name | Description |
| --- | --- |
| [NavDestinationActiveReason](arkts-navdestinationactivereason-e.md) | NavDestination激活态或者非激活态变化的原因。 |
| [NavDestinationMode](arkts-navdestinationmode-e.md) | NavDestination类型。 |
| [NavigationSystemTransitionType](arkts-navigationsystemtransitiontype-e.md) | 系统转场动画类型。 > **说明：** > 设置系统转场动画，支持分别设置系统标题栏动画和内容动画。 > 系统默认转场动画中只有STANDARD页面的push和pop动画有单独的标题栏动画，存在如下限制： > 设置NONE或者TITLE时没有系统转场动画，设置CONTENT和DEFAULT时默认系统转场动画。 |
| [VisibilityChangeReason](arkts-visibilitychangereason-e.md) | NavDestination可见性发生变化的原因。 |

### Types

| Name | Description |
| --- | --- |
| [NavDestinationTransitionDelegate](arkts-navdestinationtransitiondelegate-t.md) | NavDestination自定义转场动画的代理函数。 |
| [Orientation](arkts-orientation-t.md) | Orientation实例对象。 |
| [RestoreStateCallback](arkts-restorestatecallback-t.md) | 自定义页面状态恢复回调。 |
| [SaveStateCallback](arkts-savestatecallback-t.md) | 自定义页面状态保存回调。 |

### Constants

| Name | Description |
| --- | --- |
| [NavDestination](arkts-nav-destination-con.md#NavDestination) | 作为子页面的根容器，用于显示[Navigation]{@link navigation}的内容区。 > **说明：** > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea([SafeAreaType.SYSTEM], > [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link common}属性实现 > 安全区避让。 > > - NavDestination组件必须配合Navigation使用，作为Navigation目的页面的根节点，单独使用只能作为普通容器组件，不具备路由相关属性能力。 > > - 如果路由栈中间页面的生命周期发生变化，跳转之前的栈顶NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)与跳转之后的栈顶 > NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)均在最后触发。 > > - NavDestination未设置主副标题并且没有返回键时，不显示标题栏。 > > - 不建议设置位置、大小等布局相关属性，可能会造成页面显示异常。例如在NavDestination上添加[zIndex]{@link CommonMethod#zIndex}属性时，会覆盖掉系统设置的层级，可能导致出现显示异常。 ###### 子组件 > **说明：** > > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和 > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。 > > - 子组件个数：多个。 |
| [NavDestinationInstance](arkts-nav-destination-con.md#NavDestinationInstance) | Defines NavDestination Component instance. |

