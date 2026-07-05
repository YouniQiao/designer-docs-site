# HuksReturnResult

调用接口返回的result。

**起始版本：** 9

**系统能力：** SystemCapability.Security.Huks.Core

## 导入模块

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
```

## outData

```TypeScript
outData?: Uint8Array
```

表示 [initSession]huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>) 操作之后获取到的challenge信息。默认为undefined。

**类型：** Uint8Array

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

## sharedSecret

```TypeScript
sharedSecret?: Uint8Array
```

定义共享密钥。

**类型：** Uint8Array

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

## certChains

```TypeScript
certChains?: Array<string>
```

表示证书链数据。默认为undefined。

**类型：** Array<string>

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

## properties

```TypeScript
properties?: Array<HuksParam>
```

表示 [initSession]huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>) 操作之后获取到的challenge信息。默认为undefined。

**类型：** Array<HuksParam>

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

