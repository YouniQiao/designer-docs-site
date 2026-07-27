# InnerFullScreenLaunchComponent (System API)

Declare component InnerFullScreenLaunchComponent

**Since:** 12

**Decorator:** @Component

<!--Device-unnamed-export declare struct InnerFullScreenLaunchComponent--><!--Device-unnamed-export declare struct InnerFullScreenLaunchComponent-End-->

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

**Type:** Callback&lt;void&gt;

**Since:** 12

**Decorator:** @BuilderParam

<!--Device-InnerFullScreenLaunchComponent-@BuilderParam content: Callback<void>--><!--Device-InnerFullScreenLaunchComponent-@BuilderParam content: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## controller

```TypeScript
controller: LaunchController
```

Sets the component Controller.

**Type:** LaunchController

**Since:** 12

<!--Device-InnerFullScreenLaunchComponent-controller: LaunchController--><!--Device-InnerFullScreenLaunchComponent-controller: LaunchController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onError

```TypeScript
onError?: ErrorCallback
```

Callback triggered when an error occurs during running of the started ExtensionAbility.It is supported only when the atomic service runs in embedded mode,with the parameter being of type BusinessError.

**Type:** ErrorCallback

**Since:** 23

<!--Device-InnerFullScreenLaunchComponent-onError?: ErrorCallback--><!--Device-InnerFullScreenLaunchComponent-onError?: ErrorCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onReceive

```TypeScript
onReceive?: Callback<Record<string, Object>>
```

Indicates the callback of onReceive.

**Type:** Callback&lt;Record&lt;string, Object&gt;&gt;

**Since:** 20

<!--Device-InnerFullScreenLaunchComponent-onReceive?: Callback<Record<string, Object>>--><!--Device-InnerFullScreenLaunchComponent-onReceive?: Callback<Record<string, Object>>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onTerminated

```TypeScript
onTerminated?: Callback<TerminationInfo>
```

Callback triggered when the EmbeddableUIAbility is terminated to receive the information about the termination. It is supported only when the atomic service runs in embedded mode,with the parameter being of type TerminationInfo.

**Type:** Callback&lt;TerminationInfo&gt;

**Since:** 23

<!--Device-InnerFullScreenLaunchComponent-onTerminated?: Callback<TerminationInfo>--><!--Device-InnerFullScreenLaunchComponent-onTerminated?: Callback<TerminationInfo>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

