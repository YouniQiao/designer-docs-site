# SoundInterruptMode

```TypeScript
enum SoundInterruptMode
```

表示在SoundPool中，同一ID的音频在播放时的打断模式的枚举。

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.SoundPool

## NO_INTERRUPT

```TypeScript
NO_INTERRUPT = 0
```

表示同一ID的音频，如果前者尚未播放完成，后者不会打断前者的播放，二者并行播放。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.SoundPool

## SAME_SOUND_INTERRUPT

```TypeScript
SAME_SOUND_INTERRUPT = 1
```

表示同一ID的音频，如果前者尚未播放完成，后者在播放前会先打断前者的播放。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.SoundPool

