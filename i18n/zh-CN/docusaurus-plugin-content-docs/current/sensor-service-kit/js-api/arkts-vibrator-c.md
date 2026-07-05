# Vibrator

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.vibrator/vibrator

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Sensors.MiscDevice.Lite

## 导入模块

```TypeScript
import { VibrateOptions } from '@kit.SensorServiceKit';
```

## vibrate

```TypeScript
static vibrate(options?: VibrateOptions): void
```

Triggers device vibration. > **NOTE** > > Except for lite wearables. You are advised to use > [vibrator.startVibration()](arkts-vibrator-startvibration-f.md#startVibration-1) since API version 8.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** @ohos.vibrator:vibrator.startVibration(effect:

**需要权限：** 

 ohos.permission.VIBRATE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.MiscDevice.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | VibrateOptions | 否 | Vibration options. |

