# EffectId

```TypeScript
enum EffectId
```

Enumerates the preset vibration effect IDs. This parameter is needed when you call [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>) or [vibrator.stopVibration9+]vibrator.stopVibration(stopMode: VibratorStopMode) to deliver the vibration effect specified by [VibratePreset]vibrator.VibratePreset. This parameter supports a variety of values, such as **haptic.clock.timer**. [HapticFeedback<sup>12+</sup>]vibrator.HapticFeedback provides several frequently used **EffectId** values. > **NOTE** > > Preset effects vary according to devices. You are advised to call > [vibrator.isSupportEffect]vibrator.isSupportEffect(effectId: string)<sup>10+</sup> to check whether the > device supports the preset effect before use.

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.MiscDevice

## EFFECT_CLOCK_TIMER

```TypeScript
EFFECT_CLOCK_TIMER = 'haptic.clock.timer'
```

Vibration effect when a user adjusts the timer.

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.MiscDevice

