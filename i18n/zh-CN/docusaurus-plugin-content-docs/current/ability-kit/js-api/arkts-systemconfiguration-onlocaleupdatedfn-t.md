# OnLocaleUpdatedFn

```TypeScript
type OnLocaleUpdatedFn = (locale: string) => void
```

Defines an OnLocaleUpdatedFn function.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | Indicates the locale settings. The application will automatically adjust  its behavior based on the current locale to meet the user's localization requirements. This property  can be configured by setting the system language, system region, and application language preferences |

