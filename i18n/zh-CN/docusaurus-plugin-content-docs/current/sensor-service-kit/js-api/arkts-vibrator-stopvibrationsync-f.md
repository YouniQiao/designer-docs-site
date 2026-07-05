# stopVibrationSync

## stopVibrationSync

```TypeScript
function stopVibrationSync(): void
```

Stops any form of motor vibration.

**起始版本：** 12

**需要权限：** 

 ohos.permission.VIBRATE

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 14600101 | Device operation failed. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  // 停止任何形式的马达振动
  vibrator.stopVibrationSync()
  console.info('Succeed in stopping vibration');
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

