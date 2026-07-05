# Pkcs12CreationConfig

表示创建P12的配置。

**Since:** 21

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## macIterations

```TypeScript
macIterations?: int
```

表示P12的MAC的迭代次数。默认为2048。 取值应为正整数。

**Type:** int

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## certEncParams

```TypeScript
certEncParams?: PbesParams
```

表示证书加密的算法参数。

**Type:** PbesParams

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## encryptCert

```TypeScript
encryptCert?: boolean
```

表示是否加密证书。默认为true。true为加密，false为不加密。

**Type:** boolean

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## password

```TypeScript
password: string
```

表示P12的密码。最小长度为4。

**Type:** string

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## macSaltLen

```TypeScript
macSaltLen?: int
```

表示P12的MAC的盐值长度。最小值为8，默认为16。 取值应为≥8的整数。

**Type:** int

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## macDigestAlgorithm

```TypeScript
macDigestAlgorithm?: Pkcs12MacDigestAlgorithm
```

表示P12的MAC摘要算法。默认为SHA256。

**Type:** Pkcs12MacDigestAlgorithm

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## keyEncParams

```TypeScript
keyEncParams?: PbesParams
```

表示私钥加密的算法参数。

**Type:** PbesParams

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

