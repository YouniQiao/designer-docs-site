# EffectId

Enumerates the preset vibration effect IDs. This parameter is needed when you call
[vibrator.startVibration9+](arkts-sensorservice-startvibration-f.md#startvibration-1)
or [vibrator.stopVibration9+](arkts-sensorservice-stopvibration-f.md#stopvibration-1) to deliver the vibration
effect specified by [VibratePreset](arkts-sensorservice-vibratepreset-i.md). This parameter supports a variety of values,
such as **haptic.clock.timer**. [HapticFeedback<sup>12+</sup>](arkts-sensorservice-hapticfeedback-e.md) provides several
frequently used **EffectId** values.

> **NOTE**
>
> Preset effects vary according to devices. You are advised to call
> [vibrator.isSupportEffect](arkts-sensorservice-issupporteffect-f.md#issupporteffect-2)<sup>10+</sup> to check whether the
> device supports the preset effect before use.

**Since:** 8

**System capability:** SystemCapability.Sensors.MiscDevice

## EFFECT_CLOCK_TIMER

```TypeScript
EFFECT_CLOCK_TIMER = 'haptic.clock.timer'
```

Vibration effect when a user adjusts the timer.

**Since:** 8

**System capability:** SystemCapability.Sensors.MiscDevice

