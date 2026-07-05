# PageContent

Defines the onscreen content.

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## scenario

```TypeScript
scenario?: Scenario
```

Scenario of the onscreen content. This parameter is available only when **options.contentUnderstand** is set to **True**.

**类型：** Scenario

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the onscreen content.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## sessionId

```TypeScript
sessionId: long
```

Session ID, which identifies the call action.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## paragraphs

```TypeScript
paragraphs?: Paragraph[]
```

Paragraph information of the onscreen content. This parameter is available only when **options.textOnly** is set to **True**.

**类型：** Paragraph[]

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## title

```TypeScript
title?: string
```

Title of the onscreen content. This parameter is available only when **options.contentUnderstand** is set to **True**.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## content

```TypeScript
content?: string
```

Body of the onscreen content. This parameter is available only when **options.contentUnderstand** is set to **True**.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## pageLink

```TypeScript
pageLink?: string
```

Page link of the onscreen content. This parameter is available only when **options.pageLink** is set to **True**.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

## windowId

```TypeScript
windowId: int
```

Window ID of the onscreen content.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

**系统接口：** 此接口为系统接口。

