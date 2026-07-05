# TagInfo

Provides tag information. <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create different tags based on the supported technology.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## uid

```TypeScript
uid: int[]
```

The uid of this tag, it.

**Type:** int[]

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

## supportedProfiles

```TypeScript
supportedProfiles: number[]
```

The supported technology list of this tag.

**Type:** number[]

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.nfc.tag/tag.TagInfo#technology

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

## extrasData

```TypeScript
extrasData: PacMap[]
```

The extra data for each technology of this tag.

**Type:** PacMap[]

**Since:** 9

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**System API:** This is a system API.

## remoteTagService

```TypeScript
remoteTagService: rpc.RemoteObject
```

The extra data for the technology of this tag.

**Type:** rpc.RemoteObject

**Since:** 9

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**System API:** This is a system API.

## technology

```TypeScript
technology: int[]
```

The supported technology list of this tag.

**Type:** int[]

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

## tagRfDiscId

```TypeScript
tagRfDiscId: int
```

The the RF discovery id of this tag.

**Type:** int

**Since:** 9

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.NFC.Tag

**System API:** This is a system API.

