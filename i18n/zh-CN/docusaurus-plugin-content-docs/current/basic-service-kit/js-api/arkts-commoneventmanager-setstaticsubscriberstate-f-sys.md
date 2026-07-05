# setStaticSubscriberState

## setStaticSubscriberState

```TypeScript
function setStaticSubscriberState(enable: boolean, callback: AsyncCallback<void>): void
```

为当前应用设置静态订阅事件使能或去使能状态。使用callback异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.CommonEvent

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 表示静态订阅事件使能状态。 true：使能 false：去使能。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当设置静态订阅事件使能状态成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

commonEventManager.setStaticSubscriberState(true, (err: BusinessError) => {
  if (err.code != 0) {
    console.error(`setStaticSubscriberState failed, errCode: ${err.code}, errMes: ${err.message}`);
    return;
  }
  console.info(`setStaticSubscriberState success`);
});

```

## setStaticSubscriberState

```TypeScript
function setStaticSubscriberState(enable: boolean): Promise<void>
```

为当前应用设置静态订阅事件使能或去使能状态。使用Promise异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.CommonEvent

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 表示静态订阅事件使能状态。 true：使能 false：去使能。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

commonEventManager.setStaticSubscriberState(false).then(() => {
  console.info(`setStaticSubscriberState success`);
}).catch ((err: BusinessError) => {
  console.error(`setStaticSubscriberState failed, errCode: ${err.code}, errMes: ${err.message}`);
});

```

## setStaticSubscriberState

```TypeScript
function setStaticSubscriberState(enable: boolean, events?: Array<string>): Promise<void>
```

为当前应用设置静态订阅事件的使能状态，并且记录事件名称。使用Promise异步回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.CommonEvent

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 表示静态订阅事件使能状态。 true：使能 false：去使能。 |
| events | Array&lt;string> | 否 | 表示记录事件名称。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let evenName: string[] = ['usual.event.SEND_DATA'];
commonEventManager.setStaticSubscriberState(true, evenName).then(() => {
  console.info(`setStaticSubscriberState success, state is ${true}`);
}).catch((err: BusinessError) => {
  console.error(`setStaticSubscriberState failed, errCode: ${err.code}, errMes: ${err.message}`);
});

```

