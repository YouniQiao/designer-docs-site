# VibratorStopMode

```TypeScript
enum VibratorStopMode
```

Enumerates vibration stop modes. This parameter is required for [vibrator.stopVibration9+]vibrator.stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>) or [vibrator.stopVibration9+]vibrator.stopVibration(stopMode: VibratorStopMode). The stop mode must match that delivered in [VibrateEffect9+]vibrator.VibrateEffect.

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.MiscDevice

## VIBRATOR_STOP_MODE_TIME

```TypeScript
VIBRATOR_STOP_MODE_TIME = 'time'
```

The vibration to stop is in **duration** mode.

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.MiscDevice

## VIBRATOR_STOP_MODE_PRESET

```TypeScript
VIBRATOR_STOP_MODE_PRESET = 'preset'
```

The vibration to stop is in **EffectId** mode.

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.MiscDevice

