# HuksCryptoExtensionParam

定义调用接口的param类型。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { HuksCryptoExtensionCertInfo,HuksCryptoExtensionResultCode,HuksCryptoExtensionParams,HuksCryptoExtensionParam,HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';
```

## tag

```TypeScript
tag: huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number
```

参数标签，用于区分参数。

**Type:** huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## value

```TypeScript
value: boolean | int | bigint | Uint8Array
```

标签的值。

**Type:** boolean | int | bigint | Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

