# MultiFormData

Represents the properties of a form object.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## data

```TypeScript
data?: string | Object | ArrayBuffer
```

This parameter sets a mime part's body content from memory data.

**类型：** string | Object | ArrayBuffer

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## remoteFileName

```TypeScript
remoteFileName?: string
```

Remote file name for the data field.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## filePath

```TypeScript
filePath?: string
```

This parameter sets a mime part's body content from the file's contents. This is an alternative to curl_mime_data for setting data to a mime part. If data is empty, filePath must be set. If data has a value, filePath does not take effect.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## name

```TypeScript
name: string
```

MIME name for the data field.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## contentType

```TypeScript
contentType: string
```

Content type of the data field.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

