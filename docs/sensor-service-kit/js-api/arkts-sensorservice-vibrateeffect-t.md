# VibrateEffect

```TypeScript
type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern
```

Enumerates vibration effects of the vibrator. You can specify the vibration effect when calling [vibrator.startVibration9+](arkts-sensorservice-startvibration-f.md#startvibration-1) or [vibrator.startVibration9+](arkts-sensorservice-startvibration-f.md#startvibration-2).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Sensors.MiscDevice

| Type | Description |
| --- | --- |
| VibrateTime | Triggers vibration based on a specified duration.<br>This API can be used in atomic services since API version 11. |
| VibratePreset | Triggers vibration based on a preset effect. |
| VibrateFromFile | Triggers vibration based on a custom vibration configuration file. [since 10] |
| VibrateFromPattern | Triggers vibration based on a custom effect. [since 18] |

