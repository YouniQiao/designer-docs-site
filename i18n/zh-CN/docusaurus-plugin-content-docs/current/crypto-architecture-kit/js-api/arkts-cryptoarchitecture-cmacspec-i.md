---
last_update:
  date: 2026-07-04
---

# CmacSpec

消息认证码参数[MacSpec](arkts-cryptoarchitecture-macspec-i.md#macspec)的子类，作为CMAC消息验证码计算的输入。 > **说明：** > > cipherName是必选参数，表示CMAC对称加密算法。

**继承/实现关系：** CmacSpec extends [MacSpec](arkts-cryptoarchitecture-macspec-i.md#macspec)

**起始版本：** 18

**系统能力：** SystemCapability.Security.CryptoFramework.Mac

## cipherName

```TypeScript
cipherName: string
```

对称加密算法名。

**类型：** string

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Security.CryptoFramework.Mac

