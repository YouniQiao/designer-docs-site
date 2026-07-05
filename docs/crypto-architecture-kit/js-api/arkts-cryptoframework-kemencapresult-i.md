# KemEncapResult

KEM封装结果。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## sharedSecret

```TypeScript
sharedSecret: Uint8Array
```

KEM的共享密钥。

**Type:** Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## wrappedKey

```TypeScript
wrappedKey: Uint8Array
```

KEM封装的密钥，即KEM的密文。

**Type:** Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

