# FormParam

```TypeScript
enum FormParam
```

Enumerates widget parameters.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

## IDENTITY_KEY

```TypeScript
IDENTITY_KEY = "ohos.extra.param.key.form_identity"
```

Indicates the key specifying the ID of the form to be obtained, which is represented as want: { "parameters": { IDENTITY_KEY: "119476135" } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## DIMENSION_KEY

```TypeScript
DIMENSION_KEY = "ohos.extra.param.key.form_dimension"
```

Indicates the key specifying the grid style of the form to be obtained, which is represented as want: { "parameters": { DIMENSION_KEY: FormDimension.Dimension_1_2 } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## NAME_KEY

```TypeScript
NAME_KEY = "ohos.extra.param.key.form_name"
```

Indicates the key specifying the name of the form to be obtained, which is represented as want: { "parameters": { NAME_KEY: "formName" } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## MODULE_NAME_KEY

```TypeScript
MODULE_NAME_KEY = "ohos.extra.param.key.module_name"
```

Indicates the key specifying the name of the module to which the form to be obtained belongs, which is represented as want: { "parameters": { MODULE_NAME_KEY: "formEntry" } }. This constant is mandatory.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## WIDTH_KEY

```TypeScript
WIDTH_KEY = "ohos.extra.param.key.form_width"
```

Indicates the key specifying the width of the form to be obtained, which is represented as want: { "parameters": { WIDTH_KEY: 800 } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## HEIGHT_KEY

```TypeScript
HEIGHT_KEY = "ohos.extra.param.key.form_height"
```

Indicates the key specifying the height of the form to be obtained, which is represented as want: { "parameters": { HEIGHT_KEY: 400 } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## TEMPORARY_KEY

```TypeScript
TEMPORARY_KEY = "ohos.extra.param.key.form_temporary"
```

Indicates the key specifying whether a form is temporary, which is represented as want: { "parameters": { TEMPORARY_KEY: true } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## BUNDLE_NAME_KEY

```TypeScript
BUNDLE_NAME_KEY = "ohos.extra.param.key.bundle_name"
```

Indicates the key specifying the name of the bundle to be obtained, which is represented as want: { "parameters": { BUNDLE_NAME_KEY: "bundleName" } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## ABILITY_NAME_KEY

```TypeScript
ABILITY_NAME_KEY = "ohos.extra.param.key.ability_name"
```

Indicates the key specifying the name of the ability to be obtained, which is represented as want: { "parameters": { ABILITY_NAME_KEY: "abilityName" } }.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## THEME_KEY

```TypeScript
THEME_KEY = 'ohos.extra.param.key.form_is_theme'
```

Theme ID.

**起始版本：** 12

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## DEVICE_ID_KEY

```TypeScript
DEVICE_ID_KEY = "ohos.extra.param.key.device_id"
```

Device ID.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## LAUNCH_REASON_KEY

```TypeScript
LAUNCH_REASON_KEY = "ohos.extra.param.key.form_launch_reason"
```

Indicates the key specifying the launch reason of the form to be obtained, which is represented as want: { "parameters": { LAUNCH_REASON_KEY: LaunchReason.FORM_DEFAULT } }.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## PARAM_FORM_CUSTOMIZE_KEY

```TypeScript
PARAM_FORM_CUSTOMIZE_KEY = "ohos.extra.param.key.form_customize"
```

Indicates the key specifying the custom data of the form to be obtained, which is represented as want: { "parameters": { PARAM_FORM_CUSTOMIZE_KEY: { "key": "userData" } } }.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## FORM_LOCATION_KEY

```TypeScript
FORM_LOCATION_KEY = 'ohos.extra.param.key.form_location'
```

Indicates the key specifying the form location, which is represented as want: { "parameters": { FORM_LOCATION_KEY: FormLocation.DESKTOP } }.

**起始版本：** 12

**系统能力：** SystemCapability.Ability.Form

## FORM_RENDERING_MODE_KEY

```TypeScript
FORM_RENDERING_MODE_KEY = 'ohos.extra.param.key.form_rendering_mode'
```

Indicates the key specifying the form rendering mode, which is represented as want: { "parameters": { FORM_RENDERING_MODE_KEY: FormRenderingMode.SINGLE_COLOR } }.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## HOST_BG_INVERSE_COLOR_KEY

```TypeScript
HOST_BG_INVERSE_COLOR_KEY = 'ohos.extra.param.key.host_bg_inverse_color'
```

Indicates the key specifying the inverse of the host background color, which is represented as want: { "parameters": { HOST_BG_INVERSE_COLOR_KEY: "#FF000000" } }.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## FORM_PERMISSION_NAME_KEY

```TypeScript
FORM_PERMISSION_NAME_KEY = 'ohos.extra.param.key.permission_name'
```

Indicates the key specifying the user granted permission name, which is represented as want: { "parameters": { FORM_PERMISSION_NAME_KEY: "permissionName" } }.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## FORM_PERMISSION_GRANTED_KEY

```TypeScript
FORM_PERMISSION_GRANTED_KEY = 'ohos.extra.param.key.permission_granted'
```

Indicates the key specifying whether the user granted, which is represented as want: { "parameters": { FORM_PERMISSION_GRANTED_KEY: true } }.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## ORIGINAL_FORM_KEY

```TypeScript
ORIGINAL_FORM_KEY = 'ohos.extra.param.key.original_form_id'
```

Indicates the key specifying the original form id, used in conjunction with LaunchReason.FORM_SIZE_CHANGE. which is represented as want: { "parameters": { ORIGINAL_FORM_KEY: "119476135" } }.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## EDIT_FORM_KEY

```TypeScript
EDIT_FORM_KEY = 'ohos.extra.param.key.edit_form_id'
```

Indicates the key specifying the edit form id, used in conjunction with LaunchReason.FORM_EDIT_PREVIEW. which is represented as want: { "parameters": { EDIT_FORM_KEY: "119476135" } }.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## FORM_MANAGER_SHOW_SINGLE_FORM

```TypeScript
FORM_MANAGER_SHOW_SINGLE_FORM = 'ohos.extra.param.key.form_manager_show_single_form'
```

Whether to display only a specified widget on the widget management page. - **true**: Only one specified widget is displayed. - **false**: All widgets are displayed.

**起始版本：** 23

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## TEMPLATE_FORM_DETAIL_ID

```TypeScript
TEMPLATE_FORM_DETAIL_ID = 'ohos.extra.param.key.template_form_detail_id'
```

Template widget ID.

**起始版本：** 23

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## TEMPLATE_FORM_DATA

```TypeScript
TEMPLATE_FORM_DATA = 'ohos.extra.param.key.template_form_data'
```

Template widget data.

**起始版本：** 23

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## TEMPLATE_FORM_DISPLAY_NAME

```TypeScript
TEMPLATE_FORM_DISPLAY_NAME = 'ohos.extra.param.key.template_form_display_name'
```

Display name of a template widget.

**起始版本：** 23

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## TEMPLATE_FORM_DESCRIPTION

```TypeScript
TEMPLATE_FORM_DESCRIPTION = 'ohos.extra.param.key.template_form_description'
```

Template widget description.

**起始版本：** 23

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## UPDATE_FORM_REASON_KEY

```TypeScript
UPDATE_FORM_REASON_KEY = 'ohos.extra.param.key.update_form_reason'
```

Indicates the key specifying the reason for the form update. which is represented as want: { "parameters": { UPDATE_FORM_REASON_KEY: FormUpdateReason.FORM_NODE_REUSE } }.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## FORM_FONT_SIZE_SCALE_KEY

```TypeScript
FORM_FONT_SIZE_SCALE_KEY = 'ohos.extra.param.key.form_font_size_scale'
```

Indicates the key specifying font size scale of the form. which is represented as want: { "parameters": { FORM_FONT_SIZE_SCALE_KEY: 1.0 } }.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## FORM_FONT_WEIGHT_SCALE_KEY

```TypeScript
FORM_FONT_WEIGHT_SCALE_KEY = 'ohos.extra.param.key.form_font_weight_scale'
```

Indicates the key specifying font weight scale of the form. which is represented as want: { "parameters": { FORM_FONT_WEIGHT_SCALE_KEY: 1.0 } }

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

