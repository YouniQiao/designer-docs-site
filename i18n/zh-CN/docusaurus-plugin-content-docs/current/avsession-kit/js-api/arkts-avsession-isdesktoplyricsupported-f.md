# isDesktopLyricSupported

## isDesktopLyricSupported

```TypeScript
function isDesktopLyricSupported(): Promise<boolean>
```

Whether desktop lyric feature is supported.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | - result returned to indicate desktop lyric is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
import { avSession } from '@kit.AVSessionKit';

avSession.isDesktopLyricSupported().then((isSupported: boolean) => {
  console.info(`Succeeded in checking desktop lyric supported: ${isSupported}`);
});

```

