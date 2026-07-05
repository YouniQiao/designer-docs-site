# CmacSpec

消息认证码参数[MacSpec]cryptoFramework.MacSpec的子类，作为CMAC计算的输入。 > **说明：** > > cipherName是必选参数，表示CMAC使用的对称密码算法。

**Inheritance:** CmacSpecextends: MacSpec.

**Since:** 18

**System capability:** SystemCapability.Security.CryptoFramework.Mac

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## cipherName

```TypeScript
cipherName: string
```

CMAC使用的对称密码算法名。

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

