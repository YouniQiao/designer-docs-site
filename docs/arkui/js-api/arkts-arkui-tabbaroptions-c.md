# TabBarOptions

the class for TabBarOption

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TabBarPosition, TabBarOptions, AtomicServiceTabs, TabContentBuilder, OnContentWillChangeCallback } from '@ohos.atomicservice.AtomicServiceTabs';
```

## constructor

```TypeScript
constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor)
```

constructor to init the tabbar including icon, text, unselectedColor and selectedColor.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| icon | ResourceStr \| TabBarSymbol | Yes |  |
| text | ResourceStr | Yes | cannot be empty |
| unselectedColor | ResourceColor | No |  |
| selectedColor | ResourceColor | No |  |

