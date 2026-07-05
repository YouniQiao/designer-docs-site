# ErrorCallback

通用回调函数，携带错误参数，用于在接口调用失败时回传错误信息。回调返回的信息为[BusinessError](arkts-businesserror-i.md#BusinessError)类型的错误参数。

**起始版本：** 6

**系统能力：** SystemCapability.Base

## 导入模块

```TypeScript
import { Callback,BusinessError,ErrorCallback,AsyncCallback } from '@kit.BasicServicesKit';
```

## constructor

```TypeScript
(err: T): void
```

**起始版本：** 6

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Base

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| err | T | 是 | 接口调用失败的公共错误信息，类型默认为BusinessError，包含错误码（code）和可选附加数据（data）。 |

