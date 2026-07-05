# VibrateTime

Represents vibration of the specified duration.

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## duration

```TypeScript
duration: int
```

Vibration duration, in ms. The value range is (0,1800000]. The maximum vibration duration varies with devices due to different component protection design specifications of drivers provided by different vendors. It is recommended that a single vibration duration be less than or equal to 10s to maximize user experience.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

## type

```TypeScript
type: 'time'
```

The value is **time**, indicating vibration of the specified duration.

**类型：** 'time'

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

