# HuksCryptoExtensionParam

Defines the type of the param used for calling the API.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { HuksCryptoExtensionCertInfo, HuksCryptoExtensionResultCode, HuksCryptoExtensionParams, HuksCryptoExtensionParam, HuksCryptoExtensionResult } from '@ohos.security.CryptoExtensionAbility';
```

## tag

```TypeScript
tag: huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number
```

Parameter tag, which is used to distinguish parameters.

**Type:** huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## value

```TypeScript
value: boolean | number | bigint | Uint8Array
```

Value of the tag.

**Type:** boolean | number | bigint | Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

