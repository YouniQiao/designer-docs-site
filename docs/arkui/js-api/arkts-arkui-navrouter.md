# NavRouter

The **NavRouter** component provides default processing logic for responding to clicks, eliminating the need for
manual logic definition.


## NavRouter

```TypeScript
NavRouter()
```

Constructor.

**Since:** 9

**Deprecated since:** 13

**Substitutes:** <!--SUBSTITUTE_API-->NavDestinationAttribute<!--/SUBSTITUTE_API-->

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## NavRouter

```TypeScript
NavRouter(value: RouteInfo)
```

Provides route information so that clicking the **NavRouter** component redirects the user to the specified
navigation destination page.

**Since:** 10

**Deprecated since:** 13

**Substitutes:** <!--SUBSTITUTE_API-->Navigation#NavPathInfo<!--/SUBSTITUTE_API-->

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RouteInfo | Yes | Route information. |

## Summary

- [RouteInfo](arkts-arkui-navrouter-routeinfo-i.md)
- [NavRouteMode](arkts-arkui-navrouter-navroutemode-e.md)
