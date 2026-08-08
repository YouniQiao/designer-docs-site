# Drawing

## 概述

Provides functions such as 2D graphics rendering, text drawing, and image display.

**起始版本：** 8
## 文件汇总

| 名称 | 描述 |
| -- | -- |
| [drawing_lattice.h](capi-drawing-lattice-h.md) | This file declares the functions related to the rectangular lattice object. |
| [drawing_point.h](capi-drawing-point-h.md) | This file declares the functions related to the coordinate point in the drawing module. |
| [drawing_round_rect.h](capi-drawing-round-rect-h.md) | This file declares the functions related to the rounded rectangle in the drawing module. |
| [drawing_shadow_layer.h](capi-drawing-shadow-layer-h.md) | This file declares the functions related to the shadow in the drawing module. |
| [drawing_text_line.h](capi-drawing-text-line-h.md) | 提供获取文本行内的字符位置、获取渲染单元信息和按行截断等功能。 |
| [drawing_color_space.h](capi-drawing-color-space-h.md) | This file declares the functions related to the color space in the drawing module. |
| [drawing_path_iterator.h](capi-drawing-path-iterator-h.md) | This file declares the functions related to the path operation iterator object. |
| [drawing_text_run.h](capi-drawing-text-run-h.md) | 提供字体渲染单元的相关接口，比如绘制功能、获取排版边界功能等。 |
| [drawing_text_global.h](capi-drawing-text-global-h.md) | 提供文本全局信息的相关接口，如设置文本渲染高对比度模式、未定义字型的呈现方式等。 |
| [drawing_pen.h](capi-drawing-pen-h.md) | This file declares functions related to the pen in the drawing module. |
| [drawing_bitmap.h](capi-drawing-bitmap-h.md) | This file declares the functions related to the bitmap in the drawing module. |
| [drawing_matrix.h](capi-drawing-matrix-h.md) | This file declares the functions related to the matrix in the drawing module. |
| [drawing_memory_stream.h](capi-drawing-memory-stream-h.md) | This file declares the functions related to the memory stream in the drawing module. |
| [drawing_canvas.h](capi-drawing-canvas-h.md) | This file declares the functions related to the canvas in the drawing module.By default, the canvas has a black brush with anti-aliasing enabled and without any other style. This brush takeseffect only when no brush or pen is proactively set in the canvas. |
| [drawing_error_code.h](capi-drawing-error-code-h.md) | This file declares the functions related to the error code in the drawing module. |
| [drawing_gpu_context.h](capi-drawing-gpu-context-h.md) | This file declares the functions related to the GPU context in the drawing module. |
| [drawing_filter.h](capi-drawing-filter-h.md) | This file declares the functions related to the filter in the drawing module. |
| [drawing_text_blob.h](capi-drawing-text-blob-h.md) | This file declares the functions related to the text blob in the drawing module. |
| [drawing_surface.h](capi-drawing-surface-h.md) | This file declares the functions related to the surface in the drawing module, including creating, destroying,and using the surface. |
| [drawing_brush.h](capi-drawing-brush-h.md) | This file declares the functions related to the brush in the drawing module. |
| [drawing_mask_filter.h](capi-drawing-mask-filter-h.md) | This file declares the functions related to the mask filter in the drawing module. |
| [drawing_text_declaration.h](capi-drawing-text-declaration-h.md) | 提供2D绘制文本相关的数据结构声明。 |
| [drawing_text_font_descriptor.h](capi-drawing-text-font-descriptor-h.md) | 定义了字体信息的相关接口，比如获取字体信息、查找和匹配指定字体、读取字体描述符属性以及获取字体的Unicode码和字体数量等。 |
| [drawing_record_cmd.h](capi-drawing-record-cmd-h.md) | This file declares the functions related to a recording command object. |
| [drawing_font_collection.h](capi-drawing-font-collection-h.md) | 定义绘制模块中与字体集相关的函数，用于管理文本排版所需的字体资源，支持创建独立的或可共享的字体集对象，满足不同场景下的文本排版需求。通过字体集对象，可实现自定义字体加载、系统字体管理、字体缓存清理等功能。 |
| [drawing_sampling_options.h](capi-drawing-sampling-options-h.md) | This file declares the functions related to sampling in the drawing module. It is used for image or texturesampling. |
| [drawing_text_lineTypography.h](capi-drawing-text-lineTypography-h.md) | 提供排版行相关的接口，如获取指定位置处开始可以排版的字符个数等函数。 |
| [drawing_pixel_map.h](capi-drawing-pixel-map-h.md) | This file declares the functions related to the pixel map in the drawing module. |
| [drawing_typeface.h](capi-drawing-typeface-h.md) | This file declares the functions related to the typeface in the drawing module.Different platforms have their own default typefaces. You can also parse the .ttf file to obtain the typefacesspecified by the third party, such as SimSun and SimHei. |
| [drawing_color.h](capi-drawing-color-h.md) | This file declares the functions related to the color in the drawing module. |
| [drawing_shader_effect.h](capi-drawing-shader-effect-h.md) | This file declares the functions related to the shader effect in the drawing module. |
| [drawing_font.h](capi-drawing-font-h.md) | This file declares the functions related to the font in the drawing module. |
| [drawing_rect.h](capi-drawing-rect-h.md) | This file declares the functions related to the rectangle in the drawing module. |
| [drawing_types.h](capi-drawing-types-h.md) | This file declares the data types of the canvas, brush, pen, bitmap, and path used to draw 2D graphics. |
| [drawing_font_mgr.h](capi-drawing-font-mgr-h.md) | 文件中定义了与系统字体管理相关的功能函数，用于匹配与获取系统中预置的字体。OH_Drawing_FontMgr（字体管理器）管理系统中预置的字体家族，每个字体家族对应一个字体样式集[OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md)，每个样式集中包含多个字型对象[OH_Drawing_Typeface](capi-drawing-oh-drawing-typeface.md)。 |
| [drawing_text_typography.h](capi-drawing-text-typography-h.md) | 定义绘制模块中排版相关的函数。 |
| [drawing_path.h](capi-drawing-path-h.md) | This file declares the functions related to the path in the drawing module. |
| [drawing_color_filter.h](capi-drawing-color-filter-h.md) | This file declares the functions related to the color filter in the drawing module. |
| [drawing_register_font.h](capi-drawing-register-font-h.md) | 定义绘制模块中字体管理器相关的函数，提供自定义字体的注册、注销以及字体格式检测能力，支持ttf、otf、ttc和otc等多种字体文件格式。 |
| [drawing_image.h](capi-drawing-image-h.md) | This file declares the functions related to the image in the drawing module. |
| [drawing_image_filter.h](capi-drawing-image-filter-h.md) | This file declares the functions related to the image filter in the drawing module. |
| [drawing_path_effect.h](capi-drawing-path-effect-h.md) | This file declares the functions related to the path effect in the drawing module. |
| [drawing_region.h](capi-drawing-region-h.md) | This file declares the functions related to the region in the drawing module, including creating a region,setting the boundary, and destroying a region. |
