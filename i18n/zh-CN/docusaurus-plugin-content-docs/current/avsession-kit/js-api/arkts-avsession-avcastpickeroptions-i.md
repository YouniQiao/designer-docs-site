# AVCastPickerOptions

An option to make different picker usage

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## menuPosition

```TypeScript
menuPosition?: MenuPosition
```

Set the popup menu position if pickerstyple is set to STYLE_MENU.

**类型：** MenuPosition

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## sessionType

```TypeScript
sessionType?: AVSessionType
```

Indicates current session type to show different picker ui. If not set, default value is 'audio'.

**类型：** AVSessionType

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## pickerStyle

```TypeScript
pickerStyle?: AVCastPickerStyle
```

Set the picker style.

**类型：** AVCastPickerStyle

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

