# PageTransitionEnter

Provides an interface to set transition style when a page enters.

## PageTransitionEnter

```TypeScript
PageTransitionEnter(value: PageTransitionOptions)
```

Sets the page entrance animation.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PageTransitionOptions | Yes | pageTransition options |

## PageTransitionEnter

```TypeScript
PageTransitionEnter(event: PageTransitionCallback)
```

Invoked on a per-frame basis until the entrance animation is complete, with the **progress** parameter changing from 0 to 1.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PageTransitionCallback | Yes | Callback invoked on a per-frame basis until the entrance animation iscomplete, with the **progress** parameter changing from 0 to 1. |

## Summary

- [PageTransitionExitInterface](arkts-arkui-pagetransitionenter-pagetransitionexitinterface-i.md)
- [PageTransitionOptions](arkts-arkui-pagetransitionenter-pagetransitionoptions-i.md)
- [PageTransitionCallback](arkts-arkui-pagetransitionenter-pagetransitioncallback-t.md)
- [RouteType](arkts-arkui-pagetransitionenter-routetype-e.md)
- [SlideEffect](arkts-arkui-pagetransitionenter-slideeffect-e.md)
