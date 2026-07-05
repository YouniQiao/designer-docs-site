# CsrGenerationConfig

用于生成CSR的配置参数，包含主体名称、扩展、摘要算法、输出格式等。 > **说明：** > > - subject是X509定义的Name类型的对象。 > > - mdName是摘要算法名，当前支持SHA1、SHA256、SHA384、SHA512。 > > - attributes是可选参数，指定**PKCS #9**中规定的扩展类型跟扩展值生成CSR。例如challengePassword。 > > - outFormat指定输出CSR的格式，若不指定默认为PEM格式。

**Since:** 18

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## mdName

```TypeScript
mdName: string
```

摘要算法名。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## subject

```TypeScript
subject: X500DistinguishedName
```

主体名称。

**Type:** X500DistinguishedName

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## outFormat

```TypeScript
outFormat?: EncodingBaseFormat
```

输出类型。

**Type:** EncodingBaseFormat

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## attributes

```TypeScript
attributes?: Array<CsrAttribute>
```

属性的集合。

**Type:** Array<CsrAttribute>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

