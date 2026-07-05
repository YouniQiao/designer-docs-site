# navigation

Defines Navigation Component instance.

## navigation

```TypeScript
navigation()
```

创建路由导航的根视图容器，适用于使用[NavRouter]{@link nav_router}组件进行页面路由。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
navigation(pathInfos: NavPathStack)
```

绑定导航控制器到Navigation组件，适用于使用[NavPathStack]{@link NavPathStack}配合 [navDestination]{@link NavigationAttribute#navDestination}属性进行页面路由。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pathInfos | NavPathStack | 是 | 导航控制器对象。 |

```TypeScript
navigation(pathInfos: NavPathStack, homeDestination: HomePathInfo)
```

绑定路由栈到Navigation组件，并且指定一个NavDestination作为Navigation的导航页（主页），适用于使用[NavPathStack]{@link NavPathStack}配合 [navDestination]{@link NavigationAttribute#navDestination}属性或者系统路由表进行页面路由。使用示例参考 [示例16（Navigation使用NavDestination作为导航页）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例16navigation使用navdestination作为导航页)。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pathInfos | NavPathStack | 是 | 路由栈信息。 |
| homeDestination | HomePathInfo | 是 | 主页NavDestination信息。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [NavigationAttribute](arkts-navigationattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |
| [NavPathInfo](arkts-navpathinfo-c.md) | 路由页面信息。 |
| [NavPathStack](arkts-navpathstack-c.md) | Navigation导航控制器，以栈的数据结构管理Navigation中所有的子页面，并提供栈操作的方法用于控制Navigation中子页面的切换。 从API version 12开始，NavPathStack允许被继承，派生类对象可以替代基类NavPathStack对象使用。使用示例参见 [示例10](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例10定义导航控制器派生类)。 > **说明：** > > 1.连续调用多个导航控制器操作方法时，中间过程会被忽略，显示最终的栈操作结果。 > 例如：在Page1页面先pop再push一个Page1，系统会认为操作前和操作后的结果一致而不进行任何操作，如果需要强行push一个Page1实例，可以设置 > [NavigationOption]{@link NavigationOptions}中的launchMode属性值为LaunchMode.NEW_INSTANCE模式。 > > 2.不建议开发者通过监听页面生命周期的方式管理自己的导航控制器。 > > 3.在应用处于后台状态下，调用NavPathStack的栈操作方法，会在应用再次回到前台状态时触发刷新。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [HomePathInfo](arkts-homepathinfo-i.md) | 主页NavDestination的信息。 |
| [MoreButtonOptions](arkts-morebuttonoptions-i.md) | 更多图标的菜单选项。 |
| [NavContentInfo](arkts-navcontentinfo-i.md) | 跳转Destination信息。 |
| [NavigationAnimatedTransition](arkts-navigationanimatedtransition-i.md) | 自定义转场动画协议，开发者需实现该协议来定义Navigation路由跳转的跳转动画。 |
| [NavigationCommonTitle](arkts-navigationcommontitle-i.md) | Navigation通用标题。 |
| [NavigationConfiguration](arkts-navigationconfiguration-i.md) | 导航配置选项。 |
| [NavigationCustomTitle](arkts-navigationcustomtitle-i.md) | Navigation自定义标题。 |
| [NavigationDividerStyle](arkts-navigationdividerstyle-i.md) | Navigation分割线颜色及上下边距。 |
| [NavigationInterception](arkts-navigationinterception-i.md) | Navigation跳转拦截对象。 ###### InterceptionShowCallback<sup>12+</sup> type InterceptionShowCallback = (from: NavDestinationContext | NavBar, to: NavDestinationContext | NavBar, operation: NavigationOperation, isAnimated: boolean) => void Navigation页面跳转前和页面跳转后的拦截回调。 **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full **参数：** | 参数名 | 类型 | 必填 | 说明 | | ------ | ------ | ---- | ---------------- | | from | [NavDestinationContext]{@link NavDestinationContext} \| [NavBar]{@link NavBar} | 是 | 页面跳转之前的栈顶页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。 | | to | [NavDestinationContext]{@link NavDestinationContext} \| [NavBar]{@link NavBar} | 是 | 页面跳转之后的栈顶页面信息。参数值为navBar，则表示跳转的目标页面为Navigation首页。 | | operation | [NavigationOperation]{@link NavigationOperation} | 是 | 当前页面跳转类型。 | | isAnimated | boolean | 是 | 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。 | ###### InterceptionModeCallback<sup>12+</sup> type InterceptionModeCallback = (mode: NavigationMode) => void Navigation单双栏显示状态发生变更时的拦截回调。 **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full **参数：** | 参数名 | 类型 | 必填 | 说明 | | ------ | ------ | ---- | ---------------- | | mode | [NavigationMode]{@link NavigationMode} | 是 | 导航页的显示模式。 | ###### InterceptionCallback<sup>22+</sup> type InterceptionCallback = (from: NavPathInfo | NavBar, to: NavPathInfo | NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void Navigation页面跳转前的拦截回调。 **原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full **参数：** | 参数名 | 类型 | 必填 | 说明 | | ------ | ------ | ---- | ---------------- | | from | [NavPathInfo]{@link NavPathInfo} \|[NavBar]{@link NavBar} | 是 | 退场页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。 | | to | [NavPathInfo]{@link NavPathInfo} \|[NavBar]{@link NavBar} | 是 | 进场页面信息。参数值为navBar，则表示跳转的目标页面为Navigation首页。 | | pathStack | [NavPathStack]{@link NavPathStack} | 是 | 页面栈。 | | operation | [NavigationOperation]{@link NavigationOperation} | 是 | 当前页面跳转类型。 | | isAnimated | boolean | 是 | 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。 | |
| [NavigationInterface](arkts-navigationinterface-i.md) | Navigation组件是路由导航的根视图容器，一般作为Page页面的根容器使用，其内部默认包含了标题栏、内容区和工具栏，其中内容区默认首页显示导航内容（Navigation的子组件）或非首页显示（ [NavDestination]{@link nav_destination}的子组件），首页和非首页通过路由进行切换。 > **说明：** > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea( > [SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD, SafeAreaType.CUTOUT], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重 > 写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link CommonMethod#expandSafeArea}属性实现安全区避让。 > > - [NavBar]{@link NavBar}嵌套使用Navigation时，内层NavDestination的生命周期不和外层NavDestination以及[全模态]{@link common}的生命周期进行联动。 > > - Navigation未设置主副标题（[title]{@link NavigationAttribute#title}或[subTitle]{@link NavigationAttribute#subTitle}）且 > [hideBackButton]{@link NavigationAttribute#hideBackButton}属性设置为true时，不显示标题栏。 > > - Navigation的子页面切换时，新页面会主动请求焦点。 > > - 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。 |
| [NavigationMenuItem](arkts-navigationmenuitem-i.md) | 导航菜单项，包括菜单图标和菜单信息。 |
| [NavigationMenuOptions](arkts-navigationmenuoptions-i.md) | 页面右上角菜单选项。 |
| [NavigationOptions](arkts-navigationoptions-i.md) | 路由栈操作选项。 |
| [NavigationTitleOptions](arkts-navigationtitleoptions-i.md) | 标题栏选项。 |
| [NavigationToolbarOptions](arkts-navigationtoolbaroptions-i.md) | 工具栏选项。 |
| [NavigationTransitionProxy](arkts-navigationtransitionproxy-i.md) | 自定义转场动画代理对象。 |
| [PopInfo](arkts-popinfo-i.md) | 下一个页面返回的回调信息载体。 |
| [ScrollEffectOptions](arkts-scrolleffectoptions-i.md) | 定义标题栏的滑动模糊效果选项。 |
| [ToolbarItem](arkts-toolbaritem-i.md) | 工具栏可配置参数。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BarStyle](arkts-barstyle-e.md) | 标题栏或工具栏的布局样式。NavDestination的工具栏不支持设置该属性。 |
| [LaunchMode](arkts-launchmode-e.md) | 路由栈操作模式。 |
| [NavBarPosition](arkts-navbarposition-e.md) | 导航页位置。 |
| [NavigationMode](arkts-navigationmode-e.md) | 导航页显示模式。Navigation处于分栏显示状态时，导航页和内容区之间会显示分割线。 > **说明：** > > 为了简化表示，可以将`组件宽度 - minContentWidth - 分割线宽度 (1px)`称为calcNavBarWidth。 **表1** navBarWidth最终取值与开发者设置值的关系表 | 开发者设置的navBarWidth值 | calcNavBarWidth计算值 | navBarWidth最终取值 | | --- | --- | --- | | navBarWidth < minNavBarWidth | NA | minNavBarWidth | | navBarWidth > maxNavBarWidth | calcNavBarWidth > maxNavBarWidth | maxNavBarWidth | | navBarWidth > maxNavBarWidth | calcNavBarWidth < minNavBarWidth | minNavBarWidth | | navBarWidth > maxNavBarWidth | minNavBarWidth ≤ calcNavBarWidth ≤ maxNavBarWidth | calcNavBarWidth | | minNavBarWidth ≤ navBarWidth ≤ maxNavBarWidth | calcNavBarWidth ≤ minNavBarWidth | minNavBarWidth | | minNavBarWidth ≤ navBarWidth ≤ maxNavBarWidth | minNavBarWidth < calcNavBarWidth <= navBarWidth | calcNavBarWidth | | minNavBarWidth ≤ navBarWidth ≤ maxNavBarWidth | calcNavBarWidth > navBarWidth | navBarWidth | |
| [NavigationOperation](arkts-navigationoperation-e.md) | 页面跳转类型。 |
| [NavigationTitleMode](arkts-navigationtitlemode-e.md) | 标题栏显示模式。 |
| [ScrollEffectType](arkts-scrolleffecttype-e.md) | 滑动模糊效果类型。 |
| [ToolbarItemStatus](arkts-toolbaritemstatus-e.md) | 工具栏单个选项的状态。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [InterceptionCallback](arkts-interceptioncallback-t.md) | Navigation页面跳转前的拦截回调。 |
| [InterceptionModeCallback](arkts-interceptionmodecallback-t.md) | Navigation单双栏显示状态发生变更时的拦截回调。 |
| [InterceptionShowCallback](arkts-interceptionshowcallback-t.md) | Navigation页面跳转前和页面跳转后的拦截回调。 |
| [Material](arkts-material-t.md) | 导入用于Navigation组件的材质类型。 |
| [NavBar](arkts-navbar-t.md) | Navigation首页名字。 |
| [SystemBarStyle](arkts-systembarstyle-t.md) | 状态栏的属性。在设置页面级状态栏属性时使用。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Navigation](arkts-navigation-con.md#Navigation) | Navigation组件是路由导航的根视图容器，一般作为Page页面的根容器使用，其内部默认包含了标题栏、内容区和工具栏，其中内容区默认首页显示导航内容（Navigation的子组件）或非首页显示（ [NavDestination]{@link nav_destination}的子组件），首页和非首页通过路由进行切换。 > **说明：** > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea( > [SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD, SafeAreaType.CUTOUT], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重 > 写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link CommonMethod#expandSafeArea}属性实现安全区避让。 > > - [NavBar]{@link NavBar}嵌套使用Navigation时，内层NavDestination的生命周期不和外层NavDestination以及[全模态]{@link common}的生命周期进行联动。 > > - Navigation未设置主副标题（[title]{@link NavigationAttribute#title}或[subTitle]{@link NavigationAttribute#subTitle}）且 > [hideBackButton]{@link NavigationAttribute#hideBackButton}属性设置为true时，不显示标题栏。 > > - Navigation的子页面切换时，新页面会主动请求焦点。 > > - 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。 ###### 子组件 可以包含子组件。 从API version 9开始，推荐与[NavRouter]{@link nav_router}组件搭配使用。 从API version 10开始，推荐使用[NavPathStack]{@link NavPathStack}配合[navDestination]{@link NavigationAttribute#navDestination}属 性进行页面路由。 |
| [NavigationInstance](arkts-navigation-con.md#NavigationInstance) | Defines Navigation Component instance. |

