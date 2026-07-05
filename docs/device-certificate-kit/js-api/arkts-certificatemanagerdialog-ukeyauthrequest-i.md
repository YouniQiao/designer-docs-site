# UkeyAuthRequest

USB Key PIN码认证请求。

**Since:** 22

**System capability:** SystemCapability.Security.CertificateManagerDialog

## Modules to Import

```TypeScript
import { certificateManagerDialog } from '@kit.DeviceCertificateKit';
```

## keyUri

```TypeScript
keyUri: string
```

表示USB Key证书凭据的唯一标识符，长度限制256字节以内。 该参数值可通过调用[openAuthorizeDialog]certificateManagerDialog.openAuthorizeDialog接口返回的CertReference中获取。

**Type:** string

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

