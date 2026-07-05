# CertChainData

证书链数据，在证书链校验时，作为入参传入。

**起始版本：** 9

**系统能力：** SystemCapability.Security.Cert

## 导入模块

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## data

```TypeScript
data: Uint8Array
```

证书数据。

**类型：** Uint8Array

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

## count

```TypeScript
count: int
```

传入的数据中，包含的证书数量。

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

## encodingFormat

```TypeScript
encodingFormat: EncodingFormat
```

编码格式。

**类型：** EncodingFormat

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

