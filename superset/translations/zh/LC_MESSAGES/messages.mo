��    �                    �	  	   �	     
     
     
  '   -
  	   U
  Q   _
  �   �
  �   6     �  
   �     �                     ,     8     E     R     V     b     p     �  
   �     �     �     �     �     �     �     �  
   �     �  	     
             (     1     E  
   R     ]  ^   m     �     �     �     �          8  <   I     �     �     �  
   �     �  
   �     �  	   �     �  	   �       	              ,     1     ?     L     Z     `     g     n     u     y     �     �     �     �  4   �  
   �     �                 6        L  
   a     l     x  �   �     /     7  S   D  I   �     �     �  
                  .     5  F   <  	   �     �     �     �     �     �     �  
   �     �  u   �  �   C  X    �   Z  �   �  �   �  k   �  �   �     �     �     �  "   �          '     D    Z  .   x     �  (   �     �     �     �     �  
   �            j   %  �   �  L   D  p   �  �     
   �  	   �  B   �     �     �  	   �     �                               '     ,     A     S     e  �  j  	   �     �              '   !   	   I   Q   S   �   �   �   *!     �!     �!     �!  	   �!     �!     
"     "  	   ""  	   ,"     6"     :"     F"     S"     c"  	   j"     t"     {"     "     �"     �"     �"     �"     �"     �"     �"     �"  	   �"  	   �"     �"     #  	   #     )#     6#     I#     Z#  	   a#     k#     |#     �#     �#     �#     �#     �#  	   �#     $  	   	$     $  	   $  	   $$  	   .$  	   8$     B$     I$     V$  
   [$     f$     s$     �$     �$     �$     �$  	   �$     �$     �$  	   �$  	   �$     �$  4   �$  
   %     !%     .%  	   5%  	   ?%  9   I%     �%     �%  	   �%     �%  �   �%     W&     ^&  S   k&  I   �&     	'     '     ,'     9'     F'  	   U'     _'  F   f'  	   �'     �'     �'     �'     �'     �'     �'  	   �'     �'  B   �'  �   ?(  X  �(  �   V*  �   �*  �   s+  k   ,  �   ,     -     !-     .-     E-     _-     v-     �-    �-  #   �.     �.  !   �.  	   /     /  	   &/     0/     7/     D/     K/  j   X/  <   �/  L    0  Q   M0  �   �0  	   11     ;1  B   H1     �1     �1  	   �1     �1     �1     �1     �1     �1     �1     �1     �1     �1     �1     2   10 minute 5 minute Action Allow CREATE TABLE AS Allow CREATE TABLE AS option in SQL Lab Allow DML Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab Allow users to run queries, against an async backend. This assumes that you have a Celery worker setup as well as a results backend. Allow users to run synchronous queries, this is the default and should work well for queries that can be executed within a web request scope (<~1 minute) Associated Slices Big Number Big Number with Trendline Box Plot Broker Endpoint Broker Host Broker Port Bubble Chart Bullet Chart CSS CTAS Schema Cache Timeout Calendar Heatmap Cancel Changed By Cluster Column Coordinator Endpoint Coordinator Host Coordinator Port Count Distinct Country Map Created On Creator Dashboard Dashboards Data Source Database Database Expression Database URL Datasource Datetime Format Datetime column not provided as part table configuration and is required by this type of chart Default Endpoint Description Directed Force Layout Distribution - Bar Chart Distribution - NVD3 - Pie Chart Druid Datasource Duration (in seconds) of the caching timeout for this slice. Enable Filter Select Expose in SQL Lab Expose this DB in SQL Lab Expression Extra Filterable Filters Groupable Heatmap Histogram Horizon Charts Is Hidden Is temporal JSON JSON Metadata Last Changed Last Modified Login Logout Mapbox Markup Max Metric Metric '{}' is not valid Min Modified Name Name of the table that exists in the source database No Access! No data was returned. Offset Owner Owners Owners is a list of users who can alter the dashboard. Parallel Coordinates Parameters Pivot Table Position JSON Predicate applied when fetching distinct value to populate the filter control component. Supports jinja template syntax. Applies only when `Enable Filter Select` is on. Profile Query Search Redirects to this endpoint when clicking on the datasource from the datasource list Redirects to this endpoint when clicking on the table from the table list Request Permissions Roles to grant SQL Editor SQL Expression SQLAlchemy URI Sankey Schema Schema, as used only in some databases like Postgres, Redshift and DB2 Separator Slice Slices Slug Sum Sunburst Table Table View Test Connection The css for individual dashboards can be altered here, or in the dashboard view where changes are immediately visible The data type that was inferred by the database. It may be necessary to input a type manually for expression-defined columns in some cases. In most case users should not need to alter this. The list of slices associated with this table. By altering this datasource, you may change how these associated slices behave. Also note that slices need to point to a datasource, so this form will fail at saving if removing slices from a datasource. If you want to change the datasource for a slice, overwrite the slice from the 'explore view' The table was created. As part of this two phase configuration process, you should now click the edit button by the new table to configure it. These parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object is exposed here for reference and for power users who may want to alter specific parameters. This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters. This fields acts a Superset view, meaning that Superset will run a query against this string as a subquery. This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view Time Column Time Offset Time Series - Bar Chart Time Series - Dual Axis Line Chart Time Series - Line Chart Time Series - Percent Change Time Series - Stacked Time expression to use as a predicate when retrieving distinct values to populate the filter component. Only applies when `Enable Filter Select` is on. If you enter `7 days ago`, the distinct list of values in the filter will be populated based on the distinct value over the past week Timezone offset (in hours) for this datasource Title To get a readable URL for your dashboard Treemap Type Underlying Tables User User Roles Verbose Name Visualization Type When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema Whether the access to this metric is restricted to certain roles. Only roles with the permission 'metric access on XXX (the name of this metric)' are allowed to access this metric Whether this column is exposed in the `Filters` section of the explore view. Whether to make this column available as a [Time Granularity] option, column has to be DATETIME or DATETIME-like Whether to populate the filter's dropdown in the explore view's filter section with a list of distinct values fetched from the backend on the fly Word Cloud World Map You do not have permissions to access the datasource(s): %(name)s. day dttm half hour hour iFrame minute month quarter second week week_ending_saturday week_start_monday week_start_sunday year Project-Id-Version: PROJECT VERSION
Report-Msgid-Bugs-To: EMAIL@ADDRESS
POT-Creation-Date: 2017-06-04 20:38+0200
PO-Revision-Date: 2016-05-01 23:07-0700
Last-Translator: FULL NAME <EMAIL@ADDRESS>
Language: zh
Language-Team: zh <LL@li.org>
Plural-Forms: nplurals=1; plural=0
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: 8bit
Generated-By: Babel 2.3.4
 10 minute 5 分钟 操作 Allow CREATE TABLE AS Allow CREATE TABLE AS option in SQL Lab Allow DML Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab Allow users to run queries, against an async backend. This assumes that you have a Celery worker setup as well as a results backend. Allow users to run synchronous queries, this is the default and should work well for queries that can be executed within a web request scope (<~1 minute) Associated Slices 数字 数字和趋势线 箱线图 Broker Endpoint Broker Host Broker Port 气泡图 子弹图 CSS CTAS Schema 缓存时间 时间热力图 取消 修改人 集群 列 Coordinator Endpoint Coordinator Host Coordinator Port 计数 Country Map 创建日期 作者 看板 看板 数据源 数据库 数据库表达式 数据库URL 数据源 时间格式 缺少时间字段 Default Endpoint 描述 有向图 分布-柱状图 分布-饼图 Druid数据源 切片数据过期时间(秒) Enable Filter Select Expose in SQL Lab Expose this DB in SQL Lab 表达式 扩展 可筛选 筛选 可分组 热力图 直方图 水平图 隐藏 表示时间 JSON JSON模板 更新时间 最后修改 登录 退出 箱图 标记 最大值 度量 Metric '{}' is not valid 最小值 已修改 名字 Name of the table that exists in the source database No Access! 没有数据 偏移 所有者 所有者 “所有者”是一组可以修改看板的用户列表 平行坐标 参数 透视表 位置参数 Predicate applied when fetching distinct value to populate the filter control component. Supports jinja template syntax. Applies only when `Enable Filter Select` is on. 策略 查询搜索 Redirects to this endpoint when clicking on the datasource from the datasource list Redirects to this endpoint when clicking on the table from the table list Request Permissions Roles to grant SQL编辑器 SQL表达式 SQLAlchemy URI 蛇形图 模式 Schema, as used only in some databases like Postgres, Redshift and DB2 分隔符 切片 切片 Slug 求和 环状层次图 表 表视图 测试连接 可以在这里或者在看板视图修改单个看板的CSS样式 The data type that was inferred by the database. It may be necessary to input a type manually for expression-defined columns in some cases. In most case users should not need to alter this. The list of slices associated with this table. By altering this datasource, you may change how these associated slices behave. Also note that slices need to point to a datasource, so this form will fail at saving if removing slices from a datasource. If you want to change the datasource for a slice, overwrite the slice from the 'explore view' The table was created. As part of this two phase configuration process, you should now click the edit button by the new table to configure it. 当单击“保存”或“覆盖”按钮时，这些参数会在视图中动态生成。高级用户可以在这里改变特定的参数。 当在看板视图中单击“保存”或“覆盖”按钮时，这些参数会在视图中动态生成。高级用户可以在这里改变特定的参数。 This fields acts a Superset view, meaning that Superset will run a query against this string as a subquery. 这个JSON对象描述了部件在看板中的位置。它是动态生成的，可以通过拖放，在看板中调整整部件的大小和位置。 时间字段 时间偏移 时间序列-柱状图 时间序列-双轴线图 时间序列-折线图 时间序列-百分比变化 时间序列-堆积图 Time expression to use as a predicate when retrieving distinct values to populate the filter component. Only applies when `Enable Filter Select` is on. If you enter `7 days ago`, the distinct list of values in the filter will be populated based on the distinct value over the past week 数据源的时差(单位：小时) 标题 为看板生成一个可读的URL 树状图 类型 底层表 用户 用户角色 全称 图表类型 When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema 是否访问受限。只有有权限的用户才能访问。 Whether this column is exposed in the `Filters` section of the explore view. 是否将此列作为[时间粒度]选项, 列中的数据类型必须是DATETIME Whether to populate the filter's dropdown in the explore view's filter section with a list of distinct values fetched from the backend on the fly 词汇云 世界地图 You do not have permissions to access the datasource(s): %(name)s. 天 DTTM 半小时 小时 内嵌框架 分 月 季度 秒 周 周日为一周开始 周一为一周开始 周日为一周结束 年 