import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isMobile: false,
    currentIndex: 0,
    menuList: [
      {index: 0, idName: 'home', name: '首页'},
      {index: 1, idName: 'about', name: '关于为昕'},
      {index: 2, idName: 'technology', name: '技术'},
      {index: 3, idName: 'development', name: '资讯'},
      {index: 4, idName: 'product', name: '产品'},
      {index: 5, idName: 'contact', name: '联系我们'}
    ],
    productList: [
      {
        id: 1, img: require('../../static/img/Venus1.png'), title: '智能建库',
        desc: '为昕科技创新力作，基于深度学习的图文转换系统，推出业界首例智能建库EDA软件——Venus 1.0。结合人工智能图像识别算法，能够自动识别元器件规格书，采用行业通用的DRC规则和建库标准，实现快速自动建库，并且输出多种EDA格式。与传统的EDA建库相比，智能建库将可以大幅缩短建库时间，全面提高效率和准确率。为昕科技旨在通过新技术加速完善国产EDA布局，面向电子系统/产品研发全流程，提供更高效、更智能的EDA软件及数据服务。',
        // 图片相关 功能展示
        // imgList: [
        //   {img: require('../../static/img/extract.gif'), title: '智能识别'},
        //   {img: require('../../static/img/symbol.gif'), title: '智能建库'},
        // ],
        introList: [
          { title:'智能识别',
          children: [
            {subDesc: '自动萃取，几分钟搞定几小时工作量。',
              imgList: [require('../../static/img/extract.gif')]},
          ],
          },
          { title:'智能建库',
          children: [
            {subDesc: '智能分配，一键生成symbol。',
              imgList: [require('../../static/img/symbol.gif')]},
          ],
          },
        ],
        versionList:[
          { title:'1、新增萃取类型',
          children: [
            {subDesc: '支持BGA的Excel格式的导入与萃取。',
              imgList: [require('../../static/img/Excel.png')]},],
          },
          { title: '2、优化识别场景，智能提取建库信息',
            children: [
              { subTitle: '自动识别并萃取出PDF中的多行引脚信息', 
                imgList: [require('../../static/img/2.1.gif')], },
              { subTitle: '新增低电平有效的识别和导出转换功能', subDesc: '不仅能够识别各格式低电平有效符号的输入，还能支持导出为各软件对应的低电平有效的符号。',
                imgList: [require('../../static/img/2.2.gif')]}],
          },
          { title: '3、优化DRC检查场景，智能推荐修改方式',
            children: [
              { subTitle: '新增Pin Number、Pin Name信息分割推荐功能', subDesc: '通过逗号(,)、减号（-）等符号对单元格信息进行智能拆分，分割为多行信息。',
                imgList: [require('../../static/img/3.1.gif')], },
              { subTitle: '新增符号、拼写等信息检查功能', subDesc: '智能检查出符号和拼写的问题并推荐修改方式。',
                imgList: [require('../../static/img/3.2.png')]}],
          },
          { title: '4、手动修改也能提升效率',
          children: [
            {subDesc: 'Direction和Function增加下拉菜单，选你所要!',
              imgList: [require('../../static/img/4.gif')]},],
          },
          { title: '5、Symbol编辑界面调整，更贴近用户的使用习惯',
            children: [
              { subTitle: '新增操作界面调整功能', subDesc: '用户能够更灵活的掌控操作界面。',
                imgList: [require('../../static/img/5.1.gif')], },
              { subTitle: '新增引脚自动补齐功能', subDesc: '点击按钮自动补齐引脚空缺位置，避免了通过手动拖拽引起的各种问题。',
                imgList: [require('../../static/img/5.2.gif')]}],
          },
          { title: '6、兼容第三方软件Mentor® Xpedition® Designer',
          children: [
            {subDesc: '支持导出文件导入到Mentor® Xpedition® Designer，支持Pin Name引脚复用。',
              imgList: [require('../../static/img/mentor.gif')]},],
          },
        ],
        // 功能介绍
        introduction: [
          { title: '智能萃取信息', subTitle: ['识别SOP、QFP、BGA等多种类型', '支持萃取Pin Number、Name等多种信息', '支持二级管、三极管等非标格式', '可定位和识别不规则文字'] },
          { title: '智能信息优化', subTitle: ['Pin Type识别及自动推荐类型', '自动识别低电平有效等特殊电气属性', '可编辑引脚信息，优化Pin Function', '自动编号重复的Pin Name']},
          { title: '一键智能建库', subTitle: ['依据Pin Type属性自动排布引脚位置', '支持单个或一组引脚拖拽摆放', '支持输出Cadence、Zuken等多种格式'] },
        ],
      },
      {
        id: 2, img: require('../../static/img/Jupiter.png'), title: '原理图设计',
        desc: 'Jupiter 1.0是一款符合中国国情的原理图设计软件，聚焦核心功能，覆盖原理图设计全流程，功能设计更智能化，界面操作更人性化，让硬件工程师使用得更愉悦、顺畅。为昕科技旨在通过新技术提高硬件工程师设计原理图的效率，加速完善国产EDA布局，面向电子系统/产品研发全流程，提供更高效、更智能的EDA软件及数据服务。',
        introList: [
          { title:'界面风格',
          children: [
            {subDesc: '采用Ribbon这种现代化的风格，帮助用户通过最直观的界面，最少的点击，找到最想要的功能。另外设计流程照顾流行的EDA软件用户的使用习惯，易上手；',
              imgList: [require('../../static/img/view.jpg')]},
          ],
          },
          { title:'历史文件',
          children: [
            {subDesc: '分类展示，更贴近用户的使用习惯。',
              imgList: [require('../../static/img/history.jpg')]},
          ],
          },
          { title:'引脚拖出导线',
          children: [
            {subDesc: '点击引脚直接拖出导线，给你所需！',
              imgList: [require('../../static/img/drag.jpg')]},
          ],
          },
          { title:'总线/导线',
          children: [
            {subDesc: '不管怎么拖动，全都横平竖直，行为更专业！',
              imgList: [require('../../static/img/wire.jpg')]},
          ],
          },
          { title:'Table功能',
          children: [
            {subDesc: 'Excel的便利，这里也可以拥有！一键插入Table表格，自主选择行列，备注内容系统化。',
              imgList: [require('../../static/img/table.jpg')]},
          ],
          },
          { title:'多屏操作,使用场景多样化',
          children: [
            {subDesc: '硬件工程师的福音！可以一边建库一边设计原理图；两个原理图对比；一个原理图参考另一个原理图。',
              imgList: [require('../../static/img/more-view.jpg')]},
          ],
          },
          { title:'Part tree/Net tree',
          children: [
            {subDesc: '元件树结构/网络树结构,让结构关系一览无余！',
              imgList: [require('../../static/img/tree.jpg')]},
          ],
          },
          { title:'批量保存',
          children: [
            {subDesc: '是真的可以想保存啥就保存啥。所有项目的修改文件一页显示，保存方式一键选择',
              imgList: [require('../../static/img/save-all.jpg')]},
          ],
          },
        ],
        // imgList: [
        //   {img: require('../../static/img/history.jpg'), title: '历史文件文件：分类展示，更贴近用户的使用习惯。'},
        //   {img: require('../../static/img/drag.jpg'), title: '引脚拖出导线：点击引脚直接拖出导线，给你所需！'},
        //   {img: require('../../static/img/wire.jpg'), title: '总线/导线：不管怎么拖动，全都横平竖直，行为更专业！'},
        //   {img: require('../../static/img/table.jpg'), title: '增加Table功能：Excel的便利，这里也可以拥有！一键插入Table表格，自主选择行列，备注内容系统化。'},
        //   {img: require('../../static/img/more-view.jpg'), title: '多屏操作，使用场景多样化：硬件工程师的福音！可以一边建库一边设计原理图；两个原理图对比；一个原理图参考另一个原理图。'},
        //   {img: require('../../static/img/tree.jpg'), title: 'Part tree(元件树结构)/Net tree(网络树结构)：关系一览无余！'},
        //   {img: require('../../static/img/save-all.jpg'), title: '批量保存：是真的可以想保存啥就保存啥。所有项目的修改文件一页显示，保存方式一键选择'},
        //   {img: require('../../static/img/view.jpg'), title: '界面风格：采用Ribbon这种现代化的风格，帮助用户通过最直观的界面，最少的点击，找到最想要的功能。另外设计流程照顾流行的EDA软件用户的使用习惯，易上手；'},
        // ],
        // 流程相关
        processList: [
          {name: '新建文件', desc: '选择文件类型：工程/设计/元件库'},
          {name: '创建库', desc: '创建类型：Part/Symbol'},
          {name: '设计原理图', desc: '元素放置、网线连接、自主编辑'},
          {name: 'DRC', desc: '设置检查规则、一键自动检查' },
          {name: '导出', desc: '支持导出：网表、BOM表'}
        ],
      },
      {
        id: 3, img: require('../../static/img/i1.png'), title: '在线评审工具',
        desc: '为了解决PCB评审沟通过程中产生的相关问题，东好科技推出了iReview 在线评审工具,实现评审意见和设计文档的一体化、专家与设计师实时交换意见，让评审活动摆脱时间和空间的束缚，随时随地可以参与评审和交流。',
        // 功能展示 有大小标题
        introList: [
          { title: '评审意见的添加方式',
            children: [
              { subTitle: '选取对象添加意见', subDesc: '选中PCB图纸中的对象，例如走线、铜皮、过孔、器件、文字、丝印等直接添加的评论及修改意见，支持标记意见严重等级，设计师刷新本地的意见列表即可看到专家前一秒提交的意见',
                imgList: [require('../../static/img/idea-save.jpg'), require('../../static/img/idea-list2.jpg')], },
              { subTitle: '直接添加意见，可追加链接', subDesc: '对于板上无法定位的问题，例如叠层和CM规则这一类通用对象，可以直接添加意见，需要定位时还可以选择No Data（Click to get）追加设计中的链接对象。',
                imgList: [require('../../static/img/idea-list.jpg')]}
            ],
          },
          {
            title: '意见回复及问题处理',
            children: [
              { subDesc: '每个意见可自带一个高亮定位的信息，选中一个意见的时候，allegro中便会自动跳转到该定位高亮的地方。工程师在登录系统后，看到这些建议后，可以做出不同的反馈，如果对主题描述的问题有疑问，也可以在下面先跟帖讨论，然后修改主题状态为Accept/Refused/Resolved，系统自动产生跟帖记录。下图为主题详情的编辑区域：',
                imgList: [require('../../static/img/idea-replay.jpg')],},
              { subDesc: ' 一条评审主题会存在于项目的所有阶段。专家认为修改方案可以接受，则可以关闭该条意见，如果专家觉得修改欠妥，或者修改已经完成但引发了其他的问题，可以选择reopen这个问题。沟通过程中有需要引用到PCB板图的器件，shape，cline，text，net等信息，还可以在回复内容中插入“allegro超链接”。'},
            ],
          },
          {
            title: '评审模式',
            children: [
              {subDesc: 'iReview支持各种对象的关联定位，支持评审模式及右键菜单集成,评审结束后单击Finish Reivew Mode，来结束review mode状态，结束时会自动弹出意见列表，以供意见提出者可立即确认刚才提出的意见。',
                imgList: [require('../../static/img/comment.jpg')], },
            ],
          },
          {
            title: 'Check list引用',
            children: [
              {subDesc: 'Check list引用功能，支持直接选择Checklist条目，引用Checklist内容作为专家意见，既节省专家的时间，也便于设计师阅读和理解专家的意见，大大提高交换意见的效率。',
                imgList: [require('../../static/img/check-list.jpg')]},
            ],
          },
          {
            title: '归档',
            children: [
              {subDesc: '当项目评审结束后，iReview工具提供“归档”功能，此功能可以方便用户导出历史项目的评审记录到一个Excel档案中。支持记录评审过程中的关键要素，评审意见、截图、评审专家、单板名称、版本、轮次，时间等详细信息，便于用户管理档案及后续问题回溯。'},
            ],
          },
          {
            title: '数据库配置',
            children: [
              {subDesc: '数据库管理评审活动，安全、共享、高效。iReview工具与allegro集成，由Allegro菜单发起评审，评审活动的全部过程及数据都记录在后台数据库中，本地客户端用户连接至数据库即可实时刷新评审意见，无需通过文档的方式传递，避免或简化了会议评审。', },
            ],
          },
          {
            title: '评审流程',
            children: [
              {subDesc: 'iReview工具采用角色管理，不同的角色登录操作不同的功能。支持多个项目并行评审。'},
              {subDesc: '允许同一个项目在进行评审的同时，设计师在本地继续进行修改工作，支持一个项目发起多伦评审，下一个轮的评审依然能定位上一轮的评审意见及回复意见。',
                imgList: [require('../../static/img/flow.jpg')]},
            ],
          },
        ],
        introduction: [
          { title: '特性', subTitle: ['PCB图纸与评审意见不分离，选中意见，立即复现问题，还原专家发现问题时的图像。',
            '专家的意见实时刷新，无需等待word、ppt、邮件等评审文档的传输过程。', '设计师与专家角色分离，以不同的角色参与到评审活动中。',
            '对同一个问题的评审各专家和设计师本人可展开讨论', '评审意见可输出存档报告，便于归档保存。', '评审报告包含评审意见、截图、评审专家、单板名称、版本、轮次，时间等详细信息。',
            'Check list引用功能大大提高录入意见的效率', '意见的处理状态实时可见', '问题修改了依然能定位位置', '数据库管理评审活动及意见，安全、共享、高效。',
            '支持Allegro、Expedition、PADs、Altium Designer等多种设计工具的集成。'],
          }
        ],
      },
      {
        id: 4, img: require('../../static/img/i2.png'), title: '物料管理系统',
        desc: 'i-Libsys元器件库管理平台 专注于企业元器件参数管理，EDA设计工具图形符号的管理，支持对企业常用的成熟电路模块的管理，集中共享器件符号库资源，统一维护器件信息的完整性，一致性，有效性，避免冗余数据，支持新增及修改的器件信息进行严谨的流程化管理，支持对BOM清单的管理，单板成本统计，支持供货周期的风险管控，物料的使用记录追踪，物料的使用次数统计，建库绩效统计，支持与其他企业管理系统的接口开发。',
        introduction: [
          { subTitle: ['含2000条基础物料库数据','支持电子物料管理（物料参数、 Datasheet、原理图OLB库、 Pcb Footorint封装库）',
            '支持EDDM物料库物料参数与Cadence工具实时同步','支持建库/修改管理流程','支持物料采购申请流程','支持BOM版本管理','支持不同版本的BOM比较功能',
            '支持失效物料追踪','支持价格统计分析','支持物料使用次数统计分析，快速决策优选物料。','供货周期风险提示','支持CBB电路模块化管理及复用',
            '支持多型号物料兼容管理','支持邮件通知提醒任务功能','支持按角色分配权限','Site版不限license'],
          }
        ],
        introList: [
          {
            title: '物料库平台主界面',
            children: [
              {subDesc: '网页登录、数据安全、稳定;无需安装客户端、使用简单',
                imgList: [require('../../static/img/homepage.png')]},
            ],
          },
          {
            title: '物料库与EDA工具的无缝对接',
            children:[
              {subDesc:'库管理系统直接推送器件参数至EDA工具器件参数动态更新，跟随器件到生产、采购各个环节。',
                imgList:[require('../../static/img/abutment.png')]},
            ],
          },
          {
           title: '流程可配置',
            children:[
              {subDesc:'新建库.修改库流程均做到用户可自定义，可配置（自定义流程的流转、自定义审批节点、自定义审批人员；）',
                imgList:[require('../../static/img/wuliaoflow.png')]},
            ],
          },
          {
            title: 'BOM管理',
             children:[
               {subDesc:'导入BOM，查看BOM，导出BOM',
               imgList: [require('../../static/img/BOM1.png'), require('../../static/img/BOM2.png')], 
                },
              ]
           },
           {
            title: 'BOM比较',
             children:[
               {subDesc:'支持不同版本的设计BOM清单差异分析，对设计完成的BOM进行比对及物料选型校验，支持导出效验报告',
                 imgList:[require('../../static/img/BOM3.png')]},
             ],
           },
           {
            title: 'BOM统计分析',
             children:[
               {subDesc:'支持器件成本统计分析（按PCB统计器件成本、按项目统计器件成本)',
                 imgList:[require('../../static/img/BOM4.png')]},
             ],
           },
           {
            title: 'CBB模块化电路管理',
             children:[
               {subDesc:'CBB模块电路管理（自动生成模块编码，模块电路的调用次数）',
                 imgList:[require('../../static/img/CBB1.png')]},
             ],
           },
           {
            title: 'CBB模块化电路管理流程',
             children:[
               {subDesc:'CBB物料库审批流程图',
                 imgList:[require('../../static/img/CBBflow.png')]},
             ],
           },
           {
            title: 'CBB物料同步到CIS',
             children:[
               {subDesc:'直接从CIS调用模块电路',
                 imgList:[require('../../static/img/CIS-CBB.png')]},
             ],
           },
           {
            title: 'CBB-PCB模块复用',
             children:[
               {subDesc:'PCB直接调用模块库',
                 imgList:[require('../../static/img/PCB-CBB.png')]},
             ],
           },
           {
            title: '定制报表及统计分析',
             children:[
               {subDesc:'支持在线编辑BOM；定制内容，定制格式。',
                 imgList:[require('../../static/img/BOM5.png')]},
             ],
           },
        ]
      },
      { id: 5, img: require('../../static/img/pcb.png'), title: 'PCB设计' },
      { id: 6, img: require('../../static/img/pakge.png'), title: '封装基板设计' },
      { id: 7, img: require('../../static/img/fangzhen.png'), title: '电路模拟仿真' },
      { id: 8, img: require('../../static/img/si1.png'), title: 'SI/PI仿真' },
    ],
    developmentList: [
      {
        id: 1,
        src: require('../../static/img/development2.png'),
        title: '为昕资讯',
        children: [
          { title: '软件升级公告：为昕科技发布智能建库EDA软件V1.0.1版本，欢迎试用！', time :'2021.8.5' , desc: '为昕智能建库EDA软件V1.0.1正式发布，为昕科技通过洞察用户实际使用过程中遇到的问题，从整个流程出发，新增和优化功能，帮助用户提升萃取效率，让智能建库EDA软件真正成为用户的好帮手。'},
          { title: '重磅！为昕科技原理图设计EDA软件（Jupiter 1.0）正式发布！', time :'2021.8.1' , desc: '2021年8月1日，上海为昕科技有限公司(以下简称“为昕科技”)发布了原理图设计EDA软件——Jupiter 1.0。定在这一天，不仅仅是因为原理图设计EDA软件(Jupiter 1.0)已经成熟，可以为国内电子行业提供服务，为国内EDA行业做出一份贡献，也是因为这一天是中华人民解放军建军节，是为昕科技为节日准备的一份礼物。'},
          { title: '为昕科技多项EDA核心技术获得国家知识产权保护', time: '2020.12.4', desc: '为昕科技自2019年12月成立以来，利用人工智能、云计算等新技术专注于国产EDA的创新与突破，现有10余项核心技术获得国家知识产权保护，包括多文件格式数据提取、Datasheet图像识别、设计规则算法等。为昕科技旨在通过新技术加速完善国产EDA布局，面向电子系统/产品研发全流程，提供更高效、更智能的EDA软件及数据服务。' },
          { title: '为昕科技与上海交通大学开展产学研合作', time: '2020.12.1', desc: '为加强校企之间的科技合作与交流，加速高效科技成果转化和企业技术进步，加强技术集成和商业模式创新，提升企业的技术创新能力与核心竞争力，上海为昕科技有限公司和上海交通大学电子信息与电气工程学院即日起建立产学研合作关系，基于人工智能、机器学习等新技术在EDA行业的应用进行深度合作与研究。' },
          { title: '为昕科技与上海交通大学开展EDA人才联合培养计划', time: '2020.10.15', desc: '根据《进一步鼓励软件产业和集成电路产业发展的若干政策》（国发[2011]号）和《国家集成电路产业发展推进纲要》要求，上海为昕科技有限公司和上海交通大学正式签订EDA人才联合培养协议，通过校企合作的方式，共同发挥高校的学科专业优势以及企业的产业优势，开展校企联合人才培养工作，以尽快满足集成电路EDA产业对高素质人才的迫切需求。' },
          { title: '为昕科技推出业界首创智能建库EDA软件', time: '2020.9.22', desc: '为昕科技创新力作，基于深度学习的图文转换系统，推出业界首例智能建库EDA软件（Venus 1.0）。结合人工智能图像识别算法，能够自动识别元器件规格书，采用行业通用的DRC规则和建库标准，实现快速自动建库，并且输出多种EDA格式。与传统的EDA建库方式相比，智能建库将可以大幅缩短工作时间，全面提高建库效率和准确率。' },
          { title: '为昕科技致力于国产EDA创新与突破', time: '2019.12.25', desc: 'EDA是芯片及电子产品研发必不可少的基础工具，但我国目前95%依赖于以美国为主的进口产品，虽然EDA被列入了十三五国家信息规划核心技术超越工程，但在工具完整性、技术等方面还差距甚远。为昕科技汇集众多EDA行业精英，充分融合人工智能、机器学习等新技术，直面行业痛点，致力于国产EDA的创新与突破。希望通过不断加强自主创新，助力中国集成电路及电子科技行业发展，让电子研发工程变得更高效、更智能。' },
        ],
      },
      {
        id: 2,
        src: require('../../static/img/development1.png'),
        title: '行业动态',
        children: [
          { title: '数字化学会 | 工业软件联盟成立', time: '2020.12.22', desc: '中国数字化学会会长指出："数字化学会把目光转向软件行业，主要有两方面的考虑：第一，是基于我们本身的数字化转型，本质上是想把所有的想法，转型的模式都要固化在IT上，没有软件就等于没有数字化转型。对于软件这一块的重视，数字化学会希望通过这样一种展会的形式，让更多的人能够把它重视起来；第二，大家知道中美贸易战之后，很多企业面临的一种困境，很多的国产软件，之前都不是很了解，希望通过这样一场大规模的软件展会，来加深国内企业对于国产软件的理解和认识。"' },
          { title: '重庆集成电路产业创新发展高峰论坛', time: '2020.12.11', desc: '中国集成电路设计业年会一直发挥着推动产业集聚、对接产业资源、掌握行业趋势的重要作用。多年来，年会的主题与会议主办地电子信息产业发展实际相结合，推动了各主办地的相关产业与国家集成电路产业同步发展。于2020年12月10日-11日在重庆举办了“中国集成电路设计业2020年会暨重庆集成电路产业创新发展高峰论坛”。' },
          { title: '《抓住机遇，实现跨越》魏少军教授2020ICCAD年会主体演讲', time: '2020.12.10', desc: '2020 ICCAD年会于于2020年12月10日-11日在重庆悦来国际会议中心隆重召开。 中国半导体行业协会集成电路设计分会理事长魏少军教授为大会作了题为《抓住机遇，实现跨越》的主旨报告。' },
          { title: '2021年中国电子产品市场规模及前景预测分析', time: '2020.12.04', desc: '中国经济进入新常态，经济增速较以往虽然有所放缓，但仍保持中高速增长。同时，我国主要应用领域包括计算机、消费电子、汽车电子、工业电子、军事航空和医疗器械，5G通信、工业4.0、物联网等建设加快，将带动市场发展。从中长期来看，我国相关行业增长势头强劲。' },
          { title: '云化EDA', time: '2020.11', desc: 'EDA行业巨头专家表示：“芯片设计上云最大的驱动力是灵活优化资源分配，对于中小型芯片设计公司，每年大规模项目的数量并不多，购买整个芯片设计过程中的所有工具和计算资源的成本高昂。对于财力雄厚且项目众多的大公司，多个项目同时推进或临时增加项目也会需要弹性的算力和额外的设计工具。所以无论公司规模大小，上云这种方式能够满足不同芯片设计公司在资源优化方面的需求。”' },
        ],
      },
    ]
  },
  mutations: {
    currentChange (state, { index, id, isScroll = true }) {
      // 变更状态
      state.currentIndex = index
      const ele = document.getElementById(id);
      localStorage.setItem('index', index)
      localStorage.setItem('elementId', id)
      if (ele) {
        if (isScroll && ele.offsetTop) {
          window.scrollTo({ top: ele.offsetTop - 100, behavior: "smooth" });
        } 
      }
    },
    isMobileChange (state, mobile) {
      state.isMobile = mobile
    },
  }
})

export default store