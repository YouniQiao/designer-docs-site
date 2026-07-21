# NavRouter

The **NavRouter** component provides default processing logic for responding to clicks, eliminating the need for
manual logic definition.

> **NOTE**
>
> This component is deprecated since API version 13. You are advised to use [NavPathStack]{@link NavPathStack} in
> conjunction with the **navDestination** attribute for page routing.

## Child Components

This component must contain two child components, the second of which must be [NavDestination]{@link nav_destination}.

> **NOTE**  
>  
> 1. If there is only one child component, the navigation to the **NavDestination** component does not work.  
>  
> 2. If there is only the **NavDestination** child component, the navigation does not work.  
>  
> 3. If there are more than two child components, the excess child components are not displayed.  
>  
> 4. If the second child component is not **NavDestination**, the navigation does not work.

## NavRouter

```TypeScript
NavRouter()
```

Constructor.

**Since:** 9

**Deprecated since:** 13

**Substitutes:** <!--SUBSTITUTE_API-->NavDestinationAttribute<!--/SUBSTITUTE_API-->

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-NavRouterInterface-(): NavRouterAttribute--><!--Device-NavRouterInterface-(): NavRouterAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## NavRouter

```TypeScript
NavRouter(value: RouteInfo)
```

Provides route information so that clicking the **NavRouter** component redirects the user to the specified navigation destination page.

**Since:** 10

**Deprecated since:** 13

**Substitutes:** <!--SUBSTITUTE_API-->Navigation#NavPathInfo<!--/SUBSTITUTE_API-->

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-NavRouterInterface-(value: RouteInfo): NavRouterAttribute--><!--Device-NavRouterInterface-(value: RouteInfo): NavRouterAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RouteInfo](../../apis-network-kit/arkts-apis/arkts-network-vpnextension-routeinfo-t.md) | Yes | Route information.  |

## Summary

- [RouteInfo](arkts-arkui-navrouter-routeinfo-i.md)
- [NavRouteMode](arkts-arkui-navrouter-navroutemode-e.md)
