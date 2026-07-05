# ArcListItemAttribute

除支持[通用属性]common外，还支持以下属性：

**继承实现关系：** ArcListItemAttribute继承自：CommonMethod<ArcListItemAttribute>。

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Circle

## 导入模块

```TypeScript
import { ArcListItemAttribute,ArcList,ArcListItem,ArcListAttribute } from '@kit.ArkUI';
```

## autoScale

```TypeScript
autoScale(enable: Optional<boolean>): ArcListItemAttribute
```

用于设置ArcListItem是否支持自动缩放显示。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Circle

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean> | 是 | ArcListItem是否支持自动缩放显示，true表示支持自动缩放显示，false表示不支持自动缩放显示。 默认值：true，支持自动缩放显示。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ArcListItemAttribute |  |

## swipeAction

```TypeScript
swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute
```

用于设置ArcListItem的划出组件。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Circle

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | Optional&lt;SwipeActionOptions> | 是 | ArcListItem的划出组件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ArcListItemAttribute |  |

