# PasteDataProperty

Defines the properties of PasteData in the pasteboard, including the timestamp, data types, pasteable range, and additional data. The defined properties can be applied to the pasteboard only with the [setProperty]pasteboard.PasteData.setProperty(property: PasteDataProperty) method.

**起始版本：** 7

**系统能力：** SystemCapability.MiscServices.Pasteboard

## 导入模块

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## localOnly

```TypeScript
localOnly: boolean
```

Whether the pasteboard content is for local access only. The default value is **false**. The value will be overwritten by the value of the **shareOption** attribute. You are advised to use the [ShareOption]pasteboard.ShareOption attribute instead.

**类型：** boolean

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## mimeTypes

```TypeScript
readonly mimeTypes: Array<string>
```

Data types of all records in PasteData.

**类型：** Array<string>

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## additions

```TypeScript
additions: Record<string, object>
```

Additional property data. It does not allow for dynamic adding of properties. Properties can be added only by re- assigning values. This parameter is left empty by default. For details, see the example of **setProperty**.

**类型：** Record<string, object>

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

```TypeScript
additions: Record<string, RecordData>
```

additional property data. key-value pairs.

**类型：** Record<string, RecordData>

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.Pasteboard

## tag

```TypeScript
tag: string
```

Custom tag. This parameter is left empty by default.

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## shareOption

```TypeScript
shareOption: ShareOption
```

Pasteable ranges of PasteData. The default value is **CROSSDEVICE**.

**类型：** ShareOption

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

## timestamp

```TypeScript
readonly timestamp: long
```

Timestamp when data is written to the pasteboard (unit: nanoseconds since the device is powered on).

**类型：** long

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

