# InterruptEvent

Describes the interruption event received by the application when the audio is interrupted.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## forceType

```TypeScript
forceType: InterruptForceType
```

Whether the audio interruption is forcibly taken by the system or taken by an application.

**Type:** InterruptForceType

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## hintType

```TypeScript
hintType: InterruptHint
```

Hint provided along the interruption to provide information related to the interruption event.

**Type:** InterruptHint

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## eventType

```TypeScript
eventType: InterruptType
```

Whether the audio interruption has started or ended.

**Type:** InterruptType

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

