# TabBarOptions

the class for TabBarOption

**Since:** 12

<!--Device-unnamed-export declare class TabBarOptions--><!--Device-unnamed-export declare class TabBarOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TabBarPosition, TabBarOptions, AtomicServiceTabs, TabContentBuilder, OnContentWillChangeCallback } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor)
```

constructor to init the tabbar including icon, text, unselectedColor and selectedColor.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TabBarOptions-constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor)--><!--Device-TabBarOptions-constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| icon | ResourceStr \| TabBarSymbol | Yes |  |
| text | [ResourceStr](arkts-arkui-resourcestr-t.md) | Yes | cannot be empty |
| unselectedColor | [ResourceColor](arkts-arkui-resourcecolor-t.md) | No |  |
| selectedColor | [ResourceColor](arkts-arkui-resourcecolor-t.md) | No |  |

