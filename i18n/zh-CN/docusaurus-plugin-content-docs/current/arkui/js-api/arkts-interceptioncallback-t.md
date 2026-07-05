# InterceptionCallback

```TypeScript
declare type InterceptionCallback = (from: NavPathInfo|NavBar, to: NavPathInfo|NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void
```

Navigation页面跳转前的拦截回调。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

| 类型 | 说明 |
| --- | --- |
| (from: NavPathInfo |  |
| NavBar, to: NavPathInfo |  |
| NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void |  |

