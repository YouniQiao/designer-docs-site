# TabContent properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** TabContentAttribute extends [CommonMethod<TabContentAttribute>](CommonMethod<TabContentAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillHide

```TypeScript
onWillHide(event: VoidCallback)
```

Called when the tab content is about to be hidden. The scenarios include the tab switching, page switching, and
window switching between the foreground and background.

> **NOTE**
>
> This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | Callback for when the tab content is about to be hidden. |

## onWillShow

```TypeScript
onWillShow(event: VoidCallback)
```

Called when the tab content is about to be displayed. The scenarios include the first-time display, tab switching,
page switching, and window switching between the foreground and background.

> **NOTE**
>
> This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | Callback for when the tab content is about to be displayed. |

## tabBar

```TypeScript
tabBar(options: string | Resource | CustomBuilder | TabBarOptions)
```

Sets the content displayed on the tab bar.

If the icon uses an SVG image source, delete the width and height attribute values built in the SVG image source.
Otherwise, the width and height attribute values built in the SVG image source are used.

If the content exceeds the space provided by the tab bar, it will be clipped.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | string \| Resource \| CustomBuilder \| TabBarOptions | Yes | Content displayed on the tab bar.<br>**CustomBuilder**: builder, to which components can be passed (applicable to API version 8 and later versions).<br>**Since:** 18 |

## tabBar

```TypeScript
tabBar(value: SubTabBarStyle | BottomTabBarStyle)
```

Sets the content displayed on the tab bar. The bottom tab style does not include an indicator. When an icon display
error occurs, a gray blank block is displayed.

> **NOTE**
>
> - [SubTabBarStyle](arkts-arkui-subtabbarstyle-c.md): text + underline or text + board. The text style can be set. It is
> recommended that the subtab be placed at the top or bottom. By default, the animation transition effect is
> displayed when a tab is switched. This style is applicable to the top categories (such as Following, Video,
> Digital) of information apps and level-2 navigation scenarios of functional modules.
>
> - [BottomTabBarStyle](arkts-arkui-bottomtabbarstyle-c.md): icon + text, without underline or board. By default, no animation
> transition effect is displayed when a tab is switched. Bottom tabs are usually used for the main navigation of an
> app (such as Home, Discover, and Recommended). Side tabs are applicable to wide-screen scenarios. You can set
> **vertical(true)** to enable the vertical layout so that the tabs are displayed on the side. By default, the tabs
> are displayed on the left.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SubTabBarStyle \| BottomTabBarStyle | Yes | Content displayed on the tab bar.<br>**SubTabBarStyle**:subtab style.<br>**BottomTabBarStyle**: bottom and side tab style |

## tabBar

```TypeScript
tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | 
    TabBarOptions)
```

Sets the content displayed on the tab bar.

If **BottomTabBarStyle** or **TabBarOptions** is used and an icon is set, a gray block will be displayed if the
icon is invalid. If the icon uses an SVG image source, delete the width and height attribute values built in the
SVG image source. Otherwise, the width and height attribute values built in the SVG image source are used.

If the content exceeds the space provided by the tab bar, it will be clipped.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ComponentContent \| SubTabBarStyle \| BottomTabBarStyle \| string \| Resource \| CustomBuilder \| TabBarOptions | Yes | Content displayed on the tab bar.<br>**ComponentContent**: encapsulation of the component content,which can be customized.<br>**SubTabBarStyle**: subtab style.<br>**BottomTabBarStyle**: style of the bottom andside tabs. The bottom style does not have the underline effect.<br>**string**: string type.<br>**Resource**:resource reference for importing strings from system or application resources.<br>**CustomBuilder**: builderthat can take components as arguments.<br>**TabBarOptions**: options for configuring images and text content onthe tabs. |

