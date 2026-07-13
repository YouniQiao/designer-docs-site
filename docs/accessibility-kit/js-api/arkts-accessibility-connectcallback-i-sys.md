# ConnectCallback (System API)

Callback provided when the [enableAbilityWithCallback](arkts-accessibility-enableabilitywithcallback-f-sys.md#enableabilitywithcallback-1) API is called to
enable an accessibility extension ability. This callback will be invoked when the connection to an auxiliary
extension ability is disconnected.

**Since:** 23

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## onDisconnect

```TypeScript
onDisconnect: OnDisconnectCallback
```

Callback to be invoked when the connection to an auxiliary extension ability is disconnected.

**Type:** OnDisconnectCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

