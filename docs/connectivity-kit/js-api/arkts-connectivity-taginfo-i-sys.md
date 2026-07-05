# TagInfo

Provides tag information. <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create different tags based on the supported technology.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## Modules to Import

```TypeScript
import { tag } from '@ohos.nfc.tag';
```

## extrasData

```TypeScript
extrasData: PacMap[]
```

The extra data for each technology of this tag.

**Type:** PacMap[]

**Since:** 9

**Required permissions:** ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**System API:** This is a system API.

## remoteTagService

```TypeScript
remoteTagService: rpc.RemoteObject
```

The extra data for the technology of this tag.

**Type:** rpc.RemoteObject

**Since:** 9

**Required permissions:** ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**System API:** This is a system API.

## tagRfDiscId

```TypeScript
tagRfDiscId: number
```

The the RF discovery id of this tag.

**Type:** number

**Since:** 9

**Required permissions:** ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**System API:** This is a system API.

