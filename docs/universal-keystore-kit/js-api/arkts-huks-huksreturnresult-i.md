# HuksReturnResult

调用接口返回的result。

**Since:** 9

**System capability:** SystemCapability.Security.Huks.Core

## Modules to Import

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
```

## outData

```TypeScript
outData?: Uint8Array
```

表示 [initSession]huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>) 操作之后获取到的challenge信息。默认为undefined。

**Type:** Uint8Array

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## sharedSecret

```TypeScript
sharedSecret?: Uint8Array
```

定义共享密钥。

**Type:** Uint8Array

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## certChains

```TypeScript
certChains?: Array<string>
```

表示证书链数据。默认为undefined。

**Type:** Array<string>

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## properties

```TypeScript
properties?: Array<HuksParam>
```

表示 [initSession]huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>) 操作之后获取到的challenge信息。默认为undefined。

**Type:** Array<HuksParam>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

