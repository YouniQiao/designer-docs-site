# isHdHapticSupported

## isHdHapticSupported

```TypeScript
function isHdHapticSupported(): boolean
```

Checks whether HD vibration is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Boolean value indicating whether HD vibration is supported. The value true indicates that  HD vibration is supported, and the value false indicates the opposite. |

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
  // 查询是否支持高清振动
  let ret = vibrator.isHdHapticSupported();
  console.info(`The query result is ${ret}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

