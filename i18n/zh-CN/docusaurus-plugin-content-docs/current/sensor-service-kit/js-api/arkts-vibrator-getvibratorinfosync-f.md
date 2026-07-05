# getVibratorInfoSync

## getVibratorInfoSync

```TypeScript
function getVibratorInfoSync(param?: VibratorInfoParam): Array<VibratorInfo>
```

Queries the vibrator list of one or all devices.

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | VibratorInfoParam | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;VibratorInfo> | Vibrator information. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const vibratorInfoList: vibrator.VibratorInfo[] = vibrator.getVibratorInfoSync({ deviceId: 1, vibratorId: 3 });
  console.info(`vibratorInfoList: ${JSON.stringify(vibratorInfoList)}`);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

