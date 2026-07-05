# ShareOption

```TypeScript
enum ShareOption
```

Enumerates the pasteable ranges of PasteData.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.Pasteboard

## INAPP

```TypeScript
INAPP = 0
```

Only intra-application pasting is allowed.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## LOCALDEVICE

```TypeScript
LOCALDEVICE = 1
```

Paste is allowed in any application.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## CROSSDEVICE

```TypeScript
CROSSDEVICE = 2
```

Paste is allowed in any application across devices. This API is deprecated since API version 12 without any alternative API or method.

**起始版本：** 9

**废弃版本：** 12

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

