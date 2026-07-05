# supportsCACertDialog

## supportsCACertDialog

```TypeScript
function supportsCACertDialog(): boolean
```

判断设备是否支持[openCertificateDetailDialog]certificateManagerDialog.openCertificateDetailDialog，[openInstallCertificateDialog]certificateManagerDialog.openInstallCertificateDialog和[openUninstallCertificateDialog]certificateManagerDialog.openUninstallCertificateDialog接口打开管理CA证书的对话框。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 设备是否支持打开CA证书管理对话框。true：支持，false：不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 29700001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManagerDialog } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let isSupport: boolean = certificateManagerDialog.supportsCACertDialog();
  console.info(`Succeeded in checking whether the device supports CA dialog.`)
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to check whether the device supports CA dialog. Code: ${error.code}, message: ${error.message}`);
}

```

