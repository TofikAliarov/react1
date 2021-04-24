(this.webpackJsonpreact_1=this.webpackJsonpreact_1||[]).push([[0],{24:function(e,t,a){e.exports={main:"Catalog_main__X8E-d",input:"Catalog_input__38pa4",sortBtn:"Catalog_sortBtn__2pPBx"}},4:function(e,t,a){e.exports={main:"Registration_main__3P6UG",title:"Registration_title__2e9_m",input:"Registration_input__2ePL_",label:"Registration_label__2Fn1F",form:"Registration_form__1_iV2",error:"Registration_error__3YxLS",button:"Registration_button__1-EAa",modalBodyButtonclose:"Registration_modalBodyButtonclose__VCUOb"}},44:function(e,t,a){e.exports={modal:"modalBackDrop_modal__vLlVR"}},48:function(e,t,a){e.exports={button:"App_button__XMJD4"}},82:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(14),l=a.n(r),o=a(22),i=a(4),c=a.n(i),m=a(33),d=a(42),u=a(43),b=a(51),j=a(50),h=a(44),p=a.n(h),v=a(2),O=function(e){return function(t){Object(b.a)(n,t);var a=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={isOpen:!1},e.closeModal=function(){e.props.close()},e.closeModalKeydown=function(t){"Escape"===t.code&&e.closeModal()},e.closeModalOverlay=function(t){"modal"===t.target.dataset.type&&e.closeModal()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({isOpen:!0}),window.addEventListener("keydown",this.closeModalKeydown),document.addEventListener("click",this.closeModalOverlay),document.styleSheets.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalKeydown),document.removeEventListener("click",this.closeModalOverlay),document.styleSheets.overflow="auto"}},{key:"render",value:function(){return Object(v.jsx)("div",{"data-type":"modal",className:p.a.modal,children:Object(v.jsx)(e,Object(m.a)(Object(m.a)({},this.props),{},{onClick:this.closeModal}))})}}]),n}(s.a.Component)},f=a(49),x=O((function(e){var t=e.close,a=Object(f.a)({initialValues:{firstName:"",lastName:"",email:""},validate:function(e){var t={};return e.firstName?e.firstName.length>15&&(t.firstName="Must be 15 characters or less"):t.firstName="Required",e.lastName?e.lastName.length>20&&(t.lastName="Must be 20 characters or less"):t.lastName="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(e.password)||(t.password="Need 8 symbols, 1 letter and 1 numb"):t.password="Required",e.birth?/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(e.birth)||(t.birth="dd/mm/yyyy"):t.birth="Required",t},onSubmit:function(e){t()}});return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:c.a.main,children:[Object(v.jsx)("button",{onClick:function(){return t()},className:c.a.modalBodyButtonclose}),Object(v.jsx)("h2",{className:c.a.title,children:"Please, full the register form"}),Object(v.jsxs)("form",{className:c.a.form,onSubmit:a.handleSubmit,children:[Object(v.jsx)("label",{className:c.a.label,htmlFor:"firstName",children:"First Name"}),Object(v.jsx)("input",{className:c.a.input,id:"firstName",name:"firstName",type:"text",onChange:a.handleChange,value:a.values.firstName}),a.errors.firstName?Object(v.jsx)("div",{className:c.a.error,children:a.errors.firstName}):null,Object(v.jsx)("label",{className:c.a.label,htmlFor:"lastName",children:"Last Name"}),Object(v.jsx)("input",{className:c.a.input,id:"lastName",name:"lastName",type:"text",onChange:a.handleChange,value:a.values.lastName}),a.errors.lastName?Object(v.jsx)("div",{className:c.a.error,children:a.errors.lastName}):null,Object(v.jsx)("label",{className:c.a.label,htmlFor:"email",children:"Email Address"}),Object(v.jsx)("input",{className:c.a.input,id:"email",name:"email",type:"email",onChange:a.handleChange,value:a.values.email}),a.errors.email?Object(v.jsx)("div",{className:c.a.error,children:a.errors.email}):null,Object(v.jsx)("label",{className:c.a.label,htmlFor:"password",children:"password"}),Object(v.jsx)("input",{className:c.a.input,id:"password",name:"password",type:"password",onChange:a.handleChange,value:a.values.password}),a.errors.password?Object(v.jsx)("div",{className:c.a.error,children:a.errors.password}):null,Object(v.jsx)("label",{className:c.a.label,htmlFor:"birth",children:"birth"}),Object(v.jsx)("input",{className:c.a.input,id:"birth",name:"birth",type:"birth",onChange:a.handleChange,value:a.values.birth}),a.errors.birth?Object(v.jsx)("div",{className:c.a.error,children:a.errors.birth}):null,Object(v.jsx)("button",{className:c.a.button,type:"submit",children:"Submit"})]})]})})})),N=a(32),_=a(47),g=a.n(_),y=a(102),w=a(108),C=a(107),k=a(106),R=a(105),B=a(109),M=Object(y.a)({root:{maxWidth:345,height:850,margin:15}}),S=function(e){var t=e.itemsToDrow,a=M();return Object(v.jsx)(v.Fragment,{children:t.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(w.a,{className:a.root,children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(R.a,{component:"img",alt:"Contemplative Reptile",height:"500px",image:e.image_url,title:"Contemplative Reptile"}),Object(v.jsxs)(k.a,{children:[Object(v.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(v.jsxs)("p",{children:[" attenuation level: ",e.attenuation_level]}),Object(v.jsxs)("p",{children:["abv: ",e.abv]}),Object(v.jsx)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})]})]})})},e.name)}))})},A=a(24),E=a.n(A),F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],c=l[1];return Object(n.useEffect)((function(){g.a.get("https://api.punkapi.com/v2/beers").then((function(e){return s(e.data)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{className:E.a.input,onChange:function(e){return c(e.target.value)}}),Object(v.jsx)("button",{className:E.a.sortBtn,onClick:function(){var e=Object(N.a)(a).sort((function(e,t){return e.abv-t.abv}));s(e),console.log(a),console.log("abv")},children:"sort by abv"}),Object(v.jsx)("button",{className:E.a.sortBtn,onClick:function(){var e=Object(N.a)(a).sort((function(e,t){return e.attenuation_level-t.attenuation_level}));s(e),console.log(a),console.log("attenuation_level")},children:"sort by att. level"}),Object(v.jsx)("div",{className:E.a.main,children:Object(v.jsx)(S,{itemsToDrow:a.filter((function(e){var t=e.name.toLowerCase(),a=i.toLowerCase();if(t.includes(a))return e}))})})]})},L=a(48),q=a.n(L),D=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(v.jsxs)("div",{className:"App",children:[a&&Object(v.jsx)(x,{close:function(){s(!1)}}),Object(v.jsx)("button",{className:q.a.button,onClick:function(){return s(!0)},children:"registration"}),Object(v.jsx)(F,{})]})};l.a.render(Object(v.jsx)(D,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.cf6c194c.chunk.js.map