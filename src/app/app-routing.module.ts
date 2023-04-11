import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {TimelineComponent} from "./pages/timeline/timeline.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {SkillBuildAppComponent} from "./pages/skills/skill-build-app/skill-build-app.component";
import {SkillBuildApiComponent} from "./pages/skills/skill-build-api/skill-build-api.component";
import {SkillDataComponent} from "./pages/skills/skill-data/skill-data.component";
import {SkillAutomationComponent} from "./pages/skills/skill-automation/skill-automation.component";
import {SkillServerManagementComponent} from "./pages/skills/skill-server-management/skill-server-management.component";
import {SkillAutonomyComponent} from "./pages/skills/skill-autonomy/skill-autonomy.component";
import {SkillEnglishComponent} from "./pages/skills/skill-english/skill-english.component";
import {SkillTechWatchComponent} from "./pages/skills/skill-tech-watch/skill-tech-watch.component";
import {SkillAgileComponent} from "./pages/skills/skill-agile/skill-agile.component";
import {ProjectDigitrackComponent} from "./pages/projects/project-digitrack/project-digitrack.component";
import {ProjectMeetInCityComponent} from "./pages/projects/project-meet-in-city/project-meet-in-city.component";
import {ProjectEdgeServerComponent} from "./pages/projects/project-edge-server/project-edge-server.component";
import {ProjectMusicAiComponent} from "./pages/projects/project-music-ai/project-music-ai.component";
import {ProjectMonitoringComponent} from "./pages/projects/project-monitoring/project-monitoring.component";
import {TimelineAltaroadComponent} from "./pages/timeline/timeline-altaroad/timeline-altaroad.component";
import {TimelineMeetInCityComponent} from "./pages/timeline/timeline-meet-in-city/timeline-meet-in-city.component";
import {TimelineStartintechComponent} from "./pages/timeline/timeline-startintech/timeline-startintech.component";
import {TimelineIntechComponent} from "./pages/timeline/timeline-intech/timeline-intech.component";
import {TimelineMargauxComponent} from "./pages/timeline/timeline-margaux/timeline-margaux.component";
import {TimelineDublinComponent} from "./pages/timeline/timeline-dublin/timeline-dublin.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/digitrack', component: ProjectDigitrackComponent },
  { path: 'projects/meet-in-city', component: ProjectMeetInCityComponent },
  { path: 'projects/edge-server', component: ProjectEdgeServerComponent },
  { path: 'projects/music-ai', component: ProjectMusicAiComponent },
  { path: 'projects/monitoring', component: ProjectMonitoringComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'skills/build-app', component: SkillBuildAppComponent },
  { path: 'skills/build-api', component: SkillBuildApiComponent },
  { path: 'skills/data', component: SkillDataComponent },
  { path: 'skills/automation', component: SkillAutomationComponent },
  { path: 'skills/server-management', component: SkillServerManagementComponent },
  { path: 'skills/autonomy', component: SkillAutonomyComponent },
  { path: 'skills/english', component: SkillEnglishComponent },
  { path: 'skills/tech-watch', component: SkillTechWatchComponent },
  { path: 'skills/agile', component: SkillAgileComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'timeline/altaroad', component: TimelineAltaroadComponent },
  { path: 'timeline/dubin', component: TimelineDublinComponent },
  { path: 'timeline/meet-in-city', component: TimelineMeetInCityComponent },
  { path: 'timeline/startintech', component: TimelineStartintechComponent },
  { path: 'timeline/intech', component: TimelineIntechComponent },
  { path: 'timeline/margaux', component: TimelineMargauxComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


