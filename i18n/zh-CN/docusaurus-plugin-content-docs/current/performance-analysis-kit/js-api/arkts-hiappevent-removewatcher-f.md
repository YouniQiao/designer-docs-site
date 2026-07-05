# removeWatcher

## removeWatcher

```TypeScript
function removeWatcher(watcher: Watcher): void
```

Removes an event watcher.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| watcher | Watcher | 是 | Event watcher. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11102001 | Invalid watcher name. Possible causes: 1. Contain invalid characters;  2. Length is invalid. |

**示例：**

```TypeScript
// 1. 定义一个事件观察者
let watcher: hiAppEvent.Watcher = {
  name: "watcher1",
}

// 2. 添加一个事件观察者来订阅事件
hiAppEvent.addWatcher(watcher);

// 3. 移除该事件观察者以取消订阅事件
hiAppEvent.removeWatcher(watcher);

```

