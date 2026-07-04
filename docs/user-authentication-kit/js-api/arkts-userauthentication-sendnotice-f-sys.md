# sendNotice (System API)

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## sendNotice

```TypeScript
function sendNotice(noticeType: NoticeType, eventData: string): void
```

Sends a notification from the user authentication widget.

**Since:** 10

**Required permissions:** ohos.permission.SUPPORT_USER_AUTH

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| noticeType | NoticeType | Yes | Notification type. |
| eventData | string | Yes | Event data. The data length range is 0 to 65536. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed. |
| [12500002](../errorcode-useriam.md#12500002-common-error-code-of-the-identity-authentication-system) | General operation error. |

**Example**

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
import { BusinessError } from '@kit.BasicServicesKit';

interface  EventData {
  widgetContextId: number;
  event: string;
  version: string;
  payload: PayLoad;
}
interface PayLoad {
  type: string[];
}
try {
  const eventData : EventData = {
    widgetContextId: 123456,
    event: 'EVENT_AUTH_TYPE_READY',
    version: '1',
    payload: {
      type: ['pin']
    } as PayLoad,
  };
  const jsonEventData = JSON.stringify(eventData);
  let noticeType = userAuth.NoticeType.WIDGET_NOTICE;
  userAuth.sendNotice(noticeType, jsonEventData);
  console.info('sendNotice successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`sendNotice failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

