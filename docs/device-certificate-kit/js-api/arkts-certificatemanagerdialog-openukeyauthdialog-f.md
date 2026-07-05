# openUkeyAuthDialog

## openUkeyAuthDialog

```TypeScript
function openUkeyAuthDialog(context: common.Context, ukeyAuthRequest: UkeyAuthRequest): Promise<void>
```

打开证书管理对话框的USB Key证书凭据PIN码认证页面。在弹出的页面中，用户可以输入PIN码授权USB Key证书凭据。调用成功后，USB Key证书凭据将被解锁，应用可使用该凭据进行签名、加密等操作。使用Promise异步回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes | 表示应用的上下文信息。 |
| ukeyAuthRequest | UkeyAuthRequest | Yes | 表示USB Key凭据认证请求信息 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. |
| 801 | Capability not supported. |
| 29700006 | Indicates that the input parameters validation failed.  For example, the parameter format is incorrect or the value range is invalid. |
| 29700001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 29700002 | The user cancels the authentication operation. |
| 29700003 | The authentication operation failed, such as the USB key certificate  does not exist, the USB key status is abnormal. |

**Example**

```TypeScript
import { certificateManagerDialog } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';

/* context is application context information, which is obtained by the caller. The context here is only an example. */
let context: common.Context = new UIContext().getHostContext() as common.Context;
/* keyUri is the unique identifier of the credential. The invoker obtains the value by itself. The value here is only an example. */
let keyUri: string = "test"
let ukeyAuthRequest: certificateManagerDialog.UkeyAuthRequest = { keyUri: keyUri }
try {
  certificateManagerDialog.openUkeyAuthDialog(context, ukeyAuthRequest).then(() => {
    console.info(`Succeeded in opening ukey authorization dialog`)
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to open ukey authorization dialog. Code: ${err.code}, message: ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to open ukey authorization dialog. Code: ${error.code}, message: ${error.message}`);
}

```

