# NotifySnapshotCallback

```TypeScript
type NotifySnapshotCallback = (deviceId: string, mission: int) => void
```

Callback function on snapshot changed.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates the deviceId snapshot changed. |
| mission | int | 是 | Indicates the id of mission. |

