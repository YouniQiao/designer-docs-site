# EnterpriseAdminExtensionAbility

本模块提供[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#企业设备管理扩展能力)。 设备管理应用需要存在一个EnterpriseAdminExtensionAbility并重写相关接口，以此具备模块提供的各项能力，比如接收由系统发送的该应用被激活或者解除激活的通知。 > **说明：** > > 本模块接口仅可在Stage模型下使用。

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';
```

## onAccountAdded

```TypeScript
onAccountAdded(accountId: number): void
```

系统账号新增事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_ACCOUNT_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号新增事件，系统账号新增事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | number | Yes | 新增的用户ID。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onAccountAdded(accountId: number) {
    console.info(`Succeeded in calling onAccountAdded callback, added accountId: ${accountId}`);
  }
};

```

## onAccountRemoved

```TypeScript
onAccountRemoved(accountId: number): void
```

系统账号删除事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_ACCOUNT_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号删除事件，系统账号删除事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | number | Yes | 被删除的用户ID。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onAccountRemoved(accountId: number) {
    console.info(`Succeeded in calling onAccountRemoved callback, removed accountId: ${accountId}`);
  }
};

```

## onAccountSwitched

```TypeScript
onAccountSwitched(accountId: number): void
```

系统账号切换事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_ACCOUNT_SWITCHED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号切换事件，系统账号切换事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员 。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | number | Yes | 切换后的用户ID。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onAccountSwitched(accountId: number) {
    console.info(`Succeeded in calling onAccountSwitched callback, switched accountId: ${accountId}`);
  }
};

```

## onAdminDisabled

```TypeScript
onAdminDisabled(): void
```

当前设备管理应用被解除激活后，触发该回调。企业管理员或者员工解除激活设备管理，系统通知设备管理应用已解除激活admin权限。设备管理应用可在此回调函数中通知企业管理员设备已脱管。无需注册，解除激活后默认触发该回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onAdminDisabled() {
  }
};

```

## onAdminEnabled

```TypeScript
onAdminEnabled(): void
```

当前设备管理应用被激活后，触发该回调。企业管理员或者员工部署并激活设备管理应用，系统通知设备管理应用已激活admin权限。设备管理应用可在此回调函数中进行初始化策略设置。无需注册，激活后默认触发该回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onAdminEnabled() {
  }
};

```

## onAdminPolicyChanged

```TypeScript
onAdminPolicyChanged(event: common.PolicyChangedEvent): void
```

策略变更时回调

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | common.PolicyChangedEvent | Yes | 策略变更事件 |

## onAppStart

```TypeScript
onAppStart(bundleName: string): void
```

应用启动事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_APP_START事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用启动事件，端侧应用启动事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 启动应用的包名。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onAppStart(bundleName: string) {
    console.info(`Succeeded in calling onAppStart callback, started bundle name : ${bundleName}`);
  }
};

```

## onAppStop

```TypeScript
onAppStop(bundleName: string): void
```

应用停止事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_APP_STOP事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用停止事件，端侧应用停止事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 停止应用的包名。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onAppStop(bundleName: string) {
    console.info(`Succeeded in calling onAppStop callback, stopped bundle name : ${bundleName}`);
  }
};

```

## onBundleAdded

```TypeScript
onBundleAdded(bundleName: string): void
```

应用安装事件回调，回调中包含应用包名。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_BUNDLE_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用安装事件，端侧应用安装事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 被安装应用的包名。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onBundleAdded(bundleName: string) {
    console.info(`Succeeded in calling onBundleAdded callback, added bundle name : ${bundleName}`);
  }
};

```

## onBundleAdded

```TypeScript
onBundleAdded(bundleName: string, accountId: number): void
```

应用安装事件回调，回调中包含应用包名和账号ID。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_BUNDLE_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用安装事件，端侧应用安装事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 被安装应用的包名。 |
| accountId | number | Yes | 被安装应用所在的用户ID。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  // Since there is another callback method with the same name onBundleAdded(bundleName: string) that does not have the accountId parameter, accountId must be marked as optional in actual invocations. Please refer to the sample code for the proper syntax. Removing the question mark (?) following accountId will cause a compilation error.
  onBundleAdded(bundleName: string, accountId?: number) {
    console.info(`Succeeded in calling onBundleAdded callback, added bundle name : ${bundleName}, accountId: ${accountId}`);
  }
};

```

## onBundleRemoved

```TypeScript
onBundleRemoved(bundleName: string): void
```

应用卸载事件回调，回调中包含应用包名。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_BUNDLE_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用卸载事件，端侧应用卸载事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 被卸载应用的包名。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onBundleRemoved(bundleName: string) {
    console.info(`Succeeded in calling onBundleRemoved callback, removed bundle name : ${bundleName}`);
  }
};

```

## onBundleRemoved

```TypeScript
onBundleRemoved(bundleName: string, accountId: number): void
```

应用卸载事件回调，回调中包含应用包名和账号ID。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_BUNDLE_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用卸载事件，端侧应用卸载事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 被卸载应用的包名。 |
| accountId | number | Yes | 被卸载应用所在的用户ID。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  // Since there is another callback method with the same name onBundleRemoved(bundleName: string) that does not have the accountId parameter, accountId must be marked as optional in actual invocations. Please refer to the sample code for the proper syntax. Removing the question mark (?) following accountId will cause a compilation error.
  onBundleRemoved(bundleName: string, accountId?: number) {
    console.info(`Succeeded in calling onBundleRemoved callback, removed bundle name : ${bundleName}, accountId: ${accountId}`);
  }
};

```

## onBundleUpdated

```TypeScript
onBundleUpdated(bundleName: string, accountId: number): void
```

应用更新事件回调，回调中包含应用包名和用户ID。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_BUNDLE_UPDATED事件才能收到此回调。企业设备管理场景下，设备管理应用可订阅所有用户下的应用更新事件，应用更新事件触发时会通知当前用户下的设备管理应用，设备管理应用可以在此回调函数中进行事 件上报，通知主用户下的企业管理员。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 被更新应用的包名。 |
| accountId | number | Yes | 被更新应用所在的用户ID  取值范围为全体整数。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onBundleUpdated(bundleName: string, accountId: number) {
    console.info(`Succeeded in calling onBundleUpdated callback, update bundle name : ${bundleName}, accountId: ${accountId}`);
  }
};

```

## onDeviceAdminDisabled

```TypeScript
onDeviceAdminDisabled(bundleName: string): void
```

仅超级设备管理应用在普通设备管理应用被解除激活时会触发此回调。企业管理员或者员工解除激活普通设备管理应用，系统通知超级设备管理应用已解除激活admin权限。超级设备管理应用可在此回调函数中通知企业管理员设备已脱管。不需要注册，解除 激活后默认触发该回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 被解除激活应用的包名。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onDeviceAdminDisabled(bundleName: string) {
  }
};

```

## onDeviceAdminEnabled

```TypeScript
onDeviceAdminEnabled(bundleName: string): void
```

仅超级设备管理应用在普通设备管理应用被激活时会触发此回调。企业管理员或者员工部署并激活普通设备管理应用，系统通知超级设备管理应用已激活admin权限。超级设备管理应用可在此回调函数中进行初始化策略设置。不需要注册，激活后默认触发该 回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 被激活应用的包名。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onDeviceAdminEnabled(bundleName: string) {
  }
};

```

## onDeviceBootCompleted

```TypeScript
onDeviceBootCompleted(): void
```

设备开机完成事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_BOOT_COMPLETED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅设备启动完成事件，端侧系统在设备开机完成后会通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业 管理员。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onDeviceBootCompleted() {
    console.info("EnterpriseAdminExtensionAbility onDeviceBootCompleted");
  }
};

```

## onKeyEvent

```TypeScript
onKeyEvent(keyEvent: systemManager.KeyEvent): void
```

按键事件发生时回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyEvent | systemManager.KeyEvent | Yes | Information about the current key event. |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';
import { systemManager } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {

 /* This callback triggers when key press matches the listening policy delivered by the MDM app, and carries the matched key information.
  * 
  * For example:
  * 1. Callback triggered by the user's short press of the power key.
  * 1.1 Deliver the key event listening policy.
  * For details, please refer to systemManager.addKeyEventPolicies.
  * Set keyCode to 0 and keyPolicy to 1.
  * 1.2 The user short-presses the power key.
  * 1.3 The callback is triggered.
  * Result (press): onKeyEvent event:{"actionTime": 1895101259, "keyCode": 0, "keyAction": 0,
  *          "keyItems": [{"pressed": true, "keyCode": 0, "downTime": 1895101259}]}
  *       Result (release): onKeyEvent event:{"actionTime": 1895478977, "keyCode": 0, "keyAction": 1,
  *         "keyItems": [{"pressed": false, "keyCode": 0, "downTime": 1895101259}]}
  *
  * 2. Callback triggered by the user's long press of the power key.
  * 2.1 Deliver the key event listening policy.
  * For details, please refer to systemManager.addKeyEventPolicies.
  * Set keyCode to 0 and keyPolicy to 1.
  * 2.2 The user long-presses the power key.
  * 2.3 The callback is triggered.
  * Result (press): onKeyEvent event:{"actionTime": 14468236859, "keyCode": 0, "keyAction": 0,
  *         "keyItems": [{"pressed": true, "keyCode": 0, "downTime": 14468236859}]}
  *      Result (long-press): onKeyEvent event:{"actionTime": 14468236859, "keyCode": 0, "keyAction": 0,
  *         "keyItems": [{"pressed": true, "keyCode": 0, "downTime": 14468236859}]}
  *          ......
  *       Result (release): onKeyEvent event:{"actionTime": 14471425448, "keyCode": 0, "keyAction": 1,
  *         "keyItems": [{"pressed": false, "keyCode": 0, "downTime": 14468236859}]}
  * 
  * Key combinations can be classified into the following scenarios based on the delivery policy:
  * 3. Callback 1 triggered by the user's pressing of the key combination (power key and volume up key).
  * 3.1 Deliver the key event listening policy.
  * For details, please refer to systemManager.addKeyEventPolicies.
  * Set keyCode to 0 and keyPolicy to 1; keyCode to 1 and keyPolicy to 1.
  * 3.2 The user presses the power key and volume up key at the same time.
  * 3.3 The callback is triggered.
  * Result: The power key and volume up key are pressed at the same time (power key first).
  *      onKeyEvent event:{"actionTime": 20991450446, "keyCode": 1, "keyAction": 0,
  *   "keyItems": [{"pressed": true, "keyCode": 0, "downTime": 20991432293},
  *   {"pressed": true, "keyCode": 1, "downTime": 20991450446}]}
  *      Release the two keys at the same time (volume up key first).
  *      onKeyEvent event:{"actionTime": 20590590293, "keyCode": 1, "keyAction": 1,
  *   "keyItems": [{"pressed": true, "keyCode": 0, "downTime": 28588682984},
  *   {"pressed": false, "keyCode": 1, "downTime": 21588900860}]}
  * 
  * 4. Callback 2 triggered by the user's pressing of the key combination (power key and volume up key).
  * 4.1 Deliver the key event listening policy.
  * For details, please refer to systemManager.addKeyEventPolicies.
  * Set keyCode to 0 and keyPolicy to 1; keyCode to 1 and keyPolicy to 0.
  * 4.2 The user presses the power key and volume up key at the same time.
  * 4.3 The callback is triggered.
  * Result: The two keys are pressed at the same time (volume up key first).
  *      onKeyEvent event:{"actionTime": 28991115400, "keyCode": 0, "keyAction": 0,
  *   "keyItems": [{"pressed": true, "keyCode": 1, "downTime": 28990731985},
  *   {"pressed": true, "keyCode": 0, "downTime": 20991115400}]}
  *      Release the two keys at the same time (volume up key first).
  *      onKeyEvent event:{"actionTime": 28992721560, "keyCode": 0, "keyAction": 1,
  *   "keyItems": [{"pressed": false, "keyCode": 0, "downTime": 28991115400}]}
  * 
  * 5. Callback 3 triggered by the user's pressing of the key combination (power key and volume up key).
  * 5.1 Deliver the key event listening policy.
  * For details, please refer to systemManager.addKeyEventPolicies.
  * Set keyCode to 0 and keyPolicy to 1.
  * 5.2 The user presses the power key and volume up key at the same time.
  * 5.3 The callback is triggered.
  * Result: The two keys are pressed at the same time (volume up key first).
  *      onKeyEvent event:{"actionTime": 29979014190, "keyCode": 0, "keyAction": 0,
  *   "keyItems": [{"pressed": true, "keyCode": 1, "downTime": 29978420634},
  *   {"pressed": true, "keyCode": 0, "downTime": 29979014190}]}
  *      Release the two keys at the same time (power key first).
  *      onKeyEvent event:{"actionTime": 29982420773, "keyCode": 0, "keyAction": 1,
  *   "keyItems": [{"pressed": true, "keyCode": 1, "downTime": 29978420634},
  *   {"pressed": false, "keyCode": 0, "downTime": 29979014190}]}
  * 
  * 6. Callback 4 triggered by the user's pressing of the key combination (power key and navigation key - recently opened).
  * 6.1 Deliver the key event listening policy.
  * For details, please refer to systemManager.addKeyEventPolicies.
  * Set keyCode to 0 and keyPolicy to 1; keyCode to 5 and keyPolicy to 1.
  * 6.2 The user presses the power key and navigation key - recently opened at the same time.
  * 6.3 The callback is triggered.
  * Result: The two keys are pressed at the same time (each callback is executed independently).
  *      onKeyEvent event:{"actionTime": 34073626894, "keyCode": 0, "keyAction": 0,
  *   "keyItems": [{"pressed": true, "keyCode": 0, "downTime": 34073626894}]}
  *      onKeyEvent event:{"actionTime": 34075144844, "keyCode": 5, "keyAction": 0,
  *   "keyItems": [{"pressed": true, "keyCode": 5, "downTime": 0}]}
  */
  onKeyEvent(keyEvent: systemManager.KeyEvent): void {
    console.info(`Succeeded in calling onKeyEvent callback, key event:${JSON.stringify(keyEvent)}`);
  }
};

```

## onKioskModeEntering

```TypeScript
onKioskModeEntering(bundleName: string, accountId: number): void
```

应用进入Kiosk模式回调，回调中包含应用包名和用户ID。 Kiosk模式为系统层面提供的一种应用运行模式，该模式下会将设备锁定在单个应用或者一组应用运行，同时对锁屏状态、状态栏、手势操作和关键功能进行控制，防止用户在设备上启动其它应用或执行其它操作。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 进入Kiosk模式应用的包名。 |
| accountId | number | Yes | 进入Kiosk模式应用所在的用户ID。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onKioskModeEntering(bundleName: string, accountId: number): void {
    console.info(`Succeeded in calling onKioskModeEntering callback, bundleName:${bundleName}, accountId:${accountId}`);
  }
};

```

## onKioskModeExiting

```TypeScript
onKioskModeExiting(bundleName: string, accountId: number): void
```

应用退出Kiosk模式回调，回调中包含应用包名和用户ID。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 退出Kiosk模式应用的包名。 |
| accountId | number | Yes | 退出Kiosk模式应用所在的用户ID。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onKioskModeExiting(bundleName: string, accountId: number): void {
    console.info(`Succeeded in calling onKioskModeExiting callback, bundleName:${bundleName}, accountId:${accountId}`);
  }
};

```

## onLogCollected

```TypeScript
onLogCollected(result: common.Result): void
```

日志收集完成回调

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | common.Result | Yes | Log collection result. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { EnterpriseAdminExtensionAbility, common, systemManager } from '@kit.MDMKit';
import { fileIo as fs } from '@kit.CoreFileKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  /**
   * This callback is triggered after the MDM app invokes the systemManager.startCollectLog API to initiate a log collection task, and it carries the log collection result.
   * If result is common.Result.SUCCESS, the log collection is successful. You can obtain the logs and invoke the systemManager.finishLogCollected API to delete the collected logs.
   * If result is common.Result.FAIL, the log collection fails.
   */
  onLogCollected(result: common.Result): void {
    console.info(`Succeeded in calling onLogCollected callback, result:${result}`);
    if (result === common.Result.SUCCESS) {
      let filesDir = '/data/edm/log';
      // Replace the app sandbox path with the actual one.
      let targetPath = this.context.tempDir;
      try {
          let files: string[] = fs.listFileSync(filesDir);
          // Obtain logs from the /data/edm/log sandbox directory.
          files.forEach(value => {
             fs.copyFileSync(filesDir + '/' + value, targetPath + '/' + value);
          });
          let wantTemp: Want = {
              // Replace with actual values.
              bundleName: 'com.example.myapplication',
              abilityName: 'EnterpriseAdminAbility'
          };
          systemManager.finishLogCollected(wantTemp);
      } catch (error) {
          console.info("onLogCollected", "error: " + JSON.stringify(error))
      }
    }
    if (result === common.Result.FAIL) {
      console.error("onLogCollected", "Failed to collect log.")
    }
  }
};

```

## onMarketAppInstallResult

```TypeScript
onMarketAppInstallResult(bundleName: string, result: common.InstallationResult): void
```

安装应用市场应用接口[bundleManager.installMarketApps](arkts-bundlemanager-installmarketapps-f.md#installMarketApps-1)安装 结果回调，回调中包含应用包名和安装结果。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用市场应用包名。 |
| result | common.InstallationResult | Yes | 安装结果。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility, common } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onMarketAppInstallResult(bundleName: string, result: common.InstallationResult): void {
    console.info(`Succeeded in calling onMarketAppInstallResult callback, bundleName:${bundleName}, result:${result}`);
  }
};

```

## onStart

```TypeScript
onStart(): void
```

EnterpriseAdminExtensionAbility启动事件回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onStart() {
    console.info(`Succeeded in calling onStart callback.`);
  }
};

```

## onStartupGuideCompleted

```TypeScript
onStartupGuideCompleted(scene: common.StartupScene): void
```

开机向导完成事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_STARTUP_GUIDE_COMPLETED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅开机向导完成事件，端侧系统在首次切换子用户完成（仅限PC）、OTA升级完成、首次开机完成开机向导 时会通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | common.StartupScene | Yes | 开机向导完成场景。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility, common } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onStartupGuideCompleted(scene: common.StartupScene) {
    if (scene === common.StartupScene.USER_SETUP) {
      console.info('onStartupGuideCompleted scene is USER_SETUP');
    } else if (scene === common.StartupScene.OTA) {
      console.info('onStartupGuideCompleted scene is OTA');
    } else if (scene === common.StartupScene.DEVICE_PROVISION) {
      console.info('onStartupGuideCompleted scene is DEVICE_PROVISION');
    }
  }
};

```

## onSystemUpdate

```TypeScript
onSystemUpdate(systemUpdateInfo: systemManager.SystemUpdateInfo): void
```

系统更新事件回调。通过接口 [adminManager.subscribeManagedEventSync](arkts-adminmanager-subscribemanagedeventsync-f.md#subscribeManagedEventSync-1) 注册MANAGED_EVENT_SYSTEM_UPDATE事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统更新事件，端侧系统更新事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| systemUpdateInfo | systemManager.SystemUpdateInfo | Yes | 系统更新的版本信息。 |

**Example**

```TypeScript
import { EnterpriseAdminExtensionAbility } from '@kit.MDMKit';
import { systemManager } from '@kit.MDMKit';

export default class EnterpriseAdminAbility extends EnterpriseAdminExtensionAbility {
  onSystemUpdate(systemUpdateInfo: systemManager.SystemUpdateInfo) {
    console.info(`Succeeded in calling onSystemUpdate callback, version name  : ${systemUpdateInfo.versionName}`);
  }
};

```

## context

```TypeScript
context: EnterpriseAdminExtensionContext
```

EnterpriseAdminExtensionAbility的上下文。继承自[ExtensionContext]./application/ExtensionContext:ExtensionContext。

**Type:** EnterpriseAdminExtensionContext

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

