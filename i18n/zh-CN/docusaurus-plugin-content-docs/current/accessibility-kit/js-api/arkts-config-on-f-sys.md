# on

## on('enabledAccessibilityExtensionListChange')

```TypeScript
function on(type: 'enabledAccessibilityExtensionListChange', callback: Callback<void>): void
```

Adds a listener for changes in the list of enabled accessibility extension abilities. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.READ_ACCESSIBILITY_CONFIG

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'enabledAccessibilityExtensionListChange' | 是 | Listening type. The value is fixed at  'enabledAccessibilityExtensionListChange', indicating listening for changes in the list of enabled  accessibility extension abilities. |
| callback | Callback&lt;void> | 是 | Callback invoked when the list of enabled accessibility extension abilities  changes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { config } from '@kit.AccessibilityKit';

config.on('enabledAccessibilityExtensionListChange', () => {
  console.info('subscribe enabled accessibility extension list change state success');
});

```

## on('installedAccessibilityListChange')

```TypeScript
function on(type: 'installedAccessibilityListChange', callback: Callback<void>): void
```

Adds a listener for changes in the list of installed accessibility extension abilities. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_ACCESSIBILITY_CONFIG

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'installedAccessibilityListChange' | 是 | Listening type. The value is fixed at  'installedAccessibilityListChange', indicating listening for changes in the list of installed accessibility  extension abilities. |
| callback | Callback&lt;void> | 是 | Callback invoked when the list of installed accessibility extension abilities  changes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { config } from '@kit.AccessibilityKit';

config.on('installedAccessibilityListChange', () => {
  console.info('subscribe installed accessibility extension list change state success');
});

```

