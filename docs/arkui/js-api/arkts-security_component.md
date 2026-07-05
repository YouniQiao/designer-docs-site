# security_component

## Summary

### Classes

| Name | Description |
| --- | --- |
| [SecurityComponentMethod](arkts-securitycomponentmethod-c.md) | 安全控件通用属性模块，提供安全控件的布局、尺寸、文字、图标、颜色、边框和交互等通用属性的统一配置能力。 - 为[PasteButton]{@link ./paste_button}、[SaveButton]{@link ./save_button}等安全控件统一设置布局、尺寸、文字、图标、颜色、边框和交互相关属性。 - 在满足安全控件规范的前提下，调整安全控件显示效果和交互体验。具体约束请参见[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。 - 通过链式调用方式复用安全控件通用属性能力。 ###### 核心枚举类型 - **[SecurityComponentLayoutDirection]{@link SecurityComponentLayoutDirection}：** 安全控件图标和文字排列方向枚举，用于指定横向或纵向布局。 - **[ButtonType]{@link @global:ButtonType}：** 安全控件按钮样式枚举，用于指定胶囊、圆形、圆角矩形或普通按钮样式。 ###### 核心接口类型 - **[SecurityComponentMethod]{@link SecurityComponentMethod}：** 安全控件通用属性方法集合，用于为具体安全控件配置布局、尺寸、文字、图标、颜色、边框和交互属性。 ###### 子组件 不支持 |

### Enums

| Name | Description |
| --- | --- |
| [SecurityComponentLayoutDirection](arkts-securitycomponentlayoutdirection-e.md) | 安全控件上图标和文字的排列方向。 |
| [SecurityComponentRoleType](arkts-securitycomponentroletype-e.md) | 定义组件的屏幕朗读功能角色类型。 |

