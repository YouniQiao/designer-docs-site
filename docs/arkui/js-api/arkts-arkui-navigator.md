# Navigator

The **Navigator** component provides redirection.

## Navigator

```TypeScript
Navigator(value?: { target: string; type?: NavigationType })
```

Called when the route jumps.

**Since:** 7

**Deprecated since:** 13

**Substitutes:** <!--SUBSTITUTE_API-->NavPathInfo<!--/SUBSTITUTE_API-->

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { target: string; type?: NavigationType } | No | Information about the page to be redirected to.<br/>target: Path of the target page to beredirected to. <br/>type: Navigation type.<br>Default value: **NavigationType.Push** |

## Navigator

```TypeScript
Navigator()
```

Called when using the navigator.

**Since:** 7

**Deprecated since:** 13

**Substitutes:** <!--SUBSTITUTE_API-->NavigationAttribute<!--/SUBSTITUTE_API-->

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

- [NavigationType](arkts-arkui-navigator-navigationtype-e.md)
