# FullScreenLaunchComponent

Declares the FullScreenLaunchComponent, a component provided by ArkUI that allows you to define and use it in your application through the ArkTS-based declarative development paradigm.

**Since:** 12

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
@BuilderParam content: Callback<void>
```

Sets the component content.

**Type:** Callback<void>

**Since:** 12

**Decorator:** @BuilderParam

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onError

```TypeScript
onError?: ErrorCallback
```

Callback triggered when an error occurs during running of the started ExtensionAbility. It is supported only when the atomic service runs in embedded mode, with the parameter being of type BusinessError.

**Type:** ErrorCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onReceive

```TypeScript
onReceive?: Callback<Record<string, Object>>
```

Indicates the callback of onReceive.

**Type:** Callback<Record<string, Object>>

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTerminated

```TypeScript
onTerminated?: Callback<TerminationInfo>
```

Callback triggered when the EmbeddableUIAbility is terminated to receive the information about the termination. It is supported only when the atomic service runs in embedded mode, with the parameter being of type TerminationInfo.

**Type:** Callback<TerminationInfo>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options?: AtomicServiceOptions
```

Indicates the atomic service start options.

**Type:** AtomicServiceOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

