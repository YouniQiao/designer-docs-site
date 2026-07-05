# ContentOptions

Defines the options for obtaining the onscreen content.

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## contentUnderstand

```TypeScript
contentUnderstand?: boolean
```

Whether content understanding is required. The default value is **False**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## textOnly

```TypeScript
textOnly?: boolean
```

Whether to obtain only the text and divide the text into paragraphs. The default value is **False**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## pageLink

```TypeScript
pageLink?: boolean
```

Whether to obtain the page link. The default value is **False**.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## windowId

```TypeScript
windowId?: int
```

ID of the window whose content needs to be obtained. If this parameter is not set or is set to **undefined**, the content of the full-screen window is obtained by default.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

