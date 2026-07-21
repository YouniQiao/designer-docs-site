# UkeyAuthRequest

USB key PIN authentication request.

**Since:** 22

<!--Device-certificateManagerDialog-export interface UkeyAuthRequest--><!--Device-certificateManagerDialog-export interface UkeyAuthRequest-End-->

**System capability:** SystemCapability.Security.CertificateManagerDialog

## Modules to Import

```TypeScript
import { certificateManagerDialog } from '@kit.DeviceCertificateKit';
```

## keyUri

```TypeScript
keyUri: string
```

Unique identifier of the USB Key credential. The value contains up to 256 bytes.The value of this parameter can be obtained from the CertReference returned by invoking the [openAuthorizeDialog](arkts-devicecertificate-certificatemanagerdialog-openauthorizedialog-f.md#openauthorizedialog-1) interface.

**Type:** string

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

<!--Device-UkeyAuthRequest-keyUri: string--><!--Device-UkeyAuthRequest-keyUri: string-End-->

**System capability:** SystemCapability.Security.CertificateManagerDialog

