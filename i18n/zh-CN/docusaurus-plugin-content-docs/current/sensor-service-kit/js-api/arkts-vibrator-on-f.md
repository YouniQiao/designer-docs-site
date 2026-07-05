# on

## on('vibratorStateChange')

```TypeScript
function on(type: 'vibratorStateChange', callback: Callback<VibratorStatusEvent>): void
```

Enables listening for vibrator status changes.

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'vibratorStateChange' | 是 | Event type. The value vibratorStateChange indicates a vibrator online/  offline event. |
| callback | Callback&lt;VibratorStatusEvent> | 是 | Callback used to return the vibrator status change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14600101 | Device operation failed. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 回调函数 
const vibratorStateChangeCallback = (data: vibrator.VibratorStatusEvent) => {
  console.info('vibrator state callback info:', JSON.stringify(data));
}

// 使用try catch对可能出现的异常进行捕获
try {
  // 订阅 vibratorStateChange事件
  vibrator.on('vibratorStateChange', vibratorStateChangeCallback);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

