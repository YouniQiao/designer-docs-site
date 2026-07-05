# VibrateEffect

```TypeScript
type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern
```

Enumerates vibration effects of the vibrator. You can specify the vibration effect when calling [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>) or [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute).

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Sensors.MiscDevice

| Type | Description |
| --- | --- |
| VibrateTime | Triggers vibration based on a specified duration.   This API can be used in atomic services since API version 11. |
| VibratePreset | Triggers vibration based on a preset effect. |
| VibrateFromFile | Triggers vibration based on a custom vibration configuration file. [since 10] |
| VibrateFromPattern | Triggers vibration based on a custom effect. [since 18] |

