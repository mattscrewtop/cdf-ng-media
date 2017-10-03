/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './cdf-video-youtube.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../services/client-config.service';
export class Wrapper_CdfVideoYouTubeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CdfVideoYouTubeComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  subscription1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.CdfVideoYouTubeComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_mediaModel(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.mediaModel = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.onVideoBeforePlay.subscribe(_eventHandler.bind(view,'onVideoBeforePlay'))); }
    if (emit1) { (this.subscription1 = this.context.onVideoStopPlay.subscribe(_eventHandler.bind(view,'onVideoStopPlay'))); }
  }
}
var renderType_CdfVideoYouTubeComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_CdfVideoYouTubeComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.CdfVideoYouTubeComponent>;
  _CdfVideoYouTubeComponent_0_3:Wrapper_CdfVideoYouTubeComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CdfVideoYouTubeComponent_Host0,renderType_CdfVideoYouTubeComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'cdf-video-youtube',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_CdfVideoYouTubeComponent0(this.viewUtils,this,0,this._el_0);
    this._CdfVideoYouTubeComponent_0_3 = new Wrapper_CdfVideoYouTubeComponent(this.injectorGet(import9.ClientConfigService,this.parentIndex));
    this.compView_0.create(this._CdfVideoYouTubeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._CdfVideoYouTubeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CdfVideoYouTubeComponent) && (0 === requestNodeIndex))) { return this._CdfVideoYouTubeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._CdfVideoYouTubeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._CdfVideoYouTubeComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CdfVideoYouTubeComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
}
export const CdfVideoYouTubeComponentNgFactory:import8.ComponentFactory<import0.CdfVideoYouTubeComponent> = new import8.ComponentFactory<import0.CdfVideoYouTubeComponent>('cdf-video-youtube',View_CdfVideoYouTubeComponent_Host0,import0.CdfVideoYouTubeComponent);
const styles_CdfVideoYouTubeComponent:any[] = ['[_nghost-%COMP%]\n	{\n		height: 100%;\n		width: 100%;\n	}\n\n	[_nghost-%COMP%]     .jwplayer\n	{\n		height: inherit !important;\n	}\n\n	[_nghost-%COMP%]     .jw-error .jw-preview, [_nghost-%COMP%]     .jw-stretch-uniform .jw-preview, [_nghost-%COMP%]     .jwplayer .jw-preview, [_nghost-%COMP%]     .jw-preview\n	{\n		background-position: top center !important;\n		background-size: cover !important;\n	}\n\n	[_nghost-%COMP%]     .jw-preview\n	{\n		transition: all 0.3s ease 0s;\n	}'];
var renderType_CdfVideoYouTubeComponent:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.Emulated,styles_CdfVideoYouTubeComponent,{});
export class View_CdfVideoYouTubeComponent0 extends import2.AppView<import0.CdfVideoYouTubeComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CdfVideoYouTubeComponent0,renderType_CdfVideoYouTubeComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n	',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n	',(null as any));
    this.projectNodes(parentRenderNode,0);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n	',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = this.context.videoPlayerId;
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_1,'id',currVal_4);
      this._expr_4 = currVal_4;
    }
  }
}