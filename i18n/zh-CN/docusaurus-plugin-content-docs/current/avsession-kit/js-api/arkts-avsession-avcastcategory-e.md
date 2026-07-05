# AVCastCategory

```TypeScript
enum AVCastCategory
```

cast category indicating different playback scenes

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## CATEGORY_LOCAL

```TypeScript
CATEGORY_LOCAL = 0
```

The default cast type "local", media can be routed on the same device, including internal speakers or audio jack on the device itself, A2DP devices.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## CATEGORY_REMOTE

```TypeScript
CATEGORY_REMOTE = 1
```

The remote category indicating the media is presenting on a remote device, the application needs to get an AVCastController to control remote playback.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

