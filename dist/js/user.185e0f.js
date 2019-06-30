(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{591:function(e,t,a){},592:function(e,t,a){},593:function(e,t,a){},689:function(e,t,a){e.exports={default:a(690),__esModule:!0}},690:function(e,t,a){a(691),e.exports=a(13).Object.keys},691:function(e,t,a){var n=a(159),r=a(71);a(692)("keys",function(){return function(e){return r(n(e))}})},692:function(e,t,a){var n=a(37),r=a(13),i=a(70);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",l)}},693:function(e,t,a){"use strict";var n=a(591);a.n(n).a},694:function(e,t,a){"use strict";var n=a(592);a.n(n).a},695:function(e,t,a){"use strict";var n=a(593);a.n(n).a},759:function(e,t,a){"use strict";a.r(t);var n=a(553),r=a.n(n),i=a(80),l=a(572),s=a(533),o=a(689),u=a.n(o),c=a(225),d=a.n(c),f={data:function(){return{isEdit:!1,userInfo:{account:"",name:"",role:"",gender:"",avatar:"",mobilePhone:"",email:""},userInfoReset:{},userInfoBackup:{},rules:{account:[{required:!0,message:"请填写账号",trigger:"blur"},{pattern:/^[a-zA-Z0-9_]{5,10}$/,message:"账号为5到10位的字母、数字或下划线组成",trigger:"blur"}],name:[{required:!0,message:"请填写姓名",trigger:"blur"},{max:6,message:"姓名长度不能超过6个字",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"change"}],mobilePhone:[{pattern:/^1[345789]\d{9}$/,message:"手机号码格式不正确",trigger:"blur"}],email:[{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},roleList:[{value:"管理员",label:"管理员"},{value:"编辑",label:"编辑"},{value:"普通会员",label:"普通会员"},{value:"高级会员",label:"高级会员"},{value:"普通用户",label:"普通用户"}],submitLoading:!1,getDetailLoading:!1,dialogVisible:!1,title:"编辑用户"}},created:function(){var e=this;s.a.$on("userDetail",function(t){d()(e.userInfoReset,e.userInfo),d()(e.userInfoBackup,e.userInfo),t?(e.isEdit=!0,e.title="编辑用户",e.getUserDetail(t)):(e.isEdit=!1,e.title="创建用户"),e.dialogVisible=!0})},methods:{getUserDetail:function(e){var t=this;this.getDetailLoading=!0,Object(l.a)({id:e}).then(function(e){t.userInfo=e.data.userDetail,d()(t.userInfoBackup,t.userInfo),t.getDetailLoading=!1}).catch(function(e){t.getDetailLoading=!1})},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type,n=e.size/1024/1024<2;return t||a||this.$message.error("上传头像图片只能是jpg或png格式!"),n||this.$message.error("上传头像图片大小不能超过 2MB!"),(t||a)&&n},handleAvatarSuccess:function(e,t){this.userInfo.avatar=URL.createObjectURL(t.raw)},submit:function(){var e=this;this.submitLoading=!0,this.$refs.userInfo.validate(function(t){t?(e.$message.success("提交成功"),e.submitLoading=!1,e.isEdit?(e.dialogVisible=!1,e.resetForm()):e.resetForm()):e.submitLoading=!1})},handleClose:function(){var e=this,t=this.userInfo,a=this.userInfoBackup;u()(t).every(function(e){return t[e]===a[e]})?(this.dialogVisible=!1,this.resetForm()):this.$confirm("信息修改后未提交，确认关闭？","提示",{type:"warning"}).then(function(){e.dialogVisible=!1,e.resetForm()}).catch(function(){})},resetForm:function(){d()(this.userInfo,this.userInfoReset),this.$refs.userInfo.resetFields()}}},m=(a(693),a(694),a(79)),p=Object(m.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"before-close":e.handleClose,width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.getDetailLoading,expression:"getDetailLoading"}],ref:"userInfo",attrs:{model:e.userInfo,rules:e.rules,"label-width":"70px","label-position":"left"}},[a("el-form-item",{attrs:{label:"账号：",prop:"account"}},[a("el-input",{attrs:{placeholder:"请填写账号",clearable:"",disabled:e.isEdit},model:{value:e.userInfo.account,callback:function(t){e.$set(e.userInfo,"account",t)},expression:"userInfo.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[a("el-input",{attrs:{placeholder:"请填写用户姓名",clearable:""},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色：",prop:"role"}},[a("el-select",{attrs:{placeholder:"请选择用户角色"},model:{value:e.userInfo.role,callback:function(t){e.$set(e.userInfo,"role",t)},expression:"userInfo.role"}},e._l(e.roleList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"性别："}},[a("el-radio-group",{model:{value:e.userInfo.gender,callback:function(t){e.$set(e.userInfo,"gender",t)},expression:"userInfo.gender"}},[a("el-radio",{attrs:{label:"男"}}),e._v(" "),a("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"头像："}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess}},[e.userInfo.avatar?a("img",{staticClass:"avatar",attrs:{src:e.userInfo.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"手机：",placeholder:"请填写手机号",prop:"mobilePhone"}},[a("el-input",{attrs:{clearable:""},model:{value:e.userInfo.mobilePhone,callback:function(t){e.$set(e.userInfo,"mobilePhone",t)},expression:"userInfo.mobilePhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱：",placeholder:"请填写邮箱地址",prop:"email"}},[a("el-input",{attrs:{clearable:""},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1)],1),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提 交")])],1)],1)},[],!1,null,"8d190d7e",null);p.options.__file="UserDetail.vue";var g={name:"UserList",components:{UserDetail:p.exports,ExportExcel:a(610).a},data:function(){return{userList:[],excelHeader:["序号","姓名","年龄","性别","角色","注册时间","累计消费额(元)"],filterFiled:["index","name","age","gender","role","registerDate","consume"],genderList:[{text:"男",value:"男"},{text:"女",value:"女"}],roleList:[{text:"管理员",value:"管理员"},{text:"编辑",value:"编辑"},{text:"普通会员",value:"普通会员"},{text:"高级会员",value:"高级会员"},{text:"普通用户",value:"普通用户"}],userTableLoading:!1,queryCondition:{name:"",currentPageNum:2,pageSize:20},userAmount:0,multipleSelection:[]}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;this.userTableLoading=!0,Object(l.b)(this.queryCondition).then(function(t){e.userList=t.data.userList.map(function(t,a){return{id:t.id,index:(e.queryCondition.currentPageNum-1)*e.queryCondition.pageSize+a+1,name:t.name,age:t.age,gender:t.gender,role:t.role,registerDate:t.registerDate,consume:t.consume}}),e.userAmount=t.data.userAmount,e.userTableLoading=!1;var a=document.querySelector(".page");Object(i.c)(a,0,15)})},filter:function(e,t,a){return t[a.property]===e},deleteUserBatch:function(){var e=this;if(0===this.multipleSelection.length)this.$message.warning("请勾选要删除的用户！");else{var t=this.multipleSelection.map(function(e){return e.name});this.$confirm("确认删除用户“"+t.join("，")+"”？","提示",{type:"warning"}).then(function(){e.getUserList(),e.$message.success("删除成功！")}).catch(function(){})}},editUser:function(e,t){t||(t={}),s.a.$emit("userDetail",t.id)},deleteUser:function(e,t){var a=this;this.$confirm("确认删除用户“"+t.name+"”？","提示",{type:"warning"}).then(function(){a.getUserList(),a.$message.success("删除成功！")}).catch(function(){})},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.queryCondition.pageSize=e,this.getUserList()},handleCurrentChange:function(e){this.queryCondition.currentPageNum=e,this.getUserList()},transmitData:function(){var e=this.tableHeader;return this.userList.map(function(t){delete t.id;var a=r()(t),n={};return e.forEach(function(t,r){n[e[r]]=a[r]}),n})}}},b=(a(695),Object(m.a)(g,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handle"},[a("div",{staticClass:"fr"},[a("el-button",{staticClass:"handle-item",attrs:{type:"primary",round:""},on:{click:e.editUser}},[e._v("创建用户")]),e._v(" "),a("el-button",{staticClass:"handle-item",attrs:{type:"primary",round:""},on:{click:e.deleteUserBatch}},[e._v("批量删除")]),e._v(" "),a("export-excel",{attrs:{"file-name":"用户列表",header:e.excelHeader,"filter-filed":e.filterFiled,data:e.userList}},[e._v("导出表格")])],1),e._v(" "),a("el-input",{staticClass:"handle-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入用户姓名",clearable:""},model:{value:e.queryCondition.name,callback:function(t){e.$set(e.queryCondition,"name",t)},expression:"queryCondition.name"}}),e._v(" "),a("el-button",{staticClass:"handle-item",attrs:{type:"primary",round:""},on:{click:e.getUserList}},[e._v("搜索用户")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.userTableLoading,expression:"userTableLoading"}],attrs:{data:e.userList,border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"80px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"120px",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别",width:"120px",filters:e.genderList,"filter-method":e.filter,"filter-placement":"bottom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"role",label:"角色",width:"120px",filters:e.roleList,"filter-method":e.filter,"filter-placement":"bottom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"registerDate",label:"注册时间",width:"120px",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"consume",label:"累计消费额(元)",width:"160px",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(a){e.editUser(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:function(a){e.deleteUser(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{total:e.userAmount,"current-page":e.queryCondition.currentPageNum,"page-sizes":[20,50,100,1e3],"page-size":e.queryCondition.pageSize,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"update:currentPage":function(t){e.$set(e.queryCondition,"currentPageNum",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("user-detail")],1)},[],!1,null,"34e6a579",null));b.options.__file="UserList.vue";t.default=b.exports}}]);