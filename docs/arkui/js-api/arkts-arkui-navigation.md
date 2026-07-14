# Navigation

The **Navigation** component is the root view container for navigation. It typically functions as the root container of a page and includes a title bar, content area, and toolbar. The content area switches between the home page content (child components of **Navigation**) and non-home page content (child components of [NavDestination]{@link nav_destination}) through routing. > **NOTE** > - Since API version 11, this component supports the safe area attribute by default, with the default attribute > value being > **expandSafeArea([SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD, SafeAreaType.CUTOUT], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])**. > You can override this attribute to change the default behavior. In earlier versions, you need to use the > [expandSafeArea]{@link CommonMethod#expandSafeArea} attribute to implement the safe area feature. > > - When [NavBar]{@link NavBar} is nested within a **Navigation** component, the lifecycle of the inner > **NavDestination** component does not synchronize with the outer **NavDestination** component or the lifecycle of a > [modal]{@link common}. > > - If the [title]{@link NavigationAttribute#title} and [subTitle]{@link NavigationAttribute#subTitle} are not set > and [hideBackButton]{@link NavigationAttribute#hideBackButton} is set to **true**, the title bar is not displayed. > > - During subpage navigation within **Navigation**, the new page actively requests focus. > > - You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation > failures.

## Navigation

```TypeScript
Navigation()
```

Creates a root view container for route navigation, suitable for page routing using the [NavRouter]{@link nav_router} component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Navigation

```TypeScript
Navigation(pathInfos: NavPathStack)
```

Binds a navigation controller to the **Navigation** component, suitable for page routing using [NavPathStack]{@link NavPathStack} with the [navDestination]{@link NavigationAttribute#navDestination} attribute.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pathInfos | NavPathStack | Yes | Navigation controller object. |

## Navigation

```TypeScript
Navigation(pathInfos: NavPathStack, homeDestination: HomePathInfo)
```

Binds a routing stack to the **Navigation** component and specifies a **NavDestination** component as the navigation page (home page) for **Navigation**. This is suitable for page routing using [NavPathStack]{@link NavPathStack} with the [navDestination]{@link NavigationAttribute#navDestination} attribute or the system routing table. For the usage example, see [Example 16: Using NavDestination as a Navigation Page in Navigation](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#example-16-using-navdestination-as-a-navigation-page-in-navigation).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pathInfos | NavPathStack | Yes | Information about the routing stack. |
| homeDestination | HomePathInfo | Yes | Home page **NavDestination** information. |

## Summary

- [HomePathInfo](arkts-arkui-navigation-homepathinfo-i.md)
- [MoreButtonOptions](arkts-arkui-navigation-morebuttonoptions-i.md)
- [NavContentInfo](arkts-arkui-navigation-navcontentinfo-i.md)
- [NavigationAnimatedTransition](arkts-arkui-navigation-navigationanimatedtransition-i.md)
- [NavigationCommonTitle](arkts-arkui-navigation-navigationcommontitle-i.md)
- [NavigationConfiguration](arkts-arkui-navigation-navigationconfiguration-i.md)
- [NavigationCustomTitle](arkts-arkui-navigation-navigationcustomtitle-i.md)
- [NavigationDividerStyle](arkts-arkui-navigation-navigationdividerstyle-i.md)
- [NavigationInterception](arkts-arkui-navigation-navigationinterception-i.md)
- [NavigationMenuItem](arkts-arkui-navigation-navigationmenuitem-i.md)
- [NavigationMenuOptions](arkts-arkui-navigation-navigationmenuoptions-i.md)
- [NavigationOptions](arkts-arkui-navigation-navigationoptions-i.md)
- [NavigationTitleOptions](arkts-arkui-navigation-navigationtitleoptions-i.md)
- [NavigationToolbarOptions](arkts-arkui-navigation-navigationtoolbaroptions-i.md)
- [NavigationTransitionProxy](arkts-arkui-navigation-navigationtransitionproxy-i.md)
- [PopInfo](arkts-arkui-navigation-popinfo-i.md)
- [ScrollEffectOptions](arkts-arkui-navigation-scrolleffectoptions-i.md)
- [ToolbarItem](arkts-arkui-navigation-toolbaritem-i.md)
- [InterceptionCallback](arkts-arkui-navigation-interceptioncallback-t.md)
- [InterceptionModeCallback](arkts-arkui-navigation-interceptionmodecallback-t.md)
- [InterceptionShowCallback](arkts-arkui-navigation-interceptionshowcallback-t.md)
- [Material](arkts-arkui-navigation-material-t.md)
- [NavBar](arkts-arkui-navigation-navbar-t.md)
- [SystemBarStyle](arkts-arkui-navigation-systembarstyle-t.md)
- [BarStyle](arkts-arkui-navigation-barstyle-e.md)
- [LaunchMode](arkts-arkui-navigation-launchmode-e.md)
- [NavBarPosition](arkts-arkui-navigation-navbarposition-e.md)
- [NavigationMode](arkts-arkui-navigation-navigationmode-e.md)
- [NavigationOperation](arkts-arkui-navigation-navigationoperation-e.md)
- [NavigationTitleMode](arkts-arkui-navigation-navigationtitlemode-e.md)
- [ScrollEffectType](arkts-arkui-navigation-scrolleffecttype-e.md)
- [ToolbarItemStatus](arkts-arkui-navigation-toolbaritemstatus-e.md)
