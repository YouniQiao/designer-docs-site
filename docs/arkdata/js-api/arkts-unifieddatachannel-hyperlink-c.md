# Hyperlink

Represents the hyperlink data. It is a child class of [Text]unifiedDataChannel.Text.

**Inheritance:** Hyperlinkextends: Text.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## description

```TypeScript
description?: string
```

Indicates the description of a link

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get description(): string | undefined
```

Indicates the description of a link

**Type:** string

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set description(value: string | undefined)
```

Indicates the description of a link

**Type:** string

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## url

```TypeScript
get url(): string
```

Indicates the url of a link

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set url(value: string)
```

Indicates the url of a link

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

