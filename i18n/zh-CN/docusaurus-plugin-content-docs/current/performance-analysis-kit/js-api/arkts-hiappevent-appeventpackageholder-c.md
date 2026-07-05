# AppEventPackageHolder

Defines a subscription data holder for processing event information.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## constructor

```TypeScript
constructor(watcherName: string)
```

Constructs an **AppEventPackageHolder** instance. You can call [addWatcher]hiAppEvent.addWatcher to add an event watcher, and then associate the **AppEventPackageHolder** instance with the watcher added in the application based on the watcher name.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| watcherName | string | 是 | Name of the event watcher added through [addWatcher]hiAppEvent.addWatcher  . If no watcher is added, no data is displayed by default. |

**示例：**

```TypeScript
// 添加数据观察者“Watcher1”，订阅监听系统事件
hiAppEvent.addWatcher({
  name: "Watcher1",
  appEventFilters: [
    {
      domain: hiAppEvent.domain.OS,
    }
  ],
});

// 创建订阅数据持有者实例，holder1持有的数据为上述addWatcher中添加的观察者“Watcher1”监听到的事件
let holder1: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");

```

## setRow

```TypeScript
setRow(size: int): void
```

Sets the number of data records of the event package obtained each time. When **setRow()** and **setSize()** are called at the same time, only **setRow()** takes effect.

**起始版本：** 12

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | int | 是 | Number of events. The value range is (0, 2^31-1]. If the value is out of the range, an  exception is thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11104001 | Invalid size value. Possibly caused by the size value is less than or equal  to zero. |

**示例：**

```TypeScript
// 创建订阅数据持有者实例，holder3持有的数据为已通过addWatcher添加的观察者“Watcher1”监听到的事件
let holder3: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");
// 设置每次取出的事件包的数据条数为1000条
holder3.setRow(1000);

```

## setSize

```TypeScript
setSize(size: int): void
```

Sets the threshold for the data size of the event package obtained each time.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | int | 是 | Data size threshold, in bytes. The value range is [0, 2^31-1]. If the value is out of the  range, an exception is thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 11104001 | Invalid size value. Possibly caused by the size value is less than or equal  to zero. |

**示例：**

```TypeScript
// 创建订阅数据持有者实例，holder2持有的数据为已通过addWatcher添加的观察者“Watcher1”监听到的事件
let holder2: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");
// 设置每次取出事件包的数据大小阈值为1000byte
holder2.setSize(1000);

```

## takeNext

```TypeScript
takeNext(): AppEventPackage
```

Obtains the subscription event. The system obtains the subscription event data based on the data size threshold specified by **setSize** or the number of data records specified by **setRow**. By default, one subscription event data record is obtained. When all subscription event data is obtained, **null** is returned. When **setRow** and **setSize** are called at the same time, only **setRow** takes effect.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AppEventPackage | Event package object. If all subscription event data has been retrieved, null is  returned. |

**示例：**

```TypeScript
// 创建订阅数据持有者实例，holder4持有的数据为已通过addWatcher添加的观察者“Watcher1”监听到的事件
let holder4: hiAppEvent.AppEventPackageHolder = new hiAppEvent.AppEventPackageHolder("Watcher1");
// 获取订阅事件
let eventPkg: hiAppEvent.AppEventPackage | null = holder4.takeNext();

```

## takeNext

```TypeScript
takeNext(): AppEventPackage | null
```

Obtains the subscription event. <br>The system obtains the subscription event data based on the data size threshold specified by setSize or the number of data records specified by setRow. By default, one subscription event data record is obtained. When all subscription event data is obtained, null is returned. <br>When setRow and setSize are called at the same time, only setRow takes effect.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AppEventPackage | Event package object. If all subscription event data has been retrieved,  null is returned. |

