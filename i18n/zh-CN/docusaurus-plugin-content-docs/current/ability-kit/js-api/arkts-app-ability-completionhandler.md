# @ohos.app.ability.CompletionHandler

## 导入模块

```TypeScript
import { CompletionHandler } from '@kit.AbilityKit';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [CompletionHandler](arkts-completionhandler-c.md) | CompletionHandler提供了 [onRequestSuccess]{@link CompletionHandler.onRequestSuccess(elementName: ElementName, message: string)}和 [onRequestFailure]{@link CompletionHandler.onRequestFailure(elementName: ElementName, message: string)}两个回调函数，分别用来处理拉 起应用成功和失败时的结果。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OnRequestFailureFn](arkts-onrequestfailurefn-t.md) | 拉端失败时的回调函数。 |
| [OnRequestSuccessFn](arkts-onrequestsuccessfn-t.md) | 拉端成功时的回调函数。 |

