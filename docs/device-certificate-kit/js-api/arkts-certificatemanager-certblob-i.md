# CertBlob

表示证书文件数据。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.CertificateManager

## Modules to Import

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
```

## certScope

```TypeScript
certScope? : CertScope
```

表示用户CA证书的存储位置。 默认值：CURRENT_USER。

**Type:** CertScope

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

## certData

```TypeScript
certData: Uint8Array
```

表示证书文件数据。当certFormat传入PEM_DER，最大长度为8KB。当certFormat传入P7B，最大长度为300KB。

**Type:** Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

## certFormat

```TypeScript
certFormat? : CertFileFormat
```

表示证书文件格式。 默认值：PEM_DER。

**Type:** CertFileFormat

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManager

