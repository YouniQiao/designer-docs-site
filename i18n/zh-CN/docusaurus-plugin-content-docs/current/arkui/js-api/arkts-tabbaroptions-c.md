# TabBarOptions

the class for TabBarOption

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { TabBarPosition,TabBarOptions,AtomicServiceTabs,TabContentBuilder,OnContentWillChangeCallback } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr,
    unselectedColor?: ResourceColor, selectedColor?: ResourceColor)
```

constructor to init the tabbar including icon, text, unselectedColor and selectedColor.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| icon | ResourceStr \| TabBarSymbol | 是 |  |
| text | ResourceStr | 是 | cannot be empty |
| unselectedColor | ResourceColor | 否 |  |
| selectedColor | ResourceColor | 否 |  |

