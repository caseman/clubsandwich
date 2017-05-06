Search.setIndex({docnames:["api_babysit","api_director","api_draw","api_event_dispatcher","api_generators","api_geom","api_tilemap","blt/api_blt_context","blt/api_blt_loop","blt/api_blt_nice_terminal","blt/api_blt_state","blt/index","index","ui/components","ui/concepts","ui/index"],envversion:51,filenames:["api_babysit.rst","api_director.rst","api_draw.rst","api_event_dispatcher.rst","api_generators.rst","api_geom.rst","api_tilemap.rst","blt/api_blt_context.rst","blt/api_blt_loop.rst","blt/api_blt_nice_terminal.rst","blt/api_blt_state.rst","blt/index.rst","index.rst","ui/components.rst","ui/concepts.rst","ui/index.rst"],objects:{"clubsandwich.blt":{context:[7,0,0,"-"],loop:[8,0,0,"-"],nice_terminal:[9,0,0,"-"],state:[10,0,0,"-"]},"clubsandwich.blt.context":{BearLibTerminalContext:[7,1,1,""]},"clubsandwich.blt.context.BearLibTerminalContext":{translate:[7,2,1,""]},"clubsandwich.blt.loop":{BearLibTerminalEventLoop:[8,1,1,""]},"clubsandwich.blt.loop.BearLibTerminalEventLoop":{loop_until_terminal_exits:[8,2,1,""],run:[8,2,1,""],run_loop_iteration:[8,2,1,""],terminal_init:[8,2,1,""],terminal_read:[8,2,1,""],terminal_update:[8,2,1,""]},"clubsandwich.blt.nice_terminal":{terminal:[9,3,1,""]},"clubsandwich.blt.state":{state:[10,3,1,""]},"clubsandwich.director":{DirectorLoop:[1,1,1,""],Scene:[1,1,1,""]},"clubsandwich.director.DirectorLoop":{active_scene:[1,3,1,""],get_initial_scene:[1,2,1,""],pop_scene:[1,2,1,""],pop_to_first_scene:[1,2,1,""],push_scene:[1,2,1,""],quit:[1,2,1,""],replace_scene:[1,2,1,""],scene_stack:[1,3,1,""],terminal_init:[1,2,1,""],terminal_read:[1,2,1,""],terminal_update:[1,2,1,""]},"clubsandwich.director.Scene":{add_terminal_reader:[1,2,1,""],covers_screen:[1,3,1,""],director:[1,3,1,""],enter:[1,2,1,""],exit:[1,2,1,""],remove_terminal_reader:[1,2,1,""],terminal_read:[1,2,1,""],terminal_update:[1,2,1,""]},"clubsandwich.draw":{draw_line_horz:[2,4,1,""],draw_line_vert:[2,4,1,""],draw_rect:[2,4,1,""]},"clubsandwich.event_dispatcher":{Event:[3,1,1,""],EventDispatcher:[3,1,1,""]},"clubsandwich.event_dispatcher.Event":{data:[3,3,1,""],entity:[3,3,1,""],name:[3,3,1,""],stop_propagation:[3,2,1,""]},"clubsandwich.event_dispatcher.EventDispatcher":{add_subscriber:[3,2,1,""],fire:[3,2,1,""],register_event_type:[3,2,1,""],remove_subscriber:[3,2,1,""]},"clubsandwich.generators":{BSPNode:[4,1,1,""],RandomBSPTree:[4,1,1,""]},"clubsandwich.generators.BSPNode":{ancestors:[4,3,1,""],child_a:[4,3,1,""],child_b:[4,3,1,""],data:[4,3,1,""],get_node_at_path:[4,2,1,""],is_horz:[4,3,1,""],leaves:[4,3,1,""],leftmost_leaf:[4,3,1,""],level:[4,3,1,""],max_value:[4,3,1,""],random_leaf:[4,2,1,""],rect:[4,3,1,""],rect_a:[4,3,1,""],rect_b:[4,3,1,""],rightmost_leaf:[4,3,1,""],sibling_pairs:[4,3,1,""],value:[4,3,1,""]},"clubsandwich.generators.RandomBSPTree":{root:[4,3,1,""]},"clubsandwich.geom":{Point:[5,1,1,""],Rect:[5,1,1,""],Size:[5,1,1,""]},"clubsandwich.geom.Point":{diagonal_neighbors:[5,3,1,""],floored:[5,3,1,""],get_closest_point:[5,2,1,""],get_farthest_point:[5,2,1,""],manhattan_distance_to:[5,2,1,""],neighbors:[5,3,1,""],path_L_to:[5,2,1,""],points_bresenham_to:[5,2,1,""],x:[5,3,1,""],y:[5,3,1,""]},"clubsandwich.geom.Rect":{area:[5,3,1,""],center:[5,3,1,""],contains:[5,2,1,""],floored:[5,3,1,""],get_random_point:[5,2,1,""],get_random_rect:[5,2,1,""],height:[5,3,1,""],intersects:[5,2,1,""],moved_by:[5,2,1,""],origin:[5,3,1,""],point_bottom_left:[5,3,1,""],point_bottom_right:[5,3,1,""],point_top_right:[5,3,1,""],points:[5,3,1,""],points_bottom:[5,3,1,""],points_corners:[5,3,1,""],points_left:[5,3,1,""],points_right:[5,3,1,""],points_top:[5,3,1,""],size:[5,3,1,""],width:[5,3,1,""],with_inset:[5,2,1,""],with_origin:[5,2,1,""],with_size:[5,2,1,""],x2:[5,3,1,""],x:[5,3,1,""],y2:[5,3,1,""],y:[5,3,1,""]},"clubsandwich.geom.Size":{height:[5,3,1,""],width:[5,3,1,""]},"clubsandwich.tilemap":{Cell:[6,1,1,""],CellOutOfBoundsError:[6,5,1,""],TileMap:[6,1,1,""]},"clubsandwich.tilemap.Cell":{annotations:[6,3,1,""],debug_character:[6,3,1,""],feature:[6,3,1,""],items:[6,3,1,""],point:[6,3,1,""],terrain:[6,3,1,""]},"clubsandwich.tilemap.TileMap":{cell:[6,2,1,""],cells:[6,3,1,""],contains_point:[6,2,1,""],points_of_interest:[6,3,1,""],size:[6,3,1,""]},"clubsandwich.ui":{ButtonView:[13,1,1,""],CyclingButtonView:[13,1,1,""],FirstResponderContainerView:[14,1,1,""],IntStepperView:[13,1,1,""],LabelView:[13,1,1,""],LayoutOptionValue:[14,1,1,""],RectView:[13,1,1,""],SettingsListView:[13,1,1,""],SingleLineTextInputView:[13,1,1,""],UIScene:[14,1,1,""],View:[14,1,1,""],WindowView:[13,1,1,""]},"clubsandwich.ui.FirstResponderContainerView":{find_next_responder:[14,2,1,""],find_prev_responder:[14,2,1,""],set_first_responder:[14,2,1,""],terminal_read_after_first_responder:[14,2,1,""]},"clubsandwich.ui.LayoutOptions":{bottom:[14,3,1,""],height:[14,3,1,""],left:[14,3,1,""],right:[14,3,1,""],top:[14,3,1,""],width:[14,3,1,""]},"clubsandwich.ui.SettingsListView":{scroll_fraction:[13,3,1,""]},"clubsandwich.ui.View":{add_subviews:[14,2,1,""],ancestors:[14,3,1,""],bounds:[14,3,1,""],can_become_first_responder:[14,3,1,""],can_resign_first_responder:[14,3,1,""],debug_print:[14,2,1,""],debug_string:[14,3,1,""],descendant_did_become_first_responder:[14,2,1,""],descendant_did_resign_first_responder:[14,2,1,""],did_become_first_responder:[14,2,1,""],did_resign_first_responder:[14,2,1,""],draw:[14,2,1,""],first_responder_container_view:[14,3,1,""],frame:[14,3,1,""],get_ancestor_matching:[14,2,1,""],intrinsic_size:[14,3,1,""],layout_subviews:[14,2,1,""],leftmost_leaf:[14,3,1,""],postorder_traversal:[14,3,1,""],remove_subviews:[14,2,1,""],scene:[14,3,1,""],set_needs_layout:[14,2,1,""],superview:[14,3,1,""],terminal_read:[14,2,1,""]},"clubsandwich.ui.layout_options":{LayoutOptions:[14,1,1,""]},"clubsandwich.ui.layout_options.LayoutOptions":{centered:[14,6,1,""],column_left:[14,6,1,""],column_right:[14,6,1,""],row_bottom:[14,6,1,""],row_top:[14,6,1,""],with_updates:[14,2,1,""]},clubsandwich:{babysit:[0,0,0,"-"],director:[1,0,0,"-"],draw:[2,0,0,"-"],event_dispatcher:[3,0,0,"-"],generators:[4,0,0,"-"],geom:[5,0,0,"-"],tilemap:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:classmethod"},terms:{"case":[0,1,14],"char":[1,8],"class":[1,3,4,5,6,7,8,12,13,14],"default":[13,14],"enum":3,"float":14,"function":[2,4,6,9,12,13],"import":[1,7,8,9,12,14],"int":[2,4,5,7,13,14],"new":[1,8,13,14],"return":[1,4,5,6,8,10,12,14],"short":12,"super":[1,12,14],"switch":[1,12,13,14],"true":[1,4,5,6,8,10,13,14],"try":12,"while":12,And:12,But:12,For:[3,4,6,10,14],One:[6,14],That:14,The:[1,3,4,12,13,15],Then:12,There:14,These:14,Use:14,Using:12,With:0,Yes:13,___:12,____:12,_______:12,__init__:[3,12,14],__main__:[1,12],__name__:[1,12],a_method_on_your_view:14,aaaaaa:13,about:[1,14],abov:1,access:6,act:7,activ:[1,13,14],active_scen:1,actual:1,add:[1,3,6,12],add_subscrib:3,add_subview:14,add_terminal_read:1,added:[0,1],advanc:[13,14],advantag:15,affect:14,after:[1,4,8,14],again:[8,12],algorithm:[5,14],alia:5,align:13,align_horz:13,align_vert:13,all:[1,3,4,5,6,7,10,13,14],allow:3,along:5,alreadi:[4,8,14],also:[12,13],alwai:14,amount:[5,7],ancestor:[4,14],ani:[1,3,5,6,8,9,12,14],annoi:0,annot:6,anoth:[1,6,8,12,14],api:[12,14],append:14,appli:[13,14],appropri:14,arbitrari:[3,4,6],area:[5,6,14],aren:12,arg:[12,13,14],argument:[3,9,13],arithmet:5,around:[8,11,12],arrow:[13,14],art:13,ascii:13,associ:3,assort:2,assum:[4,12],asynchron:12,asyncio:[8,12],attribut:[10,14],author:15,avail:8,avoid:3,awai:14,axes:5,axi:[4,5,14],babysit:12,back:[1,12],background:13,backslash:14,bar:13,base:[13,14],basic:12,basicloop2:[1,12],basicloop:12,bearlibtermin:[1,5,8,9,10,11,12,14],bearlibterminalcontext:[2,7,12,14],bearlibterminaleventloop:[1,8,12],becaus:[1,12,14],becom:[1,13,14],been:[1,4,8,14],befor:[1,3,8,12,14],begin:[1,12],behavior:14,behind:[1,15],being:[10,14],betweeen:9,between:[4,5,12],big:14,binari:4,bkcolor:[7,12],black:13,blt:[2,7,8,9,10,12],blt_state:[10,12],bool:[1,13,14],border:13,both:13,bother:13,bottom:[4,5,13,14],bound:[6,13,14],branch:4,bresenham:5,bridg:7,bsp:4,bspnode:4,bug:0,build:12,button:13,buttonview:[12,13,14],call:[1,3,5,6,7,8,12,13,14],callback:[12,13,14],can:[0,6,7,9,12,13,14],can_become_first_respond:14,can_resign:14,can_resign_first_respond:14,candid:[5,14],care:[1,8],cell:[4,6,13,14],cell_class:6,celloutofboundserror:6,center:[5,12,13,14],cffi:12,chang:[0,12,13,14],charact:[4,13],charactercreationscen:12,check:8,child:[4,14],child_a:4,child_b:4,children:4,choos:13,classmethod:14,clear:14,clear_area:12,clone:12,close:[7,9,12],closest:5,clubsandwich:[0,7,8,9,10,13,14],code:[0,12,15],collect:[1,3,6],color:[7,13,14],color_bg:13,color_fg:13,color_selected_bg:13,color_selected_fg:13,color_unselected_bg:13,color_unselected_fg:13,column:[13,14],column_left:14,column_right:14,com:12,command:[0,12],common:14,complet:4,concept:[12,15],concis:14,config:12,configur:8,conflict:14,constant:[10,14],constrain:14,constructor:13,contain:[4,5,13,14],contains_point:6,content:14,context:[11,12],continu:[0,8],control:[13,14],conveni:[6,14],coordin:[5,6,12],copi:[5,14],core:[12,15],corner:[5,6,14],correspond:14,could:4,cours:12,cover:12,covers_screen:1,crash:0,creat:14,ctrl:[0,12],ctx:[1,2,7,14],current:14,custom:14,cyclingbuttonview:13,data:[3,4,5,6,12],deal:1,debug:[6,15],debug_charact:6,debug_print:14,debug_str:14,decent:12,def:[1,3,8,12,14],defin:[6,14],delta:5,demo:12,depend:14,deriv:14,descend:14,descendant_did_become_first_respond:14,descendant_did_resign_first_respond:14,detail:1,diagonal_neighbor:5,diagram:14,dict:[3,4,6],did_become_first_respond:14,did_resign_first_respond:14,director:[12,14],directorloop:[1,8,12,14],dispatch:3,displai:13,distanc:[5,14],dive:[12,14],divid:4,divis:5,doc:[12,14],doe:[1,4,12],doesn:[12,14],doing:12,don:[1,12,13,14],doubl:[2,13],down:[4,10,12,13],draw:[1,6,12,13,15],draw_line_horz:2,draw_line_vert:2,draw_rect:2,drawn:[1,13,14],dungeon:4,dure:14,each:[1,5,8,14],easi:12,easili:12,edg:5,edit:12,effect:[0,13],egg:12,either:[2,3,4,14],element:13,elif:[1,12],empti:1,enforc:14,enough:[14,15],enter:[1,12,13],entiti:3,error:3,esc:[1,12],escap:12,etc:6,event:[1,3,8,10,14],event_dispatch:12,eventdispatch:3,everi:[0,12],exact:14,exactli:9,exampl:[1,4,6,7,8,9,10,13,14,15],except:[6,7],exclus:14,exit:[0,1,6,8,12],expect:12,express:14,extrem:14,fals:[1,4,6,8,13,14],far:13,farthest:5,featur:[6,8],feel:14,ff0000:12,ffff00:13,ffffff:13,ffi:7,file:12,fill:[4,13,14],find_next_respond:14,find_prev_respond:14,fine:13,fire:[3,8,14],first:[1,4,9,12,13,15],first_responder_container_view:14,firstrespondercontainerview:[13,14],fit:5,flag:12,flame:0,flamegam:0,floor:5,focu:[13,14],follow:14,foo:3,forceabl:14,foreground:13,fork:12,format:3,forward:[1,5,10],found:14,four:5,fps:8,fraction:14,frame:[1,8,12,14],framework:[12,15],free:14,friend:5,from:[1,3,5,7,8,9,12,13,14],full:14,fun:[1,12],func:[13,14],furnitur:6,game:[0,1,4,6,12],gameloop:14,gamescen:[1,12],garbag:1,gener:[5,6,12,14],geom:[6,7,9,12],get:[3,14,15],get_ancestor_match:14,get_closest_point:5,get_farthest_point:5,get_initial_scen:[1,12,14],get_node_at_path:4,get_random_point:5,get_random_rect:5,git:12,github:12,give:6,given:[3,4,5,6,7,13,14],global:[8,12],got:0,graphic:12,great:12,grid:6,half:14,handl:[1,12,14],handler:[3,14],happi:12,has:[1,3,4,8,13,14],have:[1,3,4,6,7,12,14],head:15,heavi:12,height:[5,9,12,14],hello:13,help:[12,14],here:[1,12,14],hierarch:14,hierarchi:15,hint:6,horizont:[2,4,5,13,14],how:[4,13,14],icki:12,iff:[1,4,5,6,10,14],ignor:7,imagin:[0,12],immedi:14,immediali:1,implement:[1,14],includ:[7,14],inclus:14,indent:14,index:6,individu:14,info:14,init:[13,14],initi:[1,4,13,14],initial_valu:13,inner:13,input:[1,8,13,14],inset:[5,13],insid:[5,7,13,14],instal:0,instanc:3,instanti:[1,7,8],instead:[6,7,8,9,13,15],integ:14,intend:[6,13],interact:[1,9],intern:14,intersect:5,intrins:[12,14],intrinsic_s:14,intstepperview:13,irskep:12,is_act:1,is_first_respond:14,is_hidden:14,is_horz:4,isn:14,item:[6,13],iter:[4,5,6,8,12],its:[4,8,12,13,14],itself:[13,14],just:[2,8,12,13,14],keep:[0,1,12],kei:[10,12,13,14],kept:13,keyboard:[1,14],kind:[13,14],kitchen:12,know:14,kwarg:[12,13,14],label:13,label_control_pair:13,labelview:[12,13,14],lambda:[4,12],last:9,latest:0,launch:0,layer:13,layout:[12,15],layout_opt:[12,14],layout_spec:14,layout_subview:14,layoutopt:[12,14],layoutoptionvalu:14,leaf:[4,14],least:1,leav:4,left:[4,5,6,12,13,14],leftmost:14,leftmost_leaf:[4,14],length:2,less:[9,12,14],let:[1,6],level:[4,6],libtcod:12,lightweight:11,like:[3,7,9,13],line:[2,5,13],list:[1,6,13,14],listen:14,local:12,log:14,logic:[1,6],logo:12,look:8,loop:[1,11],loop_until_terminal_exit:8,lot:[0,12],lower:1,made:14,mai:[1,3,5,14],main:[0,1],mainmenuscen:[1,12,14],make:[0,1,8,9,12,14],manag:[1,7,8,14],manhattan:5,manhattan_distance_to:5,mani:4,manual:14,map:[6,10],mark:6,master:12,match:[3,4,14],math:5,matur:12,max:[4,5,13],max_valu:[4,13],may_exit:1,mayb:15,mean:14,menu:1,method:[1,3,6,8,12,14],metric:14,middl:13,might:[8,14],min:13,min_leaf_s:4,min_siz:5,min_valu:13,minimum:[4,5],misc_view:13,mob:6,mockup:15,model:14,modul:1,more:[0,1,3,12,14],most:[1,4,12,14],mostli:14,move:[5,14],moved_bi:5,muahaha:14,much:[9,12],multi:13,multipl:[3,5,7],must:[1,13,14],mydemo:8,name:3,need:[1,3,12,14],neg:13,neighbor:5,nest:7,never:[0,1],new_origin:5,new_siz:5,new_valu:[1,13,14],next:[1,13,14],nice:12,nice_termin:[2,7,11,12],nicetermin:2,node:[4,14],nois:12,non:4,none:[1,3,4,5,12,13,14],note:14,now:[2,12,13],num_1:10,num_:10,number:[5,10,12,13],obj:3,object:[1,2,3,10,12,15],obviou:12,occur:14,off:1,offer:15,offset:7,offset_delta:7,often:0,on_:3,on_foo:3,onc:[3,8],one:[1,3,5,12,13,14],onli:[3,4,5,12,13,14],onto:1,open:[1,7,8,9,12],oper:5,option:[12,13,14],order:12,organ:12,origin:[2,3,5,6,14],other:[5,12,14],otherwis:[3,4,6,12],outsid:6,over:[5,15],overlap:[4,13],overrid:[1,14],overview:12,own:[6,12,13],packag:12,pair:[3,4],paramet:[1,2,3,5,6,8,13,14],parent:4,parser:12,partit:4,pass:[1,3,4,5,6,9],path:[0,5,12],path_l_to:5,pathfind:12,pattern:3,per:8,percentag:14,pip:12,place:6,plai:[1,12],player:[1,3],point:[2,4,5,6,7,9,12,14],point_bottom_left:5,point_bottom_right:5,point_top_right:5,points_bottom:5,points_bresenham_to:5,points_corn:5,points_left:5,points_of_interest:6,points_right:5,points_top:5,pop:1,pop_scen:[1,12,14],pop_to_first_scen:1,popup:1,posit:[6,7,15],possibl:[13,14],postorder_travers:14,predic:14,prefix:10,present:13,press:[1,10,12,13,14],pretti:12,prevent:[3,14],previou:[1,14],print:[1,3,7,12,14],probabl:[1,6,12,14],process:[0,1,12],program:0,prompt:1,properti:14,pull:13,push:1,push_scen:[1,12],put:[7,8,9,13,14],pypi:12,python:[0,12],pythonpath:12,queue:12,quickli:12,quit:[0,1,12,14],rais:6,random:[4,5,12],random_leaf:4,randombsptre:4,randomli:4,randrange_func:4,rare:14,read:[1,5,7,8,9,12,14,15],reader:1,real:[5,8,14,15],realli:[1,12],reason:12,receiv:[1,3,14],recommend:12,rect:[2,4,5,7,9,12,14],rect_a:4,rect_b:4,rectangl:[2,4,5,13],rectangular:6,rectview:13,redrawn:14,refer:[1,12,14],reflect:12,refresh:[1,7,9,12],regardless:[3,8],regist:3,register_event_typ:3,rel:14,relat:[3,7],relaunch:0,releas:14,remov:[1,14],remove_subscrib:3,remove_subview:14,remove_terminal_read:1,render:14,repeat:12,repeatedli:0,replac:1,replace_scen:1,repres:[4,5,6,14],represent:14,request:13,requir:[3,5],resign:14,resiz:12,respect:5,respond:[12,13,15],respons:3,rest:13,result:1,right:[2,4,5,12,13,14],rightmost_leaf:4,roguelik:12,roll:12,room:6,root:[4,14],row:14,row_bottom:[12,14],row_top:[12,14],rstrip:12,run:[0,1,8,12,14],run_loop_iter:8,said:3,same:[3,5,7,14],save:7,scene:[1,15],scene_stack:1,scratch:[12,15],screen:[0,1,12],screenshot:12,scroll:[12,13,14],scroll_fract:13,scrollabl:14,second:[0,8],section:14,see:[0,1,13,14],select:[13,14],self:[1,3,4,5,8,12,13,14],sent:1,separ:7,set:[1,4,6,8,12,13,14],set_first_respond:14,set_needs_layout:14,settingslistview:13,settingsscen:12,setup:1,sever:14,shape:[2,5],share:5,shift:[10,13],shortcut:6,should:[3,8,12,14,15],shouldn:14,show:1,show_set:12,sibl:4,sibling_pair:4,side:[5,14],simpl:[1,3,5,8,12,13],singl:[2,9,13],singlelinetextinputview:13,sink:12,site:12,size:[4,5,6,12,14],slot:6,some:[12,14],someth:14,soon:0,sophist:12,sound:12,sourc:[12,14,15],space:[4,5,6,14],spec:[4,14],special:14,specifi:[5,14],split:4,spring:14,stabil:12,stack:[1,7],stand:15,start:[1,4,8,12,15],state:[1,8,11],statu:14,stdout:14,stop:[1,12],stop_propag:3,store:[1,3,14],str:[1,2,3,8,13],string:[3,4,13,14],structur:[5,6,12],strut:14,stuff:12,style:[2,13],subclass:[1,6,8,14],subscrib:3,subscript:3,subtre:14,subview:[13,14],superclass:8,superview:14,support:[5,12],sure:8,surround:13,syntax:6,system:[3,14],tab:[13,14],take:[0,1,3,4,9,13,14,15],taken:8,target:5,temporarili:15,termin:[1,2,7,8,9,10,13],terminal_init:[1,8],terminal_read:[1,8,12,14],terminal_read_after_first_respond:14,terminal_upd:[1,8,12],terrain:6,text:[12,13,14],than:[0,3,12],thei:[7,14],them:[3,12],thi:[0,1,3,4,5,6,7,8,9,10,13,14],thin:[5,12],thing:12,through:1,tilemap:12,time:[0,3,7,14],tini:12,titl:13,tk_enter:[1,12],tk_escap:[1,12],tk_shift:10,too:12,top:[1,4,5,6,13,14],topmost:1,total:14,track:1,tradeoff:12,translat:[7,12],travers:15,tree:[4,12,15],tri:6,truthi:14,turn:15,tweak:0,twice:14,two:[1,4,9],type:[6,9],typo:3,uikit:14,uiscen:[1,12,14],unbecom:14,unconstrain:14,undefin:14,under:[1,12],understand:12,undocu:15,unless:[1,14],unmodifi:5,unsubscrib:3,until:[0,12,14],updat:[1,8,12,13],update_water_effect:13,upper:14,use:[1,4,6,7,12,13,14],used:[13,14],useful:[12,14],user:[13,14],uses:12,using:[3,8,12,13,14],util:[4,12],val:[1,12,14],valu:[1,3,4,5,6,7,8,12,13,14],value_column_width:13,variabl:14,variou:[6,13],verbos:[9,12],veri:12,vert:6,vertic:[2,4,5,13,14],via:13,view:[8,12,15],virtualenv:12,visibl:[1,13],visit:14,visual:6,wai:[12,14],wait:8,walk:14,wall:6,want:[1,6,8,12,14],water:13,weak:[1,14],web:12,welcom:13,well:3,when:[0,1,3,12,13,14],whenev:[8,12],whether:8,which:[1,12,13],white:13,whose:3,wide:14,width:[4,5,9,12,14],window:[12,13],windowview:13,with_inset:5,with_origin:5,with_siz:5,with_upd:[12,14],within:6,won:5,work:[0,3,5,12,13,14],worri:1,would:4,wrapper:[5,8,11,12],write:[12,14],yet:12,you:[0,1,3,5,6,7,8,9,12,13,14,15],your:[0,1,3,4,5,6,8,12,14,15],yournam:12,yourself:14,zero:13},titles:["<code class=\"docutils literal\"><span class=\"pre\">babysit</span></code>","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.director</span></code>","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.draw</span></code>","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.event_dispatcher</span></code>","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.generators</span></code>","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.geom</span></code>","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.tilemap</span></code>","<code class=\"docutils literal\"><span class=\"pre\">context</span></code>","<code class=\"docutils literal\"><span class=\"pre\">loop</span></code>","<code class=\"docutils literal\"><span class=\"pre\">nice_terminal</span></code>","<code class=\"docutils literal\"><span class=\"pre\">state</span></code>","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.blt</span></code>","clubsandwich","Views","Concepts and core objects","<code class=\"docutils literal\"><span class=\"pre\">clubsandwich.ui</span></code>"],titleterms:{The:14,access:12,babysit:0,blt:11,clubsandwich:[1,2,3,4,5,6,11,12,15],concept:14,content:12,context:7,conveni:12,core:14,debug:14,depend:12,develop:12,director:1,draw:[2,14],event:12,event_dispatch:3,exampl:12,featur:12,first:14,gener:4,geom:5,geometri:12,hierarchi:14,instal:12,interfac:12,layout:14,librari:12,like:12,loop:[8,12],manag:12,nice_termin:9,object:14,posit:14,respond:14,runner:12,scene:[12,14],script:12,stack:12,state:[10,12],tabl:12,termin:12,thi:12,tilemap:6,transform:12,travers:14,tree:14,uikit:12,user:12,view:[13,14],what:12}})