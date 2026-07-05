# vibrate

## vibrate

```TypeScript
function vibrate(duration: number, callback?: AsyncCallback<void>): void
```

Triggers vibration based on a specified duration. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** vibrator.startVibration(effect:

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| duration | number | 是 | Vibration duration, in ms. The value range is (0,1800000]. The maximum vibration  duration varies with devices due to different component protection design specifications of drivers provided by  different vendors. It is recommended that a single vibration duration be less than or equal to 10s to maximize  user experience. |
| callback | AsyncCallback&lt;void> | 否 | Callback used to return the result. If the vibration starts, err is  undefined; otherwise, err is an error object. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(1000, (error: BusinessError) => {
  if (error) {
    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
  } else {
    console.info('Succeed in vibrating');
  }
})

```

## vibrate

```TypeScript
function vibrate(duration: number): Promise<void>
```

Triggers vibration based on a specified duration. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** vibrator.startVibration(effect:

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| duration | number | 是 | Vibration duration, in ms. The value range is (0,1800000]. The maximum vibration  duration varies with devices due to different component protection design specifications of drivers provided by  different vendors. It is recommended that a single vibration duration be less than or equal to 10s to maximize  user experience. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns the result. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(1000).then(() => {
  console.info('Succeed in vibrating');
}, (error: BusinessError) => {
  console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
});

```

## vibrate

```TypeScript
function vibrate(effectId: EffectId): Promise<void>
```

Triggers vibration based on a specified effect. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** vibrator.startVibration(effect:

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| effectId | EffectId | 是 | Effect ID. The value is a string of a maximum of 64 characters. If the length  exceeds 64 characters, the first 64 characters are used. You are advised to check whether the effect ID is  supported. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns the result. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER).then(() => {
  console.info('Succeed in vibrating');
}, (error: BusinessError) => {
  console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
});

```

## vibrate

```TypeScript
function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void
```

Triggers vibration based on a specified effect. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** vibrator.startVibration(effect:

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| effectId | EffectId | 是 | Effect ID. The value is a string of a maximum of 64 characters. If the length  exceeds 64 characters, the first 64 characters are used. You are advised to check whether the effect ID is  supported. |
| callback | AsyncCallback&lt;void> | 否 | Callback used to return the result. If the vibration starts, err is  undefined; otherwise, err is an error object. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

vibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER, (error: BusinessError) => {
  if (error) {
    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);
  } else {
    console.info('Succeed in vibrating');
  }
})

```

