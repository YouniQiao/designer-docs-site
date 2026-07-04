# HalfScreenLaunchComponent

Declare component HalfScreenLaunchComponent

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { HalfScreenLaunchComponent } from '@ohos.atomicservice.HalfScreenLaunchComponent';
```

## appId

```TypeScript
appId: string
```

Indicates atomic service appId.

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
@BuilderParam content: Callback<void>
```

Sets the component content.

**Type:** Callback<void>

**Since:** 18

**Decorator:** @Builder

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onError

```TypeScript
onError?: ErrorCallback
```

Indicates the callback of onError.

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

Indicates the callback of onTerminated.

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

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

