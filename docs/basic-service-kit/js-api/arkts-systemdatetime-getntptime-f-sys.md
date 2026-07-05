# getNtpTime

## getNtpTime

```TypeScript
function getNtpTime(): long
```

使用同步方式获取基于上次更新的NTP时间所计算出的真实时间。

**Since:** 14

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| long | 基于上次更新的NTP时间所计算出的Unix纪元时间(ms)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 13000002 | updateNtpTime() is not called successfully. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let time: number = systemDateTime.getNtpTime();
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get ntp time. message: ${error.message}, code: ${error.code}`);
}

```

