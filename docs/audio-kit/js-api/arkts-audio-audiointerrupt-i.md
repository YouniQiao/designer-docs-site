# AudioInterrupt

Describes input parameters of audio interruption events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AudioRendererOptions

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## contentType

```TypeScript
contentType: ContentType
```

Audio content type.

**Type:** ContentType

**Since:** 7

**Deprecated since:** 9

**Substitutes:** rendererInfo

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## pauseWhenDucked

```TypeScript
pauseWhenDucked: boolean
```

Whether audio playback can be paused during an audio interruption. **true** if audio playback can be paused, **false** otherwise.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitutes:** hintType

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## streamUsage

```TypeScript
streamUsage: StreamUsage
```

Audio stream usage.

**Type:** StreamUsage

**Since:** 7

**Deprecated since:** 9

**Substitutes:** rendererInfo

**System capability:** SystemCapability.Multimedia.Audio.Renderer

