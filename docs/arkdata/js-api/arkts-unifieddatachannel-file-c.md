# File

Represents the file data. It is a child class of [UnifiedRecord]unifiedDataChannel.UnifiedRecord and a base class of the data of the file type. You are advised to use the child class of **File**, for example, [Image]unifiedDataChannel.Image, [Video]unifiedDataChannel.Video, and [Folder]unifiedDataChannel.Folder, to describe data.

**Inheritance:** Fileextends: UnifiedRecord.

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

## details

```TypeScript
details?: Record<string, string>
```

A dictionary type object, where both the key and value are of the string type and are used to describe file information. For example, a data object with the following content can be created to describe a file: { "name":"File name", "type":"File type" } The default value is an empty dictionary object.

**Type:** Record<string, string>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get details(): Record<string, string> | undefined
```

Indicates the details of unified File

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set details(value: Record<string, string> | undefined)
```

Indicates the details of unified File

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## uri

```TypeScript
get uri(): string
```

Indicates the uri of file

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set uri(value: string)
```

Indicates the uri of file

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

