# native_huks_external_crypto_type.h

## Overview

Defines the structs and enums for external key management extensions.

**Library**: libhuks_external_crypto.z.so

**System capability**: SystemCapability.Security.Huks.CryptoExtension
  *     include "huks/include/native_huks_type.h"

**Since**: 22

**Related module**: [HuksExternalCryptoTypeApi](capi-huksexternalcryptotypeapi.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_Huks_ExternalCryptoParam](capi-huksexternalcryptotypeapi-oh-huks-externalcryptoparam.md) | OH_Huks_ExternalCryptoParam | Defines a single parameter in a parameter set. |
| [OH_Huks_ExternalCryptoParamSet](capi-huksexternalcryptotypeapi-oh-huks-externalcryptoparamset.md) | OH_Huks_ExternalCryptoParamSet | Defines an external cryptographic parameter set. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_Huks_ExternalCryptoTag](#oh_huks_externalcryptotag) | OH_Huks_ExternalCryptoTag | Enumerates the tag values used in a parameter set. |
| [OH_Huks_ExternalPinAuthState](#oh_huks_externalpinauthstate) | OH_Huks_ExternalPinAuthState | Enumerates the Ukey PIN authentication states. |

### Macro

| Name | Description |
| -- | -- |
| OH_HUKS_EXTERNAL_CRYPTO_MAX_PROVIDER_NAME_LEN 100 | Defines the maximum length of the provider name.<br>**Since**: 22 |
| OH_HUKS_EXTERNAL_CRYPTO_MAX_RESOURCE_ID_LEN   512 | Defines the maximum length of the resource ID.<br>**Since**: 22 |

## Enum type description

### OH_Huks_ExternalCryptoTag

```c
enum OH_Huks_ExternalCryptoTag
```

**Description**

Enumerates the tag values used in a parameter set.

**Since**: 22

| Enum item | Description |
| -- | -- |
| OH_HUKS_EXT_CRYPTO_TAG_UKEY_PIN = OH_HUKS_TAG_TYPE_BYTES \| 200001 | PIN code.<br>**Since**: 22 |
| OH_HUKS_EXT_CRYPTO_TAG_ABILITY_NAME = OH_HUKS_TAG_TYPE_BYTES \| 200002 | Ability Name.<br>**Since**: 22 |
| OH_HUKS_EXT_CRYPTO_TAG_EXTRA_DATA = OH_HUKS_TAG_TYPE_BYTES \| 200003 | Extra data.<br>**Since**: 22 |
| OH_HUKS_EXT_CRYPTO_TAG_UID = OH_HUKS_TAG_TYPE_INT \| 200004 | Calling uid.<br>**Since**: 22 |
| OH_HUKS_EXT_CRYPTO_TAG_PURPOSE = OH_HUKS_TAG_TYPE_INT \| 200005 | Purpose of the cert chain.<br>**Since**: 22 |
| OH_HUKS_EXT_CRYPTO_TAG_TIMEOUT = OH_HUKS_TAG_TYPE_UINT \| 200006 | The timeout of get property operation.<br>**Since**: 22 |

### OH_Huks_ExternalPinAuthState

```c
enum OH_Huks_ExternalPinAuthState
```

**Description**

Enumerates the Ukey PIN authentication states.

**Since**: 22

| Enum item | Description |
| -- | -- |
| OH_HUKS_EXT_CRYPTO_PIN_NO_AUTH = 0 | Ukey PIN is not authenticated.<br>**Since**: 22 |
| OH_HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED = 1 | Ukey PIN is authenticated.<br>**Since**: 22 |
| OH_HUKS_EXT_CRYPTO_PIN_LOCKED = 2 | Ukey PIN is locked.<br>**Since**: 22 |


