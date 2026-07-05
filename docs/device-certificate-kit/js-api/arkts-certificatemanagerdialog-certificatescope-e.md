# CertificateScope

```TypeScript
export enum CertificateScope
```

表示安装证书的使用范围。

**Since:** 14

**System capability:** SystemCapability.Security.CertificateManagerDialog

## NOT_SPECIFIED

```TypeScript
NOT_SPECIFIED = 0
```

不指定使用范围，用户可在证书安装界面选择。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

## CURRENT_USER

```TypeScript
CURRENT_USER = 1
```

当前用户。表示证书仅对当前登录用户可用。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

## GLOBAL_USER

```TypeScript
GLOBAL_USER = 2
```

所有用户。表示证书对设备的所有用户可见。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.CertificateManagerDialog

