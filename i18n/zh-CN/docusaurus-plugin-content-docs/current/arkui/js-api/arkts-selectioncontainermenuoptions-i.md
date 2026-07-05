# SelectionContainerMenuOptions

Defines selection menu options for SelectionContainer.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { SelectionContainerInstance,SelectionContainer,OnMenuItemClickWithTextCallback,SelectionContainerAttribute,SelectionContainerEditMenuOptions,SelectionContainerTextJoinStyle,SelectionContainerMenuOptions } from '@kit.ArkUI';
```

## onDisappear

```TypeScript
onDisappear?: Callback<void>
```

Called when the selection menu disappears.

**类型：** Callback<void>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onMenuHide

```TypeScript
onMenuHide?: Callback<string>
```

Called when the selection menu is hidden. The callback parameter is the selected text concatenated in the visual order of Text components.

**类型：** Callback<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onMenuShow

```TypeScript
onMenuShow?: Callback<string>
```

Called when the selection menu is displayed. The callback parameter is the selected text concatenated in the visual order of Text components.

**类型：** Callback<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onAppear

```TypeScript
onAppear?: Callback<string>
```

Called when the selection menu appears. The callback parameter is the selected text concatenated in the visual order of Text components.

**类型：** Callback<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

