# HapticFeedback

```TypeScript
enum HapticFeedback
```

Defines the vibration effect. The frequency of the same vibration effect may vary depending on the vibrator, but the frequency trend remains consistent. These vibration effects correspond to the specific **EffectId** values. For details, see the sample code that demonstrates how to use [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>) or [vibrator.stopVibration9+]vibrator.stopVibration(stopMode: VibratorStopMode) to deliver the vibration effect defined by [VibratePreset]vibrator.VibratePreset.

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

## EFFECT_SOFT

```TypeScript
EFFECT_SOFT = 'haptic.effect.soft'
```

Soft vibration, low frequency.

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

## EFFECT_HARD

```TypeScript
EFFECT_HARD = 'haptic.effect.hard'
```

Hard vibration, medium frequency.

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

## EFFECT_SHARP

```TypeScript
EFFECT_SHARP = 'haptic.effect.sharp'
```

Sharp vibration, high frequency.

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

## EFFECT_NOTICE_SUCCESS

```TypeScript
EFFECT_NOTICE_SUCCESS = 'haptic.notice.success'
```

Vibration for a success notification.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## EFFECT_NOTICE_FAILURE

```TypeScript
EFFECT_NOTICE_FAILURE = 'haptic.notice.fail'
```

Vibration for a failure notification.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## EFFECT_NOTICE_WARNING

```TypeScript
EFFECT_NOTICE_WARNING = 'haptic.notice.warning'
```

Vibration for an alert.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

