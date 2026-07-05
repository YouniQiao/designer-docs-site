# WithEnvAttribute

Define the WithEnv attribute functions.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { WithEnvAttribute,WithEnv } from '@kit.ArkUI';
```

## customEnv

```TypeScript
customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute
```

Defining Custom Environment Variables

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | CustomEnvKey&lt;T> | 是 | Key for custom environment variables. |
| value | T | 是 | Value of custom environment variables. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WithEnvAttribute | WithEnvAttribute object. |

## env

```TypeScript
env<T>(key: WritableSystemEnvKey<T>, value: T): WithEnvAttribute
```

Defining System Environment Variables

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | WritableSystemEnvKey&lt;T> | 是 | Key for system environment variables. |
| value | T | 是 | Value of system environment variables. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WithEnvAttribute | WithEnvAttribute object. |

