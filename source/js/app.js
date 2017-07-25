var app = angular.module('app', ['angularBootstrapNavTree','ngDraggable']);

app.controller("mainCtrl",['$scope','generatTree',function($scope,generatTree){

    $scope.loadData = [{id:1,pid:0,value:'0',name:'数据库',type:'database'},
        {id:2,pid:1,value:'ENTRY_HEAD',name:'报关单表头',type:'table'},
        {id:3,pid:2,value:'ENTRY_ID',name:'海关编号',type:'field'},
        {id:4,pid:2,value:'PRE_ENTRY_ID',name:'预录入号码',type:'field'},
        {id:5,pid:2,value:'ID_CHK',name:'海关编号校验码',type:'field'},
        {id:6,pid:2,value:'I_E_FLAG',name:'进出口标志',type:'field'},
        {id:7,pid:2,value:'I_E_PORT',name:'进出口岸代码',type:'field'},
        {id:8,pid:2,value:'I_E_DATE',name:'进出口日期',type:'field'},
        {id:9,pid:2,value:'D_DATE',name:'申报日期',type:'field'},
        {id:10,pid:2,value:'DESTINATION_PORT',name:'指运港(抵运港)',type:'field'},
        {id:11,pid:2,value:'TRAF_NAME',name:'运输工具名称',type:'field'},
        {id:12,pid:2,value:'VOYAGE_NO',name:'运输工具航次(班)号',type:'field'},
        {id:13,pid:2,value:'TRAF_MODE',name:'运输方式代码',type:'field'},
        {id:14,pid:2,value:'TRADE_CO',name:'经营单位编号',type:'field'},
        {id:15,pid:2,value:'TRADE_NAME',name:'经营单位名称',type:'field'},
        {id:16,pid:2,value:'DISTRICT_CODE',name:'货主单位地区代码',type:'field'},
        {id:17,pid:2,value:'OWNER_CODE',name:'货主单位代码',type:'field'},
        {id:18,pid:2,value:'OWNER_NAME',name:'货主单位名称',type:'field'},
        {id:19,pid:2,value:'AGENT_CODE',name:'申报单位代码',type:'field'},
        {id:20,pid:2,value:'AGENT_NAME',name:'申报单位名称',type:'field'},
        {id:21,pid:2,value:'CONTR_NO',name:'合同号',type:'field'},
        {id:22,pid:2,value:'IN_RATIO',name:'内销比率',type:'field'},
        {id:23,pid:2,value:'BILL_NO',name:'提运单号码',type:'field'},
        {id:24,pid:2,value:'TRADE_COUNTRY',name:'贸易国别（起/抵运地）',type:'field'},
        {id:25,pid:2,value:'TRADE_MODE',name:'监管方式',type:'field'},
        {id:26,pid:2,value:'CUT_MODE',name:'征免性质分类',type:'field'},
        {id:27,pid:2,value:'TRANS_MODE',name:'成交方式',type:'field'},
        {id:28,pid:2,value:'CONTAINER_NO',name:'集装箱标准箱数',type:'field'},
        {id:29,pid:2,value:'PAY_WAY',name:'收结汇方式',type:'field'},
        {id:30,pid:2,value:'FEE_MARK',name:'运费标记',type:'field'},
        {id:31,pid:2,value:'FEE_CURR',name:'运费币制',type:'field'},
        {id:32,pid:2,value:'FEE_RATE',name:'运费／率',type:'field'},
        {id:33,pid:2,value:'INSUR_MARK',name:'保险费标记',type:'field'},
        {id:34,pid:2,value:'INSUR_CURR',name:'保险费币制',type:'field'},
        {id:35,pid:2,value:'INSUR_RATE',name:'保险费／率',type:'field'},
        {id:36,pid:2,value:'OTHER_MARK',name:'杂费标记',type:'field'},
        {id:37,pid:2,value:'OTHER_CURR',name:'杂费币制',type:'field'},
        {id:38,pid:2,value:'OTHER_RATE',name:'杂费／率',type:'field'},
        {id:39,pid:2,value:'PACK_NO',name:'件数',type:'field'},
        {id:40,pid:2,value:'GROSS_WT',name:'毛重',type:'field'},
        {id:41,pid:2,value:'NET_WT',name:'净重',type:'field'},
        {id:42,pid:2,value:'WRAP_TYPE',name:'包装种类',type:'field'},
        {id:43,pid:2,value:'MANUAL_NO',name:'手册号码',type:'field'},
        {id:44,pid:2,value:'LICENSE_NO',name:'许可证编号',type:'field'},
        {id:45,pid:2,value:'APPR_NO',name:'结汇证号',type:'field'},
        {id:46,pid:2,value:'NOTE_S',name:'备注',type:'field'},
        {id:47,pid:2,value:'DECL_PORT',name:'申报口岸代码',type:'field'},
        {id:48,pid:2,value:'CO_OWNER',name:'经营单位性质',type:'field'},
        {id:49,pid:2,value:'TAXY_RG_NO',name:'纳税义务人识别号',type:'field'},
        {id:50,pid:2,value:'MNL_JGF_FLAG',name:'监管手续费标志字段',type:'field'},
        {id:51,pid:2,value:'SERVICE_FEE',name:'监管手续费',type:'field'},
        {id:52,pid:2,value:'SERVICE_RATE',name:'监管手续费率',type:'field'},
        {id:53,pid:2,value:'RELATIVE_ID',name:'关联编号字段（转出的手册、转入、转出的报关单）',type:'field'},
        {id:54,pid:2,value:'BONDED_NO',name:'保税仓库或者监管仓库编号',type:'field'},
        {id:55,pid:2,value:'BP_NO',name:'报关员传呼机号',type:'field'},
        {id:56,pid:2,value:'TYPIST_NO',name:'制单人',type:'field'},
        {id:57,pid:2,value:'INPUT_NO',name:'录入人',type:'field'},
        {id:58,pid:2,value:'P_DATE',name:'报关单打印日期/时间',type:'field'},
        {id:59,pid:2,value:'CTA_CHK_RESULT',name:'逻辑检查结果',type:'field'},
        {id:60,pid:2,value:'MODI_NO',name:'修改次数',type:'field'},
        {id:61,pid:2,value:'EDI_ID',name:'申报方式标志',type:'field'},
        {id:62,pid:2,value:'STATUS_RESULT',name:'审核（状态字）结果描述',type:'field'},
        {id:63,pid:2,value:'DECLARE_NO',name:'报关员代码',type:'field'},
        {id:64,pid:2,value:'JOU_EVENT',name:'规定企业的十四种差错情况',type:'field'},
        {id:65,pid:2,value:'EDI_REMARK',name:'EDI申报备注',type:'field'},
        {id:66,pid:2,value:'PARTNER_ID',name:'EDI申报人标识',type:'field'},
        {id:67,pid:2,value:'CUSTOMS_FIELD',name:'码头/货场代码（为物流监控备用）',type:'field'},
        {id:68,pid:2,value:'ENTRY_TYPE',name:'报关单类型',type:'field'},
        {id:69,pid:2,value:'RELATIVE_MANUAL_NO',name:'关联备案号',type:'field'},
        {id:70,pid:2,value:'PRICE_RANGE',name:'审价差额幅度',type:'field'},
        {id:71,pid:2,value:'SPECIAL_FLAG',name:'报关单涉案标志',type:'field'},
        {id:72,pid:2,value:'DELAY_DAYS',name:'滞报天数',type:'field'},
        {id:73,pid:2,value:'DELAY_ACCOUNT',name:'滞报金额',type:'field'},
        {id:74,pid:2,value:'HASH_SIGN',name:'密押',type:'field'},
        {id:75,pid:1,value:'ENTRY_LIST',name:'报关单表体',type:'table'},
        {id:76,pid:75,value:'ENTRY_ID',name:'海关编号',type:'field'},
        {id:77,pid:75,value:'G_NO',name:'商品序号',type:'field'},
        {id:78,pid:75,value:'CODE_TS',name:'商品编号',type:'field'},
        {id:79,pid:75,value:'G_NAME',name:'商品名称',type:'field'},
        {id:80,pid:75,value:'G_MODEL',name:'商品规格、型号',type:'field'},
        {id:81,pid:75,value:'ORIGIN_COUNTRY',name:'产销国',type:'field'},
        {id:82,pid:75,value:'CONTR_ITEM',name:'合同商品项序号',type:'field'},
        {id:83,pid:75,value:'TRADE_CURR',name:'成交币制',type:'field'},
        {id:84,pid:75,value:'EXCHANGE_RATE',name:'成交币制汇率',type:'field'},
        {id:85,pid:75,value:'DECL_PRICE',name:'申报单价',type:'field'},
        {id:86,pid:75,value:'DECL_TOTAL',name:'申报总价',type:'field'},
        {id:87,pid:75,value:'USE_TO',name:'用途',type:'field'},
        {id:88,pid:75,value:'DUTY_MODE',name:'征减免税方式',type:'field'},
        {id:89,pid:75,value:'G_QTY',name:'申报数量',type:'field'},
        {id:90,pid:75,value:'G_UNIT',name:'申报计量单位',type:'field'},
        {id:91,pid:75,value:'QTY_1',name:'第一（法定）数量',type:'field'},
        {id:92,pid:75,value:'UNIT_1',name:'第一(法定)计量单位',type:'field'},
        {id:93,pid:75,value:'QTY_2',name:'第二数量',type:'field'},
        {id:94,pid:75,value:'UNIT_2',name:'第二计量单位',type:'field'},
        {id:95,pid:75,value:'TRADE_TOTAL',name:'成交总价',type:'field'},
        {id:96,pid:75,value:'RMB_PRICE',name:'统计人民币价',type:'field'},
        {id:97,pid:75,value:'USD_PRICE',name:'统计美元价',type:'field'},
        {id:98,pid:75,value:'DUTY_VALUE',name:'关税完税价',type:'field'},
        {id:99,pid:75,value:'G_PROCESS_MARK',name:'商品项处理标记',type:'field'},
        {id:100,pid:75,value:'WORK_USD',name:'工缴费(美元)',type:'field'},
        {id:101,pid:75,value:'CLASS_MARK',name:'归类标志',type:'field'},
        {id:102,pid:75,value:'G_CERT_FLAG',name:'每项商品需要监管证件',type:'field'},
        {id:103,pid:75,value:'TARIFF_MARK',name:'征税要求标志',type:'field'},
        {id:104,pid:75,value:'DUTY_TYPE',name:'关税计征标准',type:'field'},
        {id:105,pid:75,value:'REAL_DUTY',name:'实征关税额',type:'field'},
        {id:106,pid:75,value:'DUTY_CUT',name:'减免关税额',type:'field'},
        {id:107,pid:75,value:'DUTY_RATE',name:'实征从价关税率',type:'field'},
        {id:108,pid:75,value:'D_RATE',name:'应征从价关税率',type:'field'},
        {id:109,pid:75,value:'QTY_DUTY_RATE',name:'实征从量关税税率',type:'field'},
        {id:110,pid:75,value:'QTY_D_RATE',name:'应征从量关税税率',type:'field'},
        {id:111,pid:75,value:'TAX_TYPE',name:'增值税计征标准',type:'field'},
        {id:112,pid:75,value:'REAL_TAX',name:'实征增值税额',type:'field'},
        {id:113,pid:75,value:'TAX_CUT',name:'减免增值税额',type:'field'},
        {id:114,pid:75,value:'TAX_RATE',name:'实征从价增值税率',type:'field'},
        {id:115,pid:75,value:'T_RATE',name:'应征从价增值税率',type:'field'},
        {id:116,pid:75,value:'QTY_TAX_RATE',name:'实征从量增值税税率',type:'field'},
        {id:117,pid:75,value:'QTY_T_RATE',name:'应征从量增值税税率',type:'field'},
        {id:118,pid:75,value:'REG_TYPE',name:'消费税计征标准',type:'field'},
        {id:119,pid:75,value:'REAL_REG',name:'实征消费税额',type:'field'},
        {id:120,pid:75,value:'REG_CUT',name:'减免消费税额',type:'field'},
        {id:121,pid:75,value:'REG_RATE',name:'实征从价消费税率',type:'field'},
        {id:122,pid:75,value:'R_RATE',name:'应征从价消费税率',type:'field'},
        {id:123,pid:75,value:'QTY_REG_RATE',name:'实征从量消费税税率',type:'field'},
        {id:124,pid:75,value:'QTY_R_RATE',name:'应征从量消费税税率',type:'field'},
        {id:125,pid:75,value:'OIL_TYPE',name:'燃油税计征标准',type:'field'},
        {id:126,pid:75,value:'REAL_OIL',name:'实征燃油税额',type:'field'},
        {id:127,pid:75,value:'OIL_CUT',name:'减免燃油税额',type:'field'},
        {id:128,pid:75,value:'OIL_RATE',name:'实征从价燃油税税率',type:'field'},
        {id:129,pid:75,value:'O_RATE',name:'应征从价燃油税税率',type:'field'},
        {id:130,pid:75,value:'QTY_OIL_RATE',name:'应征从量燃油税税率',type:'field'},
        {id:131,pid:75,value:'QTY_O_RATE',name:'实征从量燃油税税率',type:'field'},
        {id:132,pid:75,value:'ANTI_TYPE',name:'反倾销税计征标准',type:'field'},
        {id:133,pid:75,value:'REAL_ANTI',name:'实征反倾销税额',type:'field'},
        {id:134,pid:75,value:'ANTI_CUT',name:'减免反倾销税额',type:'field'},
        {id:135,pid:75,value:'ANTI_RATE',name:'实征从价反倾销税税率',type:'field'},
        {id:136,pid:75,value:'A_RATE',name:'应征从价反倾销税税率',type:'field'},
        {id:137,pid:75,value:'QTY_ANTI_RATE',name:'实征从量反倾销税税率',type:'field'},
        {id:138,pid:75,value:'QTY_A_RATE',name:'应征从量反倾销税税率',type:'field'},
        {id:139,pid:75,value:'PRDT_NO',name:'加工成品版本号',type:'field'},
        {id:140,pid:75,value:'GOODS_ID',name:'加工料件/成品货号',type:'field'},
        {id:141,pid:75,value:'DECL_CODE_TS',name:'企业申报税号',type:'field'},
        {id:142,pid:75,value:'AGREEMENT_ID',name:'协定编号',type:'field'},
        {id:143,pid:75,value:'RSV1_TYPE',name:'征税标准',type:'field'},
        {id:144,pid:75,value:'REAL_RSV1',name:'实征税款',type:'field'},
        {id:145,pid:75,value:'RSV1_CUT',name:'减免税款',type:'field'},
        {id:146,pid:75,value:'RSV1_RATE',name:'实征从价税率',type:'field'},
        {id:147,pid:75,value:'R1_RATE',name:'应征从价税率',type:'field'},
        {id:148,pid:75,value:'QTY_RSV1_RATE',name:'实征从量税率',type:'field'},
        {id:149,pid:75,value:'QTY_R1_RATE',name:'应征从量税率',type:'field'},
        {id:150,pid:75,value:'RSV2_TYPE',name:'征税标准',type:'field'},
        {id:151,pid:75,value:'REAL_RSV2',name:'实征税款',type:'field'},
        {id:152,pid:75,value:'RSV2_CUT',name:'减免税款',type:'field'},
        {id:153,pid:75,value:'RSV2_RATE',name:'实征从价税率',type:'field'},
        {id:154,pid:75,value:'R2_RATE',name:'应征从价税率',type:'field'},
        {id:155,pid:75,value:'QTY_RSV2_RATE',name:'实征从量税率',type:'field'},
        {id:156,pid:75,value:'QTY_R2_RATE',name:'应征从量税率',type:'field'},
        {id:157,pid:1,value:'MANIFEST_HEAD_NEW',name:'新舱单舱单表头',type:'table'},
        {id:158,pid:157,value:'MANIFEST_ID',name:'舱单信息编号',type:'field'},
        {id:159,pid:157,value:'I_E_FLAG',name:'进出口方式',type:'field'},
        {id:160,pid:157,value:'AGENT_CODE',name:'运输工具代理企业代码',type:'field'},
        {id:161,pid:157,value:'TRANSIT_CODE',name:'承运人代码',type:'field'},
        {id:162,pid:157,value:'VOYAGE_NO',name:'航次航班编号',type:'field'},
        {id:163,pid:157,value:'DECL_TRAF_MODE',name:'申报运输方式（只有船运、空运）',type:'field'},
        {id:164,pid:157,value:'TRANSPORT_MODE',name:'运输方式（实际运输方式）',type:'field'},
        {id:165,pid:157,value:'TRANSPORT_ID',name:'运输工具代码',type:'field'},
        {id:166,pid:157,value:'TRANSPORT_NAME',name:'运输工具名称',type:'field'},
        {id:167,pid:157,value:'FIRST_PORT_ID',name:'运输工具抵达关境内第一目的地代码',type:'field'},
        {id:168,pid:157,value:'FIRST_PORT_DATE',name:'运输工具抵达关境内第一目的地时间',type:'field'},
        {id:169,pid:157,value:'MANIFEST_NO',name:'舱单统一编号',type:'field'},
        {id:170,pid:157,value:'RTX_MARK',name:'结关标志',type:'field'},
        {id:171,pid:157,value:'RECV_MSG_DATE',name:'报文接收时间',type:'field'},
        {id:172,pid:157,value:'GEN_DATE',name:'创建时间',type:'field'},
        {id:173,pid:157,value:'GEN_ER',name:'创建人',type:'field'},
        {id:174,pid:157,value:'AUDIT_DATE',name:'审核时间',type:'field'},
        {id:175,pid:157,value:'AUDIT_ER',name:'审核人',type:'field'},
        {id:176,pid:157,value:'REMARK',name:'备注',type:'field'},
        {id:177,pid:1,value:'MANIFEST_LIST_NEW',name:'新舱单提运单表体',type:'table'},
        {id:178,pid:177,value:'MANIFEST_ID',name:'舱单信息编号',type:'field'},
        {id:179,pid:177,value:'BILL_NO',name:'提运单号',type:'field'},
        {id:180,pid:177,value:'BILL_TYPE',name:'提运单类型',type:'field'},
        {id:181,pid:177,value:'PARENT_BILL_NO',name:'父提运单号',type:'field'},
        {id:182,pid:177,value:'I_E_FLAG',name:'进出口方式',type:'field'},
        {id:183,pid:177,value:'DECL_TRAF_MODE',name:'运输方式',type:'field'},
        {id:184,pid:177,value:'DECL_NAME',name:'舱单传输人名称',type:'field'},
        {id:185,pid:177,value:'SENDER_CODE',name:'发送方代码',type:'field'},
        {id:186,pid:177,value:'VOLUME',name:'货物体积',type:'field'},
        {id:187,pid:177,value:'VOLUME_UNIT',name:'体积单位',type:'field'},
        {id:188,pid:177,value:'LOAD_CODE',name:'装货地代码',type:'field'},
        {id:189,pid:177,value:'LOAD_DATE',name:'货物装载运输工具时间',type:'field'},
        {id:190,pid:177,value:'UNLOAD_CODE',name:'卸货地代码',type:'field'},
        {id:191,pid:177,value:'UNLOAD_DATE',name:'到达卸货地日期',type:'field'},
        {id:192,pid:177,value:'TRN_PLACE_CODE',name:'中转地点代码',type:'field'},
        {id:193,pid:177,value:'OWNER_PLACE_CODE',name:'收货地点代码',type:'field'},
        {id:194,pid:177,value:'OWNER_PLACE_NAME',name:'收货地点名称',type:'field'},
        {id:195,pid:177,value:'DESTINATION_CODE',name:'中转目的地代码',type:'field'},
        {id:196,pid:177,value:'PASS_COUNTRY_CODE',name:'途经的国家代码',type:'field'},
        {id:197,pid:177,value:'CONSIGN_PLACE_CODE',name:'货物托运的地点或者国家代码',type:'field'},
        {id:198,pid:177,value:'CHANGE_REASON',name:'更改原因代码',type:'field'},
        {id:199,pid:177,value:'CUSTOMS_STATE_CODE',name:'货物海关状态代码',type:'field'},
        {id:200,pid:177,value:'DECL_TRANSIT_DATE',name:'运输工具启运日期和时间',type:'field'},
        {id:201,pid:177,value:'BATCH_MARK',name:'承运人货物分批到/发货标识',type:'field'},
        {id:202,pid:177,value:'FEE_CODE',name:'运费支付方法代码',type:'field'},
        {id:203,pid:177,value:'WRAP_TYPE',name:'包装种类代码',type:'field'},
        {id:204,pid:177,value:'PACK_NO',name:'托运货物件数',type:'field'},
        {id:205,pid:177,value:'GROSS_WT',name:'货物总毛重',type:'field'},
        {id:206,pid:177,value:'WEIGHT_UNIT',name:'重量单位',type:'field'},
        {id:207,pid:177,value:'GOODS_PRICE',name:'托运货物价值',type:'field'},
        {id:208,pid:177,value:'CURR_CODE',name:'金额类型代码',type:'field'},
        {id:209,pid:177,value:'FORWARD_FORM_TYPE',name:'前一海关单证类型代码',type:'field'},
        {id:210,pid:177,value:'FORWARD_FORM_ID',name:'前一海关单证号',type:'field'},
        {id:211,pid:177,value:'FEE_CONDITION',name:'运输条款代码',type:'field'},
        {id:212,pid:177,value:'DOCK_ORDER_CODE',name:'码头作业指令代码',type:'field'},
        {id:213,pid:177,value:'CUSTOMS_CODE',name:'所属海关代码',type:'field'},
        {id:214,pid:177,value:'RECV_MSG_DATE',name:'报文接受时间',type:'field'},
        {id:215,pid:177,value:'PRE_TRANSIT_DATE',name:'预报启运时间',type:'field'},
        {id:216,pid:177,value:'PRE_ARRIVE_DATE',name:'预报抵运时间',type:'field'},
        {id:217,pid:177,value:'REAL_TRANSIT_DATE',name:'确报启运时间',type:'field'},
        {id:218,pid:177,value:'REAL_ARRIVE_DATE',name:'确报抵运时间',type:'field'},
        {id:219,pid:177,value:'GEN_DATE',name:'创建时间',type:'field'},
        {id:220,pid:177,value:'GEN_ER',name:'创建人',type:'field'},
        {id:221,pid:177,value:'AUDIT_DATE',name:'审核时间',type:'field'},
        {id:222,pid:177,value:'AUDIT_ER',name:'审核人',type:'field'},
        {id:223,pid:177,value:'REMARK',name:'备注',type:'field'},
        {id:224,pid:177,value:'EXIT_CUSTOMS_CODE',name:'境外离境地海关代码',type:'field'}];
        
        //初始化窗口控制
        $scope.resultFull = false;
        $scope.searchFull = false;
        $scope.filterFull = false;
        $scope.resizeFrame = function(str){
            if(str == "result"){
                $scope.resultFull = !$scope.resultFull;
            }else if(str == "search"){
                $scope.searchFull = !$scope.searchFull;
            }else{
                $scope.filterFull = !$scope.filterFull;
            }
        }

        //初始化列表树
        $scope.myData = generatTree($scope.loadData);
        console.log($scope.myData);
        
        $scope.tableGroup = [];
        $scope.fileds = [];
        $scope.resultGroup = [];
        $scope.searchGroup = [];
        $scope.filterGroup = [];
        $scope.onDropTable = function(data,evt){
            var temp = {};
            if(data.level == 2){
                temp = data;
                for(var i = 0; i < $scope.tableGroup.length; i++){
                    if(temp.branch.id == $scope.tableGroup[i].branch.id){
                        return  false;
                    }
                }
                for(var i = 0; i < $scope.myData[0].children.length; i++){
                    if($scope.myData[0].children[i].id == data.branch.id){
                        temp.children = $scope.myData[0].children[i].children;
                    }
                }
                $scope.tableGroup.push(temp);
            }
            
        }
        $scope.onDropResult = function(data,evt){
            var temp = {};
            
            if(data.level == 3){
                temp = data;
                for(var i = 0; i < $scope.myData[0].children.length; i++){
                    if($scope.myData[0].children[i].id == data.branch.pid){
                        temp.parent = $scope.myData[0].children[i].children;
                    }
                }
                $scope.resultGroup.push(temp);
                
            }
        }
        $scope.onDropSearch = function(data,evt){
            var temp = {};
            
            if(data.level == 3){
                temp = data;
                for(var i = 0; i < $scope.myData[0].children.length; i++){
                    if($scope.myData[0].children[i].id == data.branch.pid){
                        temp.parent = $scope.myData[0].children[i].children;
                    }
                }
                $scope.searchGroup.push(temp);
            }
            
        }
        $scope.onDropFilter = function(data,evt){
            var temp = {};
           
            if(data.level == 3){
                temp = data;
                for(var i = 0; i < $scope.myData[0].children.length; i++){
                    if($scope.myData[0].children[i].id == data.branch.pid){
                        temp.parent = $scope.myData[0].children[i].children;
                    }
                }
                $scope.filterGroup.push(temp);
            }
        }

        //初始化弹出框
        $scope.model = {};
            //初始化表格循环
            $scope.generatTable = function(arr){
                var result = [];
                if(angular.isArray(arr)){
                    for(var i = 0; i < arr.length; i++){
                        var temp = {};
                        temp.id = arr[i].branch.id;
                        temp.children = arr[i].children;
                        temp.key = arr[i].branch.name;
                        temp.value = arr[i].branch.value;
                        result.push(temp);
                    }
                    return result;
                }else{
                    return 0;
                }
                
            }
            //初始化字段循环
            $scope.generatFileds = function(){
                
            }
            
        $scope.showModel = function(str,obj,index){
            if(str == "tableAssociation"){
                if($scope.tableGroup.length == 0 || !$scope.tableGroup){
                    alert("请先从左侧拖拽表到编辑表信息区域");
                }else{
                    
                    $scope.tableSelect = $scope.generatTable($scope.tableGroup);
                    var filedTemp = {};
                    for(var i = 0; i < $scope.tableSelect.length; i++){
                        filedTemp["table"+i] = {
                            "key":"请先选择表",
                            "value":""
                        }
                    }
                    $scope.fileds = [{
                        id:0,
                        fileds:filedTemp
                    }];
                    $scope.model.title = "添加表关联";
                    $scope.model.table = true;
                    $scope.model.filed = false;
                    $('#myModal').modal();
                }
                
            }else if(str == "resultData"){
                $scope.modelFiled = {};
                angular.copy(obj,$scope.modelFiled);
                $scope.model.title = "编辑字段";
                $scope.model.table = false;
                $scope.model.filed = true;
                $('#myModal').modal();
            }
        }
        //验证序列化的表单是否完整
        $scope.checkTableComplete = function(arr){
            for(var i = 0; i < arr.length; i ++){
                if(arr[i].name == "" || arr[i].value == ""){
                    return 0;
                }
            }
            return true;
        }
        //保存表关联信息
        $scope.tableJoinInfo = {};
        $scope.tableSave = function(){
            var array = $("#table").serializeArray();
            if($scope.checkTableComplete(array)){
                for(var i = 0; i < array.length; i++){
                    console.log(array[i]);
                }
            }else{
                alert("请检查并填写完整的表单");
            }
        }
        //保存字段编辑数据
        $scope.saveFiled = function(obj){
            console.log(obj);
        }
}]);
