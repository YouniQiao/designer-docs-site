# SignSpecItem

Enumerates the signing and signature verification parameters, which can be set by using
[setSignSpec](arkts-cryptoarchitecture-sign-i.md#setsignspec-1) and
[setVerifySpec](arkts-cryptoarchitecture-verify-i.md#setverifyspec-1), and obtained
by using [getSignSpec](arkts-cryptoarchitecture-sign-i.md#getsignspec-1) and
[getVerifySpec](arkts-cryptoarchitecture-verify-i.md#getverifyspec-1).

Currently, only RSA and SM2 are supported. Since API version 11, the **SM2_USER_ID_UINT8ARR** parameter is
supported. For details, see
[Signing and Signature Verification Overview and Algorithm Specifications](../../../../security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)
.

**Since:** 10

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## PSS_MD_NAME_STR

```TypeScript
PSS_MD_NAME_STR = 100
```

Message digest algorithm used with the PSS padding mode in RSA.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## PSS_MGF_NAME_STR

```TypeScript
PSS_MGF_NAME_STR = 101
```

Mask generation algorithm used with the PSS padding mode in RSA. Currently, only MGF1 is supported.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## PSS_MGF1_MD_STR

```TypeScript
PSS_MGF1_MD_STR = 102
```

Message digest algorithm for the MGF1 mask generation used with the PSS padding mode in RSA.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## PSS_SALT_LEN_NUM

```TypeScript
PSS_SALT_LEN_NUM = 103
```

Length of the salt in bytes used with the PSS padding mode in RSA.

According to the FIPS 186-4 standard, sLen should be greater than or equal to 0 and less than or equal to the
hash length.

Default:
For sign, automatically calculate the maximum salt length.
For verify, automatically calculate the salt length.

Special:
For sign, you can also set the value to -1 to use the digest length as the salt length, and -2 or -3 to
automatically calculate the maximum salt length. The recommended value is -1.
For verify, you can also set the value to -1 to use the digest length as the salt length, -2 to automatically
calculate the salt length, or -3 to use the maximum salt length. The recommended value is -2.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## PSS_TRAILER_FIELD_NUM

```TypeScript
PSS_TRAILER_FIELD_NUM = 104
```

Trailer field used in the encoding operation when PSS padding mode is used in RSA.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

## SM2_USER_ID_UINT8ARR

```TypeScript
SM2_USER_ID_UINT8ARR = 105
```

User ID field in SM2.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 11: SystemCapability.Security.CryptoFramework

## ML_DSA_DETERMINISTIC_BOOL

```TypeScript
ML_DSA_DETERMINISTIC_BOOL = 106
```

Indicates whether deterministic signing is used for the ML-DSA signing and verifying process.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

## ML_DSA_MU_BOOL

```TypeScript
ML_DSA_MU_BOOL = 107
```

Indicates the mu parameter value for the ML-DSA signing and verifying process.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

## ML_DSA_CONTEXT_UINT8ARR

```TypeScript
ML_DSA_CONTEXT_UINT8ARR = 108
```

Indicates the context data for the ML-DSA signing and verifying process.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

