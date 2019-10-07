import { Component, Input, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { of, pipe } from 'rxjs';
import { catchError, concatMap, filter, finalize, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { DraftService } from '../../core/services/draft.service';
import { MetricsService } from '../../core/services/metrics.service';
import { EditorDraft } from '../../shared/interfaces/draft.type';
import { Template, TemplateGroup, TemplateParamsType } from '../../shared/interfaces/shared.type';
import { CustomizeService } from '../../customize/customize.service';
import { TemplatesService } from '../templates.service';
import { TemplatesChoiceService } from './templates-choice.service';
import { TemplatesDemoDialogComponent } from './templates-demo-dialog/templates-demo-dialog.component';
import { emptyEditorDraft, formatEditorDraft } from './templates-choice.constant';

@Component({
  selector: 'app-templates-choice',
  templateUrl: './templates-choice.component.html',
  styleUrls: ['./templates-choice.component.scss', '../templates.component.scss']
})
export class TemplatesChoiceComponent implements OnInit {
  @Input() emptyView: boolean;

  public templateSetList: any[] = [];
  public activeTemplateGroup: string;
  public groupList = ['Sale', 'Seasonal', 'Stories'];
  public currentTemplateId: number;
  public templateGroupList: any = {};
  public isEditFormat = false;
  public isChooseTemplate = false;
  public isDraftCreate = false;
  public isTemplateEditorCreate = false;
  public isShowTemplateGroup = false;

  constructor(private templatesChoiceService: TemplatesChoiceService,
              private customizeService: CustomizeService,
              private router: Router,
              private metricsService: MetricsService,
              private dialogService: DialogService,
              private templatesService: TemplatesService,
              private draftService: DraftService) { }

  ngOnInit() {
    this.templatesChoiceService.getTemplateList()
      .subscribe((templateList: TemplateGroup<TemplateParamsType>[]) => {
        this.groupList.forEach((group) => {
          this.templateGroupList[group.toLowerCase()] = templateList
            .filter(templategroup => group.toUpperCase() === templategroup.title.toUpperCase());
        });
      });

    this.templatesService.getSwitchToEditor()
      .subscribe(() => {
        this.closePanel('templates');
        this.goToEditorFormat();
      });
  }

  public setTemplatesSet(group: string): void {
    this.metricsService.trackEvent(`SHOP Category template button`,
      {
        category: group
      });
    this.activeTemplateGroup = group;
    this.isShowTemplateGroup = true;
    this.templateSetList = this.templateGroupList[group][0].templates;
  }

  public closePanel(activePanel: string): void {
    activePanel === 'editor'
      ? this.isEditFormat = false
      : this.isChooseTemplate = false;
    this.isShowTemplateGroup = false;
    this.activeTemplateGroup = null;
  }

  public showTemplatePreview(templateGroup: TemplateGroup<TemplateParamsType>): void {
    this.dialogService.open(TemplatesDemoDialogComponent, {
      header: 'Template demo',
      data: {
        templateGroup: templateGroup
      }
    });
  }

  public showRibbon(templateGroup: TemplateGroup<TemplateParamsType>): boolean {
    return [7, 31, 14].includes(templateGroup.id);
  }

  public goToEditorFormat(): void {
    this.isEditFormat = true;
    this.metricsService.trackEvent(`SHOP Go to editor button`);
  }

  public goToTemplateFormat(): void {
    this.isChooseTemplate = true;
    this.setTemplatesSet('sale');
    this.metricsService.trackEvent(`SHOP Go to templates button`);
  }

  public chooseEditorFormat(format: string): void {
    this.metricsService.trackEvent(`SHOP format choose button`,
      {
        format: format
      });
    const draftParams = {size: Array.of(formatEditorDraft[format][0], formatEditorDraft[format][1]), ...emptyEditorDraft};
    this.draftService.create$(null, 'Draft name', draftParams)
      .pipe(
        tap(() => this.isDraftCreate = true),
        catchError(() => {
          this.isDraftCreate = false;
          return of(null);
        }),
        filter((draft: EditorDraft) => !!draft)
      )
      .subscribe((draft: EditorDraft) => {
        window.location.href = `${environment.host_editor}/edit/${draft.id}/original`;
      });
  }

  public templateEditor(templateId: number): void {
    this.currentTemplateId = templateId;
    this.templatesChoiceService.getTemplate$(templateId)
      .pipe(
        tap(() => this.isTemplateEditorCreate = true),
        switchMap((currentTemplate) => this.draftService.create$(null, 'Draft name', currentTemplate.params)),
        finalize(() => this.isTemplateEditorCreate = false)
      )
      .subscribe((draft: any) => {
        window.location.href = `${environment.host_editor}/edit/${draft.id}/original`;
      });
  }
}
