# HTML

Represents the HTML data. It is a child class of [Text]unifiedDataChannel.Text.

**Inheritance:** HTMLextends: Text.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## uriAuthorizationPolicies

```TypeScript
set uriAuthorizationPolicies(value: Array<UriPermission> | undefined)
```

Defines URI authorization policies for drag intention.

**Type:** Array<UriPermission>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## plainContent

```TypeScript
plainContent?: string
```

Plaintext without HTML tags. This parameter is optional. The default value is an empty string.

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get plainContent(): string | undefined
```

Indicates the plain content of html

**Type:** string

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set plainContent(value: string | undefined)
```

Indicates the plain content of html

**Type:** string

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## htmlContent

```TypeScript
get htmlContent(): string
```

Indicates the content of html, with html tags

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set htmlContent(value: string)
```

Indicates the content of html, with html tags

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

