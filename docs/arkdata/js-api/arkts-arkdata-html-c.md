# HTML

Represents the HTML data. It is a child class of [Text](arkts-arkdata-text-c.md#text).

**Inheritance/Implementation:** HTML extends [Text](arkts-arkdata-text-c.md#text)

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## htmlContent

```TypeScript
set htmlContent(value: string)
```

Indicates the content of html, with html tags

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## plainContent

```TypeScript
plainContent?: string
```

Plaintext without HTML tags. This parameter is optional. The default value is an empty string.

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## uriAuthorizationPolicies

```TypeScript
set uriAuthorizationPolicies(value: Array<UriPermission> | undefined)
```

Defines URI authorization policies for drag intention.

**Type:** Array<UriPermission>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

