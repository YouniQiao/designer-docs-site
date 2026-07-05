# HuksSessionHandle

HUKS handle结构体。

**Since:** 9

**System capability:** SystemCapability.Security.Huks.Core

## Modules to Import

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
```

## challenge

```TypeScript
challenge?: Uint8Array
```

表示 [initSession]huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>) 操作之后获取到的challenge信息。默认为undefined。

**Type:** Uint8Array

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

## handle

```TypeScript
handle: number
```

表示无符号整数类型的handle值。

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Core

