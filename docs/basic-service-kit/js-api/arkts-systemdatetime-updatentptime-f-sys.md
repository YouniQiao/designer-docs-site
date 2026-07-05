# updateNtpTime

## updateNtpTime

```TypeScript
function updateNtpTime(): Promise<void>
```

使用异步方式从NTP服务器更新NTP时间。该方法一小时内只会从NTP服务器更新一次NTP时间。

**Since:** 14

**System capability:** SystemCapability.MiscServices.Time

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 13000001 | Network connection error or OS error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  systemDateTime.updateNtpTime().then(() => {
    console.info(`Succeeded in updating ntp time.`);
  }).catch((error: BusinessError) => {
    console.error(`Failed to update ntp time. message: ${error.message}, code: ${error.code}`);
  });
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to update ntp time. message: ${error.message}, code: ${error.code}`);
}

```

