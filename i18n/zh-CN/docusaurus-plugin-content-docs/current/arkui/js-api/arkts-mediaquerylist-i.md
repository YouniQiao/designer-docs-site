# MediaQueryList

Defines the MediaQuery list info.

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { MediaQueryEvent,MediaQueryList } from '@kit.ArkUI';
```

## addListener

```TypeScript
addListener(callback: (event: MediaQueryEvent) => void): void
```

Adds a listening function to MediaQueryList. The listening function must be added before onShow is called, that is, added to the onInit or onReady function.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (event: MediaQueryEvent) => void | 是 |  |

**示例：**

```TypeScript
import mediaquery, { MediaQueryEvent } from '@system.mediaquery';
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

function maxWidthMatch(e: MediaQueryEvent): void {
  if(e.matches){
    // do something
  }
}
mMediaQueryList.addListener(maxWidthMatch);

```

## removeListener

```TypeScript
removeListener(callback: (event: MediaQueryEvent) => void): void
```

Removes a listening function from MediaQueryList.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (event: MediaQueryEvent) => void | 是 |  |

**示例：**

```TypeScript
import mediaquery, { MediaQueryEvent } from '@system.mediaquery';
let mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

function maxWidthMatch(e: MediaQueryEvent): void {
  if(e.matches){
    // do something
  }
}
mMediaQueryList.removeListener(maxWidthMatch);

```

## onchange

```TypeScript
onchange?: (matches: boolean) => void
```

Called when the matches value changes.

**类型：** (matches: boolean) => void

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## media

```TypeScript
media?: string
```

Serialized media query condition. This parameter is read-only.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## matches

```TypeScript
matches?: boolean
```

Whether the query is successful. True if the query condition is matched successfully, false otherwise. This parameter is read-only.

**类型：** boolean

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

