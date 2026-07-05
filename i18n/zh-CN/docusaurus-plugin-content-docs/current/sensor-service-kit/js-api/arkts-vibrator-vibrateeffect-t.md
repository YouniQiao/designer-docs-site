# VibrateEffect

```TypeScript
type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern
```

Enumerates vibration effects of the vibrator. You can specify the vibration effect when calling [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>) or [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute).

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

| 类型 | 说明 |
| --- | --- |
| VibrateTime | Triggers vibration based on a specified duration.   This API can be used in atomic services since API version 11. |
| VibratePreset | Triggers vibration based on a preset effect. |
| VibrateFromFile | Triggers vibration based on a custom vibration configuration file. [since 10] |
| VibrateFromPattern | Triggers vibration based on a custom effect. [since 18] |

