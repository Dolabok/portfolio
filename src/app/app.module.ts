import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillBuildAppComponent } from './pages/skills/skill-build-app/skill-build-app.component';
import { SkillBuildApiComponent } from './pages/skills/skill-build-api/skill-build-api.component';
import { SkillDataComponent } from './pages/skills/skill-data/skill-data.component';
import { SkillAutomationComponent } from './pages/skills/skill-automation/skill-automation.component';
import { SkillServerManagementComponent } from './pages/skills/skill-server-management/skill-server-management.component';
import { SkillAutonomyComponent } from './pages/skills/skill-autonomy/skill-autonomy.component';
import { SkillEnglishComponent } from './pages/skills/skill-english/skill-english.component';
import { SkillTechWatchComponent } from './pages/skills/skill-tech-watch/skill-tech-watch.component';
import { SkillAgileComponent } from './pages/skills/skill-agile/skill-agile.component';
import { ProjectDigitrackComponent } from './pages/projects/project-digitrack/project-digitrack.component';
import { ProjectMeetInCityComponent } from './pages/projects/project-meet-in-city/project-meet-in-city.component';
import { ProjectEdgeServerComponent } from './pages/projects/project-edge-server/project-edge-server.component';
import { ProjectMusicAiComponent } from './pages/projects/project-music-ai/project-music-ai.component';
import { ProjectMonitoringComponent } from './pages/projects/project-monitoring/project-monitoring.component';
import { TimelineAltaroadComponent } from './pages/timeline/timeline-altaroad/timeline-altaroad.component';
import { TimelineMeetInCityComponent } from './pages/timeline/timeline-meet-in-city/timeline-meet-in-city.component';
import { TimelineStartintechComponent } from './pages/timeline/timeline-startintech/timeline-startintech.component';
import { TimelineIntechComponent } from './pages/timeline/timeline-intech/timeline-intech.component';
import { TimelineMargauxComponent } from './pages/timeline/timeline-margaux/timeline-margaux.component';
import { TimelineDublinComponent } from './pages/timeline/timeline-dublin/timeline-dublin.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    TimelineComponent,
    ContactComponent,
    SkillBuildAppComponent,
    SkillBuildApiComponent,
    SkillDataComponent,
    SkillAutomationComponent,
    SkillServerManagementComponent,
    SkillAutonomyComponent,
    SkillEnglishComponent,
    SkillTechWatchComponent,
    SkillAgileComponent,
    ProjectDigitrackComponent,
    ProjectMeetInCityComponent,
    ProjectEdgeServerComponent,
    ProjectMusicAiComponent,
    ProjectMonitoringComponent,
    TimelineAltaroadComponent,
    TimelineMeetInCityComponent,
    TimelineStartintechComponent,
    TimelineIntechComponent,
    TimelineMargauxComponent,
    TimelineDublinComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
