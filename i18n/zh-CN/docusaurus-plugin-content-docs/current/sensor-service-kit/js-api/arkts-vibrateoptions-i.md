# VibrateOptions

Defines the vibration options.

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.vibrator/vibrator.VibrateTime

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Sensors.MiscDevice.Lite

## 导入模块

```TypeScript
import { VibrateOptions } from '@kit.SensorServiceKit';
```

## mode

```TypeScript
mode?: 'long' | 'short'
```

Vibration mode. The value **long** indicates long vibration, and **short** indicates short vibration. The default value is **long**.

**类型：** 'long' | 'short'

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.vibrator/vibrator.VibrateTime

**需要权限：** 

 ohos.permission.VIBRATE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.MiscDevice.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the API call fails.

**类型：** (data: string, code: number) => void

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.vibrator/vibrator#startVibration

**需要权限：** 

 ohos.permission.VIBRATE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.MiscDevice.Lite

## success

```TypeScript
success: () => void
```

Called when the vibrator data changes.

**类型：** () => void

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.vibrator/vibrator#startVibration

**需要权限：** 

 ohos.permission.VIBRATE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.MiscDevice.Lite

## complete

```TypeScript
complete?: () => void
```

Called when the API call is complete.

**类型：** () => void

**起始版本：** 3

**废弃版本：** 8

**替代接口：** ohos.vibrator/vibrator#startVibration

**需要权限：** 

 ohos.permission.VIBRATE

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Sensors.MiscDevice.Lite

