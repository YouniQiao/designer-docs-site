# EffectComponentAttribute

支持通用属性，目前仅支持对backgroundBlurStyle属性做绘制合并优化。 不支持通用事件。

**继承实现关系：** EffectComponentAttribute继承自：CommonMethod<EffectComponentAttribute>。

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## alwaysSnapshot

```TypeScript
alwaysSnapshot(enable: boolean)
```

Use snapshot when Effect Component have no visual effect.

**起始版本：** 19

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

