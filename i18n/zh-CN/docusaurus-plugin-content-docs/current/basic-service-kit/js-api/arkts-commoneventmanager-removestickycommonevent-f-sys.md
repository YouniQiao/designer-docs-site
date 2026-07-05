# removeStickyCommonEvent

## removeStickyCommonEvent

```TypeScript
function removeStickyCommonEvent(event: string, callback: AsyncCallback<void>): void
```

移除粘性公共事件。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.COMMONEVENT_STICKY

**系统能力：** SystemCapability.Notification.CommonEvent

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | 表示被移除的粘性公共事件。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当移除粘性事件成功，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 1500004 | A third-party application cannot send system common events. |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

commonEventManager.removeStickyCommonEvent('sticky_event', (err: BusinessError) => {
  if (err) {
    console.error(`removeStickyCommonEvent failed, errCode: ${err.code}, errMes: ${err.message}`);
    return;
  }
  console.info(`removeStickyCommonEvent success`);
});

```

## removeStickyCommonEvent

```TypeScript
function removeStickyCommonEvent(event: string): Promise<void>
```

移除粘性公共事件。使用Promise异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.COMMONEVENT_STICKY

**系统能力：** SystemCapability.Notification.CommonEvent

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | 表示被移除的粘性公共事件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 1500004 | A third-party application cannot send system common events. |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

commonEventManager.removeStickyCommonEvent('sticky_event').then(() => {
  console.info(`removeStickyCommonEvent success`);
}).catch ((err: BusinessError) => {
  console.error(`removeStickyCommonEvent failed, errCode: ${err.code}, errMes: ${err.message}`);
});

```

