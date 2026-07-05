# updateSendRate

## updateSendRate

```TypeScript
function updateSendRate(bundleName: string, sendRate: int): boolean
```

Update send file fd rate.

**Since:** 12

**Required permissions:** 

 ohos.permission.BACKUP

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | set update to bundleName app. |
| sendRate | int | Yes | set send file fd rate. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return update result, true is success, false is fail. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backup } from '@kit.CoreFileKit';

function updateSendRate() {
  try {
    let bundleName = "com.example.myApp";
    let sendRate = 300;
    let result = backup.updateSendRate(bundleName, sendRate);
    if (result) {
      console.info('updateSendRate success');
    } else {
      console.info('updateSendRate fail');
    }
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`updateSendRate failed. Code: ${err.code}, message: ${err.message}`);
  }
}

```

