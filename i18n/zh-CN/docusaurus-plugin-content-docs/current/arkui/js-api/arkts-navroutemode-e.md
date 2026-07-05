# NavRouteMode

```TypeScript
declare enum NavRouteMode
```

路由模式。

**起始版本：** 10

**废弃版本：** 13

**替代接口：** Navigation#NavPathStack

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## PUSH_WITH_RECREATE

```TypeScript
PUSH_WITH_RECREATE = 0
```

跳转到新的NavDestination页面时，替换当前显示的NavDestination页面，页面销毁，但该页面信息仍保留在路由栈中。

**起始版本：** 10

**废弃版本：** 13

**替代接口：** Navigation#LaunchMode

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## PUSH

```TypeScript
PUSH = 1
```

**起始版本：** 10

**废弃版本：** 13

**替代接口：** Navigation#LaunchMode

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## REPLACE

```TypeScript
REPLACE = 2
```

**起始版本：** 10

**废弃版本：** 13

**替代接口：** Navigation#LaunchMode

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

