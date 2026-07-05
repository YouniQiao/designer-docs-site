# HuksSecureSignType

```TypeScript
export enum HuksSecureSignType
```

表示生成或导入密钥时，指定该密钥的签名类型。

**Since:** 9

**System capability:** SystemCapability.Security.Huks.Extension

## HUKS_SECURE_SIGN_WITH_AUTHINFO

```TypeScript
HUKS_SECURE_SIGN_WITH_AUTHINFO = 1
```

表示签名类型为携带认证信息。生成或导入密钥时指定该字段，则在使用密钥进行签名时，对待签名的数据添加认证信息后进行签名。 **注意：** 携带的认证信息包含身份信息，开发者需在其隐私声明中对此身份信息的使用目的、存留策略和销毁方式进行说明。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

