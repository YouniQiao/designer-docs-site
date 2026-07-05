# OnWillNewWantFn

```TypeScript
type OnWillNewWantFn = (ability: UIAbility) => void
```

注册监听应用上下文的生命周期后，在UIAbility的onNewWant触发前回调。

**起始版本：** 23

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 当前Ability对象。 |

