# @ohos.screenLock

systemScreenLock

**起始版本：** 7

**系统能力：** SystemCapability.MiscServices.ScreenLock

## 导入模块

```TypeScript
import { screenLock } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getScreenLockAuthState](arkts-screenlock-getscreenlockauthstate-f-sys.md#getScreenLockAuthState-1) | Obtain the screen lock authentication state for os account local userId. |
| <!--DelRow-->[getStrongAuth](arkts-screenlock-getstrongauth-f-sys.md#getStrongAuth-1) | Obtain strong authentication reason flags for os account local userId. |
| <!--DelRow-->[getUnlockPolicy](arkts-screenlock-getunlockpolicy-f-sys.md#getUnlockPolicy-1) | Obtains the authentication policy used to unlock the screen. |
| <!--DelRow-->[isDeviceLocked](arkts-screenlock-isdevicelocked-f-sys.md#isDeviceLocked-1) | Check whether the device is currently locked and the screenlock requires an identity to authenticate and unlock. |
| <!--DelRow-->[isLocked](arkts-screenlock-islocked-f-sys.md#isLocked-1) | Checks whether the screen is currently locked. |
| <!--DelRow-->[isScreenLockDisabled](arkts-screenlock-isscreenlockdisabled-f-sys.md#isScreenLockDisabled-1) | Check whether screen lock is disabled for os account local userId. |
| [isScreenLocked](arkts-screenlock-isscreenlocked-f.md#isScreenLocked-1) | Checks whether the screen is currently locked. |
| [isScreenLocked](arkts-screenlock-isscreenlocked-f.md#isScreenLocked-2) | Checks whether the screen is currently locked. |
| [isSecureMode](arkts-screenlock-issecuremode-f.md#isSecureMode-1) | Checks whether the screen lock of the current device is secure. |
| [isSecureMode](arkts-screenlock-issecuremode-f.md#isSecureMode-2) | Checks whether the screen lock of the current device is secure. |
| <!--DelRow-->[lock](arkts-screenlock-lock-f-sys.md#lock-1) | Lock the screen. |
| <!--DelRow-->[lock](arkts-screenlock-lock-f-sys.md#lock-2) | Lock the screen. |
| <!--DelRow-->[onSystemEvent](arkts-screenlock-onsystemevent-f-sys.md#onSystemEvent-1) | Register system event related to screen lock service. |
| <!--DelRow-->[requestStrongAuth](arkts-screenlock-requeststrongauth-f-sys.md#requestStrongAuth-1) | Request strong authentication for os account local userId. |
| <!--DelRow-->[sendScreenLockEvent](arkts-screenlock-sendscreenlockevent-f-sys.md#sendScreenLockEvent-1) | The screen lock app sends the event to the screen lock service. |
| <!--DelRow-->[sendScreenLockEvent](arkts-screenlock-sendscreenlockevent-f-sys.md#sendScreenLockEvent-2) | The screen lock app sends the event to the screen lock service. |
| <!--DelRow-->[setScreenLockAuthState](arkts-screenlock-setscreenlockauthstate-f-sys.md#setScreenLockAuthState-1) | Set the screen lock authentication state for os account local userId. |
| <!--DelRow-->[setScreenLockDisabled](arkts-screenlock-setscreenlockdisabled-f-sys.md#setScreenLockDisabled-1) | Disable screen lock showing for os account local userId. This only becomes effective when there is no password. |
| <!--DelRow-->[unlock](arkts-screenlock-unlock-f-sys.md#unlock-1) | Unlock the screen. |
| <!--DelRow-->[unlock](arkts-screenlock-unlock-f-sys.md#unlock-2) | Unlock the screen. |
| [unlockScreen](arkts-screenlock-unlockscreen-f.md#unlockScreen-1) | Unlock the screen. |
| [unlockScreen](arkts-screenlock-unlockscreen-f.md#unlockScreen-2) | Unlock the screen. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SystemEvent](arkts-screenlock-systemevent-i-sys.md) | Indicates the system event type and parameter related to the screenlock management service. |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[EventType](arkts-screenlock-eventtype-t-sys.md) | Indicates the system event type related to the screen lock management service. Added unlockPolicyChanged. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AuthState](arkts-screenlock-authstate-e-sys.md) | Indicates the screen lock authentication state. |
| <!--DelRow-->[StrongAuthReasonFlags](arkts-screenlock-strongauthreasonflags-e-sys.md) | Indicates the strong authentication reason flags used to request. |
| <!--DelRow-->[UnlockPolicy](arkts-screenlock-unlockpolicy-e-sys.md) | Indicates the screen lock authentication policy used to unlock the screen. |

