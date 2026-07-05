# isSupportEffectSync

## isSupportEffectSync

```TypeScript
function isSupportEffectSync(effectId: string): boolean
```

Checks whether the preset vibration effect is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| effectId | string | 是 | Effect ID. The value is a string of a maximum of 64 characters. If the length exceeds  64 characters, the first 64 characters are used. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returned object. The value true means that the effect ID is supported, and the value  false means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14600101 | Device operation failed. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  // 查询是否支持预设'haptic.notice.success'
  let ret = vibrator.isSupportEffectSync('haptic.notice.success');
  console.info(`The query result is ${ret}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

