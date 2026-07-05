# HuksUnwrapSuite

```TypeScript
export enum HuksUnwrapSuite
```

表示安全导入密钥的算法套件。

**Since:** 9

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_UNWRAP_SUITE_X25519_AES_256_GCM_NOPADDING

```TypeScript
HUKS_UNWRAP_SUITE_X25519_AES_256_GCM_NOPADDING = 1
```

安全导入密钥时，X25519密钥协商后使用AES-256 GCM解密。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_UNWRAP_SUITE_ECDH_AES_256_GCM_NOPADDING

```TypeScript
HUKS_UNWRAP_SUITE_ECDH_AES_256_GCM_NOPADDING = 2
```

安全导入密钥时，ECDH密钥协商后使用AES-256 GCM解密。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## HUKS_UNWRAP_SUITE_SM2_SM4_ECB_NOPADDING

```TypeScript
HUKS_UNWRAP_SUITE_SM2_SM4_ECB_NOPADDING = 5
```

安全导入密钥时，使用临时SM4密钥加密导入密钥，使用已导入HUKS的SM2密钥加密SM4密钥。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

