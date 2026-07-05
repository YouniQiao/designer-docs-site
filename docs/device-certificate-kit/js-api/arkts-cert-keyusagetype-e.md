# KeyUsageType

```TypeScript
enum KeyUsageType
```

表示证书中密钥用途的枚举。

**Since:** 12

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_DIGITAL_SIGNATURE

```TypeScript
KEYUSAGE_DIGITAL_SIGNATURE = 0
```

证书持有者可以用证书中包含的私钥进行数字签名操作。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_NON_REPUDIATION

```TypeScript
KEYUSAGE_NON_REPUDIATION = 1
```

证书公钥可用于不可否认操作，防止签名者否认其签名。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_KEY_ENCIPHERMENT

```TypeScript
KEYUSAGE_KEY_ENCIPHERMENT = 2
```

证书公钥可用于密钥加密操作，用于加密对称密钥等。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_DATA_ENCIPHERMENT

```TypeScript
KEYUSAGE_DATA_ENCIPHERMENT = 3
```

证书公钥可用于数据加密操作，用于加密数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_KEY_AGREEMENT

```TypeScript
KEYUSAGE_KEY_AGREEMENT = 4
```

证书公钥可用于密钥协商操作，用于协商共享密钥。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_KEY_CERT_SIGN

```TypeScript
KEYUSAGE_KEY_CERT_SIGN = 5
```

证书公钥可用于证书签名操作。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_CRL_SIGN

```TypeScript
KEYUSAGE_CRL_SIGN = 6
```

证书公钥可用于证书吊销列表（CRL）的签名操作。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_ENCIPHER_ONLY

```TypeScript
KEYUSAGE_ENCIPHER_ONLY = 7
```

密钥只能用于加密操作，不能用于解密操作。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## KEYUSAGE_DECIPHER_ONLY

```TypeScript
KEYUSAGE_DECIPHER_ONLY = 8
```

密钥只能用于解密操作，不能用于加密操作。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

