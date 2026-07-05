# OnCompletedFn

```TypeScript
type OnCompletedFn = (error: BusinessError<void>) => void
```

所有启动任务完成时的回调函数。

**起始版本：** 23

**系统能力：** SystemCapability.Ability.AppStartup

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| error | BusinessError&lt;void> | 是 | 错误信息。 |

