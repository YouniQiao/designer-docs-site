# InnerFullScreenLaunchComponent (System API)

Declare component InnerFullScreenLaunchComponent

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { InnerFullScreenLaunchComponent, LaunchController } from '@kit.ArkUI';
```

## content

```TypeScript
@BuilderParam content: Callback<void>
```

Sets the component content.

**Type:** Callback<void>

**Since:** 12

**Decorator:** @BuilderParam

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## controller

```TypeScript
controller: LaunchController
```

Sets the component Controller.

**Type:** LaunchController

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onError

```TypeScript
onError?: ErrorCallback
```

Callback triggered when an error occurs during running of the started ExtensionAbility.
It is supported only when the atomic service runs in embedded mode,
with the parameter being of type BusinessError.

**Type:** ErrorCallback

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onReceive

```TypeScript
onReceive?: Callback<Record<string, Object>>
```

Indicates the callback of onReceive.

**Type:** Callback<Record<string, Object>>

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onTerminated

```TypeScript
onTerminated?: Callback<TerminationInfo>
```

Callback triggered when the EmbeddableUIAbility is terminated to receive the information
about the termination. It is supported only when the atomic service runs in embedded mode,
with the parameter being of type TerminationInfo.

**Type:** Callback<TerminationInfo>

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

