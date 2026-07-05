# TextDecoderOptions

描述解码相关的选项，包含 **fatal** 和 **ignoreBOM**。

**Since:** 11

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## ignoreBOM

```TypeScript
ignoreBOM?: boolean
```

是否忽略 BOM。值为 **true** 表示忽略 BOM，值为 **false** 表示相反的情况。默认值为 **false**。

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## fatal

```TypeScript
fatal?: boolean
```

是否显示致命错误。值为 **true** 表示显示致命错误，值为 **false** 表示相反的情况。默认值为 **false**。

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

