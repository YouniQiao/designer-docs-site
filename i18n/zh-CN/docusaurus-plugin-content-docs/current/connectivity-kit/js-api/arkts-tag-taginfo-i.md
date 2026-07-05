# TagInfo

Provides tag information. <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create different tags based on the supported technology.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## 导入模块

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## uid

```TypeScript
uid: int[]
```

The uid of this tag, it.

**类型：** int[]

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

## supportedProfiles

```TypeScript
supportedProfiles: number[]
```

The supported technology list of this tag.

**类型：** number[]

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.nfc.tag/tag.TagInfo#technology

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

## extrasData

```TypeScript
extrasData: PacMap[]
```

The extra data for each technology of this tag.

**类型：** PacMap[]

**起始版本：** 9

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**系统接口：** 此接口为系统接口。

## remoteTagService

```TypeScript
remoteTagService: rpc.RemoteObject
```

The extra data for the technology of this tag.

**类型：** rpc.RemoteObject

**起始版本：** 9

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**系统接口：** 此接口为系统接口。

## technology

```TypeScript
technology: int[]
```

The supported technology list of this tag.

**类型：** int[]

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

## tagRfDiscId

```TypeScript
tagRfDiscId: int
```

The the RF discovery id of this tag.

**类型：** int

**起始版本：** 9

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**系统接口：** 此接口为系统接口。

