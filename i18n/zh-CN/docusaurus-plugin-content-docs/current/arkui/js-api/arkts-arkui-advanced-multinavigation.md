# @ohos.arkui.advanced.MultiNavigation

## 导入模块

```TypeScript
import { MultiNavPathStack,MultiNavigation,SplitPolicy } from '@kit.ArkUI';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [MultiNavPathStack](arkts-multinavpathstack-c.md) | 当前，MultiNavigation的路由栈仅支持由使用方自行创建，不支持通过回调方式获取。请勿使用[NavDestination]{@link nav_destination}的 [onReady]{@link NavDestinationAttribute#onReady}等类似事件或接口来获取NavPathStack并进行栈操作，因为这可能会导致不可预知的问题。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SplitPolicy](arkts-splitpolicy-e.md) | 表示MultiNavigation中页面的类型。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [NavDestinationBuildFunction](arkts-navdestinationbuildfunction-t.md) | MultiNavigation用以加载NavDestination的方法。 |
| [OnHomeShowOnTopCallback](arkts-onhomeshowontopcallback-t.md) | 当主页在栈顶显示时触发的回调函数。 |
| [OnNavigationModeChangeCallback](arkts-onnavigationmodechangecallback-t.md) | 当MultiNavigation的mode变化时触发的回调函数。 |

