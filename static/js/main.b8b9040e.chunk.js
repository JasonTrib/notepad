(this["webpackJsonpreact-notepad"]=this["webpackJsonpreact-notepad"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);n(88);var o=n(0),a=n.n(o),r=n(10),c=n.n(r),i=(n(48),n(11)),s=n(156),l=n(103),d=n(71),b=n.n(d),u=n(70),j=n.n(u),x=n(68),h=n.n(x),f=n(72),p=n.n(f),O=n(73),m=n.n(O),g=n(74),k=n.n(g),v=n(2),C=Object(l.a)({icon:{color:"#424242"}}),N=function(){var e=C();return Object(v.jsx)("div",{children:Object(v.jsx)(h.a,{className:e.icon})})},w=function(){var e=C();return Object(v.jsx)("div",{children:Object(v.jsx)(j.a,{className:e.icon})})},y=function(){var e=C();return Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{className:e.icon})})},S=function(){var e=C();return Object(v.jsx)("div",{children:Object(v.jsx)(p.a,{className:e.icon})})},R=function(){var e=C();return Object(v.jsx)("div",{children:Object(v.jsx)(m.a,{className:e.icon})})},F=function(){var e=C();return Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{className:e.icon})})},D=Object(o.createContext)(),B=function(e){var t="notebookApp.notes",n=Object(o.useState)([]),a=Object(i.a)(n,2),r=a[0],c=a[1],l=Object(o.useState)(r),d=Object(i.a)(l,2),b=d[0],u=d[1],j=Object(o.useState)([]),x=Object(i.a)(j,2),h=x[0],f=x[1],p=Object(o.useState)(""),O=Object(i.a)(p,2),m=O[0],g=O[1],k=Object(o.useState)({open:!1,editNote:null}),C=Object(i.a)(k,2),B=C[0],L=C[1],T=[null,Object(v.jsx)(S,{}),Object(v.jsx)(w,{}),Object(v.jsx)(N,{}),Object(v.jsx)(y,{}),Object(v.jsx)(R,{}),Object(v.jsx)(F,{})];return Object(o.useEffect)((function(){var e,n=JSON.parse(localStorage.getItem(t));if(n)c(n),e=n.map((function(e){return{id:e.id,value:!1}}));else{var o=[{id:Object(s.a)(),title:"lorem ipsum meaning",content:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called "greeking", which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.',date:Date.now(),tag:0,bookmarked:!1},{id:Object(s.a)(),title:"dog breeds",content:"Labrador Retriever\nGerman Shepherd\nGolden Retriever\nBulldog\nGreyhound\nRottweiler\nSiberian Husky\nBoxer\nShiba Inu\nBeagle\nPoodle\nGreat Dane\nDoberman Pinscher",date:Date.now(),tag:0,bookmarked:!1},{id:Object(s.a)(),title:"preparations",content:"-pack clothes\n-water garden plants\n-wash dishes\n-vacuum clean house\n-seal windows\n-spray insecticide\n-pay house rent\n",date:Date.now(),tag:2,bookmarked:!1},{id:Object(s.a)(),title:"grocery list",content:"Fruit/Veg:\n\tlemons, lettuce, garlic, onions, cucumbers, potatoes\nDaisy:\n\tmilk, eggs, cheese\nMeat:\n\tsalmon, beef, bacon\nCondiments:\n\toil, vinegar, jam, ketchup\nOther:\n\tbeans, tomato soup, pasta, yeast, bread buns, sugar, cereal\nBeverages:\n\tcoffee, fruit juice, beer\nHouse:\n\thand soap, shampoo, toothpaste, toilet paper\nMiscellaneous:\n\tplastic wrap, tissues, batteries",date:Date.now(),tag:5,bookmarked:!1}];c(o),e=o.map((function(e){return{id:e.id,value:!1}}))}f(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem(t,JSON.stringify(r))}),[r]),Object(v.jsx)(D.Provider,{value:{notes:r,setNotes:c,notesFiltered:b,setNotesFiltered:u,checkedNotes:h,setCheckedNotes:f,searchTerm:m,setSearchTerm:g,modal:B,setModal:L,taglist:T},children:e.children})},L=D,T=n(18),W=n(5),z=n(142),E=n(147),I=n(157),M=n(146),A=n(144),H=n(143),G=n(159),J=n(145),P=n(153),V=n(158),q=n(41),K=Object(W.a)((function(){return{input:{height:"22px",boxShadow:"1px 2px 4px 0px rgba(0,0,0,.25)",borderRadius:4,position:"relative",backgroundColor:"white",border:"3px solid transparent",fontSize:16,padding:"10px 26px 10px 12px","&:hover":{backgroundColor:"#e6f3ff"},"&:focus":{borderRadius:4,backgroundColor:"#e6f3ff",border:"3px solid #80bdff"}}}}))(V.a),Q=Object(z.a)((function(){return{modalTitleTag:{marginTop:0,marginBottom:10,display:"flex",flexDirection:"row"},titleField:{"&::placeholder":{color:"black",opacity:.4},height:"40px",fontSize:20,textIndent:10,outline:"none",borderRadius:"4px",border:"3px solid transparent","&:hover":{backgroundColor:"#e6f3ff"},"&:focus":{borderColor:"#80bdff",backgroundColor:"#e6f3ff"},width:"60px",flex:"1 1 100%",boxShadow:"1px 2px 4px 0px rgba(0,0,0,.25)"},selectForm:{marginLeft:10,flex:"1 1 100px"},tagSelect:{height:"45px"},contentContainer:{},contentArea:{height:"16em",boxSizing:"border-box",width:"100%",resize:"none",padding:"10px 10px",backgroundColor:"white",boxShadow:"1px 2px 4px 0px rgba(0,0,0,.25)",outline:"none",borderRadius:"4px",border:"3px solid transparent","&:hover":{backgroundColor:"#e6f3ff"},"&:focus":{borderColor:"#80bdff",backgroundColor:"#e6f3ff"},"&::placeholder":{color:"rgba(0,0,0,.4)"}},headerFooter:{background:"linear-gradient(135deg, rgba(161,201,190,1) 0%, rgba(108,175,156,1) 100%)"},btnDialogContainer:{width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around"},btnCancel:{backgroundColor:"rgba(255,255,255, 0.3)",flex:"1 1 50px","&:hover":{backgroundColor:"#dbadad"}},btnDone:{backgroundColor:"rgba(255,255,255, 0.3)",flex:"1 1 50px","&:hover":{backgroundColor:"#99d192"}}}})),U=function(){var e=Q(),t=Object(o.useRef)(null),n=Object(o.useState)(null),a=Object(i.a)(n,2),r=a[0],c=a[1],l=Object(o.useState)(null),d=Object(i.a)(l,2),b=d[0],u=d[1],j=Object(o.useState)(0),x=Object(i.a)(j,2),h=x[0],f=x[1],p=Object(o.useRef)(),O=Object(o.useRef)(),m=Object(o.useContext)(L),g=m.notes,k=m.setNotes,C=m.setCheckedNotes,N=m.modal,w=m.setModal,y=m.taglist;Object(o.useEffect)((function(){if(N.open){var e=t.current;null!==e&&e.focus(),N.editNote?(c(N.editNote.title),u(N.editNote.content),f(N.editNote.tag)):f(0)}}),[N]);var S=function(){c(null),u(null),w({open:!1,editNote:N.editNote})};return Object(v.jsx)("div",{children:Object(v.jsxs)(I.a,{fullWidth:!0,maxWidth:"sm",className:e.modal,open:N.open,onClose:S,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",children:[Object(v.jsx)(H.a,{id:"dialog-title",style:{paddingTop:"10px",paddingBottom:"10px",display:"flex",justifyContent:"center"},className:e.headerFooter,children:Object(v.jsx)(q.a,{style:{fontSize:"30px",color:"#353138",fontWeight:"600"},children:N.editNote?"Edit note":"New note"})}),Object(v.jsxs)(A.a,{style:{backgroundColor:"#e9f2ef"},children:[Object(v.jsxs)("div",{className:e.modalTitleTag,children:[Object(v.jsx)("input",{type:"text",autoFocus:!N.editNote,defaultValue:r,ref:p,placeholder:"Cookie recipe",className:e.titleField}),Object(v.jsx)(J.a,{className:e.selectForm,children:Object(v.jsx)(P.a,{labelId:"select-tag",id:"select",value:h,onChange:function(e){f(e.target.value)},input:Object(v.jsx)(K,{}),children:y.map((function(e,t){return Object(v.jsx)(G.a,{value:t,children:e||"None"},Object(s.a)())}))})})]}),Object(v.jsx)("div",{className:"contentContainer",children:Object(v.jsx)("textarea",{className:e.contentArea,ref:O,autoFocus:N.editNote,defaultValue:b,placeholder:"-Eggs\r\n-Milk\r\n-Baking soda\r\n-Flour\r\n-Butter\r\n-Sugar\r\n-Chocolate"})})]}),Object(v.jsx)(M.a,{className:e.headerFooter,children:Object(v.jsxs)("div",{className:e.btnDialogContainer,children:[Object(v.jsx)(E.a,{className:e.btnCancel,onClick:S,color:"primary",children:Object(v.jsx)(q.a,{style:{fontSize:"16px",color:"#353138",fontWeight:"400"},children:"Cancel"})}),Object(v.jsx)("div",{style:{width:"8px",height:"100%"}}),Object(v.jsx)(E.a,{className:e.btnDone,onClick:N.editNote?function(){var e=g.map((function(e){return e.id===N.editNote.id?{id:e.id,title:p.current.value.trim()?p.current.value.trim():"(no title)",content:O.current.value.trim(),date:e.date,tag:h,bookmarked:e.bookmarked}:e}));k(e),S()}:function(e){var t=Object(s.a)();k((function(e){return[].concat(Object(T.a)(e),[{id:t,title:p.current.value.trim()?p.current.value.trim():"(no title)",content:O.current.value.trim(),date:Date.now(),tag:h,bookmarked:!1}])})),C((function(e){return[].concat(Object(T.a)(e),[{id:t,value:!1}])})),S()},color:"primary",children:Object(v.jsx)(q.a,{style:{fontSize:"16px",color:"#353138",fontWeight:"400"},children:"Done"})})]})})]})})},X=n(148),Y=n(155),Z=n(75),$=n.n(Z),_=n(76),ee=n.n(_),te=function(e){var t=e.note,n=e.selected,a=Object(o.useContext)(L),r=a.checkedNotes,c=a.setCheckedNotes;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(X.a,{style:{marginLeft:"4px"},control:Object(v.jsx)(Y.a,{onChange:function(e){var n=r.map((function(n){return n.id===t.id?{id:n.id,value:e.target.checked}:n}));c(n)},checked:n,name:t.id,inputProps:{"aria-label":"secondary checkbox"},icon:Object(v.jsx)($.a,{}),checkedIcon:Object(v.jsx)(ee.a,{})})})})},ne=n(77),oe=n.n(ne),ae=n(78),re=n.n(ae),ce=Object(z.a)((function(){return{btnNote2:{border:0,borderTopLeftRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:0,borderTopRightRadius:0,textTransform:"none",flex:"1 1 50px","&:hover":{backgroundColor:"#cce7ff"}},btnBM:{color:"#424242",backgroundColor:"white",borderRadius:"19px",borderTopLeftRadius:0,borderBottomLeftRadius:0,"&:hover":{backgroundColor:"#cce7ff"},borderStyle:"solid",borderColor:"rgba(0,0,0,0.25)",borderLeftWidth:1,paddingLeft:4,maxWidth:50}}})),ie=function(e){var t=e.note,n=e.selected,a=ce(),r=Object(o.useContext)(L),c=r.notes,i=r.setNotes,s=r.setModal,l=r.taglist;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"note-container",children:[Object(v.jsx)(te,{note:t,selected:n}),Object(v.jsxs)("div",{className:"note-btn-wrapper",children:[Object(v.jsxs)(E.a,{className:a.btnNote2,onClick:function(){s({open:!0,editNote:t})},children:[Object(v.jsx)(q.a,{style:{position:"absolute",left:14},children:t.title}),Object(v.jsx)("div",{style:{position:"absolute",right:0,marginRight:20,maxHeight:24},children:l[t.tag]})]}),Object(v.jsx)(E.a,{className:a.btnBM,"aria-label":"bookmark",onClick:function(){var e=c.map((function(e){return e===t&&(e.bookmarked=!t.bookmarked),e}));i(e)},children:t.bookmarked?Object(v.jsx)(oe.a,{}):Object(v.jsx)(re.a,{})})]})]})})},se=n(149),le=function(){var e=Object(o.useContext)(L),t=e.checkedNotes,n=e.notesFiltered,r=e.searchTerm,c=n.filter((function(e){return""===r||e.title.toLowerCase().includes(r.toLowerCase())||e.content.toLowerCase().includes(r.toLowerCase())?e:null})).map((function(e){return Object(v.jsxs)(a.a.Fragment,{children:[Object(v.jsx)(ie,{note:e,selected:!!t.filter((function(t){return t.id===e.id})).map((function(e){return e.value}))[0]},e.id),Object(v.jsx)(se.a,{})]},Object(s.a)())}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"notes-container",children:0!==c.length?c:Object(v.jsx)("i",{className:"note-container",children:"No notes found"})})})},de=n(46),be=n.n(de),ue=n(80),je=n.n(ue),xe=n(59),he=n.n(xe),fe=n(60),pe=n.n(fe),Oe=n(54),me=n.n(Oe),ge=n(79),ke=n.n(ge),ve=n(53),Ce=n.n(ve),Ne=Object(z.a)((function(e){return{btn:{backgroundColor:"#424242",color:"white",height:"50px",borderRadius:0,"&:hover":{backgroundColor:"#000000"},flex:" 1 1 80px",borderTop:"5px solid transparent",borderBottom:"5px solid transparent",transitionDuration:"0.1s"},btnDel:{backgroundColor:"#ff2b2b",color:"white",height:"50px",borderRadius:0,"&:hover":{backgroundColor:"#d11313"},flex:" 1 1 80px"},btnDelDisabled:{backgroundColor:"#ff8080",color:"white","&:hover":{backgroundColor:"#ff8080",color:"white"}}}})),we=function(){var e=Ne(),t=Object(o.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)(null),s=Object(i.a)(c,2),l=s[0],d=s[1],b=Object(o.useState)(!1),u=Object(i.a)(b,2),j=u[0],x=u[1],h=Object(o.useState)(!1),f=Object(i.a)(h,2),p=f[0],O=f[1],m=Object(o.useContext)(L),g=m.notes,k=m.setNotes,C=m.setNotesFiltered,N=m.checkedNotes,w=m.setCheckedNotes;Object(o.useEffect)((function(){var e=0!==N.filter((function(e){return e.value})).length;O(e)}),[N]);var y=function(e){"text"===e?d(l&&"asc"===l?"desc":"asc"):"date"===e&&d(l&&"new"===l?"old":"new")};return Object(o.useEffect)((function(){var e=Object(T.a)(g);e.sort((function(e,t){return"asc"===l?e.title.localeCompare(t.title):"desc"===l?-1*e.title.localeCompare(t.title):"new"===l?e.date<=t.date?1:-1:e.date<=t.date?-1:1})),r(e)}),[g,l]),Object(o.useEffect)((function(){var e=a?a.filter((function(e){return!j||e.bookmarked})):g;C(e)}),[a,j]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"toolbar-container",children:[Object(v.jsxs)(E.a,{className:be()(e.btn,"tooltip"),"aria-label":"sort by text",onClick:function(){return y("text")},style:"asc"===l||"desc"===l?{borderBottom:"5px solid #d900ff"}:null,children:["asc"===l||"desc"===l?"asc"===l?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Ce.a,{}),Object(v.jsx)(he.a,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Ce.a,{}),Object(v.jsx)(pe.a,{})]}):Object(v.jsx)(Ce.a,{}),Object(v.jsx)("span",{className:"tooltiptext",children:"sort by title"})]}),Object(v.jsxs)(E.a,{className:be()(e.btn,"tooltip"),"aria-label":"sort by date",onClick:function(){return y("date")},style:"new"===l||"old"===l?{borderBottom:"5px solid #d900ff"}:null,children:["new"===l||"old"===l?"new"===l?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(me.a,{}),Object(v.jsx)(he.a,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(me.a,{}),Object(v.jsx)(pe.a,{})]}):Object(v.jsx)(me.a,{}),Object(v.jsx)("span",{className:"tooltiptext",children:"sort by date"})]}),Object(v.jsxs)(E.a,{className:be()(e.btn,"tooltip"),"aria-label":"show bookmarked",onClick:function(){x(!j)},style:j?{borderBottom:"5px solid #ffc800"}:null,children:[Object(v.jsx)(ke.a,{}),Object(v.jsx)("span",{className:"tooltiptext",children:j?"hide bookmarked":"show bookmarked"})]}),Object(v.jsx)(E.a,{"aria-label":"delete selected notes",disableRipple:!p,className:be()(e.btnDel,p?null:e.btnDelDisabled),onClick:function(){var e=N.map((function(e){return e.value?e.id:null})).filter((function(e){return e})),t=g.filter((function(t){return!e.includes(t.id)})),n=t.map((function(e){return{id:e.id,value:!1}}));k(t),w(n)},children:Object(v.jsx)(je.a,{})})]})})},ye=n(81),Se=n.n(ye),Re=Object(z.a)((function(){return{searchField:{verticalAlign:"middle",lineHeight:"48px",flex:" 1 1 75%",backgroundColor:"#ffffff",borderRadius:0,borderTopLeftRadius:25,borderBottomLeftRadius:25,textIndent:48,borderStyle:"solid",borderWidth:1,borderColor:"transparent",minWidth:50,height:48,fontSize:20,paddingRight:"5%",maxLength:10,boxShadow:"1px 2px 10px rgba(0,0,0,0.25)","&:hover":{backgroundColor:"#e3eeff"},"&:focus":{backgroundColor:"#e3eeff",borderColor:"transparent",outline:"none"}},btnAdd:{backgroundColor:"#1d8b8b",color:"white",borderRadius:"0px",minWidth:"80px",flex:" 1 1 25%",boxShadow:"1px 2px 10px rgba(0,0,0,0.25)","&:hover":{backgroundColor:"#006969"}}}})),Fe=function(){var e=Re(),t=Object(o.useContext)(L),n=t.setSearchTerm,a=t.setModal;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"search-add-container",children:[Object(v.jsx)("div",{style:{position:"absolute",left:30,maxHeight:24,textAlign:"center",verticalAlign:"middle",lineHeight:"48px",fontSize:20,pointerEvents:"none"},children:"\ud83d\udd0d"}),Object(v.jsx)("input",{className:e.searchField,type:"search",placeholder:"Search notes",onChange:function(e){n(e.target.value.trim())}}),Object(v.jsxs)(E.a,{className:e.btnAdd,"aria-label":"new note",onClick:function(){a({open:!0,editNote:null})},children:[Object(v.jsx)(Se.a,{}),Object(v.jsx)(q.a,{children:"Note"})]})]})})},De=n(150),Be=n(151),Le=n(152),Te=Object(z.a)((function(){return{root:{position:"absolute",top:"4%",width:"100%",maxWidth:768,backgroundColor:"#fff7ba","@media (max-width:768px)":{top:0},boxShadow:"0px 2px 20px rgba(0,0,0,0.4)"},header:{backgroundColor:"white"},headerText:{fontWeight:700,fontSize:40,color:"#424242"}}}));var We=function(){var e=Te();return Object(v.jsxs)(De.a,{className:e.root,children:[Object(v.jsx)(Be.a,{title:Object(v.jsx)(q.a,{variant:"h4",className:e.headerText,children:"Notepad"}),className:e.header}),Object(v.jsx)(se.a,{}),Object(v.jsx)(Le.a,{children:Object(v.jsx)(we,{})}),Object(v.jsx)(se.a,{}),Object(v.jsx)(Le.a,{children:Object(v.jsx)(Fe,{})}),Object(v.jsx)(se.a,{}),Object(v.jsx)(Le.a,{children:Object(v.jsx)(le,{})})]})},ze=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(B,{children:[Object(v.jsx)(We,{}),Object(v.jsx)(U,{})]})})};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(ze,{})}),document.getElementById("root"))},48:function(e,t,n){},88:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.b8b9040e.chunk.js.map