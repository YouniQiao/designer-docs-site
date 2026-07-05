# NavigationInterception

Navigation跳转拦截对象。 ###### InterceptionShowCallback<sup>12+</sup> type InterceptionShowCallback = (from: NavDestinationContext | NavBar, to: NavDestinationContext | NavBar, operation: NavigationOperation, isAnimated: boolean) => void Navigation页面跳转前和页面跳转后的拦截回调。 **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full **参数：** | 参数名 | 类型 | 必填 | 说明 | | ------ | ------ | ---- | ---------------- | | from | [NavDestinationContext]NavDestinationContext \| [NavBar](arkts-navbar-t.md#NavBar) | 是 | 页面跳转之前的栈顶页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。 | | to | [NavDestinationContext]NavDestinationContext \| [NavBar](arkts-navbar-t.md#NavBar) | 是 | 页面跳转之后的栈顶页面信息。参数值为navBar，则表示跳转的目标页面为Navigation首页。 | | operation | [NavigationOperation](arkts-navigationoperation-e.md#NavigationOperation) | 是 | 当前页面跳转类型。 | | isAnimated | boolean | 是 | 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。 | ###### InterceptionModeCallback<sup>12+</sup> type InterceptionModeCallback = (mode: NavigationMode) => void Navigation单双栏显示状态发生变更时的拦截回调。 **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full **参数：** | 参数名 | 类型 | 必填 | 说明 | | ------ | ------ | ---- | ---------------- | | mode | [NavigationMode](arkts-navigationmode-e.md#NavigationMode) | 是 | 导航页的显示模式。 | ###### InterceptionCallback<sup>22+</sup> type InterceptionCallback = (from: NavPathInfo | NavBar, to: NavPathInfo | NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void Navigation页面跳转前的拦截回调。 **原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full **参数：** | 参数名 | 类型 | 必填 | 说明 | | ------ | ------ | ---- | ---------------- | | from | [NavPathInfo](arkts-navpathinfo-c.md#NavPathInfo) \|[NavBar](arkts-navbar-t.md#NavBar) | 是 | 退场页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。 | | to | [NavPathInfo](arkts-navpathinfo-c.md#NavPathInfo) \|[NavBar](arkts-navbar-t.md#NavBar) | 是 | 进场页面信息。参数值为navBar，则表示跳转的目标页面为Navigation首页。 | | pathStack | [NavPathStack](arkts-navpathstack-c.md#NavPathStack) | 是 | 页面栈。 | | operation | [NavigationOperation](arkts-navigationoperation-e.md#NavigationOperation) | 是 | 当前页面跳转类型。 | | isAnimated | boolean | 是 | 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。 |

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## willShow

```TypeScript
willShow?: InterceptionShowCallback
```

页面跳转前的回调，允许操作栈，在当前跳转中生效。拦截的页面会被创建。

**Type:** InterceptionShowCallback

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## interception

```TypeScript
interception?: InterceptionCallback
```

页面跳转前的回调，允许操作栈，在当前跳转中生效。拦截的页面不会被创建。

**Type:** InterceptionCallback

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## didShow

```TypeScript
didShow?: InterceptionShowCallback
```

页面跳转后回调。在该回调中操作栈在下一次跳转中刷新。

**Type:** InterceptionShowCallback

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## modeChange

```TypeScript
modeChange?: InterceptionModeCallback
```

Navigation单双栏显示状态发生变更时触发该回调。

**Type:** InterceptionModeCallback

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

