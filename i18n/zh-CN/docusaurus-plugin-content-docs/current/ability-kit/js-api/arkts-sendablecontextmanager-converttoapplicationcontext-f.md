# convertToApplicationContext

## convertToApplicationContext

```TypeScript
function convertToApplicationContext(sendableContext: SendableContext): common.ApplicationContext
```

将SendableContext对象转换为ApplicationContext。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sendableContext | SendableContext | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| common.ApplicationContext | [ApplicationContext]./application/ApplicationContext:ApplicationContext  object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;  2.Parameter verification failed. |

