# RepeatInterface

```TypeScript
declare type RepeatInterface = <T>(arr: RepeatArray<T>) => RepeatAttribute<T>
```

Indicates the type of Repeat.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| arr | RepeatArray&lt;T> | 是 | The Data Source |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RepeatAttribute&lt;T> | - |

