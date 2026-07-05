# InterceptionShowCallback

```TypeScript
declare type InterceptionShowCallback = (from: NavDestinationContext|NavBar, to: NavDestinationContext|NavBar, operation: NavigationOperation, isAnimated: boolean) => void
```

Navigation页面跳转前和页面跳转后的拦截回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

| 类型 | 说明 |
| --- | --- |
| (from: NavDestinationContext |  |
| NavBar, to: NavDestinationContext |  |
| NavBar, operation: NavigationOperation, isAnimated: boolean) => void |  |

