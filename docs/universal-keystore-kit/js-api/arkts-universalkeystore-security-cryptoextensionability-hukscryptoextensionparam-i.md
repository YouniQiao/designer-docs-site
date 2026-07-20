# HuksCryptoExtensionParam

Defines the type of the param used for calling the API.

**Since:** 26.0.0

<!--Device-unnamed-export interface HuksCryptoExtensionParam--><!--Device-unnamed-export interface HuksCryptoExtensionParam-End-->

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## Modules to Import

```TypeScript
import { HuksCryptoExtensionCertInfo, HuksCryptoExtensionResultCode, HuksCryptoExtensionParams, HuksCryptoExtensionParam, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';
```

## tag

```TypeScript
tag: huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number
```

Parameter tag, which is used to distinguish parameters.

**Type:** huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-HuksCryptoExtensionParam-tag: huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number--><!--Device-HuksCryptoExtensionParam-tag: huksExternalCrypto.HuksExternalCryptoTag | huks.HuksTag | number-End-->

**System capability:** SystemCapability.Security.Huks.CryptoExtension

## value

```TypeScript
value: boolean | number | bigint | Uint8Array
```

Value of the tag.

**Type:** boolean | number | bigint | Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-HuksCryptoExtensionParam-value: boolean | int | bigint | Uint8Array--><!--Device-HuksCryptoExtensionParam-value: boolean | int | bigint | Uint8Array-End-->

**System capability:** SystemCapability.Security.Huks.CryptoExtension

