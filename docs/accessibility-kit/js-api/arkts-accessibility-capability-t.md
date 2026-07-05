# Capability

```TypeScript
type Capability = 'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture'
```

Enumerates the capabilities of an accessibility application.

**Since:** 7

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

| Type | Description |
| --- | --- |
| 'retrieve' | Capability to retrieve the window content. |
| 'touchGuide' | Capability of touch guide mode. |
| 'keyEventObserver' | Capability to filter key events. |
| 'zoom' | Capability to control the display zoom level. Not supported currently. |
| 'gesture' | Capability to perform gesture actions. |

