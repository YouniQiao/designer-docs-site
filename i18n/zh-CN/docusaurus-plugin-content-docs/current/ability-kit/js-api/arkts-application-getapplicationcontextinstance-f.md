# getApplicationContextInstance

## getApplicationContextInstance

```TypeScript
export function getApplicationContextInstance(): ApplicationContext
```

获取应用上下文。开发者使用该接口时，无需依赖Context基类。 重复调用该接口，将获取同一个ApplicationContext实例。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ApplicationContext | 应用上下文。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. Possible causes: Memory operation error. |

