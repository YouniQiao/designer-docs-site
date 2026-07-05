# WebDestroyMode

```TypeScript
enum WebDestroyMode
```

提供SetWebDestroyMode接口配置web组件的销毁模式

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## NORMAL_MODE

```TypeScript
NORMAL_MODE = 0
```

普通销毁模式，当web组件触发销毁时，相关资源会在合适的时机释放

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## FAST_MODE

```TypeScript
FAST_MODE = 1
```

快速销毁模式，当web组件触发销毁时，立即释放相关资源

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

