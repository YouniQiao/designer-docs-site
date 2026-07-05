# getEffectInfoSync

## getEffectInfoSync

```TypeScript
function getEffectInfoSync(effectId: string, param?: VibratorInfoParam): EffectInfo
```

Obtains the preset vibration effect based on the device ID and vibrator ID to determine whether the preset vibration effect is supported.

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| effectId | string | 是 | Effect ID. The value is a string of a maximum of 64 characters. If the length exceeds  64 characters, the first 64 characters are used. |
| param | VibratorInfoParam | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| EffectInfo | Whether the preset vibration effect is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14600101 | Device operation failed. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  const effectInfo: vibrator.EffectInfo = vibrator.getEffectInfoSync('haptic.clock.timer', { deviceId: 1, vibratorId: 3});
  console.info(`isEffectSupported: ${effectInfo.isEffectSupported}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

