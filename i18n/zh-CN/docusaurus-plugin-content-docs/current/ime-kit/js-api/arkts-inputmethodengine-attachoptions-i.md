# AttachOptions

Defines additional options for binding an input method.

**起始版本：** 19

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## isSimpleKeyboardEnabled

```TypeScript
isSimpleKeyboardEnabled?: boolean
```

Whether to enable the simple keyboard. This attribute is set by the edit box application. The value **true** means that the simple keyboard is enabled, and the value **false** means the opposite. If this attribute is not set or is set to an invalid value, the simple keyboard is disabled by default.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## requestKeyboardReason

```TypeScript
requestKeyboardReason?: RequestKeyboardReason
```

Reason for requesting the keyboard. This attribute is set by the edit box application. If this attribute is not set or is set to an invalid value, the keyboard will not be triggered by default.

**类型：** RequestKeyboardReason

**起始版本：** 19

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

