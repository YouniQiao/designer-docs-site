# RouterState

页面状态信息。

**起始版本：** 8

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { router } from '@kit.ArkUI';
```

## path

```TypeScript
path: string
```

表示当前页面的路径。

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## name

```TypeScript
name: string
```

表示当前页面的名称，即对应文件名。

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index: number
```

表示当前页面在页面栈中的索引。从栈底到栈顶，index从1开始递增。

**类型：** number

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## params

```TypeScript
params: Object
```

表示当前页面携带的参数。

**类型：** Object

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

