# abort

## abort

```TypeScript
function abort(handle: Uint8Array, callback: AsyncCallback<void>): void
```

中止签名、验签的操作。与finish方法互斥，一个签名验签流程只能选择调用其中一个方法。使用Callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | Uint8Array | Yes | 表示初始化操作返回的句柄，。  最大长度为8。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当中止签名、验签成功时，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

/* cmHandle is the value returned by init(). The value here is only an example. */
let cmHandle: Uint8Array = new Uint8Array([
  0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08
]);
try {
  certificateManager.abort(cmHandle, (err, cmResult) => {
    if (err != null) {
      console.error(`Failed to abort. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in aborting.');
    }
  });
} catch(error) {
  console.error(`Failed to abort. Code: ${error.code}, message: ${error.message}`);
}

```

## abort

```TypeScript
function abort(handle: Uint8Array): Promise<void>
```

中止签名、验签的操作。与finish方法互斥，一个签名验签流程只能选择调用其中一个方法。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handle | Uint8Array | Yes | 表示初始化操作返回的句柄，。  最大长度为8。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

/* cmHandle is the value returned by init(). The value here is only an example. */
let cmHandle: Uint8Array = new Uint8Array([
  0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08
]);
try {
  certificateManager.abort(cmHandle).then((result) => {
    console.info('Succeeded in aborting.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to abort. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to abort. Code: ${error.code}, message: ${error.message}`);
}

```

