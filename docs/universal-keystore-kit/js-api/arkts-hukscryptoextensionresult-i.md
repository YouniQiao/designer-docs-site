# HuksCryptoExtensionResult

接口返回值的通用类型。

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { HuksCryptoExtensionCertInfo,HuksCryptoExtensionResultCode,HuksCryptoExtensionParams,HuksCryptoExtensionParam,HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';
```

## resourceId

```TypeScript
resourceId?: string
```

返回的资源ID。 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## authState

```TypeScript
authState?: int
```

认证状态。

**Type:** int

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## errInfo

```TypeScript
errInfo?: huksExternalCrypto.HuksExternalErrorInfo
```

返回详细错误信息

**Type:** huksExternalCrypto.HuksExternalErrorInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## outData

```TypeScript
outData?: Uint8Array
```

返回的数据。

**Type:** Uint8Array

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## retryCount

```TypeScript
retryCount?: int
```

重试次数。

**Type:** int

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## property

```TypeScript
property?: Array<huksExternalCrypto.HuksExternalCryptoParam>
```

返回的属性信息。

**Type:** Array<huksExternalCrypto.HuksExternalCryptoParam>

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## resultCode

```TypeScript
resultCode: int
```

返回值的错误码。

**Type:** int

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## handle

```TypeScript
handle?: string
```

资源句柄。

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## certs

```TypeScript
certs?: Array<HuksCryptoExtensionCertInfo>
```

证书。

**Type:** Array<HuksCryptoExtensionCertInfo>

**Since:** 22

**System capability:** SystemCapability.Security.Huks.CryptoExtension

