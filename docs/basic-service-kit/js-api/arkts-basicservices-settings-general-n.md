# general

Provides methods for setting general information about devices, including the device name, startup wizard, airplane mode, debugging information, accessibility feature switch, and touch exploration status.

**Since:** 7

**System capability:** SystemCapability.Applications.Settings.Core

## Modules to Import

```TypeScript
import { settings } from '@ohos.settings';
```

## Summary

### Constants

| Name | Description |
| --- | --- |
| [SETUP_WIZARD_FINISHED](arkts-basicservices-general-con.md#setup_wizard_finished) | Specifies whether the startup wizard has been run. &lt;p&gt;If the value is {@code 0}, the startup wizard has not been run. If the value is not {@code 0}, the startup wizard has been run. |
| [END_BUTTON_ACTION](arkts-basicservices-general-con.md#end_button_action) | Specifies what happens after the user presses the call end button if the user is not in a call. &lt;ul&gt; &lt;li&gt;{@code 0} - Nothing happens. &lt;li&gt;{@code 1} - The home screen is displayed. &lt;li&gt;{@code 2} - The device enters the sleep state and the screen is locked. &lt;li&gt;{@code 3} - The home screen is displayed. If the user is already on the home screen, the device enters the sleep state. &lt;/ul&gt; |
| [ACCELEROMETER_ROTATION_STATUS](arkts-basicservices-general-con.md#accelerometer_rotation_status) | Specifies whether the accelerometer is used to change screen orientation, that is, whether auto-rotation is enabled. &lt;p&gt;The value {@code 1} indicates that the accelerometer is enabled by default, and {@code 0} indicates that the accelerometer is disabled by default. |
| [AIRPLANE_MODE_STATUS](arkts-basicservices-general-con.md#airplane_mode_status) | Specifies whether airplane mode is enabled. &lt;p&gt;If the value is {@code 1}, airplane mode is enabled. If the value is {@code 0}, airplane mode is disabled. |
| [DEVICE_PROVISION_STATUS](arkts-basicservices-general-con.md#device_provision_status) | Specifies whether the device is provisioned. &lt;p&gt;On a multi-user device with a single system user, the screen may be locked when the value is {@code true}. In addition, other abilities cannot be started on the system user unless they are marked to display over the screen lock. |
| [HDC_STATUS](arkts-basicservices-general-con.md#hdc_status) | Specifies whether the hard disk controller (HDC) on USB devices is enabled. &lt;p&gt;If the value is {@code true}, the HDC is enabled. If the value is {@code false}, the HDC is disabled. |
| [BOOT_COUNTING](arkts-basicservices-general-con.md#boot_counting) | Indicates the number of boot operations after the device is powered on. |
| [CONTACT_METADATA_SYNC_STATUS](arkts-basicservices-general-con.md#contact_metadata_sync_status) | Specifies whether contact metadata synchronization is enabled. &lt;p&gt;If the value is {@code true}, synchronization is enabled. If the value is {@code false}, synchronization is disabled. |
| [DEVELOPMENT_SETTINGS_STATUS](arkts-basicservices-general-con.md#development_settings_status) | Specifies whether developer options are enabled. &lt;p&gt;If the value is {@code true}, developer options are enabled. If the value is {@code false}, developer options are disabled. |
| [DEVICE_NAME](arkts-basicservices-general-con.md#device_name) | Indicates the device name. |
| [USB_STORAGE_STATUS](arkts-basicservices-general-con.md#usb_storage_status) | Specifies whether USB mass storage is enabled. &lt;p&gt;If the value is {@code true}, USB mass storage is enabled. If the value is {@code false}, USB mass storage is disabled. |
| [DEBUGGER_WAITING](arkts-basicservices-general-con.md#debugger_waiting) | Specifies whether the device waits for the debugger when starting an application to debug. &lt;p&gt;If the value is {@code 1}, the device waits for the debugger. If the value is {@code 0}, the system does not wait for the debugger, and so the application runs normally. |
| [DEBUG_APP_PACKAGE](arkts-basicservices-general-con.md#debug_app_package) | Indicates the bundle name of the application to debug. |
| [ACCESSIBILITY_STATUS](arkts-basicservices-general-con.md#accessibility_status) | Specifies whether any accessibility feature is enabled. &lt;p&gt;If the value is {@code 1}, the accessibility feature is enabled. If the value is {@code 0}, the accessibility feature is disabled. |
| [ACTIVATED_ACCESSIBILITY_SERVICES](arkts-basicservices-general-con.md#activated_accessibility_services) | Indicates the list of accessibility features that have been activated. |
| [GEOLOCATION_ORIGINS_ALLOWED](arkts-basicservices-general-con.md#geolocation_origins_allowed) | Indicates the default geographical location that can be used by the browser. Multiple geographical locations are separated by spaces. |
| [SKIP_USE_HINTS](arkts-basicservices-general-con.md#skip_use_hints) | Specifies whether an application should attempt to skip all introductory hints at the first startup. This is intended for temporary users or users who are familiar with the environment. &lt;p&gt;If the value is {@code 1}, the application attempts to skip all introductory hints at the first startup. If the value is {@code 0}, the application does not skip introductory hints at the first startup. |
| [TOUCH_EXPLORATION_STATUS](arkts-basicservices-general-con.md#touch_exploration_status) | Indicates whether touch exploration is enabled. &lt;p&gt;If the value is {@code 1}, touch exploration is enabled. If the value is {@code 0}, touch exploration is disabled. |

