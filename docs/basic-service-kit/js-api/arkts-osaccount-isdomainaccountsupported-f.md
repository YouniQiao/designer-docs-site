# isDomainAccountSupported

## isDomainAccountSupported

```TypeScript
function isDomainAccountSupported(): Promise<boolean>
```

检查是否支持域账号。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示支持域账号；返回false表示不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  osAccount.isDomainAccountSupported().then((isSupported: boolean) => {
    console.info('isDomainAccountSupported successfully, isSupported: ' + isSupported);
  }).catch((err: BusinessError) => {
    console.error(`isDomainAccountSupported failed, code is ${err.code}, message is: ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`isDomainAccountSupported exception: code is ${err.code}, message is ${err.message}`);
}

```

