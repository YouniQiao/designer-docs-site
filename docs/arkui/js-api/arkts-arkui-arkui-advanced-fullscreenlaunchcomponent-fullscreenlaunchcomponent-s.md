# FullScreenLaunchComponent

Declares the FullScreenLaunchComponent, a component provided by ArkUI that allows you to define and use it in your application through the ArkTS-based declarative development paradigm.

**Since:** 12

**Decorator:** @Component

<!--Device-unnamed-export declare struct FullScreenLaunchComponent--><!--Device-unnamed-export declare struct FullScreenLaunchComponent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { FullScreenLaunchComponent } from '@kit.ArkUI';
```

## appId

```TypeScript
appId: string
```

Indicates atomic service appId.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FullScreenLaunchComponent-appId: string--><!--Device-FullScreenLaunchComponent-appId: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
@BuilderParam content: Callback<void>
```

Sets the component content.

**Type:** Callback&lt;void&gt;

**Since:** 12

**Decorator:** @BuilderParam

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FullScreenLaunchComponent-@BuilderParam content: Callback<void>--><!--Device-FullScreenLaunchComponent-@BuilderParam content: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onError

```TypeScript
onError?: ErrorCallback
```

Callback triggered when an error occurs during running of the started ExtensionAbility.It is supported only when the atomic service runs in embedded mode,with the parameter being of type BusinessError.

**Type:** ErrorCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-FullScreenLaunchComponent-onError?: ErrorCallback--><!--Device-FullScreenLaunchComponent-onError?: ErrorCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onReceive

```TypeScript
onReceive?: Callback<Record<string, Object>>
```

Indicates the callback of onReceive.

**Type:** Callback&lt;Record&lt;string, Object&gt;&gt;

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FullScreenLaunchComponent-onReceive?: Callback<Record<string, Object>>--><!--Device-FullScreenLaunchComponent-onReceive?: Callback<Record<string, Object>>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTerminated

```TypeScript
onTerminated?: Callback<TerminationInfo>
```

Callback triggered when the EmbeddableUIAbility is terminated to receive the information about the termination. It is supported only when the atomic service runs in embedded mode,with the parameter being of type TerminationInfo.

**Type:** Callback&lt;TerminationInfo&gt;

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-FullScreenLaunchComponent-onTerminated?: Callback<TerminationInfo>--><!--Device-FullScreenLaunchComponent-onTerminated?: Callback<TerminationInfo>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options?: AtomicServiceOptions
```

Indicates the atomic service start options.

**Type:** AtomicServiceOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FullScreenLaunchComponent-options?: AtomicServiceOptions--><!--Device-FullScreenLaunchComponent-options?: AtomicServiceOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

