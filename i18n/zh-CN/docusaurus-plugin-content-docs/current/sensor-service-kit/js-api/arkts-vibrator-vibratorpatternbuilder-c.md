# VibratorPatternBuilder

Provide methods for adding long or short vibration events and generate VibratorPattern objects.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## addContinuousEvent

```TypeScript
addContinuousEvent(time: int, duration: int, options?: ContinuousParam): VibratorPatternBuilder
```

Adds a long vibration event as a **VibratorPattern** object.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| time | int | 是 | Start time of the long vibration event, in ms. The value range is [0, 1800000]. |
| duration | int | 是 | Duration of the long vibration event, in ms. The value range is (0,5000]. |
| options | ContinuousParam | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VibratorPatternBuilder | VibratorPatternBuilder object representing a long vibration event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

let builder = new vibrator.VibratorPatternBuilder();
// 使用try catch对可能出现的异常进行捕获
try {
  let pointsMe: vibrator.VibratorCurvePoint[] = [
    { time: 0, intensity: 0, frequency: -7 },
    { time: 42, intensity: 1, frequency: -6 },
    { time: 128, intensity: 0.94, frequency: -4 },
    { time: 217, intensity: 0.63, frequency: -14 },
    { time: 763, intensity: 0.48, frequency: -14 },
    { time: 1125, intensity: 0.53, frequency: -10 },
    { time: 1503, intensity: 0.42, frequency: -14 },
    { time: 1858, intensity: 0.39, frequency: -14 },
    { time: 2295, intensity: 0.34, frequency: -17 },
    { time: 2448, intensity: 0.21, frequency: -14 },
    { time: 2468, intensity: 0, frequency: -21 }
  ] // VibratorCurvePoint参数最少设置4个，最大设置16个
  let param: vibrator.ContinuousParam = {
    intensity: 97,
    frequency: 34,
    points:pointsMe,
    index: 0
  }
  builder.addContinuousEvent(0, 2468, param);
  console.info(`addContinuousEvent builder is ${builder.build()}`);
} catch(error) {
  let e: BusinessError = error as BusinessError;
  console.error(`Exception. Code ${e.code}`);
}

```

## addTransientEvent

```TypeScript
addTransientEvent(time: int, options?: TransientParam): VibratorPatternBuilder
```

Adds a short vibration event as a **VibratorPattern** object.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| time | int | 是 | Start time of the short vibration event, in ms. The value range is [0, 1800000]. |
| options | TransientParam | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VibratorPatternBuilder | VibratorPatternBuilder object representing a short vibration event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

let builder = new vibrator.VibratorPatternBuilder();
// 使用try catch对可能出现的异常进行捕获
try {
  let param: vibrator.TransientParam = {
    intensity: 80,
    frequency: 70,
    index: 0
  }
  builder.addTransientEvent(0, param);
  console.info(`addTransientEvent builder is ${builder.build()}`);
} catch(error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

## build

```TypeScript
build(): VibratorPattern
```

Constructor used to create a **VibratorPattern** object, which determines the vibration sequence of short or long events.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VibratorPattern | VibratorPattern object. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

let builder = new vibrator.VibratorPatternBuilder();
try {
  let param: vibrator.TransientParam = {
    intensity: 80,
    frequency: 70,
    index: 0
  }
  builder.addTransientEvent(0, param);
  console.info(`addTransientEvent builder is ${builder.build()}`);
} catch(error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}
try {
  vibrator.startVibration({
    type: "pattern",
    pattern: builder.build()
  }, {
  usage: "alarm", // 根据实际选择类型归属不同的开关管控
  }, (error) => {
  if (error) {
    let e: BusinessError = error as BusinessError;
    console.error(`Vibrate fail. Code: ${e.code}, message: ${e.message}`);
  } else {
    console.info(`vibrate success`);
  }
  });
} catch(error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

