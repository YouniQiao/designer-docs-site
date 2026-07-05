# general

Provides methods for setting general information about devices, including the device name, startup wizard, airplane mode, debugging information, accessibility feature switch, and touch exploration status.

**起始版本：** 7

**系统能力：** SystemCapability.Applications.Settings.Core

## 导入模块

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## 汇总

### 常量

| 名称 | 描述 |
| --- | --- |
| [ACCELEROMETER_ROTATION_STATUS](arkts-general-con.md#ACCELEROMETER_ROTATION_STATUS) | Specifies whether the accelerometer is used to change screen orientation, that is, whether auto-rotation is enabled. <p>The value {@code 1} indicates that the accelerometer is enabled by default, and {@code 0} indicates that the accelerometer is disabled by default. |
| [ACCESSIBILITY_STATUS](arkts-general-con.md#ACCESSIBILITY_STATUS) | Specifies whether any accessibility feature is enabled. <p>If the value is {@code 1}, the accessibility feature is enabled. If the value is {@code 0}, the accessibility feature is disabled. |
| [ACTIVATED_ACCESSIBILITY_SERVICES](arkts-general-con.md#ACTIVATED_ACCESSIBILITY_SERVICES) | Indicates the list of accessibility features that have been activated. |
| [AIRPLANE_MODE_STATUS](arkts-general-con.md#AIRPLANE_MODE_STATUS) | Specifies whether airplane mode is enabled. <p>If the value is {@code 1}, airplane mode is enabled. If the value is {@code 0}, airplane mode is disabled. |
| [BOOT_COUNTING](arkts-general-con.md#BOOT_COUNTING) | Indicates the number of boot operations after the device is powered on. |
| [CONTACT_METADATA_SYNC_STATUS](arkts-general-con.md#CONTACT_METADATA_SYNC_STATUS) | Specifies whether contact metadata synchronization is enabled. <p>If the value is {@code true}, synchronization is enabled. If the value is {@code false}, synchronization is disabled. |
| [DEBUG_APP_PACKAGE](arkts-general-con.md#DEBUG_APP_PACKAGE) | Indicates the bundle name of the application to debug. |
| [DEBUGGER_WAITING](arkts-general-con.md#DEBUGGER_WAITING) | Specifies whether the device waits for the debugger when starting an application to debug. <p>If the value is {@code 1}, the device waits for the debugger. If the value is {@code 0}, the system does not wait for the debugger, and so the application runs normally. |
| [DEVELOPMENT_SETTINGS_STATUS](arkts-general-con.md#DEVELOPMENT_SETTINGS_STATUS) | Specifies whether developer options are enabled. <p>If the value is {@code true}, developer options are enabled. If the value is {@code false}, developer options are disabled. |
| [DEVICE_NAME](arkts-general-con.md#DEVICE_NAME) | Indicates the device name. |
| [DEVICE_PROVISION_STATUS](arkts-general-con.md#DEVICE_PROVISION_STATUS) | Specifies whether the device is provisioned. <p>On a multi-user device with a single system user, the screen may be locked when the value is {@code true}. In addition, other abilities cannot be started on the system user unless they are marked to display over the screen lock. |
| [END_BUTTON_ACTION](arkts-general-con.md#END_BUTTON_ACTION) | Specifies what happens after the user presses the call end button if the user is not in a call. <ul> <li>{@code 0} - Nothing happens. <li>{@code 1} - The home screen is displayed. <li>{@code 2} - The device enters the sleep state and the screen is locked. <li>{@code 3} - The home screen is displayed. If the user is already on the home screen, the device enters the sleep state. </ul> |
| [GEOLOCATION_ORIGINS_ALLOWED](arkts-general-con.md#GEOLOCATION_ORIGINS_ALLOWED) | Indicates the default geographical location that can be used by the browser. Multiple geographical locations are separated by spaces. |
| [HDC_STATUS](arkts-general-con.md#HDC_STATUS) | Specifies whether the hard disk controller (HDC) on USB devices is enabled. <p>If the value is {@code true}, the HDC is enabled. If the value is {@code false}, the HDC is disabled. |
| [SETUP_WIZARD_FINISHED](arkts-general-con.md#SETUP_WIZARD_FINISHED) | Specifies whether the startup wizard has been run. <p>If the value is {@code 0}, the startup wizard has not been run. If the value is not {@code 0}, the startup wizard has been run. |
| [SKIP_USE_HINTS](arkts-general-con.md#SKIP_USE_HINTS) | Specifies whether an application should attempt to skip all introductory hints at the first startup. This is intended for temporary users or users who are familiar with the environment. <p>If the value is {@code 1}, the application attempts to skip all introductory hints at the first startup. If the value is {@code 0}, the application does not skip introductory hints at the first startup. |
| [TOUCH_EXPLORATION_STATUS](arkts-general-con.md#TOUCH_EXPLORATION_STATUS) | Indicates whether touch exploration is enabled. <p>If the value is {@code 1}, touch exploration is enabled. If the value is {@code 0}, touch exploration is disabled. |
| [USB_STORAGE_STATUS](arkts-general-con.md#USB_STORAGE_STATUS) | Specifies whether USB mass storage is enabled. <p>If the value is {@code true}, USB mass storage is enabled. If the value is {@code false}, USB mass storage is disabled. |

