# NavigationAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** NavigationAttributeextends: CommonMethod<NavigationAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backButtonIcon

```TypeScript
backButtonIcon(value: string | PixelMap | Resource | SymbolGlyphModifier)
```

设置标题栏中返回键图标。 > **说明：** > > 不支持通过[SymbolGlyphModifier](arkts-symbolglyphmodifier-c.md#SymbolGlyphModifier)对象的 > [fontSize]SymbolGlyphAttribute#fontSize属性修改图标大小、 > [effectStrategy]SymbolGlyphAttribute#effectStrategy属性修改动效、 > [symbolEffect]SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)属性修改动效类型。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| PixelMap \| Resource \| SymbolGlyphModifier | Yes | 标题栏中返回键图标。 [since 9 - 11] |

## backButtonIcon

```TypeScript
backButtonIcon(icon: string | PixelMap | Resource | SymbolGlyphModifier, accessibilityText?: ResourceStr)
```

设置标题栏中返回键图标和无障碍播报内容。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。 > > 不支持通过[SymbolGlyphModifier](arkts-symbolglyphmodifier-c.md#SymbolGlyphModifier)对象的 > [fontSize]SymbolGlyphAttribute#fontSize属性修改图标大小、 > [effectStrategy]SymbolGlyphAttribute#effectStrategy属性修改动效、 > [symbolEffect]SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)属性修改动效类型。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| icon | string \| PixelMap \| Resource \| SymbolGlyphModifier | Yes | 标题栏中返回键图标。 |
| accessibilityText | ResourceStr | No |  |

## configuration

```TypeScript
configuration(config: NavigationConfiguration)
```

设置导航配置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | NavigationConfiguration | Yes | 导航配置选项。 |

## customNavContentTransition

```TypeScript
customNavContentTransition(delegate: (from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation)
    => NavigationAnimatedTransition | undefined)
```

自定义转场动画回调。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delegate | (from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation)
    => NavigationAnimatedTransition \| undefined | Yes | 自定义转场动画回调。 from：退场Destination的页面。 to：进场Destination的页面。operation：转场类型。 返  回NavigationAnimatedTransition时，表示自定义转场动画协议。 undefined: 返回未定义，执行默认转场动效。 |

## divider

```TypeScript
divider(style: NavigationDividerStyle | null)
```

设置Navigation双栏模式下的分割线样式。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | NavigationDividerStyle \| null | Yes | 设置双栏分割线样式。 - null：隐藏分割线。 |

## enableDragBar

```TypeScript
enableDragBar(isEnabled: Optional<boolean>)
```

控制分栏场景下是否显示拖拽条。该属性在PC/2in1设备上不生效。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | Optional&lt;boolean> | Yes | 是否开启拖拽条，默认为无拖拽条样式。 true：有拖拽条样式；false：无拖拽条样式。 传入参数非法时，按false处理。 |

## enableModeChangeAnimation

```TypeScript
enableModeChangeAnimation(isEnabled: Optional<boolean>)
```

控制是否开启单双栏切换时的动效。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | Optional&lt;boolean> | Yes | 是否开启单双栏切换动效。 true：开启单双栏切换动效；false：关闭单双栏切换动效。 传入参数非法时，按true处理。 |

## enableToolBarAdaptation

```TypeScript
enableToolBarAdaptation(enable: Optional<boolean>)
```

设置是否启用Navigation和NavDestination的工具栏[toolbarConfiguration](arkts-navigationattribute-c.md#toolbarConfiguration)自适应能力。关闭此能 力后，底部工具栏[toolbarConfiguration](arkts-navigationattribute-c.md#toolbarConfiguration)将不会再移动至页面右上角的菜单中。该接口不适配于自定义菜单，使用该接口需采 用[NavigationMenuItem](arkts-navigationmenuitem-i.md#NavigationMenuItem)接口来定义 [菜单](arkts-navigationattribute-c.md#menus)。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean> | Yes | 是否启用Navigation和NavDestination的工具栏自适应能力。 默认值：true true：启用Navigation和  NavDestination的工具栏自适应能力。 false：不启用Navigation和NavDestination的工具栏自适应能力。 |

## enableVisibilityLifecycleWithContentCover

```TypeScript
enableVisibilityLifecycleWithContentCover(isEnabled: Optional<boolean>)
```

设置是否启用[NavDestination]nav_destination页面[onHidden]NavDestinationAttribute#onHidden、 [onShown]NavDestinationAttribute#onShown生命周期与全模态的联动触发。 > **说明：** > > 从API version 23开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | Optional&lt;boolean> | Yes | 是否启用NavDestination页面onShown、onHidden生命周期与全模态的联动触发。 默认值：true true：全  模态拉起时，会触发当前NavDestination页面的onHidden生命周期；全模态关闭时会触发当前NavDestination页面的onShown生命周期 false：NavDestination页面  onHidden、onShown生命周期不会因为全模态的拉起、关闭而触发。 |

## hideBackButton

```TypeScript
hideBackButton(value: boolean)
```

设置是否隐藏标题栏中的返回键。返回键仅在[titleMode](arkts-navigationattribute-c.md#titleMode)设置为NavigationTitleMode.Mini时才生效。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否隐藏标题栏中的返回键。 true：隐藏返回键。 false：显示返回键。 传入参数非法时，按false处理。 |

## hideNavBar

```TypeScript
hideNavBar(value: boolean)
```

设置是否隐藏导航页。设置为true时，隐藏Navigation的导航页，包括标题栏、内容区和工具栏。如果此时路由栈中存在NavDestination页面，则直接显示栈顶NavDestination页面，反之显示空白。 从API version 9开始到API version 10仅在双栏模式下生效。从API version 11开始在单栏、双栏与自适应模式均生效。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否隐藏导航页。 默认值：false true：隐藏导航页；false：显示导航页。 传入参数非法时，按false处理。 |

## hideTitleBar

```TypeScript
hideTitleBar(value: boolean)
```

设置是否隐藏标题栏。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否隐藏标题栏。 默认值：false true：隐藏标题栏；false：显示标题栏。 传入参数非法时，按false处理。 |

## hideTitleBar

```TypeScript
hideTitleBar(hide: boolean, animated: boolean)
```

设置是否隐藏标题栏。与[hideTitleBar](arkts-navigationattribute-c.md#hideTitleBar)相比，新增标题栏显隐时是否使用动画。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hide | boolean | Yes | 是否隐藏标题栏。 默认值：false true：隐藏标题栏；false：显示标题栏。 传入参数非法时，按false处理。 |
| animated | boolean | Yes | 设置是否使用动画显隐标题栏。 默认值：false true：使用动画显示隐藏标题栏；false：不使用动画显示隐藏标题栏。 传入参数非法时，按  false处理。 |

## hideToolBar

```TypeScript
hideToolBar(value: boolean)
```

设置是否隐藏工具栏。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否隐藏工具栏。 默认值：false true：隐藏工具栏；false：显示工具栏。 传入参数非法时，按false处理。 |

## hideToolBar

```TypeScript
hideToolBar(hide: boolean, animated: boolean)
```

设置是否隐藏工具栏。与[hideToolBar](arkts-navigationattribute-c.md#hideToolBar)相比，新增工具栏显隐时是否使用动画。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hide | boolean | Yes | 是否隐藏工具栏。 默认值：false true：隐藏工具栏；false：显示工具栏。 传入参数非法时，按false处理。 |
| animated | boolean | Yes | 设置是否使用动画显隐工具栏。 默认值：false true：使用动画显示隐藏工具栏；false：不使用动画显示隐藏工具栏。 传入参数非法时，按  false处理。 |

## ignoreLayoutSafeArea

```TypeScript
ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>)
```

控制组件的布局，使其扩展到非安全区域。 > **说明：** > > - 组件设置ignoreLayoutSafeArea之后生效的条件为： > > 设置LayoutSafeAreaType.SYSTEM时，组件的边界与非安全区域重合时组件能够延伸到非安全区域下。 > > - 若组件扩展到非安全区域内，此时在非安全区域里触发的事件（例如：点击事件）等可能会被系统拦截，优先响应状态栏等系统组件。 > > - 组件想要扩展到非安全区域内，需隐藏或者设置标题栏和工具栏为[STACK](arkts-barstyle-e.md#BarStyle)模式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;LayoutSafeAreaType> | No |  |
| edges | Array&lt;LayoutSafeAreaEdge> | No |  |

## menus

```TypeScript
menus(value: Array<NavigationMenuItem> | CustomBuilder)
```

设置页面右上角菜单。不设置时不显示菜单项。使用Array<[NavigationMenuItem](arkts-navigationmenuitem-i.md#NavigationMenuItem)&gt; 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标 会被放入自动生成的更多图标。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;NavigationMenuItem> \| CustomBuilder | Yes |  |

## menus

```TypeScript
menus(items: Array<NavigationMenuItem> | CustomBuilder, options?: NavigationMenuOptions)
```

设置页面右上角菜单。不设置时不显示菜单项。与[menus](arkts-navigationattribute-c.md#menus)相比， 新增菜单选项。使用Array<[NavigationMenuItem](arkts-navigationmenuitem-i.md#NavigationMenuItem)&gt; 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | Array&lt;NavigationMenuItem> \| CustomBuilder | Yes | 页面右上角菜单。 |
| options | NavigationMenuOptions | No |  |

## minContentWidth

```TypeScript
minContentWidth(value: Dimension)
```

设置导航页内容区最小宽度（双栏模式下生效）。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | 导航页内容区最小宽度。 默认值：360 单位：vp undefined：行为不做处理，导航页内容区最小宽度与默认值保持一致。 Auto模式断  点计算：默认600vp，minNavBarWidth(240vp) + minContentWidth (360vp) |

## mode

```TypeScript
mode(value: NavigationMode)
```

设置导航页的显示模式，支持单栏（Stack）、分栏（Split）和自适应（Auto）。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NavigationMode | Yes | 导航页的显示模式。 默认值：NavigationMode.Auto 自适应：基于组件宽度自适应单栏和双栏。 |

## navBarPosition

```TypeScript
navBarPosition(value: NavBarPosition)
```

设置导航页位置。仅在[mode](arkts-navigationattribute-c.md#mode)设置为NavigationMode.Auto或NavigationMode.Split时生效。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NavBarPosition | Yes | 导航页位置。 默认值：NavBarPosition.Start |

## navBarWidth

```TypeScript
navBarWidth(value: Length)
```

设置导航页宽度。仅在[mode](arkts-navigationattribute-c.md#mode)设置为NavigationMode.Auto或NavigationMode.Split时生效。 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 导航页宽度。 默认值：240 单位：vp undefined：行为不做处理，导航页宽度与默认值保持一致。 |

## navBarWidthRange

```TypeScript
navBarWidthRange(value: [Dimension, Dimension])
```

设置导航页最小和最大宽度（双栏模式下生效）。未设置该接口时，最小宽度默认为240vp，最大宽度默认为组件宽度的40%，且不大于432vp，即导航页和内容区之间的分割线可以在此范围内进行拖拽。拖拽分割线使导航页宽度变化时，内容区的内 容会被压缩。 分割线的拖拽范围： | 条件| 拖拽范围 | | ----| ----------- | |navBarWidthRange和minContentWidth同时设置 | 满足minContentWidth所设置的值后，在navBarWidthRange所设置的范围内进行拖拽 | |navBarWidthRange和minContentWidth均不设置 | 在navBarWidthRange默认的最小和最大范围内进行拖拽 | |仅设置navBarWidthRange属性 | 在navBarWidthRange所设置的范围内进行拖拽，最大拖拽范围不能超过minContentWidth的默认值 | |仅设置minContentWidth属性 | 在navBarWidthRange默认的最小和最大范围内进行拖拽 | |仅设置navBarWidth属性 | 不支持拖拽 |

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Dimension, Dimension] | Yes | 导航页最小和最大宽度。设置异常值时按默认值处理。 |

## navDestination

```TypeScript
navDestination(builder: (name: string, param: unknown) => void)
```

创建NavDestination组件。使用builder函数，基于name和param构造NavDestination组件。builder下只能有一个根节点。builder中允许在NavDestination组件外包含一层自定义组 件， 但自定义组件不允许设置属性和事件，否则仅显示空白。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | (name: string, param: unknown) => void | Yes | 创建NavDestination组件。name：NavDestination页面名称。param：开发者设置的NavDestination页面详细参数，unknown可以  是用户自定义的类型。 |

## onNavBarStateChange

```TypeScript
onNavBarStateChange(callback: (isVisible: boolean) => void)
```

导航页显示状态切换时触发该回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (isVisible: boolean) => void | Yes | isVisible为true时表示显示，为false时表示隐藏。 [since 10] |

## onNavigationModeChange

```TypeScript
onNavigationModeChange(callback: (mode: NavigationMode) => void)
```

当Navigation首次显示或者单双栏状态发生变化时触发该回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (mode: NavigationMode) => void | Yes | NavigationMode.Split：当前Navigation显示为双栏; NavigationMode.Stack：当前Navigation显示为单栏。 |

## onTitleModeChange

```TypeScript
onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void)
```

当[titleMode](arkts-navigationattribute-c.md#titleMode)为NavigationTitleMode.Free时，随着可滚动组件的滑动标题栏模式发生变化时触发此回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (titleMode: NavigationTitleMode) => void | Yes | 标题模式。 [since 10] |

## recoverable

```TypeScript
recoverable(recoverable: Optional<boolean>)
```

配置Navigation是否可恢复。如配置为可恢复，当应用进程异常退出并重新冷启动时，可自动创建该Navigation，并恢复至异常退出时的路由栈。 > **说明：** > > 1. 使用该接口需要先设置Navigation的通用属性[id]CommonMethod#id，否则该接口无效。 > > 2. 该接口需要配合NavDestination的[recoverable]NavDestinationAttribute#recoverable接口使用。 > > 3. 恢复的过程中不可序列化的信息，例如不可序列化的参数与用户设置的onPop等，会被丢弃，无法恢复。 > > 4. 当应用退到后台，因系统资源不足等原因被系统终止后，如果某页面已配置为可恢复，当应用再次被唤醒至前台时，系统将自动恢复该页面。详细说明请参考 > [UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)，详细使用请参考 > [示例18](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例18设置navigation可恢复)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recoverable | Optional&lt;boolean> | Yes | Navigation是否可恢复，默认为不可恢复。 true：路由栈可恢复；false：路由栈不可恢复。 传入参数非法时，按false处理。 |

## splitPlaceholder

```TypeScript
splitPlaceholder(placeholder: ComponentContent)
```

Navigation双栏模式下，支持设置右侧页面显示默认占位页，占位页仅作为UI展示页，不可获焦和响应事件。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| placeholder | ComponentContent | Yes | 设置Navigation双栏模式下右侧的默认占位页。 |

## subTitle

```TypeScript
subTitle(value: string)
```

设置页面副标题。 > **说明：

**Since:** 8

**Deprecated since:** 9

**Substitute:** title

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 页面副标题。 |

## systemBarStyle

```TypeScript
systemBarStyle(style: Optional<SystemBarStyle>)
```

当Navigation中显示Navigation首页时，设置对应系统状态栏的样式。 > **说明：** > > 1. 不建议混合使用systemBarStyle属性和window设置状态栏样式的相关接口，例如： > [setWindowSystemBarProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowsystembarproperties9)。 > > > 2. 初次设置Navigation/NavDestination的systemBarStyle属性时，会备份当前状态栏样式用于后续的恢复场景。 > > 3. Navigation总是以首页（路由栈内没有NavDestination时）或者栈顶NavDestination设置的状态栏样式为准。 > > 4. Navigation首页或者任何栈顶NavDestination页面，如果设置了有效的systemBarStyle，则会使用设置的样式，反之如果之前已经备份了样式，则使用备份的样式，否则不做任何处理。 > > 5. [Split](arkts-navigationmode-e.md#NavigationMode)模式下的Navigation，如果内容区没有NavDestination，则遵从Navigation首页的设置，反之则遵从栈顶NavDestination的设置。 > > > 6. 仅支持在主窗口的主页面中使用systemBarStyle设置状态栏样式。 > > 7. 仅当Navigation占满整个页面时，设置的样式才会生效，当Navigation没有占满整个页面时，如果有备份的样式，则恢复备份的样式。 > > 8. 当页面设置不同样式时，在页面转场开始时生效。 > > 9. 非全屏窗口下，Navigation/NavDestination设置的状态栏不生效。 > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;SystemBarStyle> | Yes | 系统状态栏样式。 |

## title

```TypeScript
title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle, options?: NavigationTitleOptions)
```

设置页面标题。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr \| CustomBuilder \| NavigationCommonTitle \| NavigationCustomTitle | Yes | 页面标题，使用  NavigationCustomTitle类型设置height高度时，[titleMode](arkts-navigationattribute-c.md#titleMode)属性不会生效。 字符串超长时，如果不设置副标题，  先缩小再换行（2行）最后截断。如果设置副标题，先缩小最后截断。 [since 10] |
| options | NavigationTitleOptions | No |  |

## titleMode

```TypeScript
titleMode(value: NavigationTitleMode)
```

设置页面标题栏显示模式。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NavigationTitleMode | Yes | 页面标题栏显示模式。 默认值：NavigationTitleMode.Free |

## toolBar

```TypeScript
toolBar(value: object | CustomBuilder)
```

设置工具栏内容。不设置时不显示工具栏。items均分底部工具栏，在每个均分内容区布局文本和图标，文本超长时，逐级缩小，缩小之后换行，最后截断。 **object类型说明：** | 名称 | 类型 | 必填 | 说明 | | ------ | ------------- | ---- | --------------- | | value | string | 是 | 工具栏单个选项的显示文本。 | | icon | string | 否 | 工具栏单个选项的图标资源路径。 | | action | () =&gt; void | 否 | 当前选项被选中的事件回调。 |

**Since:** 8

**Deprecated since:** 10

**Substitute:** navigation/NavigationAttribute#toolbarConfiguration

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | object \| CustomBuilder | Yes | 工具栏内容。 |

## toolbarConfiguration

```TypeScript
toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions)
```

设置工具栏内容。不设置时不显示工具栏。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ToolbarItem> \| CustomBuilder | Yes | 工具栏内容，使用Array设置的工具栏有如下特性：工具栏所有选项均分底部工具栏，在每个均分内容区布局文本和图标。 竖屏模式最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。横屏模式时，如果为  [Split](arkts-navigationmode-e.md#NavigationMode)模式，仍按照竖屏模式显示，如果为[Stack](arkts-navigationmode-e.md#NavigationMode)模式需配合menus属性的Array使用，底部工具栏会自动隐藏，同时底部工具栏所有选项移动至页面右上角菜单。 使用  [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)写法为用户自定义工具栏选项，不具备以上功能。 |
| options | NavigationToolbarOptions | No |  |

