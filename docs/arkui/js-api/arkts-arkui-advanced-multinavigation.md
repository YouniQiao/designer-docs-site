# @ohos.arkui.advanced.MultiNavigation

## Modules to Import

```TypeScript
import { MultiNavPathStack, MultiNavigation, SplitPolicy } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [MultiNavPathStack](arkts-arkui-multinavpathstack-c.md) | Implements a navigation stack of the **MultiNavigation** component. Currently, this stack can be created only by the user and cannot be obtained through callbacks. Do not use events or APIs such as **onReady** of **NavDestination** to obtain the navigation stack and perform stack operations, as this may lead to unpredictable issues. |

### Structs

| Name | Description |
| --- | --- |
| [MultiNavigation](arkts-arkui-multinavigation-s.md) | **MultiNavigation** is a component designed for multi-column display and routing navigation on large-screen devices. &gt; **NOTE** &gt; Due to the nested stack structure of **MultiNavigation**, calling APIs explicitly stated as unsupported in this &gt; document or APIs not listed in the supported API list (such as **getParent**, **setInterception**, and &gt; **pushDestination**) may lead to unpredictable issues. &gt; In scenarios with deep nesting, **MultiNavigation** may encounter routing animation issues. |

### Enums

| Name | Description |
| --- | --- |
| [SplitPolicy](arkts-arkui-splitpolicy-e.md) | Enumerates the types of pages in **MultiNavigation**. |

### Types

| Name | Description |
| --- | --- |
| [NavDestinationBuildFunction](arkts-arkui-navdestinationbuildfunction-t.md) | Represents the function used by the **MultiNavigation** component to load navigation destination pages. |
| [OnHomeShowOnTopCallback](arkts-arkui-onhomeshowontopcallback-t.md) | Represents the callback invoked when the home page is displayed at the top of the stack. |
| [OnNavigationModeChangeCallback](arkts-arkui-onnavigationmodechangecallback-t.md) | Represents the callback invoked when the mode of the **MultiNavigation** component changes. |

